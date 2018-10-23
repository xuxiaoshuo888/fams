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
            <i class="el-icon-menu"></i>
            <span slot="title">{{route.meta.title}}</span>
          </el-menu-item>
          <!--点击展开，1、子路由展示个数大于等于2-->
          <el-submenu v-if="!route.hidden && (route.children.length > 1)" :index="index + ''">
            <template slot="title"><i class="el-icon-menu"></i>{{route.meta.title}}</template>
            <el-menu-item-group>
              <el-menu-item v-for="(i,num) in route.children" :key="num" :index="route.path +'/' +i.path">{{i.meta.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
        <!--<el-menu-item index="0" @click="print">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">班级课程表</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="1" @click="printa">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">班级学生信息</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="2">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">男女国籍统计表</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="3">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">班级学生照片</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="4">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">班干部情况</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="5">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">护照及居留许可统计</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="6">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">临住登记统计</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="7">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">留学生日常动态</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="8">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">费用缴纳登记</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="9">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">查课记录表</span>-->
        <!--</el-menu-item>-->
        <!--<el-submenu index="11">-->
          <!--<template slot="title"><i class="el-icon-menu"></i>寝室管理登记</template>-->
          <!--<el-menu-item-group>-->
            <!--<el-menu-item index="2-1">查寝</el-menu-item>-->
            <!--<el-menu-item index="2-2">报修</el-menu-item>-->
            <!--<el-menu-item index="2-2">财产</el-menu-item>-->
          <!--</el-menu-item-group>-->
        <!--</el-submenu>-->
        <!--<el-submenu index="12">-->
          <!--<template slot="title"><i class="el-icon-menu"></i>班会</template>-->
          <!--<el-menu-item-group>-->
            <!--<el-menu-item index="2-1">班会记录表</el-menu-item>-->
            <!--<el-menu-item index="2-2">班会签到表</el-menu-item>-->
          <!--</el-menu-item-group>-->
        <!--</el-submenu>-->
        <!--<el-submenu index="13">-->
          <!--<template slot="title"><i class="el-icon-menu"></i>素质评分</template>-->
          <!--<el-menu-item-group>-->
            <!--<el-menu-item index="2-1">素质评分登记</el-menu-item>-->
            <!--<el-menu-item index="2-2">素质评分事项维护</el-menu-item>-->
          <!--</el-menu-item-group>-->
        <!--</el-submenu>-->
        <!--<el-menu-item index="14">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">违纪违规学生教育登记</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="15">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">心理健康谈话记录</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="16">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">特殊群体学生基本情况</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="17">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">保险购买以及理赔</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="18">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">班主任日常工作记录</span>-->
        <!--</el-menu-item>-->
      </el-menu>
    </el-aside>
</template>

<script>
  import SidebarItem from './SidebarItem'
  export default {
    name: 'Sidebar',
    components:{SidebarItem},
    data(){
      return {
        menu_router:true
      }
    },
    methods: {

    },
    computed:{
      routes() {
        console.log(this.$router.options.routes);
        return this.$router.options.routes
      }
    }

  }
</script>

<style lang="scss" scoped>
.el-menu{
  border-right: none;
}
</style>
