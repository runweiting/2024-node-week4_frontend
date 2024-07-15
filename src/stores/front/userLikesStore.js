import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast, successToast } from "@/utils/swalToasts";
import postsStore from "./postsStore";

const $loading = useLoading({});
const { VITE_LOCALHOST } = import.meta.env;
const userLikesStore = defineStore("userLikesStore", {
  state: () => ({}),
  actions: {
    async handleLikePost(page, postId, profileId, targetUserId) {
      // 帶入當前貼文 postId 核對 postsList 中 id 相同的 targetPost
      const store = postsStore();
      await store.getPosts();
      const postsList = store.getAllPosts;
      // eslint-disable-next-line no-underscore-dangle
      const targetPost = await postsList.find((post) => post._id === postId);
      // 如果 targetPost.likes 已有 profile.id
      if (page === "metawall") {
        try {
          if (this.isLiked(targetPost, profileId)) {
            // 取消按讚
            await this.unlikePost(postId);
          } else {
            // 按讚
            await this.likePost(postId);
          }
          await store.getPosts();
        } catch (err) {
          errorToast(err.response);
        }
      }
      if (page === "userwall") {
        try {
          if (this.isLiked(targetPost, profileId)) {
            // 取消按讚
            await this.unlikePost(postId);
          } else {
            // 按讚
            await this.likePost(postId);
          }
          await store.getUserPosts(targetUserId);
        } catch (err) {
          errorToast(err.response);
        }
      }
    },
    isLiked(post, profileId) {
      if (!post || !Array.isArray(post.likes)) {
        return false;
      }
      // some 和 find 的區別
      // find 返回陣列中第一個滿足條件的元素，若無返回 undefined
      // some 測試陣列中是否至少有一個元素滿足條件，若有返回 true，否則返回 false
      // eslint-disable-next-line no-underscore-dangle
      return post.likes.some((member) => member.user._id === profileId);
    },
    async likePost(postId) {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/posts/${postId}/like`;
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
      const url = `${VITE_LOCALHOST}/posts/${postId}/unlike`;
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
