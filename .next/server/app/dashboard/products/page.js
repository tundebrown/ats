(()=>{var e={};e.id=95,e.ids=[95],e.modules={58802:e=>{"use strict";e.exports=require("bcrypt")},11185:e=>{"use strict";e.exports=require("mongoose")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},45623:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>l,pages:()=>p,routeModule:()=>x,tree:()=>c});var s=r(67096),o=r(16132),i=r(37284),n=r.n(i),d=r(32564),a={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>d[e]);r.d(t,a);let c=["",{children:["dashboard",{children:["products",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,73914)),"C:\\projects\\next_projects\\application-tracking-system\\app\\dashboard\\products\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,74075)),"C:\\projects\\next_projects\\application-tracking-system\\app\\dashboard\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,58489)),"C:\\projects\\next_projects\\application-tracking-system\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,80283)),"C:\\projects\\next_projects\\application-tracking-system\\app\\error.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\projects\\next_projects\\application-tracking-system\\app\\dashboard\\products\\page.jsx"],l="/dashboard/products/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/dashboard/products/page",pathname:"/dashboard/products",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},21330:(e,t,r)=>{Promise.resolve().then(r.bind(r,20346)),Promise.resolve().then(r.bind(r,14289)),Promise.resolve().then(r.t.bind(r,46686,23)),Promise.resolve().then(r.t.bind(r,30614,23))},28447:e=>{e.exports={container:"products_container__U7aQ1",top:"products_top__MAXjI",addButton:"products_addButton__Pgi6T",table:"products_table__xNwNf",product:"products_product__iD0iw",productImage:"products_productImage__4hDGT",buttons:"products_buttons__ZaOw3",button:"products_button__BfplZ",view:"products_view__f8yTU",delete:"products_delete__RkLwB"}},73914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(4656),o=r(58639),i=r.n(o),n=r(24353),d=r.n(n),a=r(28447),c=r.n(a),p=r(18789),l=r(65816),u=r(41298),x=r(86096);let ProductsPage=async({searchParams:e})=>{let t=e?.q||"",r=e?.page||1,{count:o,products:n}=await (0,u.t2)(t,r);return(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsxs)("div",{className:c().top,children:[s.jsx(p.ZP,{placeholder:"Search for a product..."}),s.jsx(d(),{href:"/dashboard/products/add",children:s.jsx("button",{className:c().addButton,children:"Add New"})})]}),(0,s.jsxs)("table",{className:c().table,children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("td",{children:"Title"}),s.jsx("td",{children:"Description"}),s.jsx("td",{children:"Price"}),s.jsx("td",{children:"Created At"}),s.jsx("td",{children:"Stock"}),s.jsx("td",{children:"Action"})]})}),s.jsx("tbody",{children:n.map(e=>(0,s.jsxs)("tr",{children:[s.jsx("td",{children:(0,s.jsxs)("div",{className:c().product,children:[s.jsx(i(),{src:e.img||"/noproduct.jpg",alt:"",width:40,height:40,className:c().productImage}),e.title]})}),s.jsx("td",{children:e.desc}),(0,s.jsxs)("td",{children:["$",e.price]}),s.jsx("td",{children:e.createdAt?.toString().slice(4,16)}),s.jsx("td",{children:e.stock}),s.jsx("td",{children:(0,s.jsxs)("div",{className:c().buttons,children:[s.jsx(d(),{href:`/dashboard/products/${e.id}`,children:s.jsx("button",{className:`${c().button} ${c().view}`,children:"View"})}),(0,s.jsxs)("form",{action:x.deleteProduct,children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("button",{className:`${c().button} ${c().delete}`,children:"Delete"})]})]})})]},e.id))})]}),s.jsx(l.ZP,{count:o})]})},h=ProductsPage}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[327,3061,1783,8653,7625,6680,4756,6898,7725,7711,6096,1298,136,5438,6104],()=>__webpack_exec__(45623));module.exports=r})();