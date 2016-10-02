<template>
  <div id="app">
    <blog-header></blog-header>

    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Index from './components/IndexComponent.vue';
import Login from './components/LoginComponent.vue';
import BlogHeader from './components/HeaderComponent.vue';

export default {
  components: {
    Index,
    Login,
    BlogHeader
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
  }
</style>
