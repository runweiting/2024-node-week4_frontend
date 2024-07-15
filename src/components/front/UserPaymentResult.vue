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
              <span>付款成功</span>
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
      tempOrderId: '',
      tradeInfo: {
        MerchantID: '',
        TradeInfo: '',
        TradeSha: '',
        Version: ''
      },
    }
  },
  mounted() {
    const id = this.$route.query.order;
    console.log('id', id);
    this.tempOrderId = id;
    this.getProfile();
    this.getOrder();
  },
  computed: {
    ...mapState(userUsersStore, ['profile']),
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile']),
    async getOrder() {
      const url = `${VITE_APP_URL}/orders/${this.tempOrderId}`;
      try {
        const res = await this.axios.get(url);
        this.tradeInfo = res.data.data;
        console.log('trade', this.tradeInfo)
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>