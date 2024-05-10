import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showErrorToast from "@/utils/showErrorToast";
import showSuccessToast from "@/utils/showSuccessToast";

const $loading = useLoading({});
const { VITE_LOCALHOST } = import.meta.env;
const userUsersStore = defineStore("userUsersStore", {
  state: () => ({}),
  actions: {
    async signUp(name, email, password, confirmPassword) {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/users/sign_up`;
      try {
        const res = await axios.post(url, {
          name,
          email,
          password,
          confirmPassword,
        });
        showSuccessToast(res.data.message);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async signIn(email, password) {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/users/sign_in`;
      try {
        const res = await axios.post(url, {
          email,
          password,
        });
        showSuccessToast(res.data.message);
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userUsersStore;
