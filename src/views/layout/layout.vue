<template>
  <div class="layout">
    <el-container style="border: 1px solid #eee">
      <!--顶部header-->
      <el-header class="header1">
        <img src="@/assets/logo-black.jpg">
        <div>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-header>
      <el-container class="container2">
        <!--左侧侧边栏-->
        <sidebar></sidebar>
        <!--右侧主体内容(含面包屑)-->
        <app-main></app-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {Navbar, Sidebar, AppMain} from './components'

  export default {
    name: 'layout',
    components: {Navbar, Sidebar, AppMain},
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(30).fill(item)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .container2 {
    /*height: calc(100vh - 80px);*/
    overflow: hidden;
  }

  .header1 {
    border-bottom: solid 1px #e6e6e6;
    display: flex;
    justify-content: space-between;
  }
</style>
