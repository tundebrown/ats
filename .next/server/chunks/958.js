exports.id=958,exports.ids=[958],exports.modules={80958:(e,d,a)=>{let t={"3282c0c12f02e009f615bf60174c76d98ecd98df":()=>Promise.resolve().then(a.bind(a,2338)).then(e=>e.$$ACTION_1),"227e1d96311016e85e2a4d98a8ad62fe2042d8e3":()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.deleteJob),c026d14d78e70fafa6509e5c13aaae8dede8b2ef:()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.addProduct),fe5e44dfca05dcee48de0ef4c4b302842bca3fb6:()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.addJob),e6310c0710fcea997bfcb298397a1142549822d4:()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.deleteUser),"05ab7f507a5a78b63f11449ec267c66ea5c63de1":()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.authenticate),"269dbcbd29c9e885255c7b592b78354ad2884188":()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.deleteProduct),ab9c6725cabb479b4ea8391125ceff6ed49a2b28:()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.updateUser),df1fbec2c85f9d0148712ee34de27951a1c0d054:()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.addUser),bf392060ead28daa248708a17ff470eafd0bf916:()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.updateJob),"85e041a90a8e2c5e0bbc194c827e55c18153917a":()=>Promise.resolve().then(a.bind(a,86096)).then(e=>e.updateProduct)};async function endpoint(e,...d){let a=await t[e]();return a.apply(null,d)}e.exports={"3282c0c12f02e009f615bf60174c76d98ecd98df":endpoint.bind(null,"3282c0c12f02e009f615bf60174c76d98ecd98df"),"227e1d96311016e85e2a4d98a8ad62fe2042d8e3":endpoint.bind(null,"227e1d96311016e85e2a4d98a8ad62fe2042d8e3"),c026d14d78e70fafa6509e5c13aaae8dede8b2ef:endpoint.bind(null,"c026d14d78e70fafa6509e5c13aaae8dede8b2ef"),fe5e44dfca05dcee48de0ef4c4b302842bca3fb6:endpoint.bind(null,"fe5e44dfca05dcee48de0ef4c4b302842bca3fb6"),e6310c0710fcea997bfcb298397a1142549822d4:endpoint.bind(null,"e6310c0710fcea997bfcb298397a1142549822d4"),"05ab7f507a5a78b63f11449ec267c66ea5c63de1":endpoint.bind(null,"05ab7f507a5a78b63f11449ec267c66ea5c63de1"),"269dbcbd29c9e885255c7b592b78354ad2884188":endpoint.bind(null,"269dbcbd29c9e885255c7b592b78354ad2884188"),ab9c6725cabb479b4ea8391125ceff6ed49a2b28:endpoint.bind(null,"ab9c6725cabb479b4ea8391125ceff6ed49a2b28"),df1fbec2c85f9d0148712ee34de27951a1c0d054:endpoint.bind(null,"df1fbec2c85f9d0148712ee34de27951a1c0d054"),bf392060ead28daa248708a17ff470eafd0bf916:endpoint.bind(null,"bf392060ead28daa248708a17ff470eafd0bf916"),"85e041a90a8e2c5e0bbc194c827e55c18153917a":endpoint.bind(null,"85e041a90a8e2c5e0bbc194c827e55c18153917a")}},86096:(e,d,a)=>{"use strict";a.r(d),a.d(d,{addJob:()=>addJob,addProduct:()=>addProduct,addUser:()=>addUser,authenticate:()=>authenticate,deleteJob:()=>deleteJob,deleteProduct:()=>deleteProduct,deleteUser:()=>deleteUser,updateJob:()=>updateJob,updateProduct:()=>updateProduct,updateUser:()=>updateUser});var t=a(34600);a(99195);var c=a(61726),r=a(84499),o=a(91136),b=a(41412),n=a(58802),l=a.n(n),s=a(7711),f=a(82990);let addUser=async e=>{let{username:d,lastname:a,email:t,password:n,isAdmin:s,isActive:f,phone:i,address:u,experience:h,highestQualification:p,jobTitle:P,employer:U,expectedSalary:y,currentSalary:v}=Object.fromEntries(e);try{(0,o.P)();let e=await l().genSalt(10),c=await l().hash(n,e),b=new r.n5({username:d,lastname:a,email:t,password:c,isAdmin:s,isActive:f,phone:i,address:u,experience:h,highestQualification:p,jobTitle:P,employer:U,expectedSalary:y,currentSalary:v});await b.save()}catch(e){throw console.log(e),Error(`Failed to create user! ${e}`)}(0,c.revalidatePath)("/dashboard/users"),(0,b.redirect)("/dashboard/users")},updateUser=async e=>{let{id:d,username:a,lastname:t,email:n,password:l,phone:s,address:f,isAdmin:i,isActive:u}=Object.fromEntries(e);try{(0,o.P)();let e={username:a,lastname:t,email:n,password:l,phone:s,address:f,isAdmin:i,isActive:u};Object.keys(e).forEach(d=>(""===e[d]||void 0)&&delete e[d]),await r.n5.findByIdAndUpdate(d,e)}catch(e){throw console.log(e),Error("Failed to update user!")}(0,c.revalidatePath)("/dashboard/users"),(0,b.redirect)("/dashboard/users")},addProduct=async e=>{let{title:d,desc:a,price:t,stock:n,color:l,size:s}=Object.fromEntries(e);try{(0,o.P)();let e=new r.xs({title:d,desc:a,price:t,stock:n,color:l,size:s});await e.save()}catch(e){throw console.log(e),Error("Failed to create product!")}(0,c.revalidatePath)("/dashboard/products"),(0,b.redirect)("/dashboard/products")},updateProduct=async e=>{let{id:d,title:a,desc:t,price:n,stock:l,color:s,size:f}=Object.fromEntries(e);try{(0,o.P)();let e={title:a,desc:t,price:n,stock:l,color:s,size:f};Object.keys(e).forEach(d=>(""===e[d]||void 0)&&delete e[d]),await r.xs.findByIdAndUpdate(d,e)}catch(e){throw console.log(e),Error("Failed to update product!")}(0,c.revalidatePath)("/dashboard/products"),(0,b.redirect)("/dashboard/products")},addJob=async e=>{let{jobOpeningId:d,title:a,jobDesc:t,recruiter:n,targetDate:l,clientName:s,status:f,contactName:i,experience:u,skills:h,jobType:p,payment:P,location:U,accountManager:y}=Object.fromEntries(e);try{(0,o.P)();let e=new r.oI({jobOpeningId:d,title:a,jobDesc:t,recruiter:n,targetDate:l,clientName:s,status:f,contactName:i,experience:u,skills:h,jobType:p,payment:P,location:U,accountManager:y});await e.save()}catch(e){throw console.log(e),Error(`Failed to create job! ${e}`)}(0,c.revalidatePath)("/dashboard/jobs"),(0,b.redirect)("/dashboard/jobs")},updateJob=async e=>{let{id:d,jobOpeningId:a,title:t,jobDesc:n,recruiter:l,targetDate:s,clientName:f,status:i,contactName:u,experience:h,skills:p,jobType:P,payment:U,location:y,accountManager:v}=Object.fromEntries(e);try{(0,o.P)();let e={jobOpeningId:a,title:t,jobDesc:n,recruiter:l,targetDate:s,clientName:f,status:i,contactName:u,experience:h,skills:p,jobType:P,payment:U,location:y,accountManager:v};Object.keys(e).forEach(d=>(""===e[d]||void 0)&&delete e[d]),await r.oI.findByIdAndUpdate(d,e)}catch(e){throw console.log(e),Error("Failed to update Job!")}(0,c.revalidatePath)("/dashboard/jobs"),(0,b.redirect)("/dashboard/jobs")},deleteUser=async e=>{let{id:d}=Object.fromEntries(e);try{(0,o.P)(),await r.n5.findByIdAndDelete(d)}catch(e){throw console.log(e),Error("Failed to delete user!")}(0,c.revalidatePath)("/dashboard/products")},deleteProduct=async e=>{let{id:d}=Object.fromEntries(e);try{(0,o.P)(),await r.xs.findByIdAndDelete(d)}catch(e){throw console.log(e),Error("Failed to delete product!")}(0,c.revalidatePath)("/dashboard/products")},deleteJob=async e=>{let{id:d}=Object.fromEntries(e);try{(0,o.P)(),await r.oI.findByIdAndDelete(d)}catch(e){throw console.log(e),Error("Failed to delete job!")}(0,c.revalidatePath)("/dashboard/jobs")},authenticate=async(e,d)=>{let{username:a,password:t}=Object.fromEntries(d);await (0,s.zB)("credentials",{username:a,password:t})};(0,f.h)([addUser,updateUser,addProduct,updateProduct,addJob,updateJob,deleteUser,deleteProduct,deleteJob,authenticate]),(0,t.U)("df1fbec2c85f9d0148712ee34de27951a1c0d054",null,addUser),(0,t.U)("ab9c6725cabb479b4ea8391125ceff6ed49a2b28",null,updateUser),(0,t.U)("c026d14d78e70fafa6509e5c13aaae8dede8b2ef",null,addProduct),(0,t.U)("85e041a90a8e2c5e0bbc194c827e55c18153917a",null,updateProduct),(0,t.U)("fe5e44dfca05dcee48de0ef4c4b302842bca3fb6",null,addJob),(0,t.U)("bf392060ead28daa248708a17ff470eafd0bf916",null,updateJob),(0,t.U)("e6310c0710fcea997bfcb298397a1142549822d4",null,deleteUser),(0,t.U)("269dbcbd29c9e885255c7b592b78354ad2884188",null,deleteProduct),(0,t.U)("227e1d96311016e85e2a4d98a8ad62fe2042d8e3",null,deleteJob),(0,t.U)("05ab7f507a5a78b63f11449ec267c66ea5c63de1",null,authenticate)}};