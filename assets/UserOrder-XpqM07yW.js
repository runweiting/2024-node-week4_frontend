import{_ as b,e as f,m as u,r as n,o as h,c as v,b as d,a as e,y as w,f as c,g as i,F as U}from"./index-dRiyQFw2.js";import{U as y}from"./UserNavbar-L90ncTIV.js";import{U as D}from"./UserDashboard-aUIPsMAQ.js";import{u as l}from"./userUsersStore-eJ75WOhd.js";import"./user_default-gs4whxCm.js";import"./swalToasts-buKXWw0n.js";var g={VITE_APP_URL:"https://two024-node-week4.onrender.com",VITE_LOCALHOST:"http://localhost:3010",BASE_URL:"/2024-node-week4_frontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:V}=g,k={components:{UserNavbar:y,UserDashboard:D},data(){return{order:{userId:"",amt:1,itemDesc:"全年訂閱費用 $999元"}}},mounted(){this.getProfile()},computed:{...f(l,["profile"])},methods:{...u(l,["getProfile"]),async createOrder(a){this.order.userId=a;const o=`${V}/orders`;try{const s=await this.axios.post(o,this.order);console.log(s),this.$refs.orderForm.reset(),this.$router.push({name:"payment",query:{order:s.data.data}})}catch(s){console.log(s)}}}},E={class:"container py-12"},O={class:"row"},P={class:"col-8"},S=e("div",{class:"row"},[e("div",{class:"col shadow-new-post"},[e("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 我的付款 ")])],-1),x={class:"row gy-4"},A={class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6"},I={class:"p-4"},L=e("span",null,"步驟一、選擇預購方案",-1),N={class:"mb-3"},R=e("label",{for:"Amt",class:"form-label fs-6 noto-sans-tc"},"商品數量",-1),T={class:"mb-3"},B=e("label",{for:"ItemDesc",class:"form-check-label fs-6 noto-sans-tc"},"商品描述",-1),F=e("button",{type:"submit",class:"btn btn-primary"},"確認方案",-1),$={class:"col-4"};function M(a,o,s,z,r,m){const _=n("UserNavbar"),p=n("UserDashboard");return h(),v(U,null,[d(_),e("div",E,[e("div",O,[e("div",P,[S,e("div",x,[e("div",A,[e("div",I,[L,e("form",{ref:"orderForm",onSubmit:o[2]||(o[2]=w(t=>m.createOrder(a.profile._id),["prevent"]))},[e("div",N,[R,c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>r.order.amt=t),type:"number",class:"form-control","aria-describedby":"amt"},null,512),[[i,r.order.amt]])]),e("div",T,[B,c(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>r.order.itemDesc=t),type:"text",class:"form-control","aria-describedby":"itemDesc"},null,512),[[i,r.order.itemDesc]])]),F],544)])])])]),e("div",$,[d(p)])])])],64)}const K=b(k,[["render",M]]);export{K as default};