exports.id=9915,exports.ids=[9915],exports.modules={24221:()=>{},80311:(n,r,t)=>{"use strict";t.d(r,{Z:()=>f});var e=t(6113),i=t.n(e);let o={randomUUID:i().randomUUID},l=new Uint8Array(256),u=l.length;function rng(){return u>l.length-16&&(i().randomFillSync(l),u=0),l.slice(u,u+=16)}let s=[];for(let n=0;n<256;++n)s.push((n+256).toString(16).slice(1));function unsafeStringify(n,r=0){return s[n[r+0]]+s[n[r+1]]+s[n[r+2]]+s[n[r+3]]+"-"+s[n[r+4]]+s[n[r+5]]+"-"+s[n[r+6]]+s[n[r+7]]+"-"+s[n[r+8]]+s[n[r+9]]+"-"+s[n[r+10]]+s[n[r+11]]+s[n[r+12]]+s[n[r+13]]+s[n[r+14]]+s[n[r+15]]}function v4(n,r,t){if(o.randomUUID&&!r&&!n)return o.randomUUID();n=n||{};let e=n.random||(n.rng||rng)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){t=t||0;for(let n=0;n<16;++n)r[t+n]=e[n];return r}return unsafeStringify(e)}let f=v4}};