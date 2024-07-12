import axios from "axios";
import { defineStore } from "pinia";
import { useLoading } from "vue-loading-overlay";
import { errorToast, successToast } from "@/utils/swalToasts";

const $loading = useLoading({});
const { VITE_LOCALHOST } = import.meta.env;
const userFollowersStore = defineStore("userFollowersStore", {
  state: () => ({
    followingList: [],
    toggleFollow: "",
  }),
  actions: {
    async getFollowingList() {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/users/following`;
      try {
        const res = await axios.get(url);
        const { data } = res.data;
        this.followingList = data;
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    isFollowed(followingList, followId) {
      // 帶入當前 userId 核對 followingList 中 id 相同的 targetUser
      const isUserFollow = followingList.some(
        // eslint-disable-next-line no-underscore-dangle
        (user) => user._id === followId,
      );
      if (isUserFollow) {
        this.toggleFollow = false;
      } else {
        this.toggleFollow = true;
      }
    },
    async followUser(followId) {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/users/${followId}/follow`;
      try {
        const res = await axios.post(url);
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
    async unfollowUser(followId) {
      const loader = $loading.show();
      const url = `${VITE_LOCALHOST}/users/${followId}/unfollow`;
      try {
        const res = await axios.delete(url);
        this.getFollowingList();
        successToast(res.data.message);
      } catch (err) {
        errorToast(err.response.data.message);
      } finally {
        loader.hide();
      }
    },
  },
});

export default userFollowersStore;
