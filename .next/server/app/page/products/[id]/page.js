(()=>{var e={};e.id=7583,e.ids=[7583],e.modules={58802:e=>{"use strict";e.exports=require("bcrypt")},11185:e=>{"use strict";e.exports=require("mongoose")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},79571:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>x,tree:()=>l});var s=r(67096),i=r(16132),n=r(37284),o=r.n(n),a=r(32564),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);r.d(t,c);let l=["",{children:["page",{children:["products",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,57713)),"C:\\projects\\next_projects\\application-tracking-system\\app\\page\\products\\[id]\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,55204)),"C:\\projects\\next_projects\\application-tracking-system\\app\\page\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,58489)),"C:\\projects\\next_projects\\application-tracking-system\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,80283)),"C:\\projects\\next_projects\\application-tracking-system\\app\\error.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\projects\\next_projects\\application-tracking-system\\app\\page\\products\\[id]\\page.jsx"],d="/page/products/[id]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page/products/[id]/page",pathname:"/page/products/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},53814:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,46686,23))},53987:e=>{e.exports={container:"singleProduct_container__luS8U",infoContainer:"singleProduct_infoContainer__3m1gq",imgContainer:"singleProduct_imgContainer__ZWC6R",formContainer:"singleProduct_formContainer__1q0Q5",form:"singleProduct_form__9TW4I"}},55204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(4656),i=r(2338),n=r(82783),o=r.n(n),a=r(6423);let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>s.jsx("div",{className:o().container,children:(0,s.jsxs)("div",{className:o().content,children:[s.jsx(i.default,{}),e,s.jsx(a.Z,{})]})})},57713:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(4656),i=r(86096),n=r(41298),o=r(53987),a=r.n(o),c=r(58639),l=r.n(c);let SingleProductPage=async({params:e})=>{let{id:t}=e,r=await (0,n.MX)(t);return(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsxs)("div",{className:a().infoContainer,children:[s.jsx("div",{className:a().imgContainer,children:s.jsx(l(),{src:"/noavatar.png",alt:"",fill:!0})}),r.title]}),s.jsx("div",{className:a().formContainer,children:(0,s.jsxs)("form",{action:i.updateProduct,className:a().form,children:[s.jsx("input",{type:"hidden",name:"id",value:r.id}),s.jsx("label",{children:"Title"}),s.jsx("input",{type:"text",name:"title",placeholder:r.title}),s.jsx("label",{children:"Price"}),s.jsx("input",{type:"number",name:"price",placeholder:r.price}),s.jsx("label",{children:"Stock"}),s.jsx("input",{type:"number",name:"stock",placeholder:r.stock}),s.jsx("label",{children:"Color"}),s.jsx("input",{type:"text",name:"color",placeholder:r.color||"color"}),s.jsx("label",{children:"Size"}),s.jsx("textarea",{type:"text",name:"size",placeholder:r.size||"size"}),s.jsx("label",{children:"Cat"}),(0,s.jsxs)("select",{name:"cat",id:"cat",children:[s.jsx("option",{value:"kitchen",children:"Kitchen"}),s.jsx("option",{value:"computers",children:"Computers"})]}),s.jsx("label",{children:"Description"}),s.jsx("textarea",{name:"desc",id:"desc",rows:"10",placeholder:r.desc}),s.jsx("button",{children:"Update"})]})})]})},p=SingleProductPage}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[327,3061,1783,8653,4756,8170,958,1298],()=>__webpack_exec__(79571));module.exports=r})();