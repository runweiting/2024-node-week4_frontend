import{_ as l,g as m,m as b,r as e,o as p,c as _,b as t,a as o,w as r,F as h,d as a}from"./index-FqV4R4ta.js";import{u as n}from"./userUsersStore-1l4Bxd-c.js";import{U as f,a as u}from"./UserDashboard-PPIVHHwE.js";import"./showErrorToast-FoPHxlsd.js";import"./showSuccessToast-1UXxclKR.js";const v={components:{UserNavbar:f,UserDashboard:u},mounted(){this.getProfile()},computed:{...m(n,["profile"])},methods:{...b(n,["getProfile"])}},w={class:"container py-12",style:{height:"100dvh"}},g={class:"row"},x={class:"col-8"},U=o("div",{class:"row"},[o("div",{class:"col shadow-new-post"},[o("div",{class:"rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center"}," 修改個人資料 ")])],-1),k={class:"row"},y={class:"col ps-5"},N={class:"col-4"};function V(R,$,B,D,C,F){const i=e("UserNavbar"),s=e("RouterLink"),d=e("RouterView"),c=e("UserDashboard");return p(),_(h,null,[t(i),o("div",w,[o("div",g,[o("div",x,[U,o("div",k,[o("div",y,[t(s,{to:{name:"profile"},class:"btn btn-white hvr-btn-profile mb-n1 noto-sans-tc",style:{border:"2px solid black","border-bottom-right-radius":"0 !important","border-bottom-left-radius":"0 !important"}},{default:r(()=>[a("我的匿稱")]),_:1}),t(s,{to:{name:"name"},class:"btn btn-white hvr-btn-profile mb-n1 noto-sans-tc",style:{border:"2px solid black","border-bottom-right-radius":"0 !important","border-bottom-left-radius":"0 !important"}},{default:r(()=>[a("修改匿稱")]),_:1}),t(s,{to:{name:"password"},class:"btn btn-white hvr-btn-profile mb-n1 ms-n1 noto-sans-tc",style:{border:"2px solid black","border-bottom-right-radius":"0 !important","border-bottom-left-radius":"0 !important"}},{default:r(()=>[a("重設密碼")]),_:1})])]),t(d)]),o("div",N,[t(c)])])])],64)}const E=l(v,[["render",V]]);export{E as default};
