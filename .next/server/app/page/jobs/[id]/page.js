(()=>{var e={};e.id=7493,e.ids=[7493],e.modules={58802:e=>{"use strict";e.exports=require("bcrypt")},11185:e=>{"use strict";e.exports=require("mongoose")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},78915:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>x,tree:()=>c});var r=s(67096),n=s(16132),i=s(37284),a=s.n(i),l=s(32564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["page",{children:["jobs",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,79681)),"C:\\projects\\next_projects\\application-tracking-system\\app\\page\\jobs\\[id]\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,55204)),"C:\\projects\\next_projects\\application-tracking-system\\app\\page\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,58489)),"C:\\projects\\next_projects\\application-tracking-system\\app\\layout.js"],error:[()=>Promise.resolve().then(s.bind(s,80283)),"C:\\projects\\next_projects\\application-tracking-system\\app\\error.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\projects\\next_projects\\application-tracking-system\\app\\page\\jobs\\[id]\\page.jsx"],d="/page/jobs/[id]/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page/jobs/[id]/page",pathname:"/page/jobs/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},98455:()=>{},40859:e=>{e.exports={container:"singleJob_container__GAjgz",jobForm:"singleJob_jobForm__vsufe",help:"singleJob_help__312oP",form:"singleJob_form__Hb6qz",formInput:"singleJob_formInput__3WEJR",quill:"singleJob_quill__5Czs5"}},79681:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(4656),n=s(86096),i=s(41298),a=s(40859),l=s.n(a);let SingleJobPage=async({params:e})=>{let{id:t}=e,s=await (0,i.KA)(t),a=s.jobDesc;return r.jsx("div",{className:l().container,children:(0,r.jsxs)("div",{className:l().jobForm,children:["Edit your job placement",(0,r.jsxs)("form",{action:n.updateJob,className:l().form,children:[(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Job Title"}),r.jsx("input",{type:"text",placeholder:s.title,name:"title"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Status"}),(0,r.jsxs)("select",{name:"status",id:"status",children:[r.jsx("option",{value:s.status,children:s.status}),r.jsx("option",{value:"active",children:"Active"}),r.jsx("option",{value:"closed",children:"Closed"}),r.jsx("option",{value:"on-hold",children:"On-hold"})]})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Recruiter"}),r.jsx("input",{type:"text",placeholder:s.recruiter,name:"recruiter"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[(0,r.jsxs)("label",{children:["Target Date: ",r.jsx("span",{style:{color:"grey"},children:s.targetDate?.toString().slice(4,16)})]}),r.jsx("input",{type:"date",placeholder:s.targetDate,name:"targetDate"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Client Name"}),r.jsx("input",{type:"text",placeholder:s.clientName,name:"clientName"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Contact Name"}),r.jsx("input",{type:"text",placeholder:s.contactName,name:"contactName"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Experience"}),(0,r.jsxs)("select",{name:"experience",id:"experience",children:[r.jsx("option",{value:s.experience,children:s.experience}),r.jsx("option",{value:"novice",children:"novice"}),r.jsx("option",{value:"intermediate",children:"intermediate"}),r.jsx("option",{value:"advanced",children:"advanced"}),r.jsx("option",{value:"expert",children:"expert"})]})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Payment"}),r.jsx("input",{type:"number",placeholder:s.payment,name:"payment"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Location"}),r.jsx("input",{type:"text",placeholder:s.location,name:"location"})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Job Type"}),(0,r.jsxs)("select",{name:"jobType",id:"jobType",children:[r.jsx("option",{value:s.jobType,children:s.jobType}),r.jsx("option",{value:"fulltime",children:"Full Time"}),r.jsx("option",{value:"parttime",children:"Part Time"}),r.jsx("option",{value:"hourly",children:"Hourly"})]})]}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Skills"}),r.jsx("input",{type:"text",placeholder:s.skills,name:"skills"})]}),r.jsx("input",{type:"hidden",placeholder:s.jobOpeningId,value:s.jobOpeningId,name:"jobOpeningId"}),(0,r.jsxs)("div",{className:l().formInput,children:[r.jsx("label",{children:"Account Manager"}),r.jsx("input",{type:"text",placeholder:s.accountManager,name:"accountManager"})]}),(0,r.jsxs)("label",{children:["Description:",r.jsx("div",{style:{display:"block",color:"gray"},children:a})]}),r.jsx("textarea",{name:"jobDesc",id:"jobDesc",rows:"10",placeholder:s.jobDesc}),r.jsx("button",{type:"submit",children:"Update"})]})]})})},o=SingleJobPage},52300:(e,t,s)=>{"use strict";let{createProxy:r}=s(95153);e.exports=r("C:\\projects\\next_projects\\application-tracking-system\\node_modules\\next\\dist\\client\\link.js")},24353:(e,t,s)=>{"use strict";e.exports=s(52300)}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[327,3061,1783,8653,4756,6898,7725,7711,6096,1298,6640,5651,3869],()=>__webpack_exec__(78915));module.exports=s})();