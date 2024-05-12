import{S as c,_ as h,E as g,m as v,r as n,o as V,c as P,a as e,b as o,w as u,n as d,d as k}from"./index-qouUdehN.js";import{i as x,_ as y}from"./signin-vxif2IxZ.js";import{u as U}from"./userUsersStore-Tt8ZgfRO.js";import"./showSuccessToast-dIU71-nX.js";function E(b){return new Promise(s=>{c.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:m=>{m.addEventListener("mouseenter",c.stopTimer),m.addEventListener("mouseleave",c.resumeTimer)}}).fire({icon:"warning",title:b}).then(()=>{s()})})}const M={components:{ErrorMessage:g},data(){return{name:"",email:"",password:"",confirmPassword:""}},methods:{isPassword:x,...v(U,["signUp"]),onSubmit(){if(this.password!==this.confirmPassword){E("密碼不一致");return}this.signUp(this.name,this.email,this.password,this.confirmPassword),this.$refs.signUp.resetForm(),this.$router.push({name:"sign-in"})}}},S={class:"shadow-sign-in"},T={class:"container mt-24 px-12 py-17 border border-black border-2 bg-light"},B={class:"row"},F=e("div",{class:"col"},[e("img",{src:y,alt:"sign-in-image",class:"object-fit-cover img-fluid",style:{height:"340px"}})],-1),C=e("h1",{class:"text-primary display-3"},"MetaWall",-1),L=e("h4",{class:"helvetica-neue fw-bold mb-9"},"註冊",-1),q={class:"form-floating mb-4"},z=e("label",{for:"匿稱",class:"form-label"},"匿稱",-1),N={class:"form-floating mb-4"},R=e("label",{for:"email",class:"form-label"},"email",-1),W={class:"form-floating mb-4"},j=e("label",{for:"password",class:"form-label"},"password",-1),A={class:"form-floating mb-4"},O=e("label",{for:"confirmPassword",class:"form-label"},"confirmPassword",-1),D=e("button",{type:"submit",class:"btn btn-gray border border-2 border-black text-white azeret-mono fw-bold w-100 mb-4",style:{"border-bottom":"4px solid black !important"}}," 註冊 ",-1);function G(b,s,p,m,r,f){const i=n("VField"),l=n("ErrorMessage"),_=n("RouterLink"),w=n("VForm");return V(),P("div",S,[e("div",T,[e("div",B,[F,o(w,{ref:"signUp",onSubmit:f.onSubmit,class:"col text-center"},{default:u(({errors:t})=>[C,L,e("div",q,[o(i,{modelValue:r.name,"onUpdate:modelValue":s[0]||(s[0]=a=>r.name=a),modelModifiers:{trim:!0},rules:"required|min:2",class:d([{"is-invalid":t.匿稱},"form-control rounded-0 border border-black border-2"]),name:"匿稱",type:"text",placeholder:"匿稱","aria-label":"nickname","aria-describedby":"nickname"},null,8,["modelValue","class"]),z,o(l,{name:"匿稱",class:"invalid-feedback"})]),e("div",N,[o(i,{modelValue:r.email,"onUpdate:modelValue":s[1]||(s[1]=a=>r.email=a),modelModifiers:{trim:!0},rules:"required|email",class:d([{"is-invalid":t.email},"form-control rounded-0 border border-black border-2"]),name:"email",type:"text",placeholder:"Email","aria-label":"email","aria-describedby":"email"},null,8,["modelValue","class"]),R,o(l,{name:"email",class:"invalid-feedback"})]),e("div",W,[o(i,{modelValue:r.password,"onUpdate:modelValue":s[2]||(s[2]=a=>r.password=a),modelModifiers:{trim:!0},rules:f.isPassword,class:d([{"is-invalid":t.password},"form-control rounded-0 border border-black border-2"]),name:"password",type:"text",placeholder:"Password","aria-label":"password","aria-describedby":"password"},null,8,["modelValue","rules","class"]),j,o(l,{name:"password",class:"invalid-feedback"})]),e("div",A,[o(i,{modelValue:r.confirmPassword,"onUpdate:modelValue":s[3]||(s[3]=a=>r.confirmPassword=a),modelModifiers:{trim:!0},rules:"required",class:d([{"is-invalid":t.confirmPassword},"form-control rounded-0 border border-black border-2"]),name:"confirmPassword",type:"text",placeholder:"confirmPassword","aria-label":"confirmPassword","aria-describedby":"confirmPassword"},null,8,["modelValue","class"]),O,o(l,{name:"confirmPassword",class:"invalid-feedback"})]),D,o(_,{to:{name:"sign-in"},class:"btn azeret-mono fw-bold w-100 hvr-btn-signup"},{default:u(()=>[k(" 登入 ")]),_:1})]),_:1},8,["onSubmit"])])])])}const Q=h(M,[["render",G]]);export{Q as default};
