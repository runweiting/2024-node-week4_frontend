import{S as e}from"./index-qouUdehN.js";function i(s){return new Promise(o=>{e.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:t=>{t.addEventListener("mouseenter",e.stopTimer),t.addEventListener("mouseleave",e.resumeTimer)}}).fire({icon:"error",title:s}).then(()=>{o()})})}function m(s){return new Promise(o=>{e.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:t=>{t.addEventListener("mouseenter",e.stopTimer),t.addEventListener("mouseleave",e.resumeTimer)}}).fire({icon:"success",title:s}).then(()=>{o()})})}export{m as a,i as s};
