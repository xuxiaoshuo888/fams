<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="姓名"
          size="mini"
          clearable
          v-model="input3">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学号"
          size="mini"
          clearable
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="专业"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学院"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="年级"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-upload2" @click="dialogVisible1 = true">导入</el-button>
        <el-button type="primary" size="mini" icon="el-icon-edit">导出</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span=4>
        <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="20">
        <div class="pic_block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓名：张三</div>
          <div class="pic_xh">学号：201808080001</div>
        </div>

        <div class="pic_block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓名：张三</div>
          <div class="pic_xh">学号：201808080001</div>
        </div>

        <div class="pic_block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓名：张三</div>
          <div class="pic_xh">学号：201808080001</div>
        </div>

        <div class="pic_block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓名：张三</div>
          <div class="pic_xh">学号：201808080001</div>
        </div>

        <div class="pic_block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓名：张三</div>
          <div class="pic_xh">学号：201808080001</div>
        </div>

        <div class="pic_block">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="pic_name">姓名：张三</div>
          <div class="pic_xh">学号：201808080001</div>
        </div>
      </el-col>
    </el-row>


    <!--导入的模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible1"
      width="900px">
      <div slot="title">数据导入</div>
      <div>
        <div class="daoru_block borderBottom">
          <header>导入说明：</header>
          <div class="">本系统支持xls,xlsx格式，请确保表格中的数据不含有空格等特殊符号，标准格式请参考【<a href="#" target="_blank">导入模板</a>】</div>
        </div>
        <div class="daoru_block borderBottom">
          <header>文件上传：</header>
          <div class="">
            <el-upload
              class="upload-block"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传zip、rar压缩文件，且不超过1000kb</div>
            </el-upload>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible1 = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'stdpic',
    data() {
      return {
        imageUrl: '',
        dialogVisible1:false,
        data1: [
          {
            label: '文学院',
            children: [{label: '汉语言文学'}, {label: '英语'}]
          },
          {
            label: '理学院',
            children: [{label: '生物技术'}]
          },
          {
            label: '工学院',
            children: [{label: '计算机科学与技术'}]
          },
          {
            label: '管理学院',
            children: [{label: '工商学院'}, {label: '市场营销'}]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
