<template>
  <UserNavbar />
  <div class="container py-12" style="height: 100dvh;">
    <div class="row">
      <div class="col-8">
        <div class="row mb-4">
          <div class="col-4">
            <select class="form-select rounded-0 border-2 border-black py-3 ps-4 pe-10" aria-label="posts select">
              <option selected>最新貼文</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-8">
            <div class="input-group">
              <input type="text" class="form-control rounded-0 border-2 border-black py-3 px-4" placeholder="搜尋貼文" aria-label="搜尋貼文" aria-describedby="搜尋貼文">
              <button class="btn btn-primary rounded-0 px-4" type="button" id="button-addon2"><i class="bi bi-search text-white fs-4"></i></button>
            </div>
          </div>
        </div>
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
                <textarea v-model="tempContent" class="form-control rounded-0 border border-black border-2" placeholder="請輸入內容" aria-label="post-content"></textarea>
              </div>
              <div class="d-flex flex-column gap-1 mb-4">
                <span>圖片網址</span>
                <input v-model="tempImage" type="text" class="form-control rounded-0 border border-black border-2" placeholder="請輸入網址" aria-label="imageUrl" aria-describedby="imageUrl">
              </div>
              <!-- <button type="button" class="btn bg-black text-white mb-4" style="width: 128px;">上傳圖片</button> -->
              <div class="mb-4">
                <img :src="tempImage" alt="tempImage" class="object-fit-cover img-fluid">
              </div>
              <button @click="handleCreatePost(tempContent, tempImage)" type="button" class="btn btn-light-gray py-4 border border-2 border-black w-50">送出貼文</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="bg-white border border-2 border-black px-6 py-8">
          <button type="button" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6">
            張貼動態
          </button>
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
import userPostsStore from '@/stores/front/userPostsStore';
import showErrorToast from '@/utils/showErrorToast'
import UserNavbar from '../../../components/front/UserNavbar.vue';

export default {
  components: {
    UserNavbar
  },
  data() {
    return {
      tempContent: '',
      tempImage: ''
    }
  },
  computed: {
    ...mapState(userPostsStore, ['newPost']),
  },
  methods: {
    ...mapActions(userPostsStore, ['createPosts', 'getPosts']),
    handleCreatePost(content, image) {
      if (!content) {
        showErrorToast("貼文內容為必填")
      } else if (!image.startsWith('http')) {
        showErrorToast("圖片網址錯誤")
      } else {
        this.createPosts(content, image);
        this.tempContent = '';
        this.tempImage = '';
        this.getPosts();
        this.$router.push({ name: "home" })
      }
    }
  }
}
</script>

<style lang="scss">
.shadow-new-post {
  position: relative;
  z-index: 10;

  &::after {
    position: absolute;
    top: 6px;
    right: 20px;
    z-index: -1;
    display: block;
    width: 556px;
    height: 74px;
    background-color: white;
    border: 2px solid black;
    content: ''
  }
}

</style>