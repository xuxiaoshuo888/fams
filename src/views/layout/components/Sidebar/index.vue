<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">


    <el-menu
      :show-timeout="200"
      mode="vertical"
      :router="menu_router"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <!--<div class="" v-for="(route,index) in routes" :key="index" v-if="!route.hidden&&route.children">-->
        <!--&lt;!&ndash;点击不展开,1、没有子路由，2、有一个子路由，3、有子路由但是不展示&ndash;&gt;-->
        <!--<el-menu-item v-if="!route.hidden && (route.children.length === 1)" :index="route.path">-->
          <!--<item :title="route.children[0].meta.title" :icon="route.children[0].meta.icon"></item>-->
        <!--</el-menu-item>-->

        <!--&lt;!&ndash;点击展开，1、子路由展示个数大于等于2&ndash;&gt;-->
        <!--<el-submenu v-if="!route.hidden && (route.children.length > 1)" :index="index + ''">-->
          <!--<template slot="title">-->
            <!--<item :title="route.meta.title" :icon="route.meta.icon"></item>-->
          <!--</template>-->

          <!--<el-menu-item v-if="route.children && route.children" v-for="(i,num) in route.children" :key="num" :index="route.path +'/' +i.path">-->
            <!--<item :title="i.meta.title" :icon="i.meta.icon"></item>-->
          <!--</el-menu-item>-->

        <!--</el-submenu>-->
      <!--</div>-->
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import svgIcon from '@/components/svgIcon/index'
  import Item from './Item'
  import {mapGetters, mapMutations} from 'vuex'
  import SidebarItem from './SidebarItem'

  export default {
    name: 'Sidebar',
    components: {SidebarItem, svgIcon, Item},
    data() {
      return {
        menu_router: true,
        isCollapse: false
      }
    },
    methods: {
      toggle_sidebar1() {
        this.toggle_sidebar()
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      ...mapMutations([
        'toggle_sidebar'
      ]),
      routes() {
        console.log(this.$router.options.routes);
        return this.$router.options.routes
      },
      // isCollapse() {
      //   return !this.sidebar.opened
      // }
    }

  }
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }
</style>
