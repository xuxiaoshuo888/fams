<!--此组件未使用-->
<template>
  <div>
    <!--子路由只有一个-->
    <el-menu-item index="9">
      <i class="el-icon-menu"></i>
      <span slot="title">查课记录表</span>
    </el-menu-item>
    <!--子路由大于一个-->
    <el-submenu index="11">
      <template slot="title"><i class="el-icon-menu"></i>寝室管理登记</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">查寝</el-menu-item>
        <el-menu-item index="2-2">报修</el-menu-item>
        <el-menu-item index="2-2">财产</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props:{
      item:{type:Object,require:true}
    },

  }
</script>

<style scoped>

</style>
