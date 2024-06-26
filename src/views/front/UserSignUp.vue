<template>
  <div class="container mt-24 px-12 py-17 border border-black border-2 bg-light shadow-sign-up">
      <div class="row">
        <div class="col">
          <div class="d-flex align-items-center h-100">
            <img src="../../../public/signin.svg" alt="sign-in-image" class="object-fit-cover img-fluid" style="height: 340px;">
          </div>
        </div>
        <VForm v-slot="{ errors }" ref="signUp" @submit.prevent="onSubmit" class="col text-center">
          <h1 class="text-primary display-3">MetaWall</h1>
          <h4 class="helvetica-neue fw-bold mb-9">註冊</h4>
          <div class="form-floating mb-2">
            <VField v-model.trim="name" rules="required|min:2" :class="{ 'is-invalid': errors['匿稱']}" name="匿稱" type="text" class="form-control rounded-0 border border-black border-2" placeholder="匿稱" aria-label="nickname" aria-describedby="nickname" />
            <label for="匿稱" class="form-label">匿稱</label>
            <ErrorMessage name="匿稱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-2">
            <VField v-model.trim="email" rules="required|email" :class="{ 'is-invalid': errors['email']}" name="email" type="email" class="form-control rounded-0 border border-black border-2" placeholder="Email" aria-label="email" aria-describedby="email" />
            <label for="email" class="form-label">email</label>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-2">
            <VField v-model.trim="password" :rules="isPassword" :class="{ 'is-invalid': errors['password'] }" name="password" type="password" class="form-control rounded-0 border border-black border-2" placeholder="Password" aria-label="password" aria-describedby="password" />
            <label for="password" class="form-label">password</label>
            <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-2">
            <VField v-model.trim="confirmPassword" rules="required" :class="{ 'is-invalid': errors['confirmPassword'] }" name="confirmPassword" type="password" class="form-control rounded-0 border border-black border-2" placeholder="confirmPassword" aria-label="confirmPassword" aria-describedby="confirmPassword" />
            <label for="confirmPassword" class="form-label">confirmPassword</label>
            <ErrorMessage name="confirmPassword" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="d-flex gap-2">
            <RouterLink :to="{ name: 'sign-in' }" class="btn border border-2 border-black azeret-mono fw-bold w-100 hvr-btn-signup">
              登入
            </RouterLink>
            <button type="submit" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100" style=" border-bottom: 4px solid black !important;">
              註冊
            </button>
          </div>
        </VForm>
      </div>
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { mapActions } from 'pinia';
import isPassword from '@/utils/validators/isPassword';
import userUsersStore from '@/stores/front/userUsersStore';
import { warningToast } from "@/utils/swalToasts";

export default {
  components: { ErrorMessage },
  data(){
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    isPassword,
    ...mapActions(userUsersStore, ['signUp']),
    onSubmit(event) {
      // 阻止表單預設提交
      event.preventDefault();
      // ESLint 要求 JavaScript 中，如有返回值的情況下，每個程式碼路徑都須返回一個值，以確保一致性和可預測性
      if (this.password !== this.confirmPassword) {
        return warningToast("密碼不一致")
      };
      this.signUp(this.name, this.email, this.password, this.confirmPassword);
      this.$refs.signUp.resetForm();
      return null
    },
  },
}
</script>

<style lang="scss">
.shadow-sign-up {
  box-shadow: -10px 10px #00000040;
}

.form-label, .form-control, .form-control::placeholder {
  color: #9B9893;
  font-family: "Azeret Mono";
}

.hvr-btn-signup:hover {
  color: white;
  background-color: #9B9893;
  border: 2px solid black;
}

</style>