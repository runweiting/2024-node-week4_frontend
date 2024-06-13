<template>
  <div class="row">
    <div class="col">
      <div class="bg-white rounded border border-2 border-black px-24 py-8" style="border-bottom: 4px solid black !important">
        <div class="d-flex flex-column gap-1 mb-8">
          <span class="noto-sans-tc">輸入新密碼</span>
          <input v-model="password" class="form-control rounded-0 border border-black border-2 mb-4" type="password" placeholder="請輸入新密碼" aria-label="newPassword">
          <span class="noto-sans-tc">請再次輸入</span>
          <input v-model="confirmPassword" class="form-control rounded-0 border border-black border-2" type="password" placeholder="請再次輸入新密碼" aria-label="newPassword">
        </div>
        <button @click="handleUpdatePassword(this.password, this.confirmPassword)" type="button" class="btn btn-warning py-4 border border-2 border-black w-100" style="border-bottom: 4px solid black !important;">重設密碼</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';
import { errorToast } from "@/utils/swalToasts"

export default {
  data() {
    return {
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    ...mapActions(userUsersStore, ['updatePassword']),
    handleUpdatePassword(password, confirmPassword) {
      if (!password || !confirmPassword) {
        return errorToast("密碼為必填")
      }
      if (password !== confirmPassword) {
        return errorToast("密碼不一致")
      }
      this.updatePassword(password, confirmPassword);
      this.password = '';
      this.confirmPassword = '';
      this.$router.push({ name: "sign-in" });
      return null
    }
  }
}
</script>