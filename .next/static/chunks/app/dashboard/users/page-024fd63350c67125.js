(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618,602],{68914:function(e,a,s){Promise.resolve().then(s.bind(s,94185)),Promise.resolve().then(s.bind(s,58109)),Promise.resolve().then(s.t.bind(s,96150,23)),Promise.resolve().then(s.t.bind(s,90413,23)),Promise.resolve().then(s.t.bind(s,68326,23))},94185:function(e,a,s){"use strict";s.r(a);var o=s(57437),i=s(29605),l=s.n(i),_=s(24033);a.default=e=>{let{count:a}=e,s=(0,_.useSearchParams)(),{replace:i}=(0,_.useRouter)(),f=(0,_.usePathname)(),d=s.get("page")||1,m=new URLSearchParams(s),p=2*(parseInt(d)-1)>0,v=2*(parseInt(d)-1)+2<a,handleChangePage=e=>{"prev"===e?m.set("page",parseInt(d)-1):m.set("page",parseInt(d)+1),i("".concat(f,"?").concat(m))};return(0,o.jsxs)("div",{className:l().container,children:[(0,o.jsx)("button",{className:l().button,disabled:!p,onClick:()=>handleChangePage("prev"),children:"Previous"}),(0,o.jsx)("button",{className:l().button,disabled:!v,onClick:()=>handleChangePage("next"),children:"Next"})]})}},58109:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return search}});var o=s(57437),i=s(58910),l=s(98213),_=s.n(l),f=s(24033),d=s(2265);function c(e,a,s){var o=this,i=(0,d.useRef)(null),l=(0,d.useRef)(0),_=(0,d.useRef)(null),f=(0,d.useRef)([]),m=(0,d.useRef)(),p=(0,d.useRef)(),v=(0,d.useRef)(e),g=(0,d.useRef)(!0);(0,d.useEffect)(function(){v.current=e},[e]);var b=!a&&0!==a&&"undefined"!=typeof window;if("function"!=typeof e)throw TypeError("Expected a function");a=+a||0;var y=!!(s=s||{}).leading,w=!("trailing"in s)||!!s.trailing,x="maxWait"in s,P=x?Math.max(+s.maxWait||0,a):null;return(0,d.useEffect)(function(){return g.current=!0,function(){g.current=!1}},[]),(0,d.useMemo)(function(){var r=function(e){var a=f.current,s=m.current;return f.current=m.current=null,l.current=e,p.current=v.current.apply(s,a)},n=function(e,a){b&&cancelAnimationFrame(_.current),_.current=b?requestAnimationFrame(e):setTimeout(e,a)},t=function(e){if(!g.current)return!1;var s=e-i.current;return!i.current||s>=a||s<0||x&&e-l.current>=P},u=function(e){return _.current=null,w&&f.current?r(e):(f.current=m.current=null,p.current)},c=function r(){var e=Date.now();if(t(e))return u(e);if(g.current){var s=a-(e-i.current);n(r,x?Math.min(s,P-(e-l.current)):s)}},h=function(){var e=Date.now(),s=t(e);if(f.current=[].slice.call(arguments),m.current=o,i.current=e,s){if(!_.current&&g.current)return l.current=i.current,n(c,a),y?r(i.current):p.current;if(x)return n(c,a),r(i.current)}return _.current||n(c,a),p.current};return h.cancel=function(){_.current&&(b?cancelAnimationFrame(_.current):clearTimeout(_.current)),l.current=0,f.current=i.current=m.current=_.current=null},h.isPending=function(){return!!_.current},h.flush=function(){return _.current?u(Date.now()):p.current},h},[y,x,a,P,w,b])}var search=e=>{let{placeholder:a}=e,s=(0,f.useSearchParams)(),{replace:l}=(0,f.useRouter)(),d=(0,f.usePathname)(),m=c(e=>{let a=new URLSearchParams(s);a.set("page",1),e.target.value?e.target.value.length>2&&a.set("q",e.target.value):a.delete("q"),l("".concat(d,"?").concat(a))},300);return(0,o.jsxs)("div",{className:_().container,children:[(0,o.jsx)(i.vU7,{}),(0,o.jsx)("input",{type:"text",placeholder:a,className:_().input,onChange:m})]})}},29605:function(e){e.exports={container:"pagination_container__MlbTl",button:"pagination_button__63zCc"}},98213:function(e){e.exports={container:"search_container__jAxK9",input:"search_input__vdsRR"}},96150:function(e){e.exports={container:"users_container__8LN16",top:"users_top__0diO6",filter:"users_filter__pVvSh",addButton:"users_addButton__lJ1ec",table:"users_table__Ll_mR",bb:"users_bb__AvdzD",tableHead:"users_tableHead__4s_8v",product:"users_product__zKTtD",productImage:"users_productImage__b2mog",buttons:"users_buttons__WTiXm",button:"users_button__l22ky",view:"users_view__0pooK",edit:"users_edit__3dTIF",delete:"users_delete__b_veK",user:"users_user__aIQGo",userImage:"users_userImage__l_CGj"}},91172:function(e,a,s){"use strict";s.d(a,{w_:function(){return GenIcon}});var o=s(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(i),__assign=function(){return(__assign=Object.assign||function(e){for(var a,s=1,o=arguments.length;s<o;s++)for(var i in a=arguments[s])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e}).apply(this,arguments)},__rest=function(e,a){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>a.indexOf(o)&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>a.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]]);return s};function Tree2Element(e){return e&&e.map(function(e,a){return o.createElement(e.tag,__assign({key:a},e.attr),Tree2Element(e.child))})}function GenIcon(e){return function(a){return o.createElement(IconBase,__assign({attr:__assign({},e.attr)},a),Tree2Element(e.child))}}function IconBase(e){var elem=function(a){var s,i=e.attr,l=e.size,_=e.title,f=__rest(e,["attr","size","title"]),d=l||a.size||"1em";return a.className&&(s=a.className),e.className&&(s=(s?s+" ":"")+e.className),o.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,f,{className:s,style:__assign(__assign({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),_&&o.createElement("title",null,_),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return elem(e)}):elem(i)}}},function(e){e.O(0,[582,413,42,971,472,744],function(){return e(e.s=68914)}),_N_E=e.O()}]);