import{_ as b,e as f,m as h,r as n,o as u,c as v,b as d,a as e,y as w,f as c,g as i,F as U}from"./index-_0YUX0MS.js";import{U as y}from"./UserNavbar-Q4k8hyJR.js";import{U as D}from"./UserDashboard-XWduiXvN.js";import{u as l}from"./userUsersStore-L1BpnQZL.js";import"./user_default-gs4whxCm.js";import"./swalToasts-4Vx5kWOE.js";var g={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:O}=g,P={components:{UserNavbar:y,UserDashboard:D},data(){return{order:{userId:"",amt:"",itemDesc:"全年訂閱費用999元"}}},mounted(){this.getProfile()},computed:{...f(l,["profile"])},methods:{...h(l,["getProfile"]),async createOrder(a){this.order.userId=a;const o=`${O}/orders`;try{const s=await this.axios.post(o,this.order);this.$refs.orderForm.reset(),console.log(s)}catch(s){console.log(s)}}}},S={class:"container py-12"},V={class:"row"},k={class:"col-8"},E=e("div",{class:"row"},[e("div",{class:"col shadow-new-post"},[e("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 我的付款 ")])],-1),x={class:"row gy-4"},A={class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6"},I={class:"p-4"},T=e("span",null,"步驟一、選擇預購方案",-1),L={class:"mb-3"},N=e("label",{for:"Amt",class:"form-label fs-6 noto-sans-tc"},"商品數量",-1),R={class:"mb-3"},B=e("label",{for:"ItemDesc",class:"form-check-label fs-6 noto-sans-tc"},"商品描述",-1),F=e("button",{type:"submit",class:"btn btn-primary"},"確認方案",-1),M={class:"col-4"};function z(a,o,s,C,t,m){const _=n("UserNavbar"),p=n("UserDashboard");return u(),v(U,null,[d(_),e("div",S,[e("div",V,[e("div",k,[E,e("div",x,[e("div",A,[e("div",I,[T,e("form",{ref:"orderForm",method:"POST",onSubmit:o[2]||(o[2]=w(r=>m.createOrder(a.profile._id),["prevent"]))},[e("div",L,[N,c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t.order.amt=r),type:"number",class:"form-control","aria-describedby":"amt"},null,512),[[i,t.order.amt]])]),e("div",R,[B,c(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>t.order.itemDesc=r),type:"text",class:"form-control"},null,512),[[i,t.order.itemDesc]])]),F],544)])])])]),e("div",M,[d(p)])])])],64)}const K=b(P,[["render",z]]);export{K as default};
