import{s as p,u,x as n}from"./index-no50AfHN.js";import{e as l}from"./swalToasts-f1hxmI6k.js";var f={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const i=p.useLoading({}),{VITE_APP_URL:c}=f,P=u("postsStore",{state:()=>({postsList:[],targetPost:{},userPosts:[]}),actions:{async getPosts(e=null,o=null){const a=i.show();let t=`${c}/posts`;e!==null&&(t+=`?timeSort=${e}`,o&&(t+=`&q=${o}`));try{const s=await n.get(t),{data:r}=s.data;this.postsList=r}catch(s){l(s.response.data.message)}finally{a.hide()}},async getPost(e){const o=i.show(),a=`${c}/posts/${e}`;try{const t=await n.get(a),{data:s}=t.data;this.targetPost=s}catch(t){l(t.response.data.message)}finally{o.hide()}},async getUserPosts(e,o=null,a=null){const t=i.show();let s=`${c}/posts/user/${e}`;o!==null&&(s+=`?timeSort=${o}`,a&&(s+=`&q=${a}`));try{const r=await n.get(s),{data:d}=r.data;this.userPosts=d}catch(r){l(r.response.data.message)}finally{t.hide()}}},getters:{getAllPosts:e=>e.postsList}});export{P as p};
