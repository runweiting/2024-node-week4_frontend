import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import router from "@/router";
import { errorToast, successToast } from "@/utils/swalToasts";
import isUserSignIn from "@/utils/validators/isUserSignIn";

const $loading = useLoading({});
const { VITE_APP_URL } = import.meta.env;
const userUsersStore = defineStore("userUsersStore", {
  state: () => ({
    profile: {},
    likedPosts: [],
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
        successToast(res.data.message);
        router.push({ name: "sign-in" });
      } catch (err) {
        errorToast(err.response.data.message);
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
          successToast(res.data.message);
        } catch (err) {
          errorToast(err.response.data.message);
        } finally {
          loader.hide();
        }
      } else {
        successToast("您已登入！");
        router.push({ name: "metawall" });
      }
    },
    async signOut() {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/sign-out`;
      try {
        await axios.post(url);
        document.cookie = "myToken=; expires=;";
        axios.defaults.headers.common.Authorization = null;
        successToast("登出成功");
        router.push({ name: "sign-in" });
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async getProfile() {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/profile`;
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.profile = data;
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async updateProfile(name, gender) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/profile`;
      try {
        const res = await axios.put(url, { name, gender });
        const { data } = res.data;
        this.profile = data;
        router.push({ name: "profile" });
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
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
        successToast(newMessage);
      } catch (err) {
        errorToast(err.response.data.message);
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
        successToast(res.data.message);
        this.getProfile();
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async getLikedPosts() {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/liked-posts`;
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.likedPosts = data;
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async deleteLikedPost(postId) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/users/${postId}/liked-post`;
      try {
        const res = await axios.delete(url);
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
  getters: {
    getUserProfile: (state) => state.profile,
    getUserLikedPosts: (state) => state.likedPosts,
  },
});

export default userUsersStore;
