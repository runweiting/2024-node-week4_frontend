import{p as l,q as p,s as n}from"./index-MHy95iQa.js";import{s as c,a as u}from"./showSuccessToast-Sra1c6zi.js";var f={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const i=l.useLoading({}),{VITE_LOCALHOST:d}=f,S=p("userPostsStore",{state:()=>({postsList:[]}),actions:{async getPosts(o=null,a=null){const r=i.show();let s=`${d}/posts`;o!==null&&(s+=`?timeSort=${o}`,a&&(s+=`&q=${a}`));try{const t=await n.get(s),{data:e}=t.data;this.postsList=e}catch(t){c(t.response.data.message)}finally{r.hide()}},async createPost(o,a,r){const s=i.show(),t=`${d}/posts`;try{const e=await n.post(t,{content:o,image:a,tags:r});u(e.data.message),this.getPosts()}catch(e){c(e.response.data.message)}finally{s.hide()}}}});export{S as u};
