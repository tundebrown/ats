(()=>{var e={};e.id=8740,e.ids=[8740],e.modules={58802:e=>{"use strict";e.exports=require("bcrypt")},11185:e=>{"use strict";e.exports=require("mongoose")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},62619:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>j,originalPathname:()=>b,pages:()=>l,routeModule:()=>x,tree:()=>c});var r=t(67096),a=t(16132),n=t(37284),i=t.n(n),o=t(32564),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(s,d);let c=["",{children:["dashboard",{children:["jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,42178)),"C:\\projects\\next_projects\\application-tracking-system\\app\\dashboard\\jobs\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,74075)),"C:\\projects\\next_projects\\application-tracking-system\\app\\dashboard\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,58489)),"C:\\projects\\next_projects\\application-tracking-system\\app\\layout.js"],error:[()=>Promise.resolve().then(t.bind(t,80283)),"C:\\projects\\next_projects\\application-tracking-system\\app\\error.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],l=["C:\\projects\\next_projects\\application-tracking-system\\app\\dashboard\\jobs\\page.jsx"],b="/dashboard/jobs/page",j={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/jobs/page",pathname:"/dashboard/jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},27559:(e,s,t)=>{Promise.resolve().then(t.bind(t,20346)),Promise.resolve().then(t.bind(t,14289)),Promise.resolve().then(t.t.bind(t,30614,23))},38762:e=>{e.exports={container:"jobs_container__ELMW_",top:"jobs_top__XlDs6",filter:"jobs_filter__JWLrK",addButton:"jobs_addButton__LXxPq",table:"jobs_table__Fv0Gu",bb:"jobs_bb__XnsZj",tableHead:"jobs_tableHead__ec7ko",product:"jobs_product__XhL_J",productImage:"jobs_productImage__4VCOO",buttons:"jobs_buttons__5gUEG",button:"jobs_button___eaZN",view:"jobs_view__PI3fX",edit:"jobs_edit__A7oSS",delete:"jobs_delete__RyekF"}},42178:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(4656),a=t(24353),n=t.n(a),i=t(38762),o=t.n(i),d=t(18789),c=t(65816),l=t(86096),b=t(41298),j=t(94646);let JobsPage=async({searchParams:e})=>{let s=e?.q||"",t=e?.page||1,{count:a,jobs:i}=await (0,b.bG)(s,t);return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsxs)("div",{className:o().top,children:[r.jsx("div",{children:(0,r.jsxs)("h4",{children:["All Job Openings ",r.jsx(j.FIC,{})]})}),(0,r.jsxs)("div",{className:o().filter,children:[r.jsx(d.ZP,{placeholder:"Search for a job..."}),r.jsx("button",{className:o().addButton,children:r.jsx(j.EJ4,{})}),r.jsx(n(),{href:"/dashboard/jobs/add",children:r.jsx("button",{className:o().addButton,children:"Create New Job"})})]})]}),(0,r.jsxs)("table",{className:o().table,children:[r.jsx("thead",{className:o().tableHead,children:(0,r.jsxs)("tr",{children:[r.jsx("td",{className:o().bb,children:"JOB OPENING ID"}),r.jsx("td",{className:o().bb,children:"TITLE"}),r.jsx("td",{className:o().bb,children:"RECRUITER"}),r.jsx("td",{className:o().bb,children:"TARGET DATE"}),r.jsx("td",{className:o().bb,children:"CLIENT NAME"}),r.jsx("td",{className:o().bb,children:"STATUS"}),r.jsx("td",{className:o().bb,children:"CONTACT NAME"}),r.jsx("td",{className:o().bb,children:"ACCOUNT MANAGER"}),r.jsx("td",{className:o().bb,children:"DATE CREATED"}),r.jsx("td",{className:o().bb,children:"ACTION"})]})}),r.jsx("tbody",{children:i.map(e=>(0,r.jsxs)("tr",{children:[r.jsx("td",{children:r.jsx("div",{className:o().product,children:e.jobOpeningId})}),r.jsx("td",{children:e.title}),r.jsx("td",{children:e.recruiter}),r.jsx("td",{children:e.targetDate?.toString().slice(4,16)}),r.jsx("td",{children:e.clientName}),r.jsx("td",{children:e.status}),r.jsx("td",{children:e.contactName}),r.jsx("td",{children:e.accountManager}),r.jsx("td",{children:e.createdAt?.toString().slice(4,16)}),r.jsx("td",{children:(0,r.jsxs)("div",{className:o().buttons,children:[r.jsx(n(),{href:`/dashboard/jobs/${e.id}/view`,children:r.jsx("button",{className:`${o().button} ${o().view}`,children:r.jsx(j.af5,{})})}),r.jsx(n(),{href:`/dashboard/jobs/${e.id}`,children:r.jsx("button",{className:`${o().button} ${o().edit}`,children:r.jsx(j.mM_,{})})}),(0,r.jsxs)("form",{action:l.deleteJob,children:[r.jsx("input",{type:"hidden",name:"id",value:e.id}),r.jsx("button",{className:`${o().button} ${o().delete}`,children:r.jsx(j.$vK,{})})]})]})})]},e.id))})]}),r.jsx(c.ZP,{count:a})]})},x=JobsPage},74075:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(4656),a=t(2338),n=t(82783),i=t.n(n),o=t(6423);let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>r.jsx("div",{className:i().container,children:(0,r.jsxs)("div",{className:i().content,children:[r.jsx(a.default,{}),e,r.jsx(o.Z,{})]})})}};var s=require("../../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[327,3061,1783,8653,7625,6680,4756,8170,958,1298,6104],()=>__webpack_exec__(62619));module.exports=t})();