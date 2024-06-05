<template>
  <div v-if="targetPost._id" class="row gy-4">
    <div class="col-12">
      <div class="bg-white rounded border border-2 border-black p-6" style="border-bottom: 4px solid black !important">
        <div class="d-flex gap-2 mb-4">
          <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
            <img :src="targetPost.user.photo" :alt="`user-photo-${targetPost.user.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
          </div>
          <div class="d-flex flex-column justify-content-between text-start">
            <span class="noto-sans-tc text-primary fw-bold">{{ targetPost.user.name }}</span>
            <small class="baloo-da-2 text-gray">{{ formatCreatedAt(targetPost.createdAt).formattedDateAndTime }}</small>
          </div>
          <div class="ms-auto">
            <button @click="closeLikedPost" type="button" class="btn p-0">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
        </div>
        <p class="noto-sans-tc mb-4">{{ targetPost.content }}
        </p>
        <img :src="targetPost.image" :alt="`photo-${targetPost.image}`" class="object-fit-cover img-fluid rounded border border-2 border-black mb-2">
        <div class="d-flex gap-2 mb-5">
          <span v-for="(tag, index) in targetPost.tags" :key="index" class="badge rounded-pill bg-secondary text-black noto-sans-tc border border-2 border-black">{{ tag }}</span>
        </div>
        <div class="d-flex align-items-center mb-5">
          <div v-if="targetPost.likes" class="d-flex align-items-center gap-2">
            <div class="rounded-circle overflow-hidden bg-primary position-relative" style="width: 24px; height: 24px;">
              <i class="bi bi-hand-thumbs-up-fill text-white position-absolute top-50 start-50 translate-middle"></i>
            </div>
            <small class="noto-sans-tc">{{ targetPost.likes[0].user.name }} 和其他 {{ targetPost.likes.length - 1 }}人按讚</small>
          </div>
        </div>
        <div class="row px-4 gy-4">
          <div v-for="comment in targetPost.comments" :key="comment._id" class="col-12 rounded p-4" style="background-color: rgb(239 236 231 / 50%);">
            <div class="d-flex align-items-center gap-2 mb-1">
              <div class="rounded-circle overflow-hidden" style="width: 40px; height: 40px;">
                <img :src="comment.user.photo" :alt="`user-photo-${comment.user.name}`" class="object-fit-cover img-fluid" style="height: 40px;">
              </div>
              <div class="d-flex flex-column justify-content-between text-start">
                <span class="noto-sans-tc text-primary fw-bold">{{ comment.user.name }}</span>
                <small class="baloo-da-2 text-gray">{{ formatCreatedAt(comment.createdAt).formattedDateAndTime }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import postsStore from '@/stores/front/postsStore';
import userCommentsStore from '@/stores/front/userCommentsStore';
import userUsersStore from '@/stores/front/userUsersStore';
import userLikesStore from '@/stores/front/userLikesStore';
import formatCreatedAt from '@/utils/formatCreatedAt';
import timestampToDate from '@/utils/timestampToDate';

export default {
  async created() {
    await this.getPost(this.$route.params.id);
    await this.getProfile();
  },
  computed: {
    ...mapState(postsStore, ['targetPost']),
    ...mapState(userUsersStore, ['profile'])
  },
  methods: {
    ...mapActions(postsStore, ['getPost']),
    ...mapActions(userUsersStore, ['getProfile']),
    ...mapActions(userLikesStore, ['handleLikePost', 'isLiked']),
    ...mapActions(userCommentsStore, ['deleteComment']),
    closeLikedPost() {
      this.$router.push({ name: 'liked-posts' })
    },
    formatCreatedAt,
    timestampToDate,
  }
}
</script>