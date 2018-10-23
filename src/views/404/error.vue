<template>
  <div class="img-center">
    <img src="@/assets/404.png" alt="" class="img">
    <div>
      <router-link to="/dashboard">回到首页</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: '404'
  }
</script>

<style scoped>
  .img {
    width: 100%;
  }

  .img-center {
    width: 50%;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
</style>
