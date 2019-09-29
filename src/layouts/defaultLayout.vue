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

<style lang="scss" scoped>
.main{
  position: relative;
  width:1200px;
  height: 100%;
  margin:0 auto;
  overflow: hidden;
}
</style>
