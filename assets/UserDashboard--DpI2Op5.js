import{u as n}from"./userUsersStore-vZZqS0sB.js";import{e as d,m as l,_ as c,r as p,o as b,c as m,a as e,b as s,w as a,d as r,t as w,j as v}from"./index-MHy95iQa.js";const x={mounted(){this.getProfile()},computed:{...d(n,["profile"])},methods:{...l(n,["getProfile","signOut"])}},y={class:"navbar border-bottom border-black border-3 p-0 bg-white"},k={class:"container py-3"},$={class:"mb-0 overflow-hidden d-flex align-items-center",style:{"white-space":"nowrap"}},L={class:"dropdown d-flex align-items-center gap-2"},N={class:"rounded-circle overflow-hidden",style:{width:"30px",height:"30px"}},M=["src"],P={class:"dropdown-menu noto-sans-tc mt-2 py-0 text-center rounded-0","aria-labelledby":"dropdownMenuLink"},R=e("li",null,[e("a",{class:"dropdown-item py-2",href:"#"},"我的貼文牆")],-1);function S(t,i,f,h,u,_){const o=p("RouterLink");return b(),m("header",null,[e("nav",y,[e("div",k,[e("h1",$,[s(o,{to:{name:"metawall"},class:"navbar-brand m-0 fs-3 p-0"},{default:a(()=>[r("MetaWall ")]),_:1})]),e("div",L,[e("div",N,[e("img",{src:t.profile.photo,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"30px"}},null,8,M)]),s(o,{to:{name:"member"},class:"nav-link fs-6 azeret-mono fw-bold dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},{default:a(()=>[r("Member ")]),_:1}),e("ul",P,[R,e("li",null,[s(o,{to:{name:"member"},class:"dropdown-item py-2"},{default:a(()=>[r("修改個人資料")]),_:1})]),e("li",null,[e("a",{onClick:i[0]||(i[0]=(...g)=>t.signOut&&t.signOut(...g)),class:"dropdown-item py-2",href:"#"},"登出")])])])])])])}const W=c(x,[["render",S]]),U={mounted(){this.getProfile()},computed:{...d(n,["profile"])},methods:{...l(n,["getProfile"])}},V={class:"bg-white border border-2 border-black px-6 py-8"},j={class:"d-flex flex-column gap-6"},B={class:"d-flex align-items-center gap-4"},C={class:"rounded-circle overflow-hidden",style:{width:"50px",height:"50px"}},O=["src"],z={class:"noto-sans-tc fw-bold"},D=v('<div class="d-flex align-items-center gap-4"><div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width:50px;height:50px;"><i class="bi bi-bell-fill fs-5 position-absolute top-50 start-50 translate-middle"></i></div><span class="noto-sans-tc fw-bold">追蹤名單</span></div><div class="d-flex align-items-center gap-4"><div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width:50px;height:50px;"><i class="bi bi-hand-thumbs-up-fill fs-5 position-absolute top-50 start-50 translate-middle"></i></div><span class="noto-sans-tc fw-bold">我按讚的文章</span></div>',2);function A(t,i,f,h,u,_){const o=p("RouterLink");return b(),m("div",V,[s(o,{to:{name:"new-post"},class:"btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6"},{default:a(()=>[r("張貼動態 ")]),_:1}),e("div",j,[e("div",B,[e("div",C,[e("img",{src:t.profile.photo,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"50px"}},null,8,O)]),e("span",z,w(t.profile.name),1)]),D])])}const q=c(U,[["render",A]]);export{W as U,q as a};
