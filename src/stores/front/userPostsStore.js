import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showErrorToast from "@/utils/showErrorToast";
import showSuccessToast from "@/utils/showSuccessToast";

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
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async createPosts(tempContent, tempImage) {
      const loader = $loading.show();
      try {
        await axios.post(VITE_LOCALHOST, {
          user: "662a6bacbf706db5129b49fa",
          content: tempContent,
          image: tempImage,
          likes: "",
        });
        showSuccessToast("新增成功");
        this.getPosts();
      } catch (err) {
        showErrorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userPostsStore;
