import{_ as c,z as s,x as i,o as l,c as u,a as m}from"./index-0M_5po-7.js";import{e as t}from"./swalToasts-vJrmRZCW.js";const h={async mounted(){try{const e=this.getQueryParams();if(!e){t("無效的 Callback URL！"),s.push({name:"sign-in"});return}const{token:a,expires:r,source:n,order:o}=e;if(!a||!r||!n||!o){t("您尚未登入！"),s.push({name:"sign-in"});return}document.cookie=`myToken=${a}; expires=${r}`,i.defaults.headers.common.Authorization=`Bearer ${a}`,await this.handleRedirect(n,o)}catch(e){console.error("Callback 處理失敗",e),t("Callback 處理失敗"),s.push({name:"sign-in"})}},methods:{getQueryParams(){const a=window.location.hash.split("?")[1];if(!a)return null;const r=new URLSearchParams(a);return Object.fromEntries(r.entries())},async handleRedirect(e,a){e==="google"?await s.push({name:"metawall"}):e==="newebpay"?await s.push({name:"payment-result",params:{id:a}}):t("未知的 callback source")}}},p=m("p",null,null,-1),d=[p];function f(e,a,r,n,o,_){return l(),u("div",null,d)}const y=c(h,[["render",f]]);export{y as default};