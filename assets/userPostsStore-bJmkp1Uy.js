import{e as l,f as p,g as n}from"./index-IyDy3JUD.js";import{e as i,s as f}from"./swalToasts-cbjLxQjF.js";var u={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const c=l.useLoading({}),{VITE_LOCALHOST:d}=u,h=p("userPostsStore",{state:()=>({postsList:[]}),actions:{async getPosts(o=null,a=null){const r=c.show();let s=`${d}/posts`;o!==null&&(s+=`?timeSort=${o}`,a&&(s+=`&q=${a}`));try{const t=await n.get(s),{data:e}=t.data;this.postsList=e}catch(t){i(t.response.data.message)}finally{r.hide()}},async createPost(o,a,r){const s=c.show(),t=`${d}/posts`;try{const e=await n.post(t,{content:o,image:a,tags:r});f(e.data.message),this.getPosts()}catch(e){i(e.response.data.message)}finally{s.hide()}}}});export{h as u};
