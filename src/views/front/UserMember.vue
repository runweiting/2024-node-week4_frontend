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
            <RouterLink :to="{ name: 'profile' }" class="btn btn-white hvr-btn-profile mb-n1 noto-sans-tc" style="border: 2px solid black; border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important;">我的匿稱</RouterLink>
            <RouterLink :to="{ name: 'name' }" class="btn btn-white hvr-btn-profile mb-n1 noto-sans-tc" style="border: 2px solid black; border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important;">修改匿稱</RouterLink>
            <RouterLink :to="{ name: 'password' }" class="btn btn-white hvr-btn-profile mb-n1 ms-n1 noto-sans-tc" style="border: 2px solid black; border-bottom-right-radius: 0 !important; border-bottom-left-radius: 0 !important;">重設密碼</RouterLink>
          </div>
        </div>
        <RouterView />
      </div>
      <div class="col-4">
        <div class="bg-white border border-2 border-black px-6 py-8">
          <button type="button" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6">
            張貼動態
          </button>
          <div class="d-flex flex-column gap-6">
            <div class="d-flex align-items-center gap-4">
              <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                <img :src="profile.photo" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 50px;">
              </div>
              <span class="noto-sans-tc fw-bold">{{ profile.name }}</span>
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
import userUsersStore from '@/stores/front/userUsersStore';
import UserNavbar from '@/components/front/UserNavbar.vue';

export default {
  components: {
    UserNavbar
  },
  mounted() {
    this.getProfile();
  },
  computed: {
    ...mapState(userUsersStore, ['profile'])
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile'])
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

.hvr-btn-profile.active {
  color: white;
  background-color: black;
}
</style>