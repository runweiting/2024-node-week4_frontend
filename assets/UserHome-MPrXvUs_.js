import{_ as k,e as h,m,r as _,o as i,c as a,b as u,a as t,f as v,v as S,g as P,h as g,F as f,i as N,w as U,t as n,j as w,d as L}from"./index-1rihly0f.js";import{u as x}from"./userPostsStore-5sDQZiZR.js";import{u as y}from"./userUsersStore-aotuVKLW.js";import{U as V}from"./UserNavbar-lkU52WOy.js";import"./showSuccessToast-ENfQb9My.js";const D={components:{UserNavbar:V},data(){return{timeSort:"",keyword:""}},mounted(){this.getPosts(),this.getProfile()},computed:{...h(x,["postsList"]),...h(y,["profile"])},methods:{...m(x,["getPosts"]),...m(y,["getProfile"]),handleGetPosts(o){this.getPosts(o)},handleSearchPosts(o){this.getPosts("asc",o)},formattedTime(o){const e=new Date(o),b=e.getFullYear(),p=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),d=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),c=String(e.getSeconds()).padStart(2,"0");return`${b}-${p}-${r} ${d}:${l}:${c}`}}},j={class:"container py-12"},C={class:"row"},M={class:"col-8"},T={class:"row mb-4"},B={class:"col-4"},F=t("option",{value:"",selected:""},"請選擇順序",-1),$=t("option",{value:"asc"},"從新到舊",-1),A=t("option",{value:"desc"},"從舊到新",-1),G=[F,$,A],H={class:"col-8"},R={class:"input-group"},z=t("i",{class:"bi bi-search text-white fs-4"},null,-1),E=[z],I={key:0,class:"row"},Y=w('<div class="col"><div class="bg-white rounded border border-2 border-black" style="border-bottom:4px solid black !important;"><div class="d-flex align-items-center gap-2 border-bottom border-2 border-black p-4 w-100" style="height:52px;"><div class="rounded border border-black border-1 bg-danger" style="width:10px;height:10px;"></div><div class="rounded border border-black border-1 bg-warning" style="width:10px;height:10px;"></div><div class="rounded border border-black border-1 bg-success" style="width:10px;height:10px;"></div></div><div class="text-center py-8" style="height:80px;"><p class="text-gray">目前尚無動態，新增一則貼文吧！</p></div></div></div>',1),q=[Y],J={key:1,class:"row gy-6"},K={class:"bg-white rounded border border-2 border-black p-6",style:{"border-bottom":"4px solid black !important"}},O={class:"d-flex gap-2 mb-4"},Q={class:"d-flex flex-column justify-content-between text-start"},W={class:"noto-sans-tc text-primary fw-bold"},X={class:"baloo-da-2 text-gray"},Z={class:"noto-sans-tc mb-4"},tt=["src"],et={class:"col-4"},st={class:"bg-white border border-2 border-black px-6 py-8"},ot={class:"d-flex flex-column gap-6"},rt={class:"d-flex align-items-center gap-4"},dt={class:"rounded-circle overflow-hidden",style:{width:"50px",height:"50px"}},it=["src"],at={class:"noto-sans-tc fw-bold"},nt=w('<div class="d-flex align-items-center gap-4"><div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width:50px;height:50px;"><i class="bi bi-bell-fill fs-5 position-absolute top-50 start-50 translate-middle"></i></div><span class="noto-sans-tc fw-bold">追蹤名單</span></div><div class="d-flex align-items-center gap-4"><div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width:50px;height:50px;"><i class="bi bi-hand-thumbs-up-fill fs-5 position-absolute top-50 start-50 translate-middle"></i></div><span class="noto-sans-tc fw-bold">我按讚的文章</span></div>',2);function lt(o,e,b,p,r,d){const l=_("UserNavbar"),c=_("RouterLink");return i(),a(f,null,[u(l),t("div",j,[t("div",C,[t("div",M,[t("div",T,[t("div",B,[v(t("select",{onInput:e[0]||(e[0]=s=>d.handleGetPosts(r.timeSort)),"onUpdate:modelValue":e[1]||(e[1]=s=>r.timeSort=s),class:"form-select rounded-0 border-2 border-black py-3 ps-4 pe-10","aria-label":"posts-select"},G,544),[[S,r.timeSort]])]),t("div",H,[t("div",R,[v(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>r.keyword=s),type:"text",class:"form-control rounded-0 border-2 border-black py-3 px-4",placeholder:"搜尋貼文","aria-label":"搜尋貼文","aria-describedby":"搜尋貼文"},null,512),[[P,r.keyword]]),t("button",{onClick:e[3]||(e[3]=s=>d.handleSearchPosts(r.keyword)),class:"btn btn-primary rounded-0 px-4",type:"button"},E)])])]),o.postsList?g("",!0):(i(),a("div",I,q)),o.postsList?(i(),a("div",J,[(i(!0),a(f,null,N(o.postsList,s=>(i(),a("div",{key:s._id,class:"col-12"},[t("div",K,[t("div",O,[t("div",Q,[t("span",W,n(s.name),1),t("small",X,n(d.formattedTime(s.createdAt)),1)])]),t("p",Z,n(s.content),1),t("img",{src:s.image,alt:"雪景",class:"object-fit-cover img-fluid"},null,8,tt)])]))),128))])):g("",!0)]),t("div",et,[t("div",st,[u(c,{to:{name:"new-post"},class:"btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6"},{default:U(()=>[L("張貼動態 ")]),_:1}),t("div",ot,[t("div",rt,[t("div",dt,[t("img",{src:o.profile.photo,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"50px"}},null,8,it)]),t("span",at,n(o.profile.name),1)]),nt])])])])])],64)}const _t=k(D,[["render",lt]]);export{_t as default};
