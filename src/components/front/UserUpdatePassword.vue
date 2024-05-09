<template>
  <div class="row">
    <div class="col">
      <div class="bg-white rounded border border-2 border-black px-24 py-8" style="border-bottom: 4px solid black !important">
        <div class="d-flex flex-column gap-1 mb-8">
          <span class="noto-sans-tc">輸入新密碼</span>
          <input v-model="tempPassword1" class="form-control rounded-0 border border-black border-2 mb-4" placeholder="請輸入新密碼" aria-label="newPassword">
          <span class="noto-sans-tc">請再次輸入</span>
          <input v-model="tempPassword2" class="form-control rounded-0 border border-black border-2" placeholder="請再次輸入新密碼" aria-label="newPassword">
        </div>
        <button @click="handleUpdatePassword(tempPassword1, tempPassword2)" type="button" class="btn btn-warning py-4 border border-2 border-black w-100" style="border-bottom: 4px solid black !important;">重設密碼</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'pinia';
import showErrorToast from '@/utils/showErrorToast'

export default {
  data() {
    return {
      tempPassword1: '',
      tempPassword2: '',
    }
  },
  methods: {
    handleUpdatePassword(password1, password2) {
      if (password1 !== password2) {
        showErrorToast("匿稱和性別為必填")
      } else {
        this.tempNickname = '';
        this.tempSex = '';
        // this.$router.push({ name: "home" })
      }
    }
  }
}
</script>