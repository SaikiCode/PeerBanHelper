import"./index-DGfGogfS.js";import{f as _,a6 as w,am as M,j as c,k as h,y as a,t,a2 as n,v as u,x as f,F as U}from"./libs-DaDHWX8D.js";import{q as y,G as B,az as P,aD as x,aB as S,v as R}from"./arcoDesign-DkbNuMsn.js";const F=_({__name:"bitcomet",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(b){const{t:d}=w(),l=M(b,"modelValue"),V={type:"string",required:!0,validator:(i,e)=>{if(!i)return e("Please input URL");!i.startsWith("http://")&&!i.startsWith("https://")&&e(d("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(i),e()}catch{e(d("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}};return(i,e)=>{const s=y,r=B,g=P,m=x,v=S,p=R;return c(),h(U,null,[a(r,{field:"config.endpoint",label:n(d)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:V},{default:t(()=>[a(s,{modelValue:l.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{field:"config.username",label:n(d)("page.dashboard.editModal.label.username")},{default:t(()=>[a(s,{modelValue:l.value.username,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.username=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{field:"config.password",label:n(d)("page.dashboard.editModal.label.password")},{default:t(()=>[a(g,{modelValue:l.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.password=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{field:"config.httpVersion",label:n(d)("page.dashboard.editModal.label.httpVersion")},{extra:t(()=>[u(f(n(d)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:t(()=>[a(v,{modelValue:l.value.httpVersion,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.httpVersion=o)},{default:t(()=>[a(m,{value:"HTTP_1_1"},{default:t(()=>e[7]||(e[7]=[u("1.1")])),_:1}),a(m,{value:"HTTP_2"},{default:t(()=>e[8]||(e[8]=[u("2.0")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(r,{field:"config.incrementBan","default-checked":"",label:n(d)("page.dashboard.editModal.label.incrementBan")},{extra:t(()=>[u(f(n(d)("page.dashboard.editModal.label.incrementBan.description")),1)]),default:t(()=>[a(p,{modelValue:l.value.incrementBan,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.incrementBan=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{field:"config.verifySsl","default-checked":"",label:n(d)("page.dashboard.editModal.label.verifySsl")},{default:t(()=>[a(p,{modelValue:l.value.verifySsl,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{field:"config.ignorePrivate",label:n(d)("page.dashboard.editModal.label.ignorePrivate")},{default:t(()=>[a(p,{modelValue:l.value.ignorePrivate,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.ignorePrivate=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{F as default};