<template>
  <UserNavbar />
  <div class="container py-12">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            編輯貼文
            </div>
          </div>
        </div>
        <div v-if="!userPosts.posts" class="row gy-4">
          <div class="col-12">
            <div class="bg-white rounded border border-2 border-black p-4 text-center" style="border-bottom: 4px solid black !important">
              <p class="text-gray mb-0">目前尚無按讚貼文，新增一則貼文吧！</p>
            </div>
          </div>
        </div>
        <div v-else class="row gy-3">
          <div v-for="post in userPosts.posts" :key="post._id" class="col-12">
            <div class="d-flex gap-2 bg-white rounded border border-2 border-black p-4 mb-2" style="border-bottom: 4px solid black !important">
              <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
                <img :src="post.user.photo" :alt="`user-photo-${post.user.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
              </div>
              <div class="d-flex flex-column justify-content-between text-start">
                <span class="noto-sans-tc text-primary fw-bold">{{ post.user.name }}</span>
                <small class="baloo-da-2 text-gray">發文時間：{{ formatCreatedAt(post.createdAt).formattedDateAndTime }}</small>
              </div>
              <div class="mt-auto ms-auto">
                <button @click="handleEditPost(post._id)" type="button" class="btn btn-sm border border-2 border-black bg-white me-2">
                  <i class="bi bi-pencil-fill me-2"></i>
                  <small>編輯貼文</small>
                </button>
                <button @click="handleDeletePost(post._id)" type="button" class="btn btn-sm border border-2 border-black text-decoration-none bg-white">
                  <i class="bi bi-trash3 me-2"></i>
                  <small>刪除貼文</small>
                </button>
              </div>
            </div>
            <RouterView v-if="currentPostId === post._id" />
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
import postsStore from '@/stores/front/postsStore';
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';
import formatCreatedAt from '@/utils/formatCreatedAt';
import timestampToDate from '@/utils/timestampToDate';
import userPostsStore from '@/stores/front/userPostsStore';

export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  data() {
    return {
      targetUserId: '',
      currentPostId: ''
    }
  },
  created() {
    this.targetUserId = this.$route.params.userId;
  },
  async mounted() {
    await this.getUserPosts(this.targetUserId);
  },
  computed: {
    ...mapState(postsStore, ['userPosts']),
  },
  methods: {
    ...mapActions(postsStore, ['getUserPosts']),
    ...mapActions(userPostsStore, ['deletePost']),
    handleEditPost(currentPostId) {
      this.currentPostId = currentPostId;
      this.$router.push({ name: 'edit-post', params: { postId: currentPostId } })
    },
    handleDeletePost(postId) {
      this.deletePost(postId);
      this.getUserPosts(this.targetUserId);
    },
    formatCreatedAt,
    timestampToDate,
  }
}
</script>