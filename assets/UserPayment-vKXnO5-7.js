import{_ as m,e as f,m as p,r as d,o as h,c as b,b as l,a as o,f as a,g as n,F as u}from"./index-no50AfHN.js";import{U as I}from"./UserNavbar-YQPruEK_.js";import{U as v}from"./UserDashboard-LiE5T7i2.js";import{u as c}from"./userUsersStore-1bpRvRt7.js";import"./user_default-gs4whxCm.js";import"./swalToasts-f1hxmI6k.js";var U={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:w}=U,T={components:{UserNavbar:I,UserDashboard:v},data(){return{tempOrderId:"",tradeInfo:{MerchantID:"",TradeInfo:"",TradeSha:"",Version:""}}},mounted(){const{id:r}=this.$route.params;this.tempOrderId=r,this.getProfile(),this.getOrder()},computed:{...f(c,["profile"])},methods:{...p(c,["getProfile"]),async getOrder(){const r=`${w}/orders/${this.tempOrderId}`;try{const e=await this.axios.get(r);this.tradeInfo=e.data.data,console.log("trade",this.tradeInfo)}catch(e){console.log(e)}}}},y={class:"container py-12"},V={class:"row"},g={class:"col-8"},S=o("div",{class:"row"},[o("div",{class:"col shadow-new-post"},[o("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 我的付款 ")])],-1),x={class:"row gy-4"},D={class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6"},P={class:"p-4"},O=o("span",null,"步驟二、填寫付款方式",-1),E=["action"],k=o("small",null,"發出藍新API請求",-1),A=o("div",{class:"mb-3"},[o("label",{for:"MerchantID",class:"form-label fs-6 noto-sans-tc"},"MerchantID"),o("input",{type:"text",class:"form-control",value:"MS153021540"})],-1),M={class:"mb-3"},L=o("label",{for:"TradeInfo",class:"form-label fs-6 noto-sans-tc"},"TradeInfo",-1),N={class:"mb-3"},R=o("label",{for:"TradeSha",class:"form-label fs-6 noto-sans-tc"},"TradeSha",-1),B={class:"mb-3"},z=o("label",{for:"Version",class:"form-label fs-6 noto-sans-tc"},"Version",-1),C=o("button",{type:"submit",class:"btn btn-primary"},"立即付款",-1),F={class:"col-4"};function G(r,e,H,W,s,j){const i=d("UserNavbar"),_=d("UserDashboard");return h(),b(u,null,[l(i),o("div",y,[o("div",V,[o("div",g,[S,o("div",x,[o("div",D,[o("div",P,[O,o("form",{action:s.tradeInfo.PayGateWay,method:"post"},[k,A,o("div",M,[L,a(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.tradeInfo.TradeInfo=t),type:"text",class:"form-control"},null,512),[[n,s.tradeInfo.TradeInfo]])]),o("div",N,[R,a(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.tradeInfo.TradeSha=t),type:"text",class:"form-control"},null,512),[[n,s.tradeInfo.TradeSha]])]),o("div",B,[z,a(o("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.tradeInfo.Version=t),type:"text",class:"form-control"},null,512),[[n,s.tradeInfo.Version]])]),C],8,E)])])])]),o("div",F,[l(_)])])])],64)}const Z=m(T,[["render",G]]);export{Z as default};