<template>
  <div v-if="tempPost.id" class="row gy-4">
    <div class="col">
      <div class="bg-white rounded border border-2 border-black p-8" style="border-bottom: 4px solid black !important">
        <div class="d-flex flex-column gap-1 mb-4">
          <span>貼文內容</span>
          <textarea v-model="tempPost.content" class="form-control rounded-0 border border-black border-2" placeholder="請輸入內容" aria-label="post-content"></textarea>
        </div>
        <div class="d-flex flex-column gap-1 mb-4">
          <span>圖片網址</span>
          <input v-model="tempPost.image" type="text" class="form-control rounded-0 border border-black border-2" placeholder="請輸入網址" aria-label="imageUrl" aria-describedby="imageUrl">
        </div>
        <div class="mb-4">
          <img :src="tempPost.image" alt="tempImage" class="object-fit-cover img-fluid">
        </div>
        <div class="mb-4">
          <span class="d-block">貼文標籤</span>
          <div v-for="tag in tags" :key="tag" class="form-check form-check-inline">
            <input @change="handleTags(tempPost.tags)" v-model="tempPost.tags" class="form-check-input" type="checkbox" :id="tag" :value="tag">
            <label class="form-check-label" :for="tag">{{ tag }}</label>
          </div>
        </div>
        <button @click="handleUpdatePost(this.tempPost, this.tempPost.id)" type="button" class="btn btn-light-gray py-4 border border-2 border-black w-50">更新貼文</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import postsStore from '@/stores/front/postsStore';
import formatCreatedAt from '@/utils/formatCreatedAt';
import { errorToast } from '@/utils/swalToasts';
import timestampToDate from '@/utils/timestampToDate';
import userPostsStore from '@/stores/front/userPostsStore';

export default {
  data() {
    return {
      tempPost: {
        content: '',
        image: '',
      },
      tags: ['音樂', '運動', '美食', '旅遊', '其他'],
    }
  },
  async created() {
    await this.getPost(this.$route.params.postId);
    this.tempPost = {
      ...this.targetPost
    }
  },
  computed: {
    ...mapState(postsStore, ['targetPost']),
  },
  methods: {
    ...mapActions(postsStore, ['getPost']),
    ...mapActions(userPostsStore, ['updatePost']),
    handleTags(tags) {
      if (tags.length > 3) {
        this.tempPost.tags.pop()
      }
    },
    handleUpdatePost(post, postId) {
      if (!post.content) {
        return errorToast("貼文內容為必填")
      }
      if (!post.image.startsWith('http')) {
        return errorToast("圖片網址錯誤")
      }
      if (post.length === 0) {
        return errorToast("貼文標籤為必填")
      }
      this.updatePost(post.content, post.image, post.tags, postId);
      this.tempPost.content = '';
      this.tempPost.image = '';
      this.tempPost.tags.length = 0;
      this.$router.push({ name: "all" });
      return null
    },
    formatCreatedAt,
    timestampToDate,
  }
}
</script>