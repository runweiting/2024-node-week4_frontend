<template>
    <main>
      <RouterView />
    </main>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style>
* {
  outline: 1px solid yellowgreen
}
</style>
