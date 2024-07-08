import{_,E as f,m as w,i as m,r as a,o as g,c as k,a as e,b as s,w as c,e as v,n as b,d as x}from"./index-_W54mxzm.js";import{u as V}from"./userUsersStore-QOHeHN1G.js";import{i as y,_ as S}from"./signin-vxif2IxZ.js";import"./swalToasts-YyeuVwFm.js";const F={components:{ErrorMessage:f},data(){return{email:"",password:""}},mounted(){this.checkToken()},methods:{isPassword:y,...w(V,["signIn"]),checkToken(){m()&&this.$router.push({name:"metawall"})},async handleSubmit(){await this.$refs.signIn.validate()&&(m()&&this.$router.push({name:"metawall"}),this.email&&this.password&&(this.signIn(this.email,this.password),this.$refs.signIn.resetForm()))},onSubmit(){}}},I={class:"container mt-24 px-12 py-17 border border-black border-2 bg-light shadow-sign-in"},M={class:"row"},E=e("div",{class:"col"},[e("div",{class:"d-flex align-items-center h-100"},[e("img",{src:S,alt:"sign-in-image",class:"object-fit-cover img-fluid",style:{height:"340px"}})])],-1),U=e("h1",{class:"text-primary display-3"},"MetaWall",-1),z=e("h4",{class:"helvetica-neue fw-bold mb-9"},"到元宇宙展開全新社交圈",-1),B={class:"form-floating mb-4"},C=e("label",{for:"email",class:"form-label"},"email",-1),N={class:"form-floating mb-8"},P=e("label",{for:"password",class:"form-label"},"password",-1),T={class:"d-flex gap-2 mb-2"},L=e("button",{type:"submit",class:"btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100",style:{"border-bottom":"4px solid black !important"}}," 登入 ",-1),R=e("a",{href:"https://two024-node-week4.onrender.com/users/google",class:"btn border border-2 border-black azeret-mono fw-bold w-100 hvr-btn-signin-google",style:{"border-bottom":"4px solid black !important"}},"Google 登入",-1);function $(p,o,j,q,r,i){const l=a("VField"),n=a("ErrorMessage"),u=a("RouterLink"),h=a("VForm");return g(),k("div",I,[e("div",M,[E,s(h,{ref:"signIn",onSubmit:v(i.handleSubmit,["prevent"]),class:"col text-center"},{default:c(({errors:d})=>[U,z,e("div",B,[s(l,{modelValue:r.email,"onUpdate:modelValue":o[0]||(o[0]=t=>r.email=t),modelModifiers:{trim:!0},rules:"required|email",class:b([{"is-invalid":d.email},"form-control rounded-0 border border-black border-2"]),name:"email",type:"email",placeholder:"Email","aria-label":"email","aria-describedby":"email"},null,8,["modelValue","class"]),C,s(n,{name:"email",class:"invalid-feedback"})]),e("div",N,[s(l,{modelValue:r.password,"onUpdate:modelValue":o[1]||(o[1]=t=>r.password=t),modelModifiers:{trim:!0},rules:i.isPassword,class:b([{"is-invalid":d.password},"form-control rounded-0 border border-black border-2"]),name:"password",type:"password",placeholder:"Password","aria-label":"password","aria-describedby":"password"},null,8,["modelValue","rules","class"]),P,s(n,{name:"password",class:"invalid-feedback"})]),e("div",T,[s(u,{to:{name:"sign-up"},class:"btn border border-2 border-black azeret-mono fw-bold w-100 hvr-btn-signin",style:{"border-bottom":"4px solid black !important"}},{default:c(()=>[x(" 註冊帳號 ")]),_:1}),L]),R]),_:1},8,["onSubmit"])])])}const H=_(F,[["render",$]]);export{H as default};
