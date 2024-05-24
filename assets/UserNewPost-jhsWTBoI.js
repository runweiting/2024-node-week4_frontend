import{_ as v,e as k,m as w,r as d,o as a,c as n,b as m,a as e,f as c,g as b,F as p,i as x,l as U,t as y}from"./index-N8YjbnoK.js";import{u as h}from"./userPostsStore-SDaSutub.js";import{s as i}from"./showErrorToast-nU09zD8p.js";import{U as P}from"./UserNavbar-_IUHr9cT.js";import{U as T}from"./UserDashboard-StdRXZBm.js";import"./userUsersStore-UR0S3QqP.js";import"./user_default-gs4whxCm.js";const C={components:{UserNavbar:P,UserDashboard:T},data(){return{content:"",image:"",tags:["音樂","運動","美食","旅遊","其他"],selectedTags:[]}},watch:{selectedTags(r){r.length>3&&this.selectedTags.pop()}},computed:{...k(h,["newPost"])},methods:{...w(h,["createPost","getPosts"]),handleCreatePost(r,s,l){if(!r){i("貼文內容為必填");return}if(!s.startsWith("http")){i("圖片網址錯誤");return}if(l.length===0){i("貼文標籤為必填");return}this.createPost(r,s,l),this.tempContent="",this.tempImage="",this.tags.length=0,this.$router.push({name:"metawall"})}}},N={class:"container py-12",style:{height:"100dvh"}},D={class:"row"},V={class:"col-8"},S=e("div",{class:"row"},[e("div",{class:"col shadow-new-post"},[e("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 張貼動態 ")])],-1),B={class:"row"},F={class:"col"},I={class:"bg-white rounded border border-2 border-black p-8",style:{"border-bottom":"4px solid black !important"}},M={class:"d-flex flex-column gap-1 mb-4"},j=e("span",null,"貼文內容",-1),z={class:"d-flex flex-column gap-1 mb-4"},A=e("span",null,"圖片網址",-1),E={class:"mb-4"},L=["src"],W={class:"mb-4"},q=e("span",{class:"d-block"},"貼文標籤",-1),G=["id","value"],H=["for"],J={class:"col-4"};function K(r,s,l,O,o,u){const _=d("UserNavbar"),f=d("UserDashboard");return a(),n(p,null,[m(_),e("div",N,[e("div",D,[e("div",V,[S,e("div",B,[e("div",F,[e("div",I,[e("div",M,[j,c(e("textarea",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.content=t),class:"form-control rounded-0 border border-black border-2",placeholder:"請輸入內容","aria-label":"post-content"},null,512),[[b,o.content]])]),e("div",z,[A,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>o.image=t),type:"text",class:"form-control rounded-0 border border-black border-2",placeholder:"請輸入網址","aria-label":"imageUrl","aria-describedby":"imageUrl"},null,512),[[b,o.image]])]),e("div",E,[e("img",{src:o.image,alt:"tempImage",class:"object-fit-cover img-fluid"},null,8,L)]),e("div",W,[q,(a(!0),n(p,null,x(o.tags,t=>(a(),n("div",{key:t,class:"form-check form-check-inline"},[c(e("input",{"onUpdate:modelValue":s[2]||(s[2]=g=>o.selectedTags=g),class:"form-check-input",type:"checkbox",id:t,value:t},null,8,G),[[U,o.selectedTags]]),e("label",{class:"form-check-label",for:t},y(t),9,H)]))),128))]),e("button",{onClick:s[3]||(s[3]=t=>u.handleCreatePost(this.content,this.image,this.selectedTags)),type:"button",class:"btn btn-light-gray py-4 border border-2 border-black w-50"},"送出貼文")])])])]),e("div",J,[m(f)])])])],64)}const se=v(C,[["render",K]]);export{se as default};
