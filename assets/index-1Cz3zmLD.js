import{u as le,e as $e,c as Z,f as L,I as se,b as ie,_ as ce,i as Ge}from"./index-jdS4qrVs.js";/* empty css              */import{f as re,a6 as pe,ak as Ae,a2 as e,j as i,s as r,t,y as a,v as l,x as s,p as D,k as ae,P as De,F as Fe,u as y,a1 as oe,w as Me,c as Be,r as Re,a8 as Oe,ae as We,o as Je,M as Qe,N as Xe,E as He,m as Ye}from"./libs-D-uoNQCp.js";import{c as Ze,d as et,e as tt}from"./data-uUra4yy-.js";import{a5 as at,S as ne,b as Ke,c as de,T as ue,t as Ve,E as nt,am as ot,K as lt,w as st,ao as it,j as ct,D as rt,L as pt,B as dt,h as ut,N as _t,ap as gt,aq as ft,ar as mt,$ as bt,ai as yt,C as ht}from"./arcoDesign-Zo1vr84I.js";import{I as St}from"./index-Bv_mhpcc.js";import{I as kt}from"./index-DWNH3yze.js";const wt=re({__name:"accessHistoryTable",props:{ip:{}},setup(ee){const{t:p,d:o}=pe(),$=le(),{data:n,total:E,current:F,loading:v,pageSize:j,changeCurrent:S,changePageSize:B}=Ae(Ze,{defaultParams:[{ip:ee.ip,page:1,pageSize:5}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},cacheKey:m=>`${$.endpoint}-ipAccessHistory-${m==null?void 0:m[0].ip}-${(m==null?void 0:m[0].page)||1}-${(m==null?void 0:m[0].pageSize)||10}`}),te=[{title:()=>p("page.torrentList.accessHistory.column.downloader"),slotName:"downloader"},{title:"Peer ID",slotName:"peerId"},{title:()=>p("page.torrentList.accessHistory.column.traffic"),slotName:"traffic",width:120},{title:()=>oe(ne,[p("page.torrentList.accessHistory.column.offset"),oe(at,{content:p("page.torrentList.accessHistory.column.offsetDescription")},()=>oe(Z))]),slotName:"offset",width:120},{title:()=>p("page.dashboard.peerList.column.flag"),slotName:"flags",width:120},{title:()=>p("page.torrentList.accessHistory.column.timeseen"),slotName:"time",width:260},{title:()=>p("page.ipList.accessHistory.column.torrent"),dataIndex:"torrent.name",ellipsis:!0,tooltip:!0}],g=m=>m.split(" ").map(_=>_+" - "+p("page.dashboard.peerList.column.flags."+_.trim()));return(m,_)=>{var z,V;const U=Ke,K=de,k=se,b=ue,h=ie,f=ne,q=Ve,G=nt;return(z=e(n))!=null&&z.data.results||e(v)?(i(),r(q,{key:0,stripe:!0,columns:te,data:(V=e(n))==null?void 0:V.data.results,loading:e(v),pagination:{total:e(E),current:e(F),pageSize:e(j),showPageSize:!0,baseSize:4,bufferSize:1},"column-resizable":"",size:"medium",class:"banlog-table",onPageChange:e(S),onPageSizeChange:e(B)},{downloader:t(({record:d})=>[a(U,{color:e($e)(d.downloader)},{default:t(()=>[l(s(d.downloader),1)]),_:2},1032,["color"])]),peerId:t(({record:d})=>[D("p",null,[l(s(d.peerId?d.peerId:e(p)("page.banlist.banlist.listItem.empty"))+" ",1),a(K,{content:d.clientName?d.clientName:e(p)("page.banlist.banlist.listItem.empty")},{default:t(()=>[a(e(Z))]),_:2},1032,["content"])])]),traffic:t(({record:d})=>[a(f,{fill:"",direction:"vertical"},{default:t(()=>[a(b,null,{default:t(()=>[a(k,{class:"green"}),l(" "+s(e(L)(d.uploaded)),1)]),_:2},1024),a(b,null,{default:t(()=>[a(h,{class:"red"}),l(" "+s(e(L)(d.downloaded)),1)]),_:2},1024)]),_:2},1024)]),offset:t(({record:d})=>[a(f,{fill:"",direction:"vertical"},{default:t(()=>[a(b,null,{default:t(()=>[a(k,{class:"green"}),l(" "+s(e(L)(d.uploadedOffset)),1)]),_:2},1024),a(b,null,{default:t(()=>[a(h,{class:"red"}),l(" "+s(e(L)(d.downloadedOffset)),1)]),_:2},1024)]),_:2},1024)]),flags:t(({record:d})=>[D("p",null,[l(s(d.lastFlags)+" ",1),d.lastFlags?(i(),r(K,{key:0},{content:t(()=>[(i(!0),ae(Fe,null,De(g(d.lastFlags),u=>(i(),ae("p",{key:u},s(u),1))),128))]),default:t(()=>[a(e(Z))]),_:2},1024)):y("",!0)])]),time:t(({record:d})=>[a(f,{fill:"",direction:"vertical"},{default:t(()=>[a(b,null,{default:t(()=>[l(s(e(p)("page.torrentList.accessHistory.column.timeseen.first"))+": "+s(e(o)(d.firstTimeSeen,"long")),1)]),_:2},1024),a(b,null,{default:t(()=>[l(s(e(p)("page.torrentList.accessHistory.column.timeseen.last"))+": "+s(e(o)(d.lastTimeSeen,"long")),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])):(i(),r(G,{key:1,style:{height:"20vh","align-items":"center",display:"flex","justify-content":"center","flex-direction":"column"}},{default:t(()=>[l(s(e(p)("page.torrentList.accessHistory.empty")),1)]),_:1}))}}}),It=ce(wt,[["__scopeId","data-v-72781067"]]),vt=re({__name:"banHistoryTable",props:{ip:{}},setup(ee){const p=le(),{t:o,d:$}=pe(),{data:n,total:E,current:F,loading:v,pageSize:j,changeCurrent:S,changePageSize:B,refresh:te}=Ae(et,{defaultParams:[{ip:ee.ip,page:1,pageSize:10}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},cacheKey:_=>`${p.endpoint}-banlogs-${(_==null?void 0:_[0].page)||1}-${(_==null?void 0:_[0].pageSize)||10}`});Me(()=>p.endpoint,te);const g=[{title:()=>o("page.banlog.banlogTable.column.banTime")+"/"+o("page.banlog.banlogTable.column.unbanTime"),slotName:"banAt",width:220},{title:()=>o("page.banlog.banlogTable.column.peerPort"),dataIndex:"peerPort",width:80},{title:()=>o("page.banlog.banlogTable.column.peerId"),slotName:"peerId",width:120},{title:()=>o("page.banlog.banlogTable.column.trafficSnapshot"),slotName:"peerStatus",width:150},{title:()=>o("page.banlog.banlogTable.column.torrentName"),dataIndex:"torrentName",ellipsis:!0,tooltip:!0},{title:()=>o("page.banlog.banlogTable.column.torrentSize"),slotName:"torrentSize",width:120},{title:()=>o("page.banlog.banlogTable.column.description"),dataIndex:"description",ellipsis:!0,tooltip:!0}],m=Be(()=>{var _;return(_=n.value)==null?void 0:_.data.results});return(_,U)=>{const K=St,k=ue,b=ot,h=ne,f=se,q=ie,G=lt,z=de,V=Z,d=Ve;return i(),r(d,{stripe:!0,columns:g,data:m.value,loading:e(v),pagination:{total:e(E),current:e(F),pageSize:e(j),showPageSize:!0,baseSize:4,bufferSize:1},"column-resizable":"",size:"medium",class:"banlog-table",onPageChange:e(S),onPageSizeChange:e(B)},{banAt:t(({record:u})=>[a(h,{fill:"",direction:"vertical"},{default:t(()=>[a(k,null,{default:t(()=>[a(K),l(" "+s(e($)(u.banAt,"long")),1)]),_:2},1024),a(k,null,{default:t(()=>[a(b),l(" "+s(u.unbanAt?e($)(u.unbanAt,"long"):e(o)("page.banlog.banlogTable.notUnbanned")),1)]),_:2},1024)]),_:2},1024)]),peerStatus:t(({record:u})=>[a(h,{fill:"",style:{"justify-content":"space-between"}},{default:t(()=>[a(h,{fill:"",direction:"vertical"},{default:t(()=>[a(k,null,{default:t(()=>[a(f,{class:"green"}),l(" "+s(e(L)(u.peerUploaded)),1)]),_:2},1024),a(k,null,{default:t(()=>[a(q,{class:"red"}),l(" "+s(e(L)(u.peerDownloaded)),1)]),_:2},1024)]),_:2},1024),a(z,{content:(u.peerProgress*100).toFixed(2)+"%"},{default:t(()=>[a(G,{percent:u.peerProgress,size:"mini"},null,8,["percent"])]),_:2},1032,["content"])]),_:2},1024)]),peerId:t(({record:u})=>[D("p",null,[l(s(u.peerId?u.peerId:e(o)("page.banlist.banlist.listItem.empty"))+" ",1),a(z,{content:u.peerClientName?u.peerClientName:e(o)("page.banlist.banlist.listItem.empty")},{default:t(()=>[a(V)]),_:2},1032,["content"])])]),torrentSize:t(({record:u})=>[a(z,{content:`Hash: ${u.torrentInfoHash}`},{default:t(()=>[D("p",null,s(e(L)(u.torrentSize)),1)]),_:2},1032,["content"])]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])}}}),zt=ce(vt,[["__scopeId","data-v-009c3e8f"]]),Lt={class:"center searchContainer"},Tt={class:"result-container center"},Pt=re({__name:"index",setup(ee){const p=Re(""),{t:o,d:$}=pe(),{data:n,loading:E,run:F,error:v}=Oe(tt,{manual:!0}),j=le(),S=Be(()=>j.plusStatus),{query:B}=We();return Je(()=>{B.ip&&(p.value=B.ip,F(p.value))}),(te,g)=>{const m=st,_=ue,U=it,K=ct,k=Ke,b=de,h=ne,f=rt,q=se,G=ie,z=Z,V=pt,d=dt,u=ut,_e=_t,ge=gt,fe=kt,me=ft,Ee=mt,je=bt,Ue=yt,qe=ht;return i(),r(h,{direction:"vertical",fill:"",class:"center"},{default:t(()=>{var be,ye;return[a(U,{style:{"text-align":"center"}},{default:t(()=>[a(m,null,{default:t(()=>[l(s(e(o)("page.ipList.title")),1)]),_:1}),a(_,null,{default:t(()=>[l(s(e(o)("page.ipList.description")),1)]),_:1})]),_:1}),D("div",Lt,[a(K,{modelValue:p.value,"onUpdate:modelValue":g[0]||(g[0]=A=>p.value=A),"search-button":"",placeholder:"192.168.1.1....",class:"searchBox",loading:e(E),onSearch:e(F)},null,8,["modelValue","loading","onSearch"])]),D("div",Tt,[Qe(a(qe,{class:"result-card",style:Ye({minWidth:(be=e(n))!=null&&be.data.found?"1150px":"400px"}),hoverable:""},{default:t(()=>[e(v)?(i(),r(Ue,{key:1,status:"500",title:e(o)("page.ipList.error"),subtitle:e(v).message},{default:t(()=>[a(U,{style:{background:"var(--color-fill-2)",padding:"24px"}},{default:t(()=>{var A;return[a(je,null,{default:t(()=>g[6]||(g[6]=[l("Details:")])),_:1}),D("ul",null,[(i(!0),ae(Fe,null,De((A=e(v).stack)==null?void 0:A.split(`
`),w=>(i(),ae("li",{key:w},s(w),1))),128))])]}),_:1})]),_:1},8,["title","subtitle"])):(i(),r(h,{key:0,direction:"vertical",fill:""},{default:t(()=>{var A;return[a(u,null,{title:t(()=>[a(h,null,{default:t(()=>{var w,T;return[l(s((w=e(n))==null?void 0:w.data.address)+" ",1),(T=e(n))!=null&&T.data.found?y("",!0):(i(),r(b,{key:0,content:e(o)("page.ipList.notfound.tips")},{default:t(()=>[a(k,null,{default:t(()=>g[1]||(g[1]=[l("Not found")])),_:1})]),_:1},8,["content"]))]}),_:1})]),default:t(()=>{var w,T,M,R,P,x,C,he,Se,ke,we,Ie,ve,ze,Le,Te,Pe,xe,Ce,Ne;return[(w=e(n))!=null&&w.data.found?(i(),r(f,{key:0,label:e(o)("page.ipList.label.banCount"),span:2},{default:t(()=>{var c;return[l(s((c=e(n))==null?void 0:c.data.banCount),1)]}),_:1},8,["label"])):y("",!0),(T=e(n))!=null&&T.data.found?(i(),r(f,{key:1,label:e(o)("page.ipList.label.torrentAccessCount"),span:2},{default:t(()=>{var c;return[l(s((c=e(n))==null?void 0:c.data.torrentAccessCount),1)]}),_:1},8,["label"])):y("",!0),(M=e(n))!=null&&M.data.found?(i(),r(f,{key:2,label:e(o)("page.ipList.label.uploadedToPeer"),span:2},{default:t(()=>[a(_,null,{default:t(()=>{var c;return[a(q,{class:"green"}),l(" "+s(e(L)(((c=e(n))==null?void 0:c.data.uploadedToPeer)??0)),1)]}),_:1})]),_:1},8,["label"])):y("",!0),(R=e(n))!=null&&R.data.found?(i(),r(f,{key:3,label:e(o)("page.ipList.label.downloadedFromPeer"),span:2},{default:t(()=>[a(_,null,{default:t(()=>{var c;return[a(G,{class:"red"}),l(" "+s(e(L)(((c=e(n))==null?void 0:c.data.downloadedFromPeer)??0)),1)]}),_:1})]),_:1},8,["label"])):y("",!0),(P=e(n))!=null&&P.data.found?(i(),r(f,{key:4,label:e(o)("page.ipList.label.firstTimeSeen"),span:2},{default:t(()=>{var c;return[l(s(e($)(((c=e(n))==null?void 0:c.data.firstTimeSeen)??0,"long")),1)]}),_:1},8,["label"])):y("",!0),(x=e(n))!=null&&x.data.found?(i(),r(f,{key:5,label:e(o)("page.ipList.label.lastTimeSeen"),span:2},{default:t(()=>{var c;return[l(s(e($)(((c=e(n))==null?void 0:c.data.lastTimeSeen)??0,"long")),1)]}),_:1},8,["label"])):y("",!0),(Se=(he=(C=e(n))==null?void 0:C.data.geo)==null?void 0:he.country)!=null&&Se.iso||(Ie=(we=(ke=e(n))==null?void 0:ke.data.geo)==null?void 0:we.city)!=null&&Ie.name?(i(),r(f,{key:6,label:e(o)("page.banlist.banlist.listItem.geo"),span:2},{default:t(()=>{var c,I,O,W,J,Q,X,Y;return[(I=(c=e(n).data.geo)==null?void 0:c.country)!=null&&I.iso?(i(),r(Ge,{key:0,iso:((W=(O=e(n).data.geo)==null?void 0:O.country)==null?void 0:W.iso)??""},null,8,["iso"])):y("",!0),l(" "+s(`${((Q=(J=e(n).data.geo)==null?void 0:J.country)==null?void 0:Q.name)??""} ${((Y=(X=e(n).data.geo)==null?void 0:X.city)==null?void 0:Y.name)??""}`),1)]}),_:1},8,["label"])):y("",!0),(Le=(ze=(ve=e(n))==null?void 0:ve.data.geo)==null?void 0:ze.network)!=null&&Le.isp?(i(),r(f,{key:7,label:e(o)("page.banlist.banlist.listItem.network.isp"),span:1},{default:t(()=>{var c,I;return[l(s((I=(c=e(n).data.geo)==null?void 0:c.network)==null?void 0:I.isp),1)]}),_:1},8,["label"])):y("",!0),(xe=(Pe=(Te=e(n))==null?void 0:Te.data.geo)==null?void 0:Pe.network)!=null&&xe.netType?(i(),r(f,{key:8,label:e(o)("page.banlist.banlist.listItem.network.netType"),span:2},{default:t(()=>{var c,I;return[l(s((I=(c=e(n).data.geo)==null?void 0:c.network)==null?void 0:I.netType),1)]}),_:1},8,["label"])):y("",!0),(Ne=(Ce=e(n))==null?void 0:Ce.data.geo)!=null&&Ne.as?(i(),r(f,{key:9,label:e(o)("page.banlist.banlist.listItem.asn"),span:2},{default:t(()=>[a(h,null,{default:t(()=>{var c,I,O,W,J,Q,X,Y;return[a(_,null,{default:t(()=>{var N,H;return[l(s((H=(N=e(n).data.geo)==null?void 0:N.as)==null?void 0:H.organization),1)]}),_:1}),a(k,{color:e($e)((((I=(c=e(n).data.geo)==null?void 0:c.as)==null?void 0:I.number)??0).toString())},{default:t(()=>{var N,H;return[l(s((H=(N=e(n).data.geo)==null?void 0:N.as)==null?void 0:H.number),1)]}),_:1},8,["color"]),a(b,{content:e(o)("page.banlist.banlist.listItem.asn.subnet")+((J=(W=(O=e(n).data.geo)==null?void 0:O.as)==null?void 0:W.network)==null?void 0:J.ipAddress)+"/"+((Y=(X=(Q=e(n).data.geo)==null?void 0:Q.as)==null?void 0:X.network)==null?void 0:Y.prefixLength)},{default:t(()=>{var N,H;return[a(V,{href:`https://2ip.io/analytics/asn-list/?asnId=${(H=(N=e(n).data.geo)==null?void 0:N.as)==null?void 0:H.number}`,hoverable:!1},{default:t(()=>[a(z)]),_:1},8,["href"])]}),_:1},8,["content"])]}),_:1})]),_:1},8,["label"])):y("",!0),a(f,{span:8},{label:t(()=>[a(h,null,{default:t(()=>[l(s(e(o)("page.ipList.shortcut"))+" ",1),a(b,{content:e(o)("page.ipList.shortcut.tips")},{default:t(()=>[a(z)]),_:1},8,["content"])]),_:1})]),default:t(()=>[a(h,null,{default:t(()=>[a(d,{href:`https://ip.ping0.cc/ip/${p.value}`,type:"outline"},{default:t(()=>g[2]||(g[2]=[l(" ping0 ")])),_:1},8,["href"]),a(d,{href:`https://search.censys.io/hosts/${p.value}`,type:"outline"},{default:t(()=>g[3]||(g[3]=[l(" Censys ")])),_:1},8,["href"])]),_:1})]),_:1})]}),_:1}),(A=e(n))!=null&&A.data.found?(i(),r(Ee,{key:0,bordered:!1,"destroy-on-hide":""},{default:t(()=>{var w,T,M,R;return[a(me,{key:"1",header:e(o)("page.ipList.label.accessHistory"),disabled:!((w=S.value)!=null&&w.activated),class:"collapse-table"},He({"expand-icon":t(({active:P})=>{var x,C;return[(x=S.value)!=null&&x.activated&&!P?(i(),r(_e,{key:0})):(C=S.value)!=null&&C.activated&&P?(i(),r(ge,{key:1})):(i(),r(fe,{key:2}))]}),default:t(()=>[a(It,{ip:p.value},null,8,["ip"])]),_:2},[(T=S.value)!=null&&T.activated?void 0:{name:"extra",fn:t(()=>[a(b,{content:e(o)("page.ipList.plusLock")},{default:t(()=>[a(k,{size:"small"},{default:t(()=>g[4]||(g[4]=[l("Plus")])),_:1})]),_:1},8,["content"])]),key:"0"}]),1032,["header","disabled"]),a(me,{key:"2",header:e(o)("page.ipList.label.banHistory"),disabled:!((M=S.value)!=null&&M.activated)},He({"expand-icon":t(({active:P})=>{var x,C;return[(x=S.value)!=null&&x.activated&&!P?(i(),r(_e,{key:0})):(C=S.value)!=null&&C.activated&&P?(i(),r(ge,{key:1})):(i(),r(fe,{key:2}))]}),default:t(()=>[a(zt,{ip:p.value},null,8,["ip"])]),_:2},[(R=S.value)!=null&&R.activated?void 0:{name:"extra",fn:t(()=>[a(b,{content:e(o)("page.ipList.plusLock")},{default:t(()=>[a(k,{size:"small"},{default:t(()=>g[5]||(g[5]=[l("Plus")])),_:1})]),_:1},8,["content"])]),key:"0"}]),1032,["header","disabled"])]}),_:1})):y("",!0)]}),_:1}))]),_:1},8,["style"]),[[Xe,((ye=e(n))==null?void 0:ye.data)||e(v)]])])]}),_:1})}}}),Ft=ce(Pt,[["__scopeId","data-v-55acdca0"]]);export{Ft as default};
