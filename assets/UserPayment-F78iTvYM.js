import{_ as f,e as _,m as p,r as d,o as h,c as b,b as l,a as o,f as n,g as a,F as u}from"./index-dRiyQFw2.js";import{U as I}from"./UserNavbar-L90ncTIV.js";import{U as v}from"./UserDashboard-aUIPsMAQ.js";import{u as c}from"./userUsersStore-eJ75WOhd.js";import"./user_default-gs4whxCm.js";import"./swalToasts-buKXWw0n.js";var y={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:T}=y,U={components:{UserNavbar:I,UserDashboard:v},data(){return{tempOrderId:"",tradeInfo:{PayGateWay:"",MerchantID:"",TradeInfo:"",TradeSha:"",Version:""}}},mounted(){const r=this.$route.query.order;console.log("id",r),this.tempOrderId=r,this.getProfile(),this.getOrder()},computed:{..._(c,["profile"])},methods:{...p(c,["getProfile"]),async getOrder(){const r=`${T}/orders/${this.tempOrderId}`;try{const e=await this.axios.get(r);this.tradeInfo=e.data.data,console.log("trade",this.tradeInfo)}catch(e){console.log(e)}}}},V={class:"container py-12"},w={class:"row"},g={class:"col-8"},D=o("div",{class:"row"},[o("div",{class:"col shadow-new-post"},[o("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 我的付款 ")])],-1),S={class:"row gy-4"},P={class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6"},x={class:"p-4"},O=o("span",null,"步驟二、填寫付款方式",-1),M=["action"],E=o("small",null,"發出藍新API請求",-1),k={class:"mb-3"},A=o("label",{for:"MerchantID",class:"form-label fs-6 noto-sans-tc"},"MerchantID",-1),L={class:"mb-3"},N=o("label",{for:"TradeInfo",class:"form-label fs-6 noto-sans-tc"},"TradeInfo",-1),R={class:"mb-3"},B=o("label",{for:"TradeSha",class:"form-label fs-6 noto-sans-tc"},"TradeSha",-1),z={class:"mb-3"},C=o("label",{for:"Version",class:"form-label fs-6 noto-sans-tc"},"Version",-1),F=o("button",{type:"submit",class:"btn btn-primary"},"立即付款",-1),G={class:"col-4"};function W(r,e,q,H,t,j){const i=d("UserNavbar"),m=d("UserDashboard");return h(),b(u,null,[l(i),o("div",V,[o("div",w,[o("div",g,[D,o("div",S,[o("div",P,[o("div",x,[O,o("form",{action:t.tradeInfo.PayGateWay,method:"post"},[E,o("div",k,[A,n(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.tradeInfo.MerchantID=s),type:"text",class:"form-control",name:"MerchantID"},null,512),[[a,t.tradeInfo.MerchantID]])]),o("div",L,[N,n(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.tradeInfo.TradeInfo=s),type:"text",class:"form-control",name:"TradeInfo"},null,512),[[a,t.tradeInfo.TradeInfo]])]),o("div",R,[B,n(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.tradeInfo.TradeSha=s),type:"text",class:"form-control",name:"TradeSha"},null,512),[[a,t.tradeInfo.TradeSha]])]),o("div",z,[C,n(o("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>t.tradeInfo.Version=s),type:"text",class:"form-control",name:"Version"},null,512),[[a,t.tradeInfo.Version]])]),F],8,M)])])])]),o("div",G,[l(m)])])])],64)}const $=f(U,[["render",W]]);export{$ as default};
