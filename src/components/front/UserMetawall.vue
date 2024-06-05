<template>
  <div class="col-8">
    <div class="row mb-4">
      <div class="col-4">
        <select @input="getPosts(timeSort)" v-model="timeSort" class="form-select rounded-0 border-2 border-black py-3 ps-4 pe-10" aria-label="posts-select">
          <option value="" selected>請選擇順序</option>
          <option value="asc">從新到舊</option>
          <option value="desc">從舊到新</option>
        </select>
      </div>
      <div class="col-8">
        <div class="input-group">
          <input v-model="keyword" type="text" class="form-control rounded-0 border-2 border-black py-3 px-4" placeholder="搜尋貼文" aria-label="搜尋貼文" aria-describedby="搜尋貼文">
          <button @click="handleSearchPosts(keyword)" class="btn btn-primary rounded-0 px-4" type="button"><i class="bi bi-search text-white fs-4"></i></button>
        </div>
      </div>
    </div>
    <!-- 動態牆-無動態 -->
    <div v-if="!postsList.length" class="row">
      <div class="col">
        <div class="bg-white rounded border border-2 border-black" style="border-bottom: 4px solid black !important">
          <div class="d-flex align-items-center gap-2 border-bottom border-2 border-black p-4 w-100" style="height: 52px;">
            <div class="rounded border border-black border-1 bg-danger" style="width: 10px; height: 10px;"></div>
            <div class="rounded border border-black border-1 bg-warning" style="width: 10px; height: 10px;"></div>
            <div class="rounded border border-black border-1 bg-success" style="width: 10px; height: 10px;"></div>
          </div>
          <div class="text-center py-8" style="height: 80px;">
            <p class="text-gray">目前尚無動態，新增一則貼文吧！</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 動態牆-有動態 -->
    <div v-if="postsList.length" class="row gy-6">
      <div v-for="post in postsList" :key="post.id" class="col-12">
        <div class="bg-white rounded border border-2 border-black p-6" style="border-bottom: 4px solid black !important">
          <!-- Vue 的條件渲染機制：通過在模板中使用 v-if 和 v-for 等指令來進行渲染，防止在數據未加載完成時嘗試訪問未定義的屬性而導致的錯誤 -->
          <RouterLink v-if="post.user" :to="{ name: 'user', params: { id: post.user._id } }" class="d-flex gap-2 mb-4 text-black text-decoration-none">
            <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
              <img :src="post.user.photo" :alt="`user-photo-${post.user.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
            </div>
            <div class="d-flex flex-column justify-content-between text-start">
              <span class="noto-sans-tc text-primary fw-bold">{{ post.user.name }}</span>
              <small class="baloo-da-2 text-gray">{{ formatCreatedAt(post.createdAt).formattedDateAndTime }}</small>
            </div>
          </RouterLink>
          <p class="noto-sans-tc mb-4">{{ post.content }}
          </p>
          <img :src="post.image" :alt="`photo-${post.image}`" class="object-fit-cover img-fluid rounded border border-2 border-black mb-2">
          <div class="d-flex gap-2 mb-5">
            <span v-for="(tag, index) in post.tags" :key="index" class="badge rounded-pill bg-secondary text-black noto-sans-tc border border-2 border-black">{{ tag }}</span>
          </div>
          <div class="d-flex align-items-center mb-5">
            <div v-if="post.likes.length" class="d-flex align-items-center gap-2">
              <div class="rounded-circle overflow-hidden bg-primary position-relative" style="width: 24px; height: 24px;">
                <i class="bi bi-hand-thumbs-up-fill text-white position-absolute top-50 start-50 translate-middle"></i>
              </div>
              <small class="noto-sans-tc">{{ post.likes[0].user.name }} 和其他 {{ post.likes.length - 1 }}人按讚</small>
            </div>
            <div class="ms-auto">
              <div class="d-flex align-items-center gap-2">
                <button @click="handleLikePost('metawall', post._id, profile._id, null)" type="button" class="btn p-0">
                  <i :class="isLiked(post, profile._id) ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'" class="fs-5 text-primary"></i>
                </button>
                <span class="baloo-da-2 fw-bold">{{ post.likes.length }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-start gap-2 mb-4 w-100">
            <div v-if="profile._id" class="rounded-circle overflow-hidden" style="width: 40px; height: 40px;">
              <img :src="profile.photo" :alt="`user-photo-${profile.name}`" class="object-fit-cover img-fluid" style="height: 40px;">
            </div>
            <!-- 對話框自動調整高度
              resize: none; overflow: hidden;"，避免使用者手動改變輸入框大小，並隱藏滾動條
              rows="1" 設置初始高度
              @input="adjustHeight" 設置事件監聽，每當輸入框內容變更時呼叫 adjustHeight，將高度設為 auto，然後根據 scrollHeight 設置新的高度，確保輸入框高度能夠適應內容的變化
            -->
            <!-- Flexbox 首先佈局固定寬度的元素 (40px)，將剩餘空間根據 flex 屬性 flex: 3 和 flex: 1 分配剩餘寬度給其他元素 -->
            <textarea ref="commentTextarea" v-model="comment" class="form-control rounded border-2 border-black py-2 px-4" placeholder="留言..." aria-label="留言" aria-describedby="留言" rows="1" style="flex: 3; overflow: hidden; resize: none;" @input="adjustTextareaHeight"></textarea>
            <button @click="handleCreateComment(post._id, comment)" class="btn btn-warning rounded border-2 border-primary px-4 py-2" type="button" style="flex: 1">留言</button>
          </div>
          <div class="row px-4 gy-4">
            <div v-for="comment in post.comments" :key="comment._id" class="col-12 rounded p-4" style="background-color: rgb(239 236 231 / 50%);">
              <div class="d-flex align-items-center gap-2 mb-1">
                <div class="rounded-circle overflow-hidden" style="width: 40px; height: 40px;">
                  <img :src="comment.user.photo" :alt="`user-photo-${comment.user.name}`" class="object-fit-cover img-fluid" style="height: 40px;">
                </div>
                <div class="d-flex flex-column justify-content-between text-start">
                  <span class="noto-sans-tc text-primary fw-bold">{{ comment.user.name }}</span>
                  <small class="baloo-da-2 text-gray">{{ formatCreatedAt(comment.createdAt).formattedDateAndTime }}</small>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="ms-12 mb-1" style="width: 85%">{{ comment.comment }}</p>
                <div class="mt-auto">
                  <button @click="handleDeleteComment(comment._id, comment.user._id, profile._id)" type="button" class="btn p-0"><i class="bi bi-trash3 text-primary"></i></button>
                </div>
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
import userUsersStore from '@/stores/front/userUsersStore';
import userCommentsStore from '@/stores/front/userCommentsStore';
import userLikesStore from '@/stores/front/userLikesStore';
import { warningToast } from '@/utils/swalToasts';
import formatCreatedAt from '@/utils/formatCreatedAt';

export default {
  data() {
    return {
      timeSort: '',
      keyword: '',
      comment: '',
    }
  },
  mounted() {
    this.getPosts();
    this.getProfile();
  },
  computed: {
    ...mapState(postsStore, ['postsList']),
    ...mapState(userUsersStore, ['profile']),
  },
  methods: {
    ...mapActions(postsStore, ['getPosts']),
    ...mapActions(userUsersStore, ['getProfile']),
    ...mapActions(userCommentsStore, ['createComment', 'deleteComment']),
    ...mapActions(userLikesStore, ['handleLikePost', 'isLiked', 'likePost', 'unlikePost']),
    handleSearchPosts(keyword) {
      this.getPosts("asc", keyword);
    },
    handleCreateComment(postId, comment) {
      this.createComment(postId, comment);
      this.comment = '';
      this.resetTextareaHeight();
      this.getPosts();
    },
    handleDeleteComment(commentId, commentUserId, profileId) {
      if (commentUserId !== profileId) {
        warningToast('無法刪除他人留言')
      } else {
        this.deleteComment(commentId).then(() => this.getPosts())
      }
    },
    adjustTextareaHeight(event) {
      const textarea = event.target;
      if (textarea) {
        // scrollHeight 可返回元素內容的高度
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    },
    resetTextareaHeight() {
      const textarea = this.$refs.commentTextarea;
      if (textarea) {
        textarea[0].style.height = '1rem';
      }
    },
    formatCreatedAt,
  }
}
</script>