<template>
  <div class="shadow-sign-in">
    <div class="container mt-24 px-12 py-17 border border-black border-2 bg-light">
      <div class="row">
        <div class="col">
          <img src="../../../public/signin.svg" alt="sign-in-image" class="object-fit-cover img-fluid" style="height: 340px;">
        </div>
        <VForm v-slot="{ errors }" ref="signUp" @submit="onSubmit" class="col text-center">
          <h1 class="text-primary display-3">MetaWall</h1>
          <h4 class="helvetica-neue fw-bold mb-9">註冊</h4>
          <div class="form-floating mb-4">
            <VField v-model.trim="name" rules="required|min:2" :class="{ 'is-invalid': errors['匿稱']}" name="匿稱" type="text" class="form-control rounded-0 border border-black border-2" placeholder="匿稱" aria-label="nickname" aria-describedby="nickname" />
            <label for="匿稱" class="form-label">匿稱</label>
            <ErrorMessage name="匿稱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-4">
            <VField v-model.trim="email" rules="required|email" :class="{ 'is-invalid': errors['email']}" name="email" type="text" class="form-control rounded-0 border border-black border-2" placeholder="Email" aria-label="email" aria-describedby="email" />
            <label for="email" class="form-label">email</label>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-4">
            <VField v-model.trim="password" :rules="isPassword" :class="{ 'is-invalid': errors['password'] }" name="password" type="text" class="form-control rounded-0 border border-black border-2" placeholder="Password" aria-label="password" aria-describedby="password" />
            <label for="password" class="form-label">password</label>
            <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-4">
            <VField v-model.trim="confirmPassword" rules="required" :class="{ 'is-invalid': errors['confirmPassword'] }" name="confirmPassword" type="text" class="form-control rounded-0 border border-black border-2" placeholder="confirmPassword" aria-label="confirmPassword" aria-describedby="confirmPassword" />
            <label for="confirmPassword" class="form-label">confirmPassword</label>
            <ErrorMessage name="confirmPassword" class="invalid-feedback"></ErrorMessage>
          </div>
          <button type="submit" class="btn btn-gray border border-2 border-black text-white azeret-mono fw-bold w-100 mb-4" style=" border-bottom: 4px solid black !important;">
            註冊
          </button>
          <RouterLink :to="{ name: 'sign-in' }" class="btn azeret-mono fw-bold w-100 hvr-btn-signup">
            登入
          </RouterLink>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { mapActions } from 'pinia';
import isPassword from '@/utils/validators/isPassword';
import userUsersStore from '@/stores/front/userUsersStore';
import showWarningToast from '@/utils/showWarningToast';

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
    onSubmit() {
      if (this.password !== this.confirmPassword) {
        showWarningToast("密碼不一致")
        return
      };
      this.signUp(this.name, this.email, this.password, this.confirmPassword);
      this.$refs.signUp.resetForm();
    },
  },
}
</script>

<style lang="scss">
.shadow-sign-in {
  position: relative;
  z-index: 10;

  &::after {
    position: absolute;
    top: 7px;
    left: 270px;
    z-index: -1;
    display: block;
    width: 870px;
    height: 682px;
    background-color: #00000040;
    content: ''
  }
}

.form-label, .form-control, .form-control::placeholder {
  color: #9B9893;
  font-family: "Azeret Mono";
}

.hvr-btn-signup:hover {
  background-color: #e2edfa;
  border: 2px solid black;
}

</style>