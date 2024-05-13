<template>
  <UserNavbar />
  <div class="container py-12">
    <div class="row">
      <div class="col-8">
        <div class="row mb-4">
          <div class="col-4">
            <select @input="handleGetPosts(timeSort)" v-model="timeSort" class="form-select rounded-0 border-2 border-black py-3 ps-4 pe-10" aria-label="posts-select">
              <option value="" selected>請選擇順序</option>
              <option value="asc">從新到舊</option>
              <option value="desc">從舊到新</option>
            </select>
          </div>
          <div class="col-8">
            <div class="input-group">
              <input v-model="keyword" type="text" class="form-control rounded-0 border-2 border-black py-3 px-4" placeholder="搜尋貼文" aria-label="搜尋貼文" aria-describedby="搜尋貼文">
              <button @click="handleSearchPosts(keyword)" class="btn btn-primary rounded-0 px-4" type="button"><i class="bi bi-search text-white fs-4"></i></button>
            </div>
          </div>
        </div>
        <!-- 全體動態牆-無動態 -->
        <div v-if="!postsList.length" class="row">
          <div class="col">
            <div class="bg-white rounded border border-2 border-black" style="border-bottom: 4px solid black !important">
              <div class="d-flex align-items-center gap-2 border-bottom border-2 border-black p-4 w-100" style="height: 52px;">
                <div class="rounded border border-black border-1 bg-danger" style="width: 10px; height: 10px;"></div>
                <div class="rounded border border-black border-1 bg-warning" style="width: 10px; height: 10px;"></div>
                <div class="rounded border border-black border-1 bg-success" style="width: 10px; height: 10px;"></div>
              </div>
              <div class="text-center py-8" style="height: 80px;">
                <p class="text-gray">目前尚無動態，新增一則貼文吧！</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 全體動態牆-有動態 -->
        <div v-if="postsList.length" class="row gy-6">
          <div v-for="post in postsList" :key="post._id" class="col-12">
            <div class="bg-white rounded border border-2 border-black p-6" style="border-bottom: 4px solid black !important">
              <div class="d-flex gap-2 mb-4">
                <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
                  <img :src="post.user.photo" :alt="`user-photo-${post.user.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
                </div>
                <div class="d-flex flex-column justify-content-between text-start">
                  <span class="noto-sans-tc text-primary fw-bold">{{ profile.name }}</span>
                  <small class="baloo-da-2 text-gray">{{ formattedTime(post.createdAt) }}</small>
                </div>
              </div>
              <p class="noto-sans-tc mb-4">{{ post.content }}
              </p>
              <img :src="post.image" alt="雪景" class="object-fit-cover img-fluid">
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <UserDashboard />
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userPostsStore from '@/stores/front/userPostsStore';
import userUsersStore from '@/stores/front/userUsersStore';
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';

export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  data() {
    return {
      timeSort: '',
      keyword: ''
    }
  },
  mounted() {
    this.getPosts();
    this.getProfile();
  },
  computed: {
    ...mapState(userPostsStore, ['postsList']),
    ...mapState(userUsersStore, ['profile'])
  },
  methods: {
    ...mapActions(userPostsStore, ['getPosts']),
    ...mapActions(userUsersStore, ['getProfile']),
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