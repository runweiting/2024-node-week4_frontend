import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showErrorToast from "@/utils/showErrorToast";
import showSuccessToast from "@/utils/showSuccessToast";
import isUserSignIn from "@/utils/validators/isUserSignIn";

const $loading = useLoading({});
const { VITE_APP_URL } = import.meta.env;
const userUsersStore = defineStore("userUsersStore", {
  state: () => ({
    profile: {},
  }),
  actions: {
    async signUp(name, email, password, confirmPassword) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/sign_up`;
      try {
        const res = await axios.post(url, {
          name,
          email,
          password,
          confirmPassword,
        });
        const { expired, token } = res.data;
        document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
        showSuccessToast(res.data.message);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async signIn(email, password) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/sign_in`;
      // 檢查使用者是否已登入
      if (!isUserSignIn()) {
        try {
          const res = await axios.post(url, {
            email,
            password,
          });
          const { expired, token } = res.data;
          document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          showSuccessToast(res.data.message);
        } catch (err) {
          showErrorToast(err.response.data.message);
        } finally {
          loader.hide();
        }
      } else {
        showSuccessToast("您已經登入！");
      }
    },
    async getProfile() {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/profile`;
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.profile = data;
        showSuccessToast(res.data.message);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async updateProfile(name, gender) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/profile`;
      try {
        const res = await axios.patch(url, { name, gender });
        const { data } = res.data;
        this.profile = data;
        showSuccessToast(res.data.message);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async updatePassword(password, confirmPassword) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/update_password`;
      try {
        const res = await axios.patch(url, { password, confirmPassword });
        const { expired, token } = res.data;
        document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
        axios.defaults.headers.common.Authorization = null;
        const newMessage = `${res.data.message}，請重新登入！`;
        showSuccessToast(newMessage);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userUsersStore;