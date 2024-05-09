<template>
  <UserNavbar />
  <div class="container py-12" style="height: 100dvh;">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            修改個人資料
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col ps-5">
            <button type="button" class="btn btn-white hvr-btn-profile mb-n1 noto-sans-tc" style="border: 2px solid black; border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important;">匿稱修改</button>
            <button type="button" class="btn btn-white hvr-btn-profile mb-n1 ms-n1 noto-sans-tc" style="border: 2px solid black; border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important;">重設密碼</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bg-white rounded border border-2 border-black px-24 py-8" style="border-bottom: 4px solid black !important">
              <div class="rounded-circle overflow-hidden mx-auto mb-4" style="width: 107px; height: 107px;">
                <img src="../../../public/user_default.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid">
              </div>
              <div class="text-center mb-3">
                <button type="button" class="btn btn-dark rounded-0">上傳大頭照</button>
              </div>
              <div class="d-flex flex-column gap-1 mb-4">
                <span>匿稱</span>
                <input v-model="tempNickname" class="form-control rounded-0 border border-black border-2" placeholder="請輸入匿稱" aria-label="nickname">
              </div>
              <div class="mb-8">
                <span class="d-block mb-2">性別</span>
                <div class="d-flex gap-6">
                  <div class="form-check">
                    <input id="male" name="性別" value="male" v-model="tempSex" class="form-check-input" type="radio" checked>
                    <label for="male" class="form-check-label">
                      男性
                    </label>
                  </div>
                  <div class="form-check">
                    <input id="female" name="性別" value="female" v-model="tempSex" class="form-check-input" type="radio">
                    <label for="female" class="form-check-label">
                      女性
                    </label>
                  </div>
                </div>
              </div>
              <button @click="handleUpdateProfile(tempNickname, tempSex)" type="button" class="btn btn-warning py-4 border border-2 border-black w-100" style="border-bottom: 4px solid black !important;">送出更新</button>
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
import UserNavbar from '@/components/front/UserNavbar.vue';

export default {
  components: {
    UserNavbar
  },
  data() {
    return {
      tempNickname: '',
      tempSex: ''
    }
  },
  computed: {
    ...mapState(userPostsStore, ['newPost']),
  },
  methods: {
    ...mapActions(userPostsStore, ['createPosts', 'getPosts']),
    handleUpdateProfile(nickname, sex) {
      if (!nickname || !sex) {
        showErrorToast("匿稱和性別為必填")
      } else {
        // this.createPosts(content, image);
        this.tempNickname = '';
        this.tempSex = '';
        // this.getPosts();
        // this.$router.push({ name: "home" })
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

.hvr-btn-profile:hover {
  color: white;
  background-color: black;
}

</style>