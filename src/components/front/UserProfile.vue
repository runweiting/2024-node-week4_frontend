<template>
  <div class="row">
    <div class="col">
      <div class="bg-white rounded border border-2 border-black px-24 py-8" style="border-bottom: 4px solid black !important">
        <div v-if="!profile.photo" class="rounded-circle overflow-hidden mx-auto mb-4" style="width: 107px; height: 107px;">
          <img src="../../../public/user_default@2x.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 107px;">
        </div>
        <div v-else class="rounded-circle overflow-hidden mx-auto mb-4" style="width: 107px; height: 107px;">
          <img :src="profile.photo" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 107px;">
        </div>
        <div class="noto-sans-tc text-center">
          <p class="fw-bold">{{ profile.name }}</p>
          <p>身分：{{ profile.role }}</p>
        </div>
      </div>
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
    ...mapActions(userUsersStore, ['getProfile'])
  }
}

</script>