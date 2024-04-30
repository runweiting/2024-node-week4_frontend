<template>
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
import { mapState, mapActions } from 'pinia';
import userPostsStore from '@/stores/front/userPostsStore'

export default {
  data() {
    return {
      timeSort: '',
      keyword: ''
    }
  },
  async mounted() {
    await this.getPosts();
  },
  computed: {
    ...mapState(userPostsStore, ['postsList']),
  },
  methods: {
    ...mapActions(userPostsStore, ['getPosts']),
    handleGetPosts(timeSort) {
      this.getPosts(timeSort)
    },
    handleSearchPosts(keyword) {
      this.getPosts("asc", keyword);
    },
    formattedTime(createdAt) {
      const date = new Date(createdAt);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      return formattedDate
    }
  }
}
</script>