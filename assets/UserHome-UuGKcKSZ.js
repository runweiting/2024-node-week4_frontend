import{_ as k,e as h,m,r as u,o as i,c as a,b as _,a as e,f as g,v as S,g as P,h as v,F as f,i as N,w as U,t as l,j as w,d as L}from"./index-qouUdehN.js";import{u as x}from"./userPostsStore-AXw06jd7.js";import{u as y}from"./userUsersStore-Tt8ZgfRO.js";import{U as V}from"./UserNavbar-ncTZP3q6.js";import"./showSuccessToast-dIU71-nX.js";const D={components:{UserNavbar:V},data(){return{timeSort:"",keyword:""}},mounted(){this.getPosts(),this.getProfile()},computed:{...h(x,["postsList"]),...h(y,["profile"])},methods:{...m(x,["getPosts"]),...m(y,["getProfile"]),handleGetPosts(o){this.getPosts(o)},handleSearchPosts(o){this.getPosts("asc",o)},formattedTime(o){const t=new Date(o),b=t.getFullYear(),p=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0");return`${b}-${p}-${r} ${d}:${n}:${c}`}}},j={class:"container py-12"},C={class:"row"},M={class:"col-8"},T={class:"row mb-4"},$={class:"col-4"},B=e("option",{value:"",selected:""},"請選擇順序",-1),F=e("option",{value:"asc"},"從新到舊",-1),A=e("option",{value:"desc"},"從舊到新",-1),G=[B,F,A],H={class:"col-8"},R={class:"input-group"},z=e("i",{class:"bi bi-search text-white fs-4"},null,-1),E=[z],I={key:0,class:"row"},Y=w('<div class="col"><div class="bg-white rounded border border-2 border-black" style="border-bottom:4px solid black !important;"><div class="d-flex align-items-center gap-2 border-bottom border-2 border-black p-4 w-100" style="height:52px;"><div class="rounded border border-black border-1 bg-danger" style="width:10px;height:10px;"></div><div class="rounded border border-black border-1 bg-warning" style="width:10px;height:10px;"></div><div class="rounded border border-black border-1 bg-success" style="width:10px;height:10px;"></div></div><div class="text-center py-8" style="height:80px;"><p class="text-gray">目前尚無動態，新增一則貼文吧！</p></div></div></div>',1),q=[Y],J={key:1,class:"row gy-6"},K={class:"bg-white rounded border border-2 border-black p-6",style:{"border-bottom":"4px solid black !important"}},O={class:"d-flex gap-2 mb-4"},Q={class:"rounded-circle overflow-hidden",style:{width:"45px",height:"45px"}},W=["src","alt"],X={class:"d-flex flex-column justify-content-between text-start"},Z={class:"noto-sans-tc text-primary fw-bold"},ee={class:"baloo-da-2 text-gray"},te={class:"noto-sans-tc mb-4"},se=["src"],oe={class:"col-4"},re={class:"bg-white border border-2 border-black px-6 py-8"},de={class:"d-flex flex-column gap-6"},ie={class:"d-flex align-items-center gap-4"},ae={class:"rounded-circle overflow-hidden",style:{width:"50px",height:"50px"}},le=["src"],ne={class:"noto-sans-tc fw-bold"},ce=w('<div class="d-flex align-items-center gap-4"><div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width:50px;height:50px;"><i class="bi bi-bell-fill fs-5 position-absolute top-50 start-50 translate-middle"></i></div><span class="noto-sans-tc fw-bold">追蹤名單</span></div><div class="d-flex align-items-center gap-4"><div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width:50px;height:50px;"><i class="bi bi-hand-thumbs-up-fill fs-5 position-absolute top-50 start-50 translate-middle"></i></div><span class="noto-sans-tc fw-bold">我按讚的文章</span></div>',2);function be(o,t,b,p,r,d){const n=u("UserNavbar"),c=u("RouterLink");return i(),a(f,null,[_(n),e("div",j,[e("div",C,[e("div",M,[e("div",T,[e("div",$,[g(e("select",{onInput:t[0]||(t[0]=s=>d.handleGetPosts(r.timeSort)),"onUpdate:modelValue":t[1]||(t[1]=s=>r.timeSort=s),class:"form-select rounded-0 border-2 border-black py-3 ps-4 pe-10","aria-label":"posts-select"},G,544),[[S,r.timeSort]])]),e("div",H,[e("div",R,[g(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>r.keyword=s),type:"text",class:"form-control rounded-0 border-2 border-black py-3 px-4",placeholder:"搜尋貼文","aria-label":"搜尋貼文","aria-describedby":"搜尋貼文"},null,512),[[P,r.keyword]]),e("button",{onClick:t[3]||(t[3]=s=>d.handleSearchPosts(r.keyword)),class:"btn btn-primary rounded-0 px-4",type:"button"},E)])])]),o.postsList?v("",!0):(i(),a("div",I,q)),o.postsList?(i(),a("div",J,[(i(!0),a(f,null,N(o.postsList,s=>(i(),a("div",{key:s._id,class:"col-12"},[e("div",K,[e("div",O,[e("div",Q,[e("img",{src:s.user.photo,alt:`customer-feedback-${s.user.name}`,class:"object-fit-cover img-fluid",style:{height:"45px"}},null,8,W)]),e("div",X,[e("span",Z,l(s.user.name),1),e("small",ee,l(d.formattedTime(s.createdAt)),1)])]),e("p",te,l(s.content),1),e("img",{src:s.image,alt:"雪景",class:"object-fit-cover img-fluid"},null,8,se)])]))),128))])):v("",!0)]),e("div",oe,[e("div",re,[_(c,{to:{name:"new-post"},class:"btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6"},{default:U(()=>[L("張貼動態 ")]),_:1}),e("div",de,[e("div",ie,[e("div",ae,[e("img",{src:o.profile.photo,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"50px"}},null,8,le)]),e("span",ne,l(o.profile.name),1)]),ce])])])])])],64)}const ge=k(D,[["render",be]]);export{ge as default};
