<template>
  <header>
    <nav class="navbar border-bottom border-black border-3 p-0 bg-white">
      <div class="container py-3">
        <h1 class="mb-0 overflow-hidden d-flex align-items-center" style="white-space: nowrap;">
          <RouterLink 
            :to="{ name: 'all' }" class="navbar-brand m-0 fs-3 p-0">MetaWall
          </RouterLink>
        </h1>
        <div class="dropdown d-flex align-items-center gap-2">
          <div v-if="profile.photo" class="rounded-circle overflow-hidden" style="width: 30px; height: 30px;">
            <img :src="profile.photo" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 30px;">
          </div>
          <div v-else class="rounded-circle overflow-hidden" style="width: 30px; height: 30px;">
            <img src="../../../public/user_default.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 30px;">
          </div>
          <RouterLink 
            :to="{ name: 'member' }" class="nav-link fs-6 azeret-mono fw-bold dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Member
          </RouterLink>
          <ul class="dropdown-menu noto-sans-tc mt-2 py-0 text-center rounded-0" aria-labelledby="dropdownMenuLink">
            <li>
              <RouterLink v-if="profile._id" :to="{ name: 'user', params: { id: profile._id } }" class="dropdown-item py-2" href="#">我的貼文牆</RouterLink></li>
            <li>
              <RouterLink :to="{ name: 'profile' }" class="dropdown-item py-2">修改個人資料</RouterLink>
            </li>
            <li><a @click="signOut" class="dropdown-item py-2" href="#">登出</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';

export default {
  created() {
    this.getProfile();
  },
  computed: {
    ...mapState(userUsersStore, ['profile'])
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile', 'signOut'])
  }
}

</script>

<style lang="scss">
.nav-link.active {
  margin-top: 4px;
  border-bottom: 2px solid black;
}

.dropdown-menu {
  position: absolute;
  z-index: 10;

  &::after {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: -1;
    display: block;
    width: 160px;
    height: 130px;
    background-color: white;
    border: 2px solid black;
    content: '';
  }
}

.dropdown-item {
  margin-bottom: -2px;
  background-color: white;
  border: 2px solid black;

  &:hover,
  &:focus,
  // 元素被用戶點擊按下的瞬間狀態
  &:active {
    color: white;
    background-color: black !important;
  }

  // 元素有 .active，由開發者通過 JS 動態添加或移除
  &.active {
    background-color: black !important;
  }
}
</style>