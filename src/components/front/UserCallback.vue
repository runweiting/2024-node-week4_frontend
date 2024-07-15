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
  async mounted() {
    try {
      const queryParams = this.getQueryParams();
      if (!queryParams) {
        errorToast('無效的 callback URL！');
        router.push({ name: "sign-in" });
        return
      }
      const { token, expires, source } = queryParams;
      if (!token || !expires || !source) {
        errorToast('您尚未登入！');
        router.push({ name: "sign-in" });
        return;
      }
      document.cookie = `myToken=${token}; expires=${expires}`;
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      await this.handleRedirect(source);
    } catch(err) {
      console.error('Callback failed', err);
      errorToast('callback 處理失敗');
      router.push({ name: "sign-in" });
    }
  },
  methods: {
    getQueryParams() {
      // window.location.hash 返回當前 URL #
      const hashString = window.location.hash;
      // 從 # 中取出查詢字串
      const queryString = hashString.split('?')[1];
      if (!queryString) { return null };
      // 取出查詢字串並轉換為物件
      const params = new URLSearchParams(queryString);
      return Object.fromEntries(params.entries());
    },
    async handleRedirect(source) {
      if (source === 'google') {
        await router.push({ name: "metawall" })
      } else if (source === 'newebpay') {
        await router.push({ name: "payment-result" });
      } else {
        errorToast('未知的 callback source')
      }
    }
  }
}
</script>