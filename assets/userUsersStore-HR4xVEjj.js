import{e as h,f as g,g as r,u as p,x as y}from"./index-IyDy3JUD.js";import{s as c,e as d}from"./swalToasts-cbjLxQjF.js";var w={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=h.useLoading({}),{VITE_LOCALHOST:u}=w,x=g("userUsersStore",{state:()=>({profile:{}}),actions:{async signUp(a,t,s,o){const e=l.show(),n=`${u}/users/sign-up`;try{const i=await r.post(n,{name:a,email:t,password:s,confirmPassword:o}),{expires:m,token:f}=i.data;document.cookie=`myToken=${f}; expires=${m}`,c(i.data.message),p.push({name:"sign-in"})}catch(i){d(i.response.data.message)}finally{e.hide()}},async signIn(a,t){const s=l.show(),o=`${u}/users/sign-in`;if(y())c("您已登入！"),p.push({name:"metawall"});else try{const e=await r.post(o,{email:a,password:t}),{expired:n,token:i}=e.data;document.cookie=`myToken=${i}; expires=${new Date(n)}`,r.defaults.headers.common.Authorization=`Bearer ${i}`,p.push({name:"metawall"}),c(e.data.message)}catch(e){d(e.response.data.message)}finally{s.hide()}},async getProfile(){const a=l.show(),t=`${u}/users/profile`;try{const s=await r.get(t),{data:o}=s.data;this.profile=o,c(s.data.message)}catch(s){d(s.response.data.message),console.log(s)}finally{a.hide()}},async updateProfile(a,t){const s=l.show(),o=`${u}/users/profile`;try{const e=await r.put(o,{name:a,gender:t}),{data:n}=e.data;this.profile=n,p.push({name:"profile"}),c(e.data.message)}catch(e){d(e.response.data.message)}finally{s.hide()}},async updatePassword(a,t){const s=l.show(),o=`${u}/users/update-password`;try{const e=await r.patch(o,{password:a,confirmPassword:t}),{expired:n,token:i}=e.data;document.cookie=`myToken=${i}; expires=${new Date(n)}`,r.defaults.headers.common.Authorization=null;const m=`${e.data.message}，請重新登入！`;c(m)}catch(e){d(e.response.data.message)}finally{s.hide()}},async signOut(){const a=l.show(),t=`${u}/users/sign-out`;try{await r.post(t),document.cookie="myToken=; expires=;",r.defaults.headers.common.Authorization=null,c("登出成功"),p.push({name:"sign-in"})}catch(s){d(s.response.data.message)}finally{a.hide()}},async uploadFile(){const a=l.show(),s=document.querySelector("#formFile").files[0],o=new FormData;o.append("file-to-upload",s);const e=`${u}/upload/file`;try{const n=await r.post(e,o);c(n.data.message),this.getProfile()}catch(n){d(n.response.data.message)}finally{a.hide()}}}});export{x as u};
