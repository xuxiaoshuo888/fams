<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(3).fill(item)
      }
    },
    computed: {
      key() {
        console.log(this.$route);
        return this.$route.name + +new Date();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 80px);
    position: relative;
    overflow: hidden;
  }
</style>
