<template>
  <div class="shadow-sign-in">
    <div class="container mt-24 px-12 py-17 border border-black border-2 bg-light">
      <div class="row">
        <div class="col">
          <img src="../../../public/signin.svg" alt="sign-in-image" class="object-fit-cover img-fluid" style="height: 340px;">
        </div>
        <VForm v-slot="{ errors }" ref="signIn" @submit="onSubmit" class="col text-center">
          <h1 class="text-primary display-3">MetaWall</h1>
          <h4 class="helvetica-neue fw-bold mb-9">到元宇宙展開全新社交圈</h4>
          <div class="form-floating mb-4">
            <VField v-model.trim="email" rules="required|email" :class="{ 'is-invalid': errors['email'] }" name="email" type="text" class="form-control rounded-0 border border-black border-2" placeholder="Email" aria-label="email" aria-describedby="email" />
            <label for="email" class="form-label">email</label>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="form-floating mb-8">
            <VField v-model.trim="password" :rules="isPassword" :class="{ 'is-invalid': errors['password'] }" name="password" type="text" class="form-control rounded-0 border border-black border-2" placeholder="Password" aria-label="password" aria-describedby="password" />
            <label for="password" class="form-label">password</label>
            <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
          </div>
          <button type="submit" class="btn btn-primary border border-2 border-black text-white azeret-mono fw-bold w-100 mb-4" style=" border-bottom: 4px solid black !important;">
            登入
          </button>
          <RouterLink :to="{ name: 'sign-up' }" class="btn azeret-mono fw-bold w-100 hvr-btn-signin">
            註冊帳號
          </RouterLink>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
import { mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';
import isPassword from '@/utils/validators/isPassword';

export default {
  components: { ErrorMessage },
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    isPassword,
    ...mapActions(userUsersStore, ['signIn']),
    onSubmit() {
      this.signIn(this.email, this.password);
      this.$refs.signIn.resetForm();
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
    height: 550px;
    background-color: #00000040;
    content: ''
  }
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

</style>