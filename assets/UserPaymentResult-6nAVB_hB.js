import{_ as c,e as i,m as l,r as t,o as p,c as m,b as s,a as r,F as _,l as h}from"./index-0m3G1nS1.js";import{U as f}from"./UserNavbar-vUrch-jk.js";import{U as v}from"./UserDashboard-mZ0zsaaA.js";import{u as a}from"./userUsersStore-lQxFVz3_.js";import"./user_default-gs4whxCm.js";import"./swalToasts-hGP_YUPF.js";var b={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:u}=b,w={components:{UserNavbar:f,UserDashboard:v},data(){return{tempOrderId:"",tradeInfo:{MerchantID:"",TradeInfo:"",TradeSha:"",Version:""}}},mounted(){const e=this.$route.query.order;console.log("id",e),this.tempOrderId=e,this.getProfile(),this.getOrder()},computed:{...i(a,["profile"])},methods:{...l(a,["getProfile"]),async getOrder(){const e=`${u}/orders/${this.tempOrderId}`;try{const o=await this.axios.get(e);this.tradeInfo=o.data.data,console.log("trade",this.tradeInfo)}catch(o){console.log(o)}}}},U={class:"container py-12"},g={class:"row"},I=h('<div class="col-8"><div class="row"><div class="col shadow-new-post"><div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"> 我的付款 </div></div></div><div class="row gy-4"><div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6"><div class="p-4"><span>付款成功</span></div></div></div></div>',1),O={class:"col-4"};function P(e,o,S,V,y,D){const d=t("UserNavbar"),n=t("UserDashboard");return p(),m(_,null,[s(d),r("div",U,[r("div",g,[I,r("div",O,[s(n)])])])],64)}const x=c(w,[["render",P]]);export{x as default};
