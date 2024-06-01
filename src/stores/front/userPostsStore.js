import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast, successToast } from "@/utils/swalToasts";

const $loading = useLoading({});
const { VITE_LOCALHOST } = import.meta.env;
const userPostsStore = defineStore("userPostsStore", {
  state: () => ({
    postsList: [],
  }),
  actions: {
    async getPosts(timeSort = null, keyword = null) {
      const loader = $loading.show();
      let url = `${VITE_LOCALHOST}/posts`;
      if (timeSort !== null) {
        url += `?timeSort=${timeSort}`;
        if (keyword) {
          url += `&q=${keyword}`;
        }
      }
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.postsList = data;
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
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
        this.getPosts();
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userPostsStore;
