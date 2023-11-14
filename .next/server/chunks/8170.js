exports.id=8170,exports.ids=[8170],exports.modules={68971:(e,t,a)=>{Promise.resolve().then(a.bind(a,97293)),Promise.resolve().then(a.t.bind(a,46686,23))},97293:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=a(30784),n=a(11440),i=a.n(n),s=a(68211),o=a.n(s),_=a(57114);let __WEBPACK_DEFAULT_EXPORT__=({item:e})=>{let t=(0,_.usePathname)();return r.jsx(r.Fragment,{children:r.jsx(i(),{href:e.path,className:`${o().container} ${t===e.path&&o().active}`,children:e.title})})}},82783:e=>{e.exports={container:"dashboard_container__FPt6d",menu:"dashboard_menu__kkWR1",content:"dashboard_content__sQime",wrapper:"dashboard_wrapper__BHOQf",welcome:"dashboard_welcome__1LVbE",main:"dashboard_main__h9_Qo",cards:"dashboard_cards__FzV77",tabs:"dashboard_tabs__V_nf_",interviews:"dashboard_interviews__MIM__",todolist:"dashboard_todolist__nRzNX",side:"dashboard_side__cRt2d"}},78031:e=>{e.exports={container:"footer_container__d0pz4",logo:"footer_logo__XdvGj",text:"footer_text__471po"}},68211:e=>{e.exports={container:"menuLink_container__ZidRP",active:"menuLink_active__Jef_8",dropdown:"menuLink_dropdown__KG4cN",dropdownContainer:"menuLink_dropdownContainer__sk40t"}},43040:e=>{e.exports={container:"navbar_container__wgx6E",logoContainer:"navbar_logoContainer__w7aQf",title:"navbar_title__fXyFf",menu:"navbar_menu__I_JWq",search:"navbar_search___WH_U",input:"navbar_input__n6iGr",icons:"navbar_icons__powNM",navcontainer:"navbar_navcontainer__gkA5B",cnavitem:"navbar_cnavitem__Wc1Gl",navitem:"navbar_navitem__I85r1",active:"navbar_active__dEwz1",user:"navbar_user__jE0K6",userImage:"navbar_userImage__O2r6A",userDetail:"navbar_userDetail__Sk_bq",username:"navbar_username__h1QMz",userTitle:"navbar_userTitle__IG34_",navList:"navbar_navList__q3b7v",cat:"navbar_cat__yWL0p",logout:"navbar_logout__lOZkq"}},7711:(e,t,a)=>{"use strict";a.d(t,{I8:()=>d,zB:()=>c,w7:()=>l});var r=a(95918),n=a(70851),i=a(91136),s=a(84499),o=a(58802),_=a.n(o);let login=async e=>{try{(0,i.P)();let t=await s.n5.findOne({username:e.username});if(!t)throw Error("Wrong credential!");let a=await _().compare(e.password,t.password);if(!a)throw Error("Wrong credential!");return t}catch(e){throw console.log(e),Error("Failed to login!")}},{signIn:c,signOut:l,auth:d}=(0,r.Z)({providers:[],pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:t}){let a=e?.user,r=t.nextUrl.pathname.startsWith("/dashboard");return r?!!a:!a||Response.redirect(new URL("/dashboard",t.nextUrl))}},providers:[(0,n.Z)({async authorize(e){try{let t=await login(e);return t}catch(e){return null}}})],callbacks:{jwt:async({token:e,user:t})=>(t&&(e.username=t.username,e.img=t.img),e),session:async({session:e,token:t})=>(t&&(e.user.username=t.username,e.user.img=t.img),e)}})},84499:(e,t,a)=>{"use strict";a.d(t,{n5:()=>_,oI:()=>l,xs:()=>c});var r=a(11185),n=a.n(r);let i=new(n()).Schema({username:{type:String,required:!0,unique:!0,min:3,max:20},lastname:{type:String,required:!0,min:3,max:20},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},img:{type:String},isAdmin:{type:Boolean,default:!1},isActive:{type:Boolean,default:!0},phone:{type:String},address:{type:String},experience:{type:String},highestQualification:{type:String},jobTitle:{type:String},employer:{type:String},expectedSalary:{type:Number},currentSalary:{type:Number}},{timestamps:!0}),s=new(n()).Schema({title:{type:String,required:!0,unique:!0},desc:{type:String,required:!0},price:{type:Number,required:!0,min:0},stock:{type:Number,required:!0,min:0},img:{type:String},color:{type:String},size:{type:String}},{timestamps:!0}),o=new(n()).Schema({jobOpeningId:{type:String,required:!0,unique:!0},title:{type:String},jobDesc:{type:String},recruiter:{type:String},targetDate:{type:Date},clientName:{type:String},status:{type:String},contactName:{type:String},experience:{type:String},skills:{type:String},jobType:{type:String},payment:{type:String},location:{type:String},accountManager:{type:String}},{timestamps:!0}),_=n().models.User||n().model("User",i),c=n().models.Product||n().model("Product",s),l=n().models.Job||n().model("Job",o)},91136:(e,t,a)=>{"use strict";a.d(t,{P:()=>connectToDB});var r=a(11185),n=a.n(r);let connectToDB=async()=>{let e={};try{if(e.isConnected)return;let t=await n().connect(process.env.MONGO);e.isConnected=t.connections[0].readyState}catch(e){throw console.log(e),Error(e)}}},6423:(e,t,a)=>{"use strict";a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=a(4656),n=a(78031),i=a.n(n);let __WEBPACK_DEFAULT_EXPORT__=()=>(0,r.jsxs)("div",{className:i().container,children:[r.jsx("div",{className:i().logo,children:"Application Tracking System"}),r.jsx("div",{className:i().text,children:"\xa92023 All rights reserved."})]})},2338:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$ACTION_1:()=>$$ACTION_1,default:()=>b});var r,n=a(4656),i=a(34600);a(99195);var s=a(95153);let o=(0,s.createProxy)(String.raw`C:\projects\next_projects\application-tracking-system\app\ui\dashboard\navbar\menuLink\menuLink.jsx`),{__esModule:_,$$typeof:c}=o,l=o.default;var d=a(43040),p=a.n(d),m=a(94646),u=a(7711),g=a(58639),h=a.n(g);let v=[{title:"",list:[{title:"Home",path:"/dashboard"},{title:"Job Openings",path:"/dashboard/jobs"},{title:"Candidates/Talent Pool",path:"/dashboard/users"},{title:"Interviews",path:"/dashboard/interviews"},{title:"Mailbox",path:"/dashboard/mailbox"},{title:"Clients",path:"/dashboard/clients"},{title:"Reports",path:"/dashboard/reports"}]}],Navbar=async()=>{let{user:e}=await (0,u.I8)();return(0,n.jsxs)("div",{className:p().container,children:[n.jsx("div",{className:p().logoContainer,children:n.jsx(h(),{className:p().logoImage,src:"/atslogolight.png",alt:"",width:"60",height:"15"})}),n.jsx("div",{className:p().navList,children:v.map(e=>e.list.map(e=>n.jsx(l,{item:e},e.title)))}),(0,n.jsxs)("div",{className:p().menu,children:[(0,n.jsxs)("div",{className:p().search,children:[n.jsx(m.vU7,{}),n.jsx("input",{type:"text",placeholder:"Search...",className:p().input})]}),(0,n.jsxs)("div",{className:p().icons,children:[n.jsx(m.KgI,{size:20}),n.jsx(m.YaO,{size:20}),n.jsx(m.cgG,{size:20}),n.jsx("div",{className:p().user,children:n.jsx(h(),{className:p().userImage,src:e.img||"/noavatar.png",alt:"",width:"30",height:"30"})}),n.jsx("form",{action:(r=async(...e)=>$$ACTION_1.apply(null,(r.$$bound||[]).concat(e)),(0,i.U)("3282c0c12f02e009f615bf60174c76d98ecd98df",null,r,$$ACTION_1),r),children:(0,n.jsxs)("button",{className:p().logout,children:[n.jsx(m.lE7,{}),"Logout"]})})]})]})]})};var $$ACTION_1=async()=>{await (0,u.w7)()};let b=Navbar}};