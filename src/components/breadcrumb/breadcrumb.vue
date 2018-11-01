<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <!--<transition-group name="breadcrumb">-->
      <el-breadcrumb-item :to="{ path: '/' }">

      </el-breadcrumb-item>
    <!--</transition-group>-->
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'breadcrumb'
  }
</script>

<style lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
