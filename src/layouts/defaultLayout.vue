<template>
  <div class="main">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>

<style></style>
