import{_ as a,h as c,m as d,o as t,c as s,a as e,t as r}from"./index-IyDy3JUD.js";import{u as i}from"./userUsersStore-HR4xVEjj.js";import"./swalToasts-cbjLxQjF.js";const l="/2024-node-week4_frontend/assets/user_default@2x-PO-SErlu.png",n={mounted(){this.getProfile()},computed:{...c(i,["profile"])},methods:{...d(i,["getProfile"])}},p={class:"row"},h={class:"col"},m={class:"bg-white rounded border border-2 border-black px-24 py-8",style:{"border-bottom":"4px solid black !important"}},_={key:0,class:"rounded-circle overflow-hidden mx-auto mb-4",style:{width:"107px",height:"107px"}},f=e("img",{src:l,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"107px"}},null,-1),u=[f],b={key:1,class:"rounded-circle overflow-hidden mx-auto mb-4",style:{width:"107px",height:"107px"}},g=["src"],v={class:"noto-sans-tc text-center"},x={class:"fw-bold"};function k(o,y,w,P,S,$){return t(),s("div",p,[e("div",h,[e("div",m,[o.profile.photo?(t(),s("div",b,[e("img",{src:o.profile.photo,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"107px"}},null,8,g)])):(t(),s("div",_,u)),e("div",v,[e("p",x,r(o.profile.name),1),e("p",null,"身分："+r(o.profile.role),1)])])])])}const U=a(n,[["render",k]]);export{U as default};