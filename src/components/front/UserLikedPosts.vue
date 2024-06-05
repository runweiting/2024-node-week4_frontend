<template>
  <UserNavbar />
  <div class="container py-12">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            我按讚的貼文
            </div>
          </div>
        </div>
        <div v-if="!likedPosts.length" class="row gy-4">
          <div class="col-12">
            <div class="bg-white rounded border border-2 border-black p-4 text-center" style="border-bottom: 4px solid black !important">
              <p class="text-gray mb-0">目前尚無按讚貼文，新增一則貼文吧！</p>
            </div>
          </div>
        </div>
        <div v-if="likedPosts.length" class="row gy-4">
          <div v-for="likedPost in likedPosts" :key="likedPost._id" class="col-12">
            <div class="d-flex gap-2 bg-white rounded border border-2 border-black p-4 mb-2" style="border-bottom: 4px solid black !important">
              <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
                <img :src="likedPost.post.user.photo" :alt="`user-photo-${likedPost.post.user.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
              </div>
              <div class="d-flex flex-column justify-content-between text-start">
                <span class="noto-sans-tc text-primary fw-bold">{{ likedPost.post.user.name }}</span>
                <small class="baloo-da-2 text-gray">發文時間：{{ formatCreatedAt(likedPost.post.createdAt).formattedDateAndTime }}</small>
              </div>
              <div class="mt-auto ms-auto">
                <button @click="handleDeleteLikedPost(likedPost._id)" type="button" class="btn btn-sm border border-2 border-black bg-white me-2">
                  <i class="bi bi-hand-thumbs-up-fill me-2"></i>
                  <small>取消按讚</small>
                </button>
                <button @click="handleGoToPost(likedPost.post._id)" type="button" class="btn btn-sm border border-2 border-black text-decoration-none bg-white">
                  <i class="bi bi-arrow-right-circle-fill me-2"></i>
                  <small>查看貼文</small>
                </button>
              </div>
            </div>
            <RouterView v-if="currentPostId === likedPost.post._id" />
          </div>
        </div>
      </div>
      <div class="col-4">
        <UserDashboard />
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userUsersStore from '@/stores/front/userUsersStore';
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';
import formatCreatedAt from '@/utils/formatCreatedAt';
import timestampToDate from '@/utils/timestampToDate';

export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  data() {
    return {
      currentPostId: ''
    }
  },
  mounted() {
    this.getLikedPosts();
  },
  computed: {
    ...mapState(userUsersStore, ['likedPosts']),
  },
  methods: {
    ...mapActions(userUsersStore, ['getLikedPosts', 'deleteLikedPost']),
    async handleDeleteLikedPost(postId) {
      await this.deleteLikedPost(postId);
      this.getLikedPosts();
    },
    handleGoToPost(currentPostId) {
      this.currentPostId = currentPostId;
      this.$router.push({ name: 'post', params: { id: currentPostId } })
    },
    formatCreatedAt,
    timestampToDate,
  }
}
</script>