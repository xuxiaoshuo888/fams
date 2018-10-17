<template>
    <el-aside width="200px" style="">
      <el-menu>
        <el-menu-item index="0" @click="print">
          <i class="el-icon-menu"></i>
          <span slot="title">班级课程表</span>
        </el-menu-item>
        <el-menu-item index="1" @click="printa">
          <i class="el-icon-menu"></i>
          <span slot="title">班级学生信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">男女国籍统计表</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">班级学生照片</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">班干部情况</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">护照及居留许可统计</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">临住登记统计</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-menu"></i>
          <span slot="title">留学生日常动态</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-menu"></i>
          <span slot="title">费用缴纳登记</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-menu"></i>
          <span slot="title">查课记录表</span>
        </el-menu-item>
        <el-submenu index="11">
          <template slot="title"><i class="el-icon-menu"></i>寝室管理登记</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">查寝</el-menu-item>
            <el-menu-item index="2-2">报修</el-menu-item>
            <el-menu-item index="2-2">财产</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="12">
          <template slot="title"><i class="el-icon-menu"></i>班会</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">班会记录表</el-menu-item>
            <el-menu-item index="2-2">班会签到表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="13">
          <template slot="title"><i class="el-icon-menu"></i>素质评分</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">素质评分登记</el-menu-item>
            <el-menu-item index="2-2">素质评分事项维护</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="14">
          <i class="el-icon-menu"></i>
          <span slot="title">违纪违规学生教育登记</span>
        </el-menu-item>
        <el-menu-item index="15">
          <i class="el-icon-menu"></i>
          <span slot="title">心理健康谈话记录</span>
        </el-menu-item>
        <el-menu-item index="16">
          <i class="el-icon-menu"></i>
          <span slot="title">特殊群体学生基本情况</span>
        </el-menu-item>
        <el-menu-item index="17">
          <i class="el-icon-menu"></i>
          <span slot="title">保险购买以及理赔</span>
        </el-menu-item>
        <el-menu-item index="18">
          <i class="el-icon-menu"></i>
          <span slot="title">班主任日常工作记录</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
  export default {
    name: 'Sidebar',
    data(){
      return {
        SidebarList:this.$router.options.routes
      }
    },
    methods: {
      print(){
        console.log(this.$router);
        console.log(this.$route);
      },
      printa(){
        console.log()
        this.$router.push('/stdInfo');
      }
    }

  }
</script>

<style lang="scss" scoped>
.el-menu{
  border-right: none;
}
</style>
