import{e as T,f as V,g as v,_ as $,h as k,m as p,r as w,o as d,c as l,b as x,a as e,i as g,v as E,j as S,k as m,F as f,l as P,t as c,n as A,p as O}from"./index-IyDy3JUD.js";import{u as L}from"./userPostsStore-bJmkp1Uy.js";import{u as C}from"./userUsersStore-HR4xVEjj.js";import{s as y,e as u}from"./swalToasts-cbjLxQjF.js";import{U as R}from"./UserNavbar-NgJ6Kkir.js";import{U as j}from"./UserDashboard-sDIoES7l.js";import"./user_default-gs4whxCm.js";var N={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M=T.useLoading({}),{VITE_LOCALHOST:B}=N,H=V("userCommentsStore",{state:()=>({}),actions:{async createComment(s,t){const i=M.show(),a=`${B}/posts/${s}/comment`;try{const r=await v.post(a,{comment:t});y(r.data.message)}catch(r){u(r.response.data.message)}finally{i.hide()}}}});var I={VITE_APP_URL:"https://two024-node-week4.onrender.com",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const U=T.useLoading({}),{VITE_LOCALHOST:D}=I,F=V("userLikesStore",{state:()=>({}),actions:{async likePost(s){const t=U.show(),i=`${D}/posts/${s}/like`;try{const a=await v.post(i);y(a.data.message)}catch(a){u(a.response.data.message)}finally{t.hide()}},async unlikePost(s){const t=U.show(),i=`${D}/posts/${s}/unlike`;try{const a=await v.delete(i);y(a.data.message)}catch(a){u(a.response.data.message)}finally{t.hide()}}}}),z={components:{UserNavbar:R,UserDashboard:j},data(){return{timeSort:"",keyword:"",comment:""}},mounted(){this.getPosts(),this.getProfile()},computed:{...k(L,["postsList"]),...k(C,["profile"])},methods:{...p(L,["getPosts"]),...p(C,["getProfile"]),...p(H,["createComment"]),...p(F,["likePost","unlikePost"]),handleSearchPosts(s){this.getPosts("asc",s)},async handleLikePost(s){const t=this.postsList.find(i=>i._id===s);try{this.isLiked(t)?await this.unlikePost(s):await this.likePost(s),await this.getPosts()}catch(i){console.log(i),u(i)}},isLiked(s){return s.likes.some(t=>t._id===this.profile._id)},handleCreateComment(s,t){this.createComment(s,t),this.getPosts()},formattedTime(s){const t=new Date(s),i=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),h=String(t.getHours()).padStart(2,"0"),_=String(t.getMinutes()).padStart(2,"0"),b=String(t.getSeconds()).padStart(2,"0");return`${i}-${a}-${r} ${h}:${_}:${b}`}}},Y={class:"container py-12"},q={class:"row"},G={class:"col-8"},J={class:"row mb-4"},K={class:"col-4"},Q=e("option",{value:"",selected:""},"請選擇順序",-1),W=e("option",{value:"asc"},"從新到舊",-1),X=e("option",{value:"desc"},"從舊到新",-1),Z=[Q,W,X],ee={class:"col-8"},te={class:"input-group"},se=e("i",{class:"bi bi-search text-white fs-4"},null,-1),oe=[se],re={key:0,class:"row"},ie=O('<div class="col"><div class="bg-white rounded border border-2 border-black" style="border-bottom:4px solid black !important;"><div class="d-flex align-items-center gap-2 border-bottom border-2 border-black p-4 w-100" style="height:52px;"><div class="rounded border border-black border-1 bg-danger" style="width:10px;height:10px;"></div><div class="rounded border border-black border-1 bg-warning" style="width:10px;height:10px;"></div><div class="rounded border border-black border-1 bg-success" style="width:10px;height:10px;"></div></div><div class="text-center py-8" style="height:80px;"><p class="text-gray">目前尚無動態，新增一則貼文吧！</p></div></div></div>',1),ae=[ie],ne={key:1,class:"row gy-6"},de={class:"bg-white rounded border border-2 border-black p-6",style:{"border-bottom":"4px solid black !important"}},le={key:0,class:"d-flex gap-2 mb-4"},ce={class:"rounded-circle overflow-hidden",style:{width:"45px",height:"45px"}},he=["src","alt"],me={class:"d-flex flex-column justify-content-between text-start"},pe={class:"noto-sans-tc text-primary fw-bold"},ue={class:"baloo-da-2 text-gray"},_e={class:"noto-sans-tc mb-4"},be=["src","alt"],ge={class:"d-flex align-items-center mb-5"},fe={key:0,class:"d-flex align-items-center gap-2"},ve=e("div",{class:"rounded-circle overflow-hidden bg-primary position-relative",style:{width:"24px",height:"24px"}},[e("i",{class:"bi bi-hand-thumbs-up-fill text-white position-absolute top-50 start-50 translate-middle"})],-1),ye={class:"noto-sans-tc"},ke={class:"ms-auto"},we={class:"d-flex align-items-center gap-2"},xe=["onClick"],Se={class:"baloo-da-2 fw-bold"},Pe={class:"d-flex align-items-center gap-2 mb-4"},Le={key:0,class:"rounded-circle overflow-hidden",style:{width:"40px",height:"40px"}},Ce=["src","alt"],Ue={class:"input-group"},De=["onClick"],Te={class:"row px-4 gy-4"},Ve={class:"d-flex align-items-center gap-2 mb-1"},$e={class:"rounded-circle overflow-hidden",style:{width:"40px",height:"40px"}},Ee=["src","alt"],Ae={class:"d-flex flex-column justify-content-between text-start"},Oe={class:"noto-sans-tc text-primary fw-bold"},Re={class:"baloo-da-2 text-gray"},je={class:"ms-12 mb-0"},Ne={class:"col-4"};function Me(s,t,i,a,r,h){const _=w("UserNavbar"),b=w("UserDashboard");return d(),l(f,null,[x(_),e("div",Y,[e("div",q,[e("div",G,[e("div",J,[e("div",K,[g(e("select",{onInput:t[0]||(t[0]=o=>s.getPosts(r.timeSort)),"onUpdate:modelValue":t[1]||(t[1]=o=>r.timeSort=o),class:"form-select rounded-0 border-2 border-black py-3 ps-4 pe-10","aria-label":"posts-select"},Z,544),[[E,r.timeSort]])]),e("div",ee,[e("div",te,[g(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>r.keyword=o),type:"text",class:"form-control rounded-0 border-2 border-black py-3 px-4",placeholder:"搜尋貼文","aria-label":"搜尋貼文","aria-describedby":"搜尋貼文"},null,512),[[S,r.keyword]]),e("button",{onClick:t[3]||(t[3]=o=>h.handleSearchPosts(r.keyword)),class:"btn btn-primary rounded-0 px-4",type:"button"},oe)])])]),s.postsList.length?m("",!0):(d(),l("div",re,ae)),s.postsList.length?(d(),l("div",ne,[(d(!0),l(f,null,P(s.postsList,o=>(d(),l("div",{key:o.id,class:"col-12"},[e("div",de,[o.user?(d(),l("div",le,[e("div",ce,[e("img",{src:o.user.photo,alt:`user-photo-${o.user.name}`,class:"object-fit-cover img-fluid",style:{height:"45px"}},null,8,he)]),e("div",me,[e("span",pe,c(o.user.name),1),e("small",ue,c(h.formattedTime(o.createdAt)),1)])])):m("",!0),e("p",_e,c(o.content),1),e("img",{src:o.image,alt:`photo-${o.image}`,class:"object-fit-cover img-fluid rounded border border-2 border-black mb-5"},null,8,be),e("div",ge,[o.likes.length?(d(),l("div",fe,[ve,e("small",ye,c(o.likes[0].name)+"和其他"+c(o.likes.length-1)+"人按讚",1)])):m("",!0),e("div",ke,[e("div",we,[e("button",{onClick:n=>h.handleLikePost(o._id),type:"button",class:"btn p-0"},[e("i",{class:A([h.isLiked(o)?"bi bi-hand-thumbs-up-fill":"bi bi-hand-thumbs-up","fs-5 text-primary"])},null,2)],8,xe),e("span",Se,c(o.likes.length),1)])])]),e("div",Pe,[s.profile._id?(d(),l("div",Le,[e("img",{src:s.profile.photo,alt:`user-photo-${s.profile.name}`,class:"object-fit-cover img-fluid",style:{height:"40px"}},null,8,Ce)])):m("",!0),e("div",Ue,[g(e("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>r.comment=n),type:"text",class:"form-control rounded-0 border-2 border-black py-2 px-4",placeholder:"留言...","aria-label":"留言","aria-describedby":"留言"},null,512),[[S,r.comment]]),e("button",{onClick:n=>h.handleCreateComment(o._id,r.comment),class:"btn btn-primary rounded-0 px-4 text-white",type:"button",style:{width:"25%"}},"留言",8,De)])]),e("div",Te,[(d(!0),l(f,null,P(o.comments,n=>(d(),l("div",{key:n._id,class:"col-12 rounded p-4",style:{"background-color":"rgb(239 236 231 / 50%)"}},[e("div",Ve,[e("div",$e,[e("img",{src:n.user.photo,alt:`user-photo-${n.user.name}`,class:"object-fit-cover img-fluid",style:{height:"40px"}},null,8,Ee)]),e("div",Ae,[e("span",Oe,c(n.user.name),1),e("small",Re,c(h.formattedTime(n.createdAt)),1)])]),e("p",je,c(n.comment),1)]))),128))])])]))),128))])):m("",!0)]),e("div",Ne,[x(b)])])])],64)}const Ge=$(z,[["render",Me]]);export{Ge as default};