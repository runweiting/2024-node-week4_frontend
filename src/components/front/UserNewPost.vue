<template>
  <UserNavbar />
  <div class="container py-12" style="height: 100dvh;">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            張貼動態
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bg-white rounded border border-2 border-black p-8" style="border-bottom: 4px solid black !important">
              <div class="d-flex flex-column gap-1 mb-4">
                <span>貼文內容</span>
                <textarea v-model="content" class="form-control rounded-0 border border-black border-2" placeholder="請輸入內容" aria-label="post-content"></textarea>
              </div>
              <div class="d-flex flex-column gap-1 mb-4">
                <span>圖片網址</span>
                <input v-model="image" type="image" class="form-control rounded-0 border border-black border-2" placeholder="請輸入網址" aria-label="imageUrl" aria-describedby="imageUrl">
              </div>
              <div class="mb-4">
                <img :src="image" alt="tempImage" class="object-fit-cover img-fluid">
              </div>
              <div class="mb-4">
                <span class="d-block">貼文標籤</span>
                <div v-for="tag in tags" :key="tag" class="form-check form-check-inline">
                  <input v-model="selectedTags" class="form-check-input" type="checkbox" :id="tag" :value="tag">
                  <label class="form-check-label" :for="tag">{{ tag }}</label>
                </div>
              </div>
              <button @click="handleCreatePost(this.content, this.image, this.selectedTags)" type="button" class="btn btn-light-gray py-4 border border-2 border-black w-50">送出貼文</button>
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
import { errorToast } from "@/utils/swalToasts";
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';

export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  data() {
    return {
      content: '',
      image: '',
      tags: ['音樂', '運動', '美食', '旅遊', '其他'],
      selectedTags: []
    }
  },
  watch: {
    selectedTags(tags) {
      if (tags.length > 3) {
        this.selectedTags.pop()
      }
    }
  },
  computed: {
    ...mapState(userPostsStore, ['newPost']),
  },
  methods: {
    ...mapActions(userPostsStore, ['createPost', 'getPosts']),
    handleCreatePost(content, image, tags) {
      if (!content) {
        return errorToast("貼文內容為必填")
      }
      if (!image.startsWith('http')) {
        return errorToast("圖片網址錯誤")
      }
      if (tags.length === 0) {
        return errorToast("貼文標籤為必填")
      }
      this.createPost(content, image, tags);
      this.tempContent = '';
      this.tempImage = '';
      this.tags.length = 0;
      this.$router.push({ name: "all" });
      return null
    }
  }
}
</script>