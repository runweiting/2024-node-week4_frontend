import{u,x as f,y as c}from"./index-YBCA0vwM.js";import{s as d,e as i}from"./swalToasts-9FqNNr8f.js";import{p as m}from"./postsStore-3j3dsD5B.js";var P={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const p=u.useLoading({}),{VITE_APP_URL:l}=P,_=f("userPostsStore",{state:()=>({}),actions:{async createPost(t,e,o){const s=p.show(),n=`${l}/posts`;try{const a=await c.post(n,{content:t,image:e,tags:o});d(a.data.message),await m().getPosts()}catch(a){i(a.response.data.message)}finally{s.hide()}},async updatePost(t,e,o,s){const n=p.show(),a=`${l}/posts/${s}`;try{const r=await c.put(a,{content:t,image:e,tags:o});d(r.data.message),await m().getPosts()}catch(r){i(r.response.data.message)}finally{n.hide()}},async deletePost(t){const e=p.show(),o=`${l}/posts/${t}`;try{const s=await c.delete(o);d(s.data.message)}catch(s){i(s.response.data.message)}finally{e.hide()}}}});export{_ as u};
