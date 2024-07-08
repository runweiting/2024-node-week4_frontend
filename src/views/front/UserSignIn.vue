<template>
  <div class="container mt-24 px-12 py-17 border border-black border-2 bg-light shadow-sign-in">
      <div class="row">
        <div class="col">
          <div class="d-flex align-items-center h-100">
            <img src="../../../public/signin.svg" alt="sign-in-image" class="object-fit-cover img-fluid" style="height: 340px;">
          </div>
        </div>
        <VForm v-slot="{ errors }" ref="signIn" @submit="handleSubmit" class="col text-center">
          <h1 class="text-primary display-3">MetaWall</h1>
          <h4 class="helvetica-neue fw-bold mb-9">到元宇宙展開全新社交圈</h4>
          <div class="form-floating mb-4">
            <VField v-model.trim="email" rules="required|email" :class="{ 'is-invalid': errors['email'] }" name="email" type="email" class="form-control rounded-0 border border-black border-2" placeholder="Email" aria-label="email" aria-describedby="email" />
            <label for="email" class="form-label">email</label>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-8">
            <VField v-model.trim="password" :rules="isPassword" :class="{ 'is-invalid': errors['password'] }" name="password" type="password" class="form-control rounded-0 border border-black border-2" placeholder="Password" aria-label="password" aria-describedby="password" />
            <label for="password" class="form-label">password</label>
            <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="d-flex gap-2 mb-2">
            <RouterLink :to="{ name: 'sign-up' }" class="btn border border-2 border-black azeret-mono fw-bold w-100 hvr-btn-signin" style=" border-bottom: 4px solid black !important;">
              註冊帳號
            </RouterLink>
            <button type="submit" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100" style=" border-bottom: 4px solid black !important;">
              登入
            </button>
          </div>
          <a href="https://two024-node-week4.onrender.com/users/google" class="btn border border-2 border-black azeret-mono fw-bold w-100 hvr-btn-signin-google" style=" border-bottom: 4px solid black !important;">Google 登入</a>
        </VForm>
      </div>
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';
import isPassword from '@/utils/validators/isPassword';
import isUserSignIn from '@/utils/validators/isUserSignIn';

export default {
  components: { ErrorMessage },
  data(){
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    this.checkToken();
  },
  methods: {
    isPassword,
    ...mapActions(userUsersStore, ['signIn']),
    checkToken () {
      if (isUserSignIn()) {
        this.$router.push({ name: 'metawall' })
      }
    },
    async handleSubmit() {
      const isFormValid = await this.$refs.signIn.submitForm();
      if (isFormValid) {
        this.onSubmit();
      }
    },
    onSubmit() {
      if (isUserSignIn()) {
        return this.$router.push({ name: 'metawall' });
      }
      if (this.email && this.password) {
        this.signIn(this.email, this.password);
        this.$refs.signIn.resetForm();
      }
      return null
    },
  },
}
</script>

<style lang="scss">
.shadow-sign-in {
  box-shadow: -10px 10px #00000040;
}

.form-label, .form-control, .form-control::placeholder {
  color: #9B9893;
  font-family: "Azeret Mono";
}

.hvr-btn-signin:hover {
  color: white;
  background-color: #9B9893;
  border: 2px solid black;
}

.hvr-btn-signin-google:hover {
  color: white;
  background-color: #03438d;
  border: 2px solid black;
}

</style>