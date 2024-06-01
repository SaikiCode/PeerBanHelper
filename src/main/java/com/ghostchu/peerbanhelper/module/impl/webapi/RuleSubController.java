package com.ghostchu.peerbanhelper.module.impl.webapi;

import com.ghostchu.peerbanhelper.PeerBanHelperServer;
import com.ghostchu.peerbanhelper.database.RuleSubInfo;
import com.ghostchu.peerbanhelper.module.AbstractFeatureModule;
import com.ghostchu.peerbanhelper.module.impl.rule.IPBlackRuleList;
import com.ghostchu.peerbanhelper.text.Lang;
import com.ghostchu.peerbanhelper.web.Role;
import io.javalin.http.Context;
import io.javalin.http.HttpStatus;
import lombok.extern.slf4j.Slf4j;
import org.bspfsystems.yamlconfiguration.configuration.ConfigurationSection;
import org.bspfsystems.yamlconfiguration.file.YamlConfiguration;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.io.Serializable;
import java.sql.SQLException;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@Slf4j
public class RuleSubController extends AbstractFeatureModule {

    IPBlackRuleList ipBlackRuleList;

    public RuleSubController(PeerBanHelperServer server, YamlConfiguration profile) {
        super(server, profile);
    }

    @Override
    public boolean isConfigurable() {
        return false;
    }

    @Override
    public @NotNull String getName() {
        return "WebAPI - Rule Subscription";
    }

    @Override
    public @NotNull String getConfigName() {
        return "webapi-rule-subscription";
    }

    @Override
    public void onEnable() {
        getServer().getModuleManager().getModules().stream().filter(ele -> ele.getConfigName().equals("ip-address-blocker-rules")).findFirst().ifPresent(ele -> {
            ipBlackRuleList = (IPBlackRuleList) ele;
            getServer().getWebContainer().javalin()
                    // 修改检查间隔
                    .patch("/api/sub", this::changeCheckInterval, Role.USER_WRITE)
                    // 新增订阅规则
                    .put("/api/sub/rule", ctx -> save(ctx, null, true), Role.USER_WRITE)
                    // 更新订阅规则
                    .get("/api/sub/rule/update/{ruleId}", ctx -> ctx.json(update(ctx.pathParam("ruleId"))), Role.USER_READ)
                    // 查询订阅规则
                    .get("/api/sub/rule/{ruleId}", ctx -> ctx.json(get(ctx.pathParam("ruleId"))), Role.USER_READ)
                    // 修改订阅规则
                    .post("/api/sub/rule/{ruleId}", ctx -> save(ctx, ctx.pathParam("ruleId"), false), Role.USER_WRITE)
                    // 删除订阅规则
                    .delete("/api/sub/rule/{ruleId}", this::delete, Role.USER_WRITE)
                    // 启用/禁用订阅规则
                    .patch("/api/sub/rule/{ruleId}", this::switcher, Role.USER_WRITE)
                    // 查询订阅规则列表
                    .get("/api/sub/rules", ctx -> ctx.json(list()), Role.USER_READ)
                    // 手动更新全部订阅规则
                    .get("/api/sub/rules/update", ctx -> ctx.json(updateAll()), Role.USER_WRITE)
                    // 查询全部订阅规则更新日志
                    .get("/api/sub/logs", ctx -> logs(ctx, null), Role.USER_READ)
                    // 查询订阅规则更新日志
                    .get("/api/sub/logs/{ruleId}", ctx -> logs(ctx, ctx.pathParam("ruleId")), Role.USER_READ);
        });
    }

    @Override
    public void onDisable() {
    }

    /**
     * 修改检查间隔
     *
     * @param ctx 上下文
     */
    private void changeCheckInterval(Context ctx) {
        String checkInterval = Objects.requireNonNullElse(ctx.formParam("checkInterval"), "");
        try {
            long interval = Long.parseLong(checkInterval);
            ipBlackRuleList.changeCheckInterval(interval);
            ctx.json(Map.of("success", true, "message", Lang.IP_BAN_RULE_CHECK_INTERVAL_UPDATED));
        } catch (Exception e) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_CHECK_INTERVAL_WRONG_PARAM));
        }
    }

    /**
     * 查询订阅规则日志
     *
     * @param ctx    上下文
     * @param ruleId 规则ID
     */
    private void logs(Context ctx, String ruleId) {
        String pageIndexStr = Objects.requireNonNullElse(ctx.queryParam("pageIndex"), "0");
        String pageSizeStr = Objects.requireNonNullElse(ctx.queryParam("pageSize"), "100");
        try {
            int pageIndex = Integer.parseInt(pageIndexStr);
            int pageSize = Integer.parseInt(pageSizeStr);
            Map<String, Object> map = new HashMap<>();
            map.put("pageIndex", pageIndex);
            map.put("pageSize", pageSize);
            map.put("results", ipBlackRuleList.queryRuleSubLogs(ruleId, pageIndex, pageSize));
            map.put("total", ipBlackRuleList.countRuleSubLogs(ruleId));
            ctx.json(Map.of("success", true, "message", Lang.IP_BAN_RULE_LOG_QUERY_SUCCESS, "data", map));
        } catch (Exception e) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_LOG_QUERY_WRONG_PARAM));
        }
    }

    /**
     * 手动更新全部订阅规则
     *
     * @return 响应
     */
    private Map<String, ? extends Serializable> updateAll() {
        ipBlackRuleList.getIpBanMatchers().forEach(ele -> ipBlackRuleList.updateRule(Objects.requireNonNull(ipBlackRuleList.getRuleSubsConfig().getConfigurationSection(ele.getRuleId())), Lang.IP_BAN_RULE_UPDATE_TYPE_MANUAL));
        return Map.of("success", true, "message", Lang.IP_BAN_RULE_UPDATED);
    }

    /**
     * 手动更新订阅规则
     *
     * @param ruleId 规则ID
     * @return 响应
     */
    private Map<String, ? extends Serializable> update(String ruleId) {
        if (ruleId == null || ruleId.isEmpty()) {
            return Map.of("success", false, "message", Lang.IP_BAN_RULE_NO_ID);
        }
        AtomicReference<String> result = new AtomicReference<>();
        ipBlackRuleList.getIpBanMatchers().stream().filter(ele -> ele.getRuleId().equals(ruleId)).findFirst()
                .ifPresent(ele -> result.set(ipBlackRuleList.updateRule(Objects.requireNonNull(ipBlackRuleList.getRuleSubsConfig().getConfigurationSection(ele.getRuleId())), Lang.IP_BAN_RULE_UPDATE_TYPE_MANUAL)));
        return Map.of("success", true, "message", result.get());
    }

    /**
     * 启用/禁用订阅规则
     *
     * @param ctx 上下文
     */
    private void switcher(Context ctx) throws SQLException, IOException {
        String ruleId = ctx.pathParam("ruleId");
        String enabledStr = Objects.requireNonNullElse(ctx.formParam("enabled"), "0");
        if (!List.of("TRUE", "FALSE").contains(enabledStr.trim().toUpperCase())) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_ENABLED_WRONG_PARAM));
            return;
        }
        RuleSubInfo ruleSubInfo = ipBlackRuleList.getRuleSubInfo(ruleId);
        if (null == ruleSubInfo) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_CANT_FIND.replace("{}", ruleId)));
            return;
        }
        boolean enabled = Boolean.parseBoolean(enabledStr);
        String msg = (enabled ? Lang.IP_BAN_RULE_ENABLED : Lang.IP_BAN_RULE_DISABLED).replace("{}", ruleSubInfo.ruleName());
        if (enabled != ruleSubInfo.enabled()) {
            ConfigurationSection configurationSection = ipBlackRuleList.saveRuleSubInfo(new RuleSubInfo(ruleId, enabled, ruleSubInfo.ruleName(), ruleSubInfo.subUrl(), 0, 0));
            ipBlackRuleList.updateRule(configurationSection, Lang.IP_BAN_RULE_UPDATE_TYPE_MANUAL);
            log.info(msg);
            ctx.json(Map.of("success", true, "message", msg));
        } else {
            // 表示已经是启用/禁用状态
            ctx.json(Map.of("success", false, "message", msg));
        }
    }

    /**
     * 删除订阅规则
     *
     * @param ctx 上下文
     */
    private void delete(Context ctx) throws IOException, SQLException {
        String ruleId = ctx.pathParam("ruleId");
        RuleSubInfo ruleSubInfo = ipBlackRuleList.getRuleSubInfo(ruleId);
        if (null == ruleSubInfo) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_CANT_FIND.replace("{}", ruleId)));
            return;
        }
        ipBlackRuleList.deleteRuleSubInfo(ruleId);
        ipBlackRuleList.getIpBanMatchers().removeIf(ele -> ele.getRuleId().equals(ruleId));
        String msg = Lang.IP_BAN_RULE_DELETED.replace("{}", ruleSubInfo.ruleName());
        log.info(msg);
        ctx.json(Map.of("success", false, "message", msg));
    }

    /**
     * 修改订阅规则
     *
     * @param ctx    上下文
     * @param ruleId 规则ID
     */
    private void save(Context ctx, String ruleId, boolean isAdd) throws SQLException, IOException {
        if (isAdd) {
            // 新增时从form-data中获取ruleId
            ruleId = ctx.formParam("ruleId");
        }
        if (ruleId == null || ruleId.isEmpty()) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_NO_ID));
            return;
        }
        boolean enabled = Boolean.parseBoolean(Objects.requireNonNullElse(ctx.formParam("enabled"), "false"));
        String ruleName = Objects.requireNonNullElse(ctx.formParam("ruleName"), "");
        String subUrl = Objects.requireNonNullElse(ctx.formParam("subUrl"), "");
        if (ruleName.isEmpty() || subUrl.isEmpty()) {
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_PARAM_WRONG));
            return;
        }
        RuleSubInfo ruleSubInfo = ipBlackRuleList.getRuleSubInfo(ruleId);
        if (isAdd && ruleSubInfo != null) {
            // 新增时检查规则是否存在
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_ID_CONFLICT.replace("{}", ruleId)));
            return;
        }
        if (!isAdd && ruleSubInfo == null) {
            // 更新时检查规则是否存在
            ctx.status(HttpStatus.BAD_REQUEST);
            ctx.json(Map.of("success", false, "message", Lang.IP_BAN_RULE_CANT_FIND.replace("{}", ruleId)));
            return;
        }
        ConfigurationSection configurationSection = ipBlackRuleList.saveRuleSubInfo(new RuleSubInfo(ruleId, enabled, ruleName, subUrl, 0, 0));
        assert configurationSection != null;
        ipBlackRuleList.updateRule(configurationSection, Lang.IP_BAN_RULE_UPDATE_TYPE_MANUAL);
        ctx.json(Map.of("success", true, "message", Lang.IP_BAN_RULE_SAVED));
    }

    /**
     * 查询订阅规则
     *
     * @param ruleId 规则ID
     * @return 响应
     */
    private Map<String, Object> get(String ruleId) throws SQLException {
        return Map.of("success", true, "message", Lang.IP_BAN_RULE_INFO_QUERY_SUCCESS, "data", ipBlackRuleList.getRuleSubInfo(ruleId));
    }

    /**
     * 查询订阅规则列表
     *
     * @return 响应
     */
    private Map<String, Object> list() throws SQLException {
        List<String> list = ipBlackRuleList.getRuleSubsConfig().getKeys(false).stream().toList();
        List<RuleSubInfo> data = new ArrayList<>(list.size());
        for (String s : list) {
            data.add(ipBlackRuleList.getRuleSubInfo(s));
        }
        return Map.of("success", true, "message", Lang.IP_BAN_RULE_INFO_QUERY_SUCCESS, "data", data);
    }

}