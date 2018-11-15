<template>
  <el-breadcrumb class="app-breadcrumb" separator="" separator-class="el-icon-arrow-right" style="float: left;">
    <transition-group name="breadcrumb">
    <el-breadcrumb-item v-for="(item,index) in list" :key="index">
      <span>{{item.meta.title}}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data() {
      return{
        list:null
      }
    },
    watch:{
      $route(){
        this.getBreadcrumb()
      }
    },
    created(){
      this.getBreadcrumb()
    },
    methods:{
      getBreadcrumb(){
        console.log(this.$route)
        let matched = this.$route.matched.filter(item => {
          if(item.name){
            return true
          }
        })
        this.list = matched;
      }
    }
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
