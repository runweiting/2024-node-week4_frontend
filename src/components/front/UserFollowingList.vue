<template>
  <UserNavbar />
  <div class="container py-12">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            我的追蹤名單
            </div>
          </div>
        </div>
        <div v-if="!followingList.length" class="row gy-4">
          <div class="col-12">
            <div class="bg-white rounded border border-2 border-black p-4 text-center" style="border-bottom: 4px solid black !important">
              <p class="text-gray mb-0">目前尚無追蹤名單，追蹤一個使用者吧！</p>
            </div>
          </div>
        </div>
        <div v-else class="row gy-4">
          <div v-for="member in followingList" :key="member._id" class="col-12">
            <div class="bg-white rounded border border-2 border-black p-4" style="border-bottom: 4px solid black !important">
              <RouterLink v-if="member._id" :to="{ name: 'user', params: { id: member._id } }" class="d-flex gap-2 text-black text-decoration-none">
                <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
                  <img :src="member.photo" :alt="`user-photo-${member.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
                </div>
                <div class="d-flex flex-column justify-content-between text-start">
                  <span class="noto-sans-tc text-primary fw-bold">{{ member.name }}</span>
                  <small class="baloo-da-2 text-gray">追蹤時間：{{ formatCreatedAt(member.createdAt).formattedDateAndTime }}</small>
                </div>
                <div class="mt-auto ms-auto">
                  <small class="baloo-da-2">您已追蹤 {{ formatCreatedAt(member.createdAt).followedDays }} 天</small>
                </div>
              </RouterLink>
            </div>
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
import userFollowersStore from '@/stores/front/userFollowersStore';
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';
import formatCreatedAt from '@/utils/formatCreatedAt';
import timestampToDate from '@/utils/timestampToDate';

export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  mounted() {
    this.getFollowingList();
  },
  computed: {
    ...mapState(userFollowersStore, ['followingList'])
  },
  methods: {
    ...mapActions(userFollowersStore, ['getFollowingList']),
    formatCreatedAt,
    timestampToDate,
  }
}
</script>