<template>
  <el-aside width="200px" style="">
    <el-menu
      :show-timeout="200"
      mode="vertical"
      :router="menu_router"
    >
      <!--<sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>-->
      <div v-for="(route,index) in routes" :key="index" v-if="!route.hidden&&route.children">
        <!--点击不展开,1、没有子路由，2、有一个子路由，3、有子路由但是不展示-->
        <el-menu-item v-if="!route.hidden && (route.children.length === 1)" :index="route.path">
          <item :title="route.meta.title" :icon="route.meta.icon"></item>
        </el-menu-item>
        <!--点击展开，1、子路由展示个数大于等于2-->
        <el-submenu v-if="!route.hidden && (route.children.length > 1)" :index="index + ''">
          <template slot="title">
            <!--{{route.meta.title}}-->
            <item :title="route.meta.title" :icon="route.meta.icon"></item>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(i,num) in route.children" :key="num" :index="route.path +'/' +i.path">
              <item :title="i.meta.title" :icon="i.meta.icon"></item>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>

    </el-menu>
  </el-aside>
</template>

<script>
  import svgIcon from '@/components/svgIcon/index'
  import Item from './Item'

  export default {
    name: 'Sidebar',
    components: {svgIcon,Item},
    data() {
      return {
        menu_router: true
      }
    },
    methods: {},
    computed: {
      routes() {
        console.log(this.$router.options.routes);
        return this.$router.options.routes
      }
    }

  }
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }
</style>
