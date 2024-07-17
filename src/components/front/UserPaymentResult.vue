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
              <span>{{ paidOrder.status }}</span>
              <span>訂單編號：{{ paidOrder.merchantOrderNo }}</span>
              <span>商品數量：{{ paidOrder.amt }}</span>
              <span>商品描述：{{ paidOrder.itemDesc }}</span>
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
// import { errorToast } from "@/utils/swalToasts";

const { VITE_APP_URL } = import.meta.env;

export default {
  components: {
    UserNavbar,
    UserDashboard
  },
  data() {
    return {
      paidOrderId: '',
      paidOrder: {
        amt: '',
        itemDesc: '',
        isPaid: '',
        merchantOrderNo: '',
        status: '確認付款狀態中...'
      }
    }
  },
  created() {
    this.paidOrderId = this.$route.params.id;
  },
  mounted() {
    this.getProfile();
    this.checkOrderStatus(this.paidOrderId);
  },
  computed: {
    ...mapState(userUsersStore, ['profile']),
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile']),
    async checkOrderStatus(orderId) {
      const url = `${VITE_APP_URL}/orders/status/${orderId}`
      try {
        const res = await this.axios.get(url);
        this.paidOrder = res.data.data;
        if (this.paidOrder.isPaid) {
          this.paidOrder.status = '付款成功'
        } else {
          this.paidOrder.status = '訂單尚未付款';
        }
      } catch (err) {
        this.message = '查詢訂單狀態失敗，請稍後重試。';
        console.error('查詢訂單狀態失敗:', err);
      }
    },
  }
}
</script>