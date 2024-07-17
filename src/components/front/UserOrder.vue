<template>
  <UserNavbar />
  <div class="container py-12">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col shadow-new-post">
            <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold py-5 mb-6 w-100 text-center">
            我的付款
            </div>
          </div>
        </div>
        <div class="row gy-4">
          <div class="rounded-0 bg-white border border-2 border-black azeret-mono fs-5 fw-bold p-10 mb-6">
            <div class="p-4">
              <span>步驟一、選擇預購方案</span>
              <form ref="orderForm" @submit.prevent="createOrder(profile._id)">
                <div class="mb-3">
                  <label for="Amt" class="form-label fs-6 noto-sans-tc">商品數量</label>
                  <input v-model="order.amt" type="number" class="form-control" aria-describedby="amt">
                </div>
                <div class="mb-3">
                  <label for="ItemDesc" class="form-check-label fs-6 noto-sans-tc">商品描述</label>
                  <input v-model="order.itemDesc" type="text" class="form-control" aria-describedby="itemDesc">
                </div>
                <button type="submit" class="btn btn-primary">確認方案</button>
              </form>
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
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';
import userUsersStore from '@/stores/front/userUsersStore';
import { errorToast } from "@/utils/swalToasts";

const { VITE_APP_URL } = import.meta.env;
export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  data() {
    return {
      order: {
        userId: '',
        amt: 1,
        itemDesc: '全年訂閱費用 $999元',
      },
    }
  },
  mounted() {
    this.getProfile();
  },
  computed: {
    ...mapState(userUsersStore, ['profile']),
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile']),
    async createOrder(userId) {
      this.order.userId = userId;
      const url = `${VITE_APP_URL}/orders`;
      try {
        const res = await this.axios.post(url, this.order);
        this.$refs.orderForm.reset();
        this.$router.push({ name: 'payment', query: { order: res.data.data } });
      } catch (err) {
        errorToast(err.response.data.message)
      }
    }
  }
}
</script>