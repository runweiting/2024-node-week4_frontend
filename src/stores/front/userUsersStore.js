import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import router from "@/router";
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
      const url = `${VITE_APP_URL}/users/sign-up`;
      try {
        const res = await axios.post(url, {
          name,
          email,
          password,
          confirmPassword,
        });
        const { expires, token } = res.data;
        document.cookie = `myToken=${token}; expires=${expires}`;
        showSuccessToast(res.data.message);
        router.push({ name: "sign-in" });
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async signIn(email, password) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/sign-in`;
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
          router.push({ name: "metawall" });
          showSuccessToast(res.data.message);
        } catch (err) {
          showErrorToast(err.response.data.message);
        } finally {
          loader.hide();
        }
      } else {
        showSuccessToast("您已登入！");
        router.push({ name: "metawall" });
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
      const url = `${VITE_APP_URL}/users/update-password`;
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
    async signOut() {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/sign-out`;
      try {
        await axios.post(url);
        document.cookie = "myToken=; expires=;";
        axios.defaults.headers.common.Authorization = null;
        showSuccessToast("登出成功");
        router.push({ name: "sign-in" });
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async uploadFile() {
      const loader = $loading.show();
      const fileInput = document.querySelector("#formFile");
      // 取出 fileInput 內的 file 物件
      const file = fileInput.files[0];
      // 新增 formData 物件
      const formData = new FormData();
      // formData 最後一個子節點插入 file 和 'file-to-upload'
      formData.append("file-to-upload", file);
      const url = `${VITE_APP_URL}/upload/file`;
      try {
        const res = await axios.post(url, formData);
        showSuccessToast(res.data.message);
        this.getProfile();
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userUsersStore;
