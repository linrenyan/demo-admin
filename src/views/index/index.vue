<template>
  <div class="index">
    <hello-world msg="Welcome to Your Vue.js App"/>
    <el-button type="primary">按钮</el-button>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'index',
  components: {
    HelloWorld
  }
}
</script>