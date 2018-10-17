<template>
  <el-main class="el-main-1">
    <!--<div class="breadcrumb">-->
      <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
        <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
      <!--</el-breadcrumb>-->
    <!--</div>-->
    <!--<div class="main">-->
      <!--<el-table :data="tableData">-->
        <!--<el-table-column prop="date" label="日期" width="140">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="name" label="姓名" width="120">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="address" label="地址">-->
        <!--</el-table-column>-->
      <!--</el-table>-->
    <!--</div>-->
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </el-main>
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
        return this.$route.fullPath;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-main-1{
    padding: 0;
    min-height: calc(100vh - 50px);
    border-left: 1px solid #e6e6e6;
    background-color: white;
  }
  .breadcrumb{
    padding: 20px;
    background-color: white;
    border-bottom: solid 1px #e6e6e6;
  }
  .main{
    padding:0 20px;
    background-color: white;
  }
</style>
