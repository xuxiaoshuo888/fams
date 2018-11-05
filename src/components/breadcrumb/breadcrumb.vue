<template>
  <el-breadcrumb class="app-breadcrumb" separator="/" style="float: left;">
    <transition-group name="breadcrumb">
    <el-breadcrumb-item key="1" :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item key="2">活动管理</el-breadcrumb-item>
    <el-breadcrumb-item key="3">活动列表</el-breadcrumb-item>
    <el-breadcrumb-item key="4">活动详情</el-breadcrumb-item>
    </transition-group>
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
