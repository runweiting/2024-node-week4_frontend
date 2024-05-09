<template>
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
</template>

<script>
// import { mapState, mapActions } from 'pinia';
import showErrorToast from '@/utils/showErrorToast'

export default {
  data() {
    return {
      tempNickname: '',
      tempSex: ''
    }
  },
  methods: {
    handleUpdateProfile(nickname, sex) {
      if (!nickname || !sex) {
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