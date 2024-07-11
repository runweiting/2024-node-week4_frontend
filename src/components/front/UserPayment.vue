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
              <form id="paymentForm" ref="paymentForm" @submit.prevent="createPayment">
                <small>建立 document</small>
                <div class="mb-3">
                  <label for="payment" class="form-label fs-6 noto-sans-tc">付款方式</label>
                  <input v-model="tempOrder.payment" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label fs-6 noto-sans-tc">收件地址</label>
                  <input v-model="tempOrder.address" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label fs-6 noto-sans-tc">收件人</label>
                  <input v-model="tempOrder.name" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label fs-6 noto-sans-tc">聯絡電話</label>
                  <input v-model="tempOrder.phone" type="text" class="form-control" />
                </div>
                <button @click="createPayment" type="button" class="btn btn-primary">立即付款</button>
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
      tempOrder: {
        payment: '',
        address: '',
        name: '',
        phone: ''
      },
    }
  },
  mounted() {
    const { id } = this.$route.params;
    this.tempOrderId = id;
    this.getProfile();
  },
  computed: {
    ...mapState(userUsersStore, ['profile']),
  },
  methods: {
    ...mapActions(userUsersStore, ['getProfile']),
    async createPayment() {
      const url = `${VITE_APP_URL}/payment`;
      try {
        const res = await this.axios.post(url, { id: this.tempOrderId });
        const paymentFormHtml = res.data;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = paymentFormHtml;
        document.body.appendChild(tempDiv);
        tempDiv.querySelector('paymentForm').submit();
        this.$refs.paymentForm.reset();
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>