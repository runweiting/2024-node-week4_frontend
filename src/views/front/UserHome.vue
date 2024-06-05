<template>
  <UserNavbar />
  <div class="container py-12">
    <div class="row">
      <RouterView />
      <div class="col-4">
        <UserDashboard />
      </div>
    </div>
  </div>
  
</template>

<script>
import UserNavbar from '@/components/front/UserNavbar.vue';
import UserDashboard from '@/components/front/UserDashboard.vue';

export default {
  components: {
    UserNavbar,
    UserDashboard
  }
}
</script>
