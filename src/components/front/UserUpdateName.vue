<template>
  <div class="row">
    <div class="col">
      <div class="bg-white rounded border border-2 border-black px-24 py-8" style="border-bottom: 4px solid black !important">
        <div v-if="!profile.photo" class="rounded-circle overflow-hidden mx-auto mb-4" style="width: 107px; height: 107px;">
          <img src="../../../public/user_default.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid">
        </div>
        <div v-else class="rounded-circle overflow-hidden mx-auto mb-4" style="width: 107px; height: 107px;">
          <img :src="tempProfile.photo" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid" style="height: 107px;">
        </div>
        <div class="input-group text-center mb-8">
          <input type="file" class="form-control" id="formFile" aria-describedby="formFile" aria-label="formFile" />
          <button @click="uploadFile" type="button" class="btn btn-dark" id="formFile">上傳大頭照</button>
        </div>
        <div class="d-flex flex-column gap-1 mb-4">
          <span>匿稱</span>
          <input v-model="tempProfile.name" class="form-control rounded-0 border border-black border-2" type="text" placeholder="請輸入匿稱" aria-label="nickname">
        </div>
        <div class="mb-8">
          <span class="d-block mb-2">性別</span>
          <div class="d-flex gap-6">
            <div class="form-check">
              <input id="male" name="性別" value="male" v-model="tempProfile.gender" class="form-check-input" type="radio" checked>
              <label for="male" class="form-check-label">
                男性
              </label>
            </div>
            <div class="form-check">
              <input id="female" name="性別" value="female" v-model="tempProfile.gender" class="form-check-input" type="radio">
              <label for="female" class="form-check-label">
                女性
              </label>
            </div>
          </div>
        </div>
        <button @click="handleUpdateProfile(tempProfile.name, tempProfile.gender)" type="button" class="btn btn-warning py-4 border border-2 border-black w-100" style="border-bottom: 4px solid black !important;">送出更新</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';
import { errorToast } from "@/utils/swalToasts"

export default {
  data() {
    return {
      tempProfile: {
        name: "",
        photo: "",
        gender: ""
      }
    }
  },
  created() {
    this.tempProfile = {
      ...this.profile,
    }
  },
  watch: {
    profile: {
      deep: true,
      handler(updateProfile) {
        this.tempProfile = updateProfile
      }
    },
  },
  mounted() {
    this.getProfile()
  },
  computed: {
    ...mapState(userUsersStore, ['profile', 'photoUrl'])
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile', 'updateProfile', 'uploadFile']),
    handleUpdateProfile(name, gender) {
      if (!name || !gender) {
        return errorToast("匿稱和性別為必填")
      }; 
      this.updateProfile(name, gender);
      return null
    }
  }
}
</script>