import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast } from "@/utils/swalToasts";

const $loading = useLoading({});
const { VITE_APP_URL } = import.meta.env;
const postsStore = defineStore("postsStore", {
  state: () => ({
    postsList: [],
    targetPost: {},
    userPosts: [],
  }),
  actions: {
    async getPosts(timeSort = null, keyword = null) {
      const loader = $loading.show();
      let url = `${VITE_APP_URL}/posts`;
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
    async getPost(postId) {
      const loader = $loading.show();
      const url = `${VITE_APP_URL}/posts/${postId}`;
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.targetPost = data;
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async getUserPosts(userId, timeSort = null, keyword = null) {
      const loader = $loading.show();
      let url = `${VITE_APP_URL}/posts/user/${userId}`;
      if (timeSort !== null) {
        url += `?timeSort=${timeSort}`;
        if (keyword) {
          url += `&q=${keyword}`;
        }
      }
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.userPosts = data;
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
  getters: {
    getAllPosts: (state) => state.postsList,
  },
});

export default postsStore;
