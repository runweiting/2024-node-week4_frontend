import{_ as m,h as p,m as f,o as s,c as i,a as e,i as d,j as u,q as a}from"./index-4sHf3l6z.js";import{u as n}from"./userUsersStore-RZEYF_5w.js";import{e as b}from"./swalToasts-aNV-8xkx.js";import{_ as h}from"./user_default-gs4whxCm.js";const _={data(){return{tempProfile:{name:"",photo:"",gender:""}}},created(){this.tempProfile={...this.profile}},watch:{profile:{deep:!0,handler(l){this.tempProfile=l}}},mounted(){this.getProfile()},computed:{...p(n,["profile","photoUrl"])},methods:{...f(n,["getProfile","updateProfile","uploadFile"]),handleUpdateProfile(l,o){return!l||!o?b("匿稱和性別為必填"):(this.updateProfile(l,o),null)}}},k={class:"row"},v={class:"col"},g={class:"bg-white rounded border border-2 border-black px-24 py-8",style:{"border-bottom":"4px solid black !important"}},P={key:0,class:"rounded-circle overflow-hidden mx-auto mb-4",style:{width:"107px",height:"107px"}},x=e("img",{src:h,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid"},null,-1),y=[x],w={key:1,class:"rounded-circle overflow-hidden mx-auto mb-4",style:{width:"107px",height:"107px"}},U=["src"],F={class:"input-group text-center mb-8"},V=e("input",{type:"file",class:"form-control",id:"formFile","aria-describedby":"formFile","aria-label":"formFile"},null,-1),j={class:"d-flex flex-column gap-1 mb-4"},B=e("span",null,"匿稱",-1),C={class:"mb-8"},M=e("span",{class:"d-block mb-2"},"性別",-1),N={class:"d-flex gap-6"},S={class:"form-check"},T=e("label",{for:"male",class:"form-check-label"}," 男性 ",-1),q={class:"form-check"},A=e("label",{for:"female",class:"form-check-label"}," 女性 ",-1);function D(l,o,E,R,t,c){return s(),i("div",k,[e("div",v,[e("div",g,[l.profile.photo?(s(),i("div",w,[e("img",{src:t.tempProfile.photo,alt:"customer-feedback-avatar-man",class:"object-fit-cover img-fluid",style:{height:"107px"}},null,8,U)])):(s(),i("div",P,y)),e("div",F,[V,e("button",{onClick:o[0]||(o[0]=(...r)=>l.uploadFile&&l.uploadFile(...r)),type:"button",class:"btn btn-dark",id:"formFile"},"上傳大頭照")]),e("div",j,[B,d(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>t.tempProfile.name=r),class:"form-control rounded-0 border border-black border-2",placeholder:"請輸入匿稱","aria-label":"nickname"},null,512),[[u,t.tempProfile.name]])]),e("div",C,[M,e("div",N,[e("div",S,[d(e("input",{id:"male",name:"性別",value:"male","onUpdate:modelValue":o[2]||(o[2]=r=>t.tempProfile.gender=r),class:"form-check-input",type:"radio",checked:""},null,512),[[a,t.tempProfile.gender]]),T]),e("div",q,[d(e("input",{id:"female",name:"性別",value:"female","onUpdate:modelValue":o[3]||(o[3]=r=>t.tempProfile.gender=r),class:"form-check-input",type:"radio"},null,512),[[a,t.tempProfile.gender]]),A])])]),e("button",{onClick:o[4]||(o[4]=r=>c.handleUpdateProfile(t.tempProfile.name,t.tempProfile.gender)),type:"button",class:"btn btn-warning py-4 border border-2 border-black w-100",style:{"border-bottom":"4px solid black !important"}},"送出更新")])])])}const J=m(_,[["render",D]]);export{J as default};
