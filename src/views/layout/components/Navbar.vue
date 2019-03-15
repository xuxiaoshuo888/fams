<template>
  <div>
    <el-header class="header_border" style="height: 50px;">
      <breadcrumb></breadcrumb>
      <!--<el-dropdown>-->
      <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
      <!--<el-dropdown-menu slot="dropdown">-->
      <!--<el-dropdown-item>查看</el-dropdown-item>-->
      <!--<el-dropdown-item>新增</el-dropdown-item>-->
      <!--<el-dropdown-item>删除</el-dropdown-item>-->
      <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
      <!--<span>王小虎</span>-->
      <span @click="dialogVisible = true" class="help_span">帮助 <i class="el-icon-question"></i></span>
      <el-dropdown class="avatar-container" trigger="click" style="cursor: pointer">
        <div class="avatar-wrapper">
          <!--<img src="" class="user-avatar">-->
          {{currentRole.name}}<i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <!--<router-link class="inlineBlock" to="/">-->
          <!--<el-dropdown-item>Home</el-dropdown-item>-->
          <!--</router-link>-->

          <el-dropdown-item>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="500px">
      <div slot="title">帮助链接</div>
      <el-row :gutter="20" class="content">
        <el-col :span="12"><a href="http://www.baidu.com" style="cursor: pointer;">点击下载操作手册</a></el-col>
        <el-col :span="12"><a href="http://www.baidu.com" style="cursor: pointer;">点击下载帮助视频</a></el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="dialogVisible = false">关闭</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  import breadcrumb from '@/components/breadcrumb/breadcrumb'


  export default {
    name: 'Navbar',
    components: {breadcrumb},
    data() {
      return {
        dialogVisible:false,
        currentRole:this.$store.state.user.role
      }
    },
    mounted() {
      this.getRole()
    },
    methods: {
      logout() {
        this.$store.dispatch('LogOut').then(() => {
            location.reload()
          }
        )
      },
      getRole() {
        let a = this.$store.state.user.role
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header_border {
    border-bottom: solid 1px #e6e6e6;
    font-size: 12px;
  }
  .help_span{
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    color: rgb(64, 158, 255);
  }
  .content{
    text-align: center;
  }
</style>
