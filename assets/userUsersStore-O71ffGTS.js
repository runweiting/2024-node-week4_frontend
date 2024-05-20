import{p as f,q as w,s as n,u as p,x as g}from"./index-T7MlI2ok.js";import{a as c,s as d}from"./showSuccessToast-NBw9Cfrx.js";var y={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=f.useLoading({}),{VITE_APP_URL:u}=y,x=w("userUsersStore",{state:()=>({profile:{}}),actions:{async signUp(a,t,s,o){const e=l.show(),r=`${u}/users/sign-up`;try{const i=await n.post(r,{name:a,email:t,password:s,confirmPassword:o}),{expired:m,token:h}=i.data;document.cookie=`myToken=${h}; expires=${new Date(m)}`,c(i.data.message),p.push({name:"sign-in"})}catch(i){d(i.response.data.message)}finally{e.hide()}},async signIn(a,t){const s=l.show(),o=`${u}/users/sign-in`;if(g())c("您已登入！"),p.push({name:"metawall"});else try{const e=await n.post(o,{email:a,password:t}),{expired:r,token:i}=e.data;document.cookie=`myToken=${i}; expires=${new Date(r)}`,n.defaults.headers.common.Authorization=`Bearer ${i}`,p.push({name:"metawall"}),c(e.data.message)}catch(e){d(e.response.data.message)}finally{s.hide()}},async getProfile(){const a=l.show(),t=`${u}/users/profile`;try{const s=await n.get(t),{data:o}=s.data;this.profile=o,c(s.data.message)}catch(s){d(s.response.data.message)}finally{a.hide()}},async updateProfile(a,t){const s=l.show(),o=`${u}/users/profile`;try{const e=await n.patch(o,{name:a,gender:t}),{data:r}=e.data;this.profile=r,c(e.data.message)}catch(e){d(e.response.data.message)}finally{s.hide()}},async updatePassword(a,t){const s=l.show(),o=`${u}/users/update-password`;try{const e=await n.patch(o,{password:a,confirmPassword:t}),{expired:r,token:i}=e.data;document.cookie=`myToken=${i}; expires=${new Date(r)}`,n.defaults.headers.common.Authorization=null;const m=`${e.data.message}，請重新登入！`;c(m)}catch(e){d(e.response.data.message)}finally{s.hide()}},async signOut(){const a=l.show(),t=`${u}/users/sign-out`;try{await n.post(t),document.cookie="myToken=; expires=;",n.defaults.headers.common.Authorization=null,c("登出成功"),p.push({name:"sign-in"})}catch(s){d(s.response.data.message)}finally{a.hide()}},async uploadFile(){const a=l.show(),s=document.querySelector("#formFile").file[0],o=new FormData;o.append("file-to-upload",s);const e=`${u}/upload/file`;try{await n.post(e,o)}catch(r){d(r.response.data.message)}finally{a.hide()}}}});export{x as u};
