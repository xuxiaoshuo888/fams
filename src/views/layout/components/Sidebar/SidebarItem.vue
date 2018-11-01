<!--此组件未使用-->
<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">
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
  import Item from './Item'

  export default {
    name: 'SidebarItem',
    components: {Item},
    props: {
      item: {
        type: Object,
        require: true
      },
      basePath: {
        type: String,
        default: ''
      }
    },

  }
</script>

<style scoped>

</style>
