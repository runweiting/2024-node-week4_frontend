<template>
  <p>Redirecting...</p>
</template>

<script>
import axios from "axios";
import router from "@/router";
import showErrorToast from "@/utils/showErrorToast";

export default {
  mounted() {
    // window.location.search 返回當前 URL 查詢字串
    const queryString = window.location.search;
    // URLSearchParams 解析查詢字符串
    const queryParams = new URLSearchParams(queryString);
    const token = queryParams.get('token');
    const expires = queryParams.get('expires');
    console.log('token', token);
    console.log('expires', expires);
    if (!token || !expires) {
      showErrorToast('您尚未登入！');
      router.push({ name: "sign-in" })
      return
    }
    document.cookie = `myToken=${token}; expires=${expires}`;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    router.push({ name: "metawall" });
  }
}
</script>