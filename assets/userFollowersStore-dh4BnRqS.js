import{q as c,s as d,u as a}from"./index-DLbrrZ4d.js";import{s as l,e as r}from"./swalToasts-LciBzvEZ.js";var w={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const n=c.useLoading({}),{VITE_APP_URL:i}=w,u=d("userFollowersStore",{state:()=>({followingList:[],toggleFollow:""}),actions:{async getFollowingList(){const e=n.show(),t=`${i}/users/following`;try{const o=await a.get(t),{data:s}=o.data;this.followingList=s,l(o.data.message)}catch(o){r(o.response.data.message)}finally{e.hide()}},isFollowed(e,t){e.some(s=>s._id===t)?this.toggleFollow=!1:this.toggleFollow=!0},async followUser(e){const t=n.show(),o=`${i}/users/${e}/follow`;try{const s=await a.post(o);l(s.data.message)}catch(s){r(s.response.data.message)}finally{t.hide()}},async unfollowUser(e){const t=n.show(),o=`${i}/users/${e}/unfollow`;try{const s=await a.delete(o);this.getFollowingList(),l(s.data.message)}catch(s){r(s.response.data.message)}finally{t.hide()}}}});export{u};
