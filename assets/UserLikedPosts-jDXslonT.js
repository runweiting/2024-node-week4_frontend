import{_ as u,e as f,m as k,r as d,o,c as r,b as n,a as t,F as c,j as v,t as i,k as g,h as w}from"./index-KKaFkjlm.js";import{u as l}from"./userUsersStore-Ldjne8Fa.js";import{U as y}from"./UserNavbar-TvVTmoAn.js";import{U as x}from"./UserDashboard-N5PQ8xie.js";import{f as U}from"./formatCreatedAt-CTMo6T3e.js";import{t as L}from"./timestampToDate-lwWXufjj.js";import"./swalToasts-VAfFj8IW.js";import"./user_default-gs4whxCm.js";const C={components:{UserNavbar:y,UserDashboard:x},data(){return{currentPostId:""}},mounted(){this.getLikedPosts()},computed:{...f(l,["likedPosts"])},methods:{...k(l,["getLikedPosts","deleteLikedPost"]),async handleDeleteLikedPost(s){await this.deleteLikedPost(s),this.getLikedPosts()},handleGoToPost(s){this.currentPostId=s,this.$router.push({name:"liked-post",params:{id:s}})},formatCreatedAt:U,timestampToDate:L}},D={class:"container py-12"},P={class:"row"},N={class:"col-8"},A=t("div",{class:"row"},[t("div",{class:"col shadow-new-post"},[t("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 我按讚的貼文 ")])],-1),V={key:0,class:"row gy-4"},B=t("div",{class:"col-12"},[t("div",{class:"bg-white rounded border border-2 border-black p-4 text-center",style:{"border-bottom":"4px solid black !important"}},[t("p",{class:"text-gray mb-0"},"目前尚無按讚貼文，新增一則貼文吧！")])],-1),T=[B],$={key:1,class:"row gy-3"},j={class:"d-flex gap-2 bg-white rounded border border-2 border-black p-4 mb-2",style:{"border-bottom":"4px solid black !important"}},S={class:"rounded-circle overflow-hidden",style:{width:"45px",height:"45px"}},F=["src","alt"],G={class:"d-flex flex-column justify-content-between text-start"},I={class:"noto-sans-tc text-primary fw-bold"},R={class:"baloo-da-2 text-gray"},z={class:"mt-auto ms-auto"},E=["onClick"],q=t("i",{class:"bi bi-hand-thumbs-up-fill me-2"},null,-1),H=t("small",null,"取消按讚",-1),J=[q,H],K=["onClick"],M=t("i",{class:"bi bi-arrow-right-circle-fill me-2"},null,-1),O=t("small",null,"查看貼文",-1),Q=[M,O],W={class:"col-4"};function X(s,Y,Z,tt,m,a){const _=d("UserNavbar"),b=d("RouterView"),h=d("UserDashboard");return o(),r(c,null,[n(_),t("div",D,[t("div",P,[t("div",N,[A,s.likedPosts.length?(o(),r("div",$,[(o(!0),r(c,null,v(s.likedPosts,e=>(o(),r("div",{key:e.id,class:"col-12"},[t("div",j,[t("div",S,[t("img",{src:e.post.user.photo,alt:`user-photo-${e.post.user.name}`,class:"object-fit-cover img-fluid",style:{height:"45px"}},null,8,F)]),t("div",G,[t("span",I,i(e.post.user.name),1),t("small",R,"發文時間："+i(a.formatCreatedAt(e.post.createdAt).formattedDateAndTime),1)]),t("div",z,[t("button",{onClick:p=>a.handleDeleteLikedPost(e.id),type:"button",class:"btn btn-sm border border-2 border-black bg-white me-2"},J,8,E),t("button",{onClick:p=>a.handleGoToPost(e.post.id),type:"button",class:"btn btn-sm border border-2 border-black text-decoration-none bg-white"},Q,8,K)])]),m.currentPostId===e.post.id?(o(),g(b,{key:0})):w("",!0)]))),128))])):(o(),r("div",V,T))]),t("div",W,[n(h)])])])],64)}const it=u(C,[["render",X]]);export{it as default};
