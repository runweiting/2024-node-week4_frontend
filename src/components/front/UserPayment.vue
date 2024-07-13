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
              <span>步驟二、填寫付款方式</span>
              <form :action="tradeInfo.PayGateWay" method="post">
                <small>發出藍新API請求</small>
                <div class="mb-3">
                  <label for="MerchantID" class="form-label fs-6 noto-sans-tc">MerchantID</label>
                  <input v-model="tradeInfo.MerchantID" type="text" class="form-control" name="MerchantID" />
                </div>
                <div class="mb-3">
                  <label for="TradeInfo" class="form-label fs-6 noto-sans-tc">TradeInfo</label>
                  <input v-model="tradeInfo.TradeInfo" type="text" class="form-control" name="TradeInfo" />
                </div>
                <div class="mb-3">
                  <label for="TradeSha" class="form-label fs-6 noto-sans-tc">TradeSha</label>
                  <input v-model="tradeInfo.TradeSha" type="text" class="form-control" name="TradeSha" />
                </div>
                <div class="mb-3">
                  <label for="Version" class="form-label fs-6 noto-sans-tc">Version</label>
                  <input v-model="tradeInfo.Version" type="text" class="form-control" name="Version" />
                </div>
                <button type="submit" class="btn btn-primary">立即付款</button>
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