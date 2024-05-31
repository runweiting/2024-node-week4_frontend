import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast, successToast } from "@/utils/swalToasts";

const $loading = useLoading({});
const { VITE_APP_URL } = import.meta.env;
const userLikesStore = defineStore("userLikesStore", {
  state: () => ({}),
  actions: {
    async likePost(postId) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/posts/${postId}/like`;
      try {
        const res = await axios.post(url);
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async unlikePost(postId) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/posts/${postId}/unlike`;
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
});

export default userLikesStore;
