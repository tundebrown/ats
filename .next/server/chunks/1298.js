"use strict";exports.id=1298,exports.ids=[1298],exports.modules={41298:(t,e,o)=>{o.d(e,{BT:()=>fetchUser,KA:()=>fetchJob,MX:()=>fetchProduct,_u:()=>n,bG:()=>fetchJobs,t2:()=>fetchProducts,uh:()=>fetchUsers});var r=o(4656),i=o(94646),c=o(84499),s=o(91136);let fetchUsers=async(t,e)=>{let o=RegExp(t,"i");try{(0,s.P)();let t=await c.n5.find({$and:[{username:{$regex:o}},{isAdmin:!1}]}).count(),r=await c.n5.find({$and:[{username:{$regex:o}},{isAdmin:!1}]}).limit(10).skip(10*(e-1));return{count:t,users:r}}catch(t){throw console.log(t),Error("Failed to fetch users!")}},fetchUser=async t=>{console.log(t);try{(0,s.P)();let e=await c.n5.findById(t);return e}catch(t){throw console.log(t),Error("Failed to fetch user!")}},fetchProducts=async(t,e)=>{console.log(t);let o=RegExp(t,"i");try{(0,s.P)();let t=await c.xs.find({title:{$regex:o}}).count(),r=await c.xs.find({title:{$regex:o}}).limit(2).skip(2*(e-1));return{count:t,products:r}}catch(t){throw console.log(t),Error("Failed to fetch products!")}},fetchProduct=async t=>{try{(0,s.P)();let e=await c.xs.findById(t);return e}catch(t){throw console.log(t),Error("Failed to fetch product!")}},fetchJobs=async(t,e)=>{console.log(t);let o=RegExp(t,"i");try{(0,s.P)();let t=await c.oI.find({title:{$regex:o}}).count(),r=await c.oI.find({title:{$regex:o}}).limit(20).skip(20*(e-1));return{count:t,jobs:r}}catch(t){throw console.log(t),Error("Failed to fetch jobs!")}},fetchJob=async t=>{try{(0,s.P)();let e=await c.oI.findById(t);return e}catch(t){throw console.log(t),Error("Failed to fetch job!")}},n=[{id:1,title:"Active Jobs",number:0,icon:r.jsx(i.raE,{}),color:"pale"},{id:2,title:"Applicants",number:0,icon:r.jsx(i.Vyx,{}),color:"indigo"},{id:3,title:"Interviews",number:0,icon:r.jsx(i.oG,{}),color:"purple"},{id:3,title:"Submissions",number:0,icon:r.jsx(i.pKe,{}),color:"indigo"},{id:3,title:"Hire",number:0,icon:r.jsx(i.ixJ,{}),color:"pale"}]}};