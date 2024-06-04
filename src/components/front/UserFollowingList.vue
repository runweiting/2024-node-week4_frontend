<template>
  <UserNavbar />
  <div class="container py-12" style="height: 100dvh;">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            追蹤名單
            </div>
          </div>
        </div>
        <div class="row gy-4">
          <div v-for="member in followingList.following" :key="member._id" class="col-12">
            <div class="d-flex gap-2 bg-white rounded border border-2 border-black p-4" style="border-bottom: 4px solid black !important">
              <div class="rounded-circle overflow-hidden" style="width: 45px; height: 45px;">
                <img :src="member.user.photo" :alt="`user-photo-${member.user.name}`" class="object-fit-cover img-fluid" style="height: 45px;">
              </div>
              <div class="d-flex flex-column justify-content-between text-start">
                <span class="noto-sans-tc text-primary fw-bold">{{ member.user.name }}</span>
                <small class="baloo-da-2 text-gray">追蹤時間：{{ formatCreatedAt(member.createdAt).formattedDateAndTime }}</small>
              </div>
              <div class="mt-auto ms-auto">
                <small class="baloo-da-2">您已追蹤{{ formatCreatedAt(member.createdAt).followedDays }}天</small>
              </div>
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
  mounted() {
    this.getFollowingList();
  },
  computed: {
    ...mapState(userUsersStore, ['followingList'])
  },
  methods: {
    ...mapActions(userUsersStore, ['getFollowingList']),
    formatCreatedAt,
    timestampToDate,
  }
}
</script>

<style lang="scss">
.shadow-new-post {
  position: relative;
  z-index: 10;

  &::after {
    position: absolute;
    top: 6px;
    right: 20px;
    z-index: -1;
    display: block;
    width: 556px;
    height: 74px;
    background-color: white;
    border: 2px solid black;
    content: ''
  }
}

</style>