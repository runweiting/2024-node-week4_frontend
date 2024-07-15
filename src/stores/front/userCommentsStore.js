import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast, successToast } from "@/utils/swalToasts";

const $loading = useLoading({});
const { VITE_APP_URL } = import.meta.env;
const userCommentsStore = defineStore("userCommentsStore", {
  state: () => ({}),
  actions: {
    async createComment(postId, comment) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/posts/${postId}/comment`;
      try {
        const res = await axios.post(url, {
          comment,
        });
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async deleteComment(commentId) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/posts/${commentId}/uncomment`;
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

export default userCommentsStore;
