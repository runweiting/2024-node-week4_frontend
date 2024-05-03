import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import showErrorToast from "@/utils/showErrorToast";
import showSuccessToast from "@/utils/showSuccessToast";

const $loading = useLoading({});
const { VITE_APP_URL } = import.meta.env;
const userPostsStore = defineStore("userPostsStore", {
  state: () => ({
    postsList: [],
  }),
  actions: {
    async getPosts(timeSort = null, keyword = null) {
      const loader = $loading.show();
      let url = `${VITE_APP_URL}`;
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
        showErrorToast(err.response);
      } finally {
        loader.hide();
      }
    },
    async createPosts(tempContent, tempImage) {
      const loader = $loading.show();
      try {
        await axios.post(VITE_APP_URL, {
          data: {
            user: "662a6bacbf706db5129b49f9",
            content: tempContent,
            image: tempImage,
            likes: "",
          },
        });
        this.getPosts("asc");
        showSuccessToast("新增成功");
      } catch (err) {
        showErrorToast(err.response);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userPostsStore;
