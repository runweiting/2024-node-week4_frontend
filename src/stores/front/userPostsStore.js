import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showErrorToast from "@/utils/showErrorToast";
import showSuccessToast from "@/utils/showSuccessToast";

const $loading = useLoading({});
// 正式環境
// const { VITE_APP_URL } = import.meta.env;
// 測試環境
const { VITE_LOCALHOST } = import.meta.env;
const userPostsStore = defineStore("userPostsStore", {
  state: () => ({
    postsList: [],
  }),
  actions: {
    async getPosts(timeSort = null, keyword = null) {
      const loader = $loading.show();
      let url = `${VITE_LOCALHOST}`;
      if (timeSort !== null) {
        url += `?timeSort=${timeSort}`;
        if (keyword) {
          url += `&q=${keyword}`;
        }
      }
      try {
        const res = await axios.get(url);
        const { post } = res.data;
        this.postsList = post;
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
          user: "66359231351248cc4b676511",
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