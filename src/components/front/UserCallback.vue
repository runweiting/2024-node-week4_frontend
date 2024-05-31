<template>
  <div>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import { errorToast } from "@/utils/swalToasts";

export default {
  mounted() {
    // window.location.hash 返回當前 URL #
    const hashString = window.location.hash;
    // 從 # 中取出查詢字串
    const queryString = hashString.split('?')[1];
    if (!queryString) {
      errorToast('無效的回調 URL！');
      router.push({ name: "sign-in" });
      return;
    }
    // URLSearchParams 取出查詢字串
    const queryParams = new URLSearchParams(queryString);
    const token = queryParams.get('token');
    const expires = queryParams.get('expires');
    if (!token || !expires) {
      errorToast('您尚未登入！');
      router.push({ name: "sign-in" });
      return;
    }
    document.cookie = `myToken=${token}; expires=${expires}`;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    // 以確保 cookie 和 axios.defaults.headers 設置完成
    setTimeout(() => {
      router.push({ name: "metawall" });
    }, 500);
  },
}
</script>