<template>
  <div class="bg-white border border-2 border-black px-6 py-8">
    <RouterLink 
      :to="{ name: 'new-post' }" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-6">張貼動態
    </RouterLink>
    <div class="d-flex flex-column gap-6">
      <RouterLink v-if="profile._id" :to="{ name: 'user', params: { id: profile._id} }" class="text-black text-decoration-none">
        <div class="d-flex align-items-center gap-4">
          <div v-if="profile.photo" class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
            <img :src="profile.photo" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 50px;">
          </div>
          <div v-else class="rounded-circle overflow-hidden border border-2 border-black" style="width: 50px; height: 50px;">
            <img src="../../../public/user_default.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 50px;">
          </div>
          <span class="noto-sans-tc fw-bold">{{ profile.name }}</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'following-list' }" class="text-black text-decoration-none">
        <div class="d-flex align-items-center gap-4">
          <div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width: 50px; height: 50px;">
            <i class="bi bi-bell-fill fs-5 position-absolute top-50 start-50 translate-middle"></i>
          </div>
          <span class="noto-sans-tc fw-bold">我的追蹤名單</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'liked-posts' }" class="text-black text-decoration-none">
        <div class="d-flex align-items-center gap-4">
          <div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width: 50px; height: 50px;">
            <i class="bi bi-hand-thumbs-up-fill fs-5 position-absolute top-50 start-50 translate-middle"></i>
          </div>
          <span class="noto-sans-tc fw-bold">我的按讚貼文</span>
        </div>
      </RouterLink>
      <RouterLink v-if="profile._id" :to="{ name: 'edit-posts', params: { userId: profile._id} }" class="text-black text-decoration-none">
        <div class="d-flex align-items-center gap-4">
          <div class="rounded-circle bg-secondary border border-2 border-black position-relative" style="width: 50px; height: 50px;">
            <i class="bi bi-pencil-fill fs-5 position-absolute top-50 start-50 translate-middle"></i>
          </div>
          <span class="noto-sans-tc fw-bold">編輯貼文</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';

export default {
  mounted() {
    this.getProfile();
  },
  computed: {
    ...mapState(userUsersStore, ['profile'])
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile']),
  }
}
</script>