"use strict";(()=>{var e={};e.id=4602,e.ids=[4602],e.modules={58802:e=>{e.exports=require("bcrypt")},11185:e=>{e.exports=require("mongoose")},55403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},47422:(e,r,t)=>{t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>l});var s=t(67096),n=t(16132),a=t(37284),i=t.n(a),o=t(32564),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["page",{children:["users",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,15002)),"C:\\projects\\next_projects\\application-tracking-system\\app\\page\\users\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,55204)),"C:\\projects\\next_projects\\application-tracking-system\\app\\page\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,58489)),"C:\\projects\\next_projects\\application-tracking-system\\app\\layout.js"],error:[()=>Promise.resolve().then(t.bind(t,80283)),"C:\\projects\\next_projects\\application-tracking-system\\app\\error.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\projects\\next_projects\\application-tracking-system\\app\\page\\users\\page.jsx"],p="/page/users/page",x={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page/users/page",pathname:"/page/users",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},15002:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var s=t(4656),n=t(86096),a=t(41298),i=t(65816),o=t(18789),d=t(68556),l=t.n(d),c=t(58639),p=t.n(c),x=t(24353),u=t.n(x);let UsersPage=async({searchParams:e})=>{let r=e?.q||"",t=e?.page||1,{count:d,users:c}=await (0,a.uh)(r,t);return(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsxs)("div",{className:l().top,children:[s.jsx(o.ZP,{placeholder:"Search for a user..."}),s.jsx(u(),{href:"/dashboard/users/add",children:s.jsx("button",{className:l().addButton,children:"Add New"})})]}),(0,s.jsxs)("table",{className:l().table,children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("td",{children:"First Name"}),s.jsx("td",{children:"Email"}),s.jsx("td",{children:"Created At"}),s.jsx("td",{children:"Role"}),s.jsx("td",{children:"Status"}),s.jsx("td",{children:"Action"})]})}),s.jsx("tbody",{children:c.map(e=>(0,s.jsxs)("tr",{children:[s.jsx("td",{children:(0,s.jsxs)("div",{className:l().user,children:[s.jsx(p(),{src:e.img||"/noavatar.png",alt:"",width:40,height:40,className:l().userImage}),`${e.username} ${e.firstname}`]})}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.createdAt?.toString().slice(4,16)}),s.jsx("td",{children:e.isAdmin?"Admin":"Client"}),s.jsx("td",{children:e.isActive?"active":"passive"}),s.jsx("td",{children:(0,s.jsxs)("div",{className:l().buttons,children:[s.jsx(u(),{href:`/dashboard/users/${e.id}`,children:s.jsx("button",{className:`${l().button} ${l().view}`,children:"View"})}),(0,s.jsxs)("form",{action:n.deleteUser,children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("button",{className:`${l().button} ${l().delete}`,children:"Delete"})]})]})})]},e.id))})]}),s.jsx(i.ZP,{count:d})]})},h=UsersPage}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[327,3061,1783,8653,7625,6680,4756,6898,7725,7711,6096,1298,6640,5651,3869,6104,7689],()=>__webpack_exec__(47422));module.exports=t})();