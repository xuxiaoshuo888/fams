<template>
  <!--护照居留许可管理-->
  <div class="pad20">
      <el-row :gutter="20" class="search_area">
        <el-col :span="24" class="">
          <el-input
            placeholder="学号"
            size="mini"
            clearable
            v-model="input1">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-input
            placeholder="性别"
            size="mini"
            clearable
            v-model="input2">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-input
            placeholder="姓名"
            size="mini"
            clearable
            v-model="input3">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-input
            placeholder="护照号"
            size="mini"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-input
            placeholder="护照有效期"
            size="mini"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-date-picker type="date" size="mini" placeholder="居留许可到期时间" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="24" class="search_btn_area">
          <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" size="mini" icon="el-icon-view">即将到期</el-button>
        </el-col>
        <el-col :span="24" class="functional_area">
          <el-button type="primary" size="mini" icon="el-icon-plus" @click="add_dialogVisible = true">新增</el-button>
          <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          <el-button type="primary" size="mini" icon="el-icon-download">导出Excel</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="tableData3"
        style="width: 100%"
        border>
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          label="操作"
          width="80"
          header-align="center"
          align="center"
          fixed="right">
          <template slot-scope="scope">
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="nj"
          label="年级"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="bj"
          label="班级"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="xh"
          label="学号"
          width="130"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="cnName"
          label="中文名"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hzhm"
          label="护照号码"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hzyxq"
          label="护照有效期"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hzyxqdqr"
          label="护照有效期到期日"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hzgxhdqr"
          label="护照更新后到期日"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="jlxkdqr"
          label="居留许可到期日"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="gxhdqr"
          label="居留许可更新后到期日"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
      </el-table>

      <!--分页-->
      <div class="pagination-block">
        <el-pagination
          background
          @size-change=""
          @current-change=""
          @prev-click=""
          @next-click=""
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next,->"
          :total="400">
        </el-pagination>
      </div>
      <!--模态框-->
      <el-dialog
        title=""
        :visible.sync="add_dialogVisible"
        width="1200px">
        <div slot="title">学生基本信息管理</div>
        <div>
          <el-form :model="ruleForm" inline="" :rules="rules" ref="ruleForm" label-width="160px"
                   class="demo-ruleForm">
            <el-form-item label="学号" prop="">
              <el-input v-model="ruleForm.xh"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="中文名" prop="">
              <el-input v-model="ruleForm.zwm"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="">
              <el-radio-group v-model="ruleForm.xb">
                <el-radio label="男" value="1"></el-radio>
                <el-radio label="女" value="1"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="年级" prop="">
              <el-input v-model="ruleForm.nj"></el-input>
            </el-form-item>
            <el-form-item label="学院" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="专业" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="班级" prop="">
              <el-input v-model="ruleForm.bj"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <div class="hr"></div>
            <el-form-item label="护照号码" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="护照有效期" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="护照有效期到期日" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="护照更新后到期日" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="居留许可到期日" prop="">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="居留许可更新后到期日" prop="">
              <el-input></el-input>
            </el-form-item>
            <div class="hr"></div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="pic_title">上传护照首页</div>

                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="8">
                <div class="pic_title">上传签证页</div>
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="8">
                <div class="pic_title">居留许可证页</div>
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="dialogVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>



    <!--学生详情模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="60%">
      <div slot="title">学生详情</div>
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="护照到期时间" required>
            <el-form-item prop="">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消设置</el-button>
        <el-button type="primary" @click="dialogVisible = false">设置</el-button>
      </span>
    </el-dialog>

    <!--预览照片模态框-->
    <el-dialog :visible.sync="imgPreview">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'passport',
    data() {
      return {
        dialogVisible: false,//设置过期时间
        add_dialogVisible: false,//新增学生护照信息
        input1: "",
        input2: "",
        input3: "",
        currentPage4: 1,
        tableData3: [
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxqdqr: "2018-08-08",//护照有效期到期日
            hzyxq: "3年",//护照有效期
            hzgxhdqr: "2018-08-08",//护照更新后到期日
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//居留许可更新后到期日
          },
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxqdqr: "2018-08-08",//护照有效期到期日
            hzyxq: "3年",//护照有效期
            hzgxhdqr: "2018-08-08",//护照更新后到期日
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//居留许可更新后到期日
          },
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxqdqr: "2018-08-08",//护照有效期到期日
            hzyxq: "3年",//护照有效期
            hzgxhdqr: "2018-08-08",//护照更新后到期日
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//居留许可更新后到期日
          },
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxqdqr: "2018-08-08",//护照有效期到期日
            hzyxq: "3年",//护照有效期
            hzgxhdqr: "2018-08-08",//护照更新后到期日
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//居留许可更新后到期日
          }
        ],
        ruleForm: {
          name: 'tom',//姓名
          zwm: '汤姆',//中文名
          xh: '201800213',//学号
          bj: '计算机科学1班',//班级
          nj: '2017级',//年级
          ssh: '508',//宿舍号
          sex: '男',
          tel: '12312312321',
          birth: '2018-08-08',
          hzhm: '123213213213',//护照号码
          gj: '美国',//国籍
          xjzch: '123123213',//学籍注册号
          dxrq: '201808-08',//到校日期
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''//备注
        },
        rules: {},
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: '',
      }
    },
    computed: {},
    methods: {
      showStd(row) {
        this.add_dialogVisible = true;
        console.log(row);
      },

    }
  }
</script>

<style lang="scss" scoped>
  .el-form-item__label {
    width: 150px;
  }
  .pic_title{
    padding: 0px 15px 15px;
    font-size: 14px;
    color: #606266;
  }
</style>
