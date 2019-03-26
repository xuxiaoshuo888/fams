<template>
  <div>
    <el-header class="header_border" style="height: 50px;">
      <breadcrumb></breadcrumb>
      <span @click="dialogVisible = true" class="help_span">帮助 <i class="el-icon-question"></i></span>
      <el-dropdown class="avatar-container" trigger="click" style="cursor: pointer">
        <div class="avatar-wrapper">
          <!--<img src="" class="user-avatar">-->
          {{currentRole}}<i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <!--帮助链接弹出框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="500px">
      <div slot="title">帮助链接</div>
      <el-row :gutter="20" class="content">
        <el-col :span="12"><span @click="downLoad('/ws/resource/downloadFile?path=/help/word/1a/help.docx')"
                                 style="cursor: pointer;">点击下载操作手册</span></el-col>
        <el-col :span="12"><span @click="downLoad('/ws/resource/downloadFile?path=/help/mv/1a/help.mp4')"
                                 style="cursor: pointer;">点击下载帮助视频</span></el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="dialogVisible = false">关闭</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  import breadcrumb from '@/components/breadcrumb/breadcrumb'
  import {getCurrentRole} from "@/utils/auth";

  export default {
    name: 'Navbar',
    components: {breadcrumb},
    data() {
      return {
        dialogVisible: false,
        currentRole: this.getRole()
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
        if (this.$store.state.user.role) {
          return this.$store.state.user.role.name
        } else {
          return getCurrentRole()
        }
      },
      downLoad(url) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header_border {
    border-bottom: solid 1px #e6e6e6;
    font-size: 12px;
  }

  .help_span {
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    color: rgb(64, 158, 255);
  }

  .content {
    text-align: center;
  }
</style>
