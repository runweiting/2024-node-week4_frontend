import{_ as b,e as f,m as u,r as i,o as h,c as v,b as l,a as e,y as w,f as n,g as d,F as U}from"./index-oG64J94S.js";import{U as y}from"./UserNavbar-3rf_W4Vv.js";import{U as D}from"./UserDashboard-OG8OKt9R.js";import{u as c}from"./userUsersStore-LKximPzI.js";import"./user_default-gs4whxCm.js";import"./swalToasts-d1kHsXkq.js";var g={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:E}=g,V={components:{UserNavbar:y,UserDashboard:D},data(){return{order:{userId:"",email:"whatisfuntime@gmail.com",amt:1,itemDesc:"全年訂閱費用 $999元"}}},mounted(){this.getProfile()},computed:{...f(c,["profile"])},methods:{...u(c,["getProfile"]),async createOrder(a){this.order.userId=a,console.log("userId",a);const o=`${E}/orders`;try{const r=await this.axios.post(o,this.order);this.$refs.orderForm.reset(),this.$router.push({name:"payment",params:{id:r.data.data}}),console.log(r)}catch(r){console.log(r)}}}},k={class:"container py-12"},O={class:"row"},P={class:"col-8"},S=e("div",{class:"row"},[e("div",{class:"col shadow-new-post"},[e("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 我的付款 ")])],-1),x={class:"row gy-4"},A={class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6"},I={class:"p-4"},L=e("span",null,"步驟一、選擇預購方案",-1),N={class:"mb-3"},R=e("label",{for:"Email",class:"form-label fs-6 noto-sans-tc"},"Email",-1),T={class:"mb-3"},B=e("label",{for:"Amt",class:"form-label fs-6 noto-sans-tc"},"商品數量",-1),F={class:"mb-3"},M=e("label",{for:"ItemDesc",class:"form-check-label fs-6 noto-sans-tc"},"商品描述",-1),z=e("button",{type:"submit",class:"btn btn-primary"},"確認方案",-1),C={class:"col-4"};function $(a,o,r,H,s,m){const _=i("UserNavbar"),p=i("UserDashboard");return h(),v(U,null,[l(_),e("div",k,[e("div",O,[e("div",P,[S,e("div",x,[e("div",A,[e("div",I,[L,e("form",{ref:"orderForm",onSubmit:o[3]||(o[3]=w(t=>m.createOrder(a.profile._id),["prevent"]))},[e("div",N,[R,n(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.order.email=t),type:"email",class:"form-control","aria-describedby":"email"},null,512),[[d,s.order.email]])]),e("div",T,[B,n(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.order.amt=t),type:"number",class:"form-control","aria-describedby":"amt"},null,512),[[d,s.order.amt]])]),e("div",F,[M,n(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.order.itemDesc=t),type:"text",class:"form-control","aria-describedby":"itemDesc"},null,512),[[d,s.order.itemDesc]])]),z],544)])])])]),e("div",C,[l(p)])])])],64)}const W=b(V,[["render",$]]);export{W as default};
