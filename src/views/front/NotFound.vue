<template>
  <UserNavbar />
  <div class="container py-12" style="height: 100dvh;">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col">
            <div class="bg-white rounded border border-2 border-black" style="border-bottom: 4px solid black !important">
              <div class="d-flex align-items-center gap-2 border-bottom border-2 border-black p-4 w-100" style="height: 52px;">
                <div class="rounded border border-black border-1 bg-danger" style="width: 10px; height: 10px;"></div>
                <div class="rounded border border-black border-1 bg-warning" style="width: 10px; height: 10px;"></div>
                <div class="rounded border border-black border-1 bg-success" style="width: 10px; height: 10px;"></div>
              </div>
              <div class="text-center py-8">
                <p class="fs-3">404 沒有這一頁唷～</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="bg-white border border-2 border-black px-6 py-8">
          <RouterLink 
            :to="{ name: 'new-post' }" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6">張貼動態
          </RouterLink>
          <div class="d-flex flex-column gap-6">
            <div class="d-flex align-items-center gap-4">
              <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                <img src="../../../public/user@2x.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid">
              </div>
              <span class="noto-sans-tc fw-bold">邊緣小杰</span>
            </div>
            <div class="d-flex align-items-center gap-4">
              <div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width: 50px; height: 50px;">
                <i class="bi bi-bell-fill fs-5 position-absolute top-50 start-50 translate-middle"></i>
              </div>
              <span class="noto-sans-tc fw-bold">追蹤名單</span>
            </div>
            <div class="d-flex align-items-center gap-4">
              <div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width: 50px; height: 50px;">
                <i class="bi bi-hand-thumbs-up-fill fs-5 position-absolute top-50 start-50 translate-middle"></i>
              </div>
              <span class="noto-sans-tc fw-bold">我按讚的文章</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from "axios";
import router from "@/router";
import showErrorToast from "@/utils/showErrorToast";
import UserNavbar from '@/components/front/UserNavbar.vue';

export default {
  components: {
    UserNavbar
  },
  mounted() {
    // window.location.search 返回當前 URL 查詢字串
    const queryString = window.location.search;
    console.log(queryString);
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
  },
}
</script>