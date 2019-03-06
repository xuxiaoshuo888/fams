<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="姓"
          size="mini"
          clearable
          v-model="xm_x">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="名"
          size="mini"
          clearable
          v-model="xm_m">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学号"
          size="mini"
          clearable
          v-model="xh">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="专业"
          size="mini"
          v-model="zy"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学院"
          size="mini"
          v-model="xy"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="年级"
          size="mini"
          v-model="nj"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getStdList">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-upload2" @click="dialogVisible1 = true">导入</el-button>
        <el-button type="primary" size="mini" icon="el-icon-download" @click="optExport">导出</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span=4 class="left_tree">
        <el-tree :data="tree_data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="20">
        <div class="table_block" v-if="table_pic_flag">
          <el-table
            :data="table_list"
            style=""
            max-height="768"
            border
            stripe>
            <el-table-column
              prop="xm_x"
              label="姓"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="xm_m"
              label="名"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="xh"
              label="学号"
              width="120"
              header-align="center"
              align="center">
            </el-table-column>
            <!--<el-table-column-->
            <!--prop="xy"-->
            <!--label="学院"-->
            <!--width=""-->
            <!--header-align="center"-->
            <!--align="center">-->
            <!--</el-table-column>-->
            <el-table-column
              prop="nj"
              label="年级"
              width="80"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="bj"
              label="班级"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <!--<el-table-column-->
            <!--prop="mz"-->
            <!--label="民族"-->
            <!--width="120"-->
            <!--header-align="center"-->
            <!--align="center">-->
            <!--</el-table-column>-->
            <el-table-column
              prop="gb"
              label="国籍"
              width="150"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
          <!--分页-->
          <div class="pagination-block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              @prev-click="prev"
              @next-click="next"
              :current-page="pageNum"
              :page-sizes="[10, 20, 50]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next,jumper"
              :total="records">
            </el-pagination>
          </div>
        </div>

        <div class="pic_block" v-else v-for="(item,index) in pic_list" @click="whitchPic(item,index)">
          <el-upload
            class="avatar-uploader"
            action="/ws/upload/uploadFile"
            :id="item.id"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" alt="暂无照片信息" :src="'/ws/resource/showImg?path=' + item.zp" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓：{{item.xm_x}}</div>
          <div class="pic_name">名：{{item.xm_m}}</div>
          <div class="pic_xh">学号：{{item.xh}}</div>
        </div>
        <!--仅展示照片时，无数据提示-->
        <div v-if="!table_pic_flag && pic_list.length == 0">暂无数据</div>
      </el-col>
    </el-row>


    <!--导入的模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible1"
      width="900px">
      <div slot="title">数据导入</div>
      <div>
        <!--<div class="daoru_block borderBottom">-->
        <!--<header>导入说明：</header>-->
        <!--<div class="">本系统支持xls,xlsx格式，请确保表格中的数据不含有空格等特殊符号，标准格式请参考【<a href="#" target="_blank">导入模板</a>】</div>-->
        <!--</div>-->
        <div class="daoru_block borderBottom">
          <header>文件上传：</header>
          <div class="">
            <el-upload
              class="upload-block"
              drag
              :limit='1'
              :multiple="multiple"
              action="/ws/student/upload"
              :on-success="handleAvatarSuccess1"
              :before-upload="beforeAvatarUpload1">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传zip压缩文件，且不超过1000kb、照片命名格式为：学号.png</div>
            </el-upload>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible1 = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'stdpic',
    data() {
      return {
        xm_x: '',
        xm_m:'',
        xh: '',
        zy: '',
        xy: '',
        bj: '',
        nj: '',
        dw_id: '',//当前选中的学校/学院/班级的id
        dw_leaf:false,//是否是最后的一级
        pic_std_id: '',//选中照片的学生的id
        imageUrl: [],
        dialogVisible1: false,
        table_pic_flag: true,//false-照片，true-表格
        pageNum: 1,
        pageSize: null,
        records: null,
        tree_data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        table_list: [],//学校/学院/展示的表格
        pic_list: [],//班级展示的图片列表
        multiple: false,//false不支持多选
      };
    },
    mounted() {
      this.getTree()
      this.getStdList()
    },
    methods: {
      getTree() {
        this.request.post('/ws/dept/getTree').then(res => {
          this.tree_data = res.data.data
        })
      },
      getStdList() {//leaf   true-是叶子
        this.request.post('/ws/student/page', {
          xyId: this.dw_id,
          xm_x: this.xm_x,
          xm_m: this.xm_m,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          nj: this.nj,
          page: this.pageNum,
          limit: this.pageSize
        }).then(res => {
          if (!this.table_pic_flag) {//照片
            this.pic_list = res.data.page.rows
          } else {//表格
            this.table_list = res.data.page.rows
          }
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      handleAvatarSuccess(res, file, fileList) {
        console.log(res)
        console.log(file)
        console.log(fileList)
        this.imageUrl = URL.createObjectURL(file.raw);
        this.request.post('/ws/student/edit', {
          id: this.pic_std_id,
          zp: res.data.path
        }).then(res => {
          this.$message({
            type: 'success',
            message: res.errmsg
          })
          this.getStdList()
        })
      },
      beforeAvatarUpload(file) {
        console.log(file)
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
      },
      handleAvatarSuccess1(res, file, fileList) {
        console.log(res)//后台返回的数据
        if (res.errcode === '0') {
          this.$message({
            type: 'success',
            message: res.errmsg
          })
        } else {
          this.$message({
            type: 'warning',
            message: res.errmsg
          })
        }
      },
      beforeAvatarUpload1(file) {
        console.log(file)
        const isZip = file.type === 'application/x-zip-compressed'
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
          this.$message.error('上传文件只能是zip格式文件');
        }
        if (!isLt10M) {
          this.$message.error('上传文件大小不能超过 10MB!');
        }
        return (isZip) && isLt10M;
      },
      handleNodeClick(e) {//点击tree触发回调
        console.log(e)
        this.dw_id = e.id
        this.dw_leaf = e.leaf
        if (e.leaf) {//照片
          this.table_pic_flag = false
          this.pageSize = 100
        } else {//table
          this.table_pic_flag = true
          this.pageSize = 10
        }
        this.getStdList()
      },
      //分页相关方法
      handleSizeChange(e) {
        this.pageSize = e
        this.getStdList()
      },
      handleCurrentChange(e) {
        this.pageNum = e
        this.getStdList()
      },
      prev() {
        this.pageNum = this.pageNum - 1
      },
      next() {
        this.pageNum = this.pageNum + 1
      },
      whitchPic(item, index) {//选中某个照片
        this.pic_std_id = item.id
      },
      optExport() {
          if(this.dw_id && this.dw_leaf){
            window.open('/ws/student/imgExport?id=' + this.dw_id, '_blank')
          }else{
            this.$message.info('请选择具体的班级后，再点击导出。');
          }
      },
      reset() {//重置搜索条件
        this.xh = ''
        this.xm_x = ''
        this.xm_m = ''
        this.xy = ''
        this.zy = ''
        this.nj = ''
        this.getStdList()
      },
    }
  }
</script>

<style lang="scss" scoped>
  .avatar {
    width: 150px;
    height: 200px;
  }

  .left_tree {
    max-height: 580px;
    overflow: hidden;
    overflow-y: scroll;

  }
</style>
