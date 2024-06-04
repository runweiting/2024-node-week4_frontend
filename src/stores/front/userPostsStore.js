import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast, successToast } from "@/utils/swalToasts";
import postsStore from "./postsStore";

const $loading = useLoading({});
const { VITE_LOCALHOST } = import.meta.env;
const userPostsStore = defineStore("userPostsStore", {
  state: () => ({}),
  actions: {
    async createPost(content, image, tags) {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/posts`;
      try {
        const res = await axios.post(url, {
          content,
          image,
          tags,
        });
        successToast(res.data.message);
        const store = postsStore();
        await store.getPosts();
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userPostsStore;
