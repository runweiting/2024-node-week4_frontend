import{s as u,u as f,x as c}from"./index-MgSTrJxY.js";import{s as d,e as i}from"./swalToasts-lv7k8xQG.js";import{p as m}from"./postsStore-D5CjmD2q.js";var h={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=u.useLoading({}),{VITE_LOCALHOST:p}=h,y=f("userPostsStore",{state:()=>({}),actions:{async createPost(t,e,o){const s=l.show(),n=`${p}/posts`;try{const a=await c.post(n,{content:t,image:e,tags:o});d(a.data.message),await m().getPosts()}catch(a){i(a.response.data.message)}finally{s.hide()}},async updatePost(t,e,o,s){const n=l.show(),a=`${p}/posts/${s}`;try{const r=await c.put(a,{content:t,image:e,tags:o});d(r.data.message),await m().getPosts()}catch(r){i(r.response.data.message)}finally{n.hide()}},async deletePost(t){const e=l.show(),o=`${p}/posts/${t}`;try{const s=await c.delete(o);d(s.data.message)}catch(s){i(s.response.data.message)}finally{e.hide()}}}});export{y as u};
