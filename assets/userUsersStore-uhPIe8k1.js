import{p as f,q as g,s as r,u as p,x as w}from"./index-xJw8oUdl.js";import{a as c,s as d}from"./showSuccessToast-3irsC4BR.js";var y={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=f.useLoading({}),{VITE_APP_URL:u}=y,x=g("userUsersStore",{state:()=>({profile:{}}),actions:{async signUp(a,t,s,o){const e=l.show(),i=`${u}/users/sign-up`;try{const n=await r.post(i,{name:a,email:t,password:s,confirmPassword:o}),{expired:m,token:h}=n.data;document.cookie=`myToken=${h}; expires=${new Date(m)}`,c(n.data.message),p.push({name:"sign-in"})}catch(n){d(n.response.data.message)}finally{e.hide()}},async signIn(a,t){const s=l.show(),o=`${u}/users/sign-in`;if(w())c("您已登入！"),p.push({name:"metawall"});else try{const e=await r.post(o,{email:a,password:t}),{expired:i,token:n}=e.data;document.cookie=`myToken=${n}; expires=${new Date(i)}`,r.defaults.headers.common.Authorization=`Bearer ${n}`,p.push({name:"metawall"}),c(e.data.message)}catch(e){d(e.response.data.message)}finally{s.hide()}},async getProfile(){const a=l.show(),t=`${u}/users/profile`;try{const s=await r.get(t),{data:o}=s.data;this.profile=o,c(s.data.message)}catch(s){d(s.response.data.message)}finally{a.hide()}},async updateProfile(a,t){const s=l.show(),o=`${u}/users/profile`;try{const e=await r.patch(o,{name:a,gender:t}),{data:i}=e.data;this.profile=i,c(e.data.message)}catch(e){d(e.response.data.message)}finally{s.hide()}},async updatePassword(a,t){const s=l.show(),o=`${u}/users/update-password`;try{const e=await r.patch(o,{password:a,confirmPassword:t}),{expired:i,token:n}=e.data;document.cookie=`myToken=${n}; expires=${new Date(i)}`,r.defaults.headers.common.Authorization=null;const m=`${e.data.message}，請重新登入！`;c(m)}catch(e){d(e.response.data.message)}finally{s.hide()}},async signOut(){const a=l.show(),t=`${u}/users/sign-out`;try{await r.post(t),document.cookie="myToken=; expires=;",r.defaults.headers.common.Authorization=null,c("登出成功"),p.push({name:"sign-in"})}catch(s){d(s.response.data.message)}finally{a.hide()}}}});export{x as u};
