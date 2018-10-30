<template>
  <div class="pad20">
    <el-table
      :data="tableData3"
      style="width: 100%"
      border
    >
      <el-table-column
        prop="nj"
        label="年级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bj"
        label="班级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="cnName"
        label="中文名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="hzhm"
        label="护照号码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="hzyxq"
        label="护照有效期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="jlxkdqr"
        label="居留许可到期日"
        width="120">
        <template slot-scope="scope">
          {{scope.row.jlxkdqr}}
          <el-button @click="dialogVisible = true" type="text" size="small">设置</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="gxhdqr"
        label="更新后到期日"
        width="120">
      </el-table-column>
    </el-table>
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="60%">
      <div slot="title">学生详情</div>
      <div>
        <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
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

  </div>
</template>

<script>
  export default {
    name: 'passport',
    data() {
      return {
        dialogVisible: false,
        tableData3: [{
          nj: "2018级",
          bj: "电气1班",
          xh: "20180808001",
          name: "Tom",//英文名
          cnName: "王小虎",//中文名
          hzhm: "123123123",//护照号码
          hzyxq: "3年",//护照有效期
          jlxkdqr: "20180808",//居留许可到期日
          gxhdqr: '20190909',//更新后到期日
        },
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxq: "3年",//护照有效期
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//更新后到期日
          },
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxq: "3年",//护照有效期
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//更新后到期日
          },
          {
            nj: "2018级",
            bj: "电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm: "123123123",//护照号码
            hzyxq: "3年",//护照有效期
            jlxkdqr: "20180808",//居留许可到期日
            gxhdqr: '20190909',//更新后到期日
          }
        ],
        ruleForm: {
          name: '',//姓名
          zwm: '',//中文名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          ssh: '',//宿舍号
          sex: '',
          tel: '',
          birth: '',
          hzhm: '',//护照号码
          gj: '',//国籍
          xjzch: '',//学籍注册号
          dxrq: '',//到校日期
          region: '',//宗教
          bzr: '',//班主任
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''//备注
        },
        rules: {

        }
      }
    },
    computed: {},
    methods: {
      showStd(row) {
        this.dialogVisible = true;
        console.log(row);
      },
    }
  }
</script>

<style scoped>

</style>
