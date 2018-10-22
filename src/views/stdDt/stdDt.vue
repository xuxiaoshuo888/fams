<template>
  <div class="pad20">
    <el-row :gutter="20" class="marginbot20">
      <el-col :span="4">
        <el-input
          placeholder="学号"
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          placeholder="性别"
          v-model="input2">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          placeholder="姓名"
          v-model="input3">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData3"
      style="width: 100%"
      border
      height="250">
      <el-table-column
        prop="order"
        label="学号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="nj"
        label="是否请假"
        width="120">
      </el-table-column>

      <el-table-column
        prop="xh"
        label="离开事由"
        width="120">1
      </el-table-column>
      <el-table-column
        prop="passport"
        label="目的地"
        width="120">
      </el-table-column>
      <el-table-column
        prop="cnName"
        label="离开时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="返回时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="roomNum"
        label="记录日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="备注"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="showStd(scope.row)" type="text" size="small">详情</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="60%">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="序号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>

          <el-form-item label="年级" prop="">
            <el-input v-model="ruleForm.nj"></el-input>
          </el-form-item>
          <el-form-item label="学号" prop="">
            <el-input v-model="ruleForm.bj"></el-input>
          </el-form-item>
          <el-form-item label="护照号" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item label="联系号码" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>

          <el-form-item label="出境学生" prop="">
            <el-input v-model="ruleForm.ssh"></el-input>
          </el-form-item>

          <el-form-item label="国内旅游学生" prop="">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="更新护照学生" prop="">
            <el-input v-model="ruleForm.hzhm"></el-input>
          </el-form-item>
          <el-form-item label="辅导员姓名/登记日期" prop="">
            <el-input v-model="ruleForm.gj"></el-input>
          </el-form-item>
          <el-form-item label="登记老师姓名/上报日期" prop="">
            <el-input v-model="ruleForm.xjzch"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="100px">
          <el-form-item label="备注" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm.bz" style="width:100%;"></el-input>
          </el-form-item>
        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'stdDt',
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [{
          order: '1',
          nj: "2018",
          class: "计算机技术1班",
          xh: "20180808001",
          name: "Tom",
          cnName: "王小虎",
          gender: "男",
          roomNum: "503",
          tel: "13888888888",
          birthday: "19900808",
          passport: "126351263715283",
          Nation: "美国",
        }, {
          order: '1',
          nj: "2018",
          class: "计算机技术1班",
          xh: "20180808001",
          name: "Tom",
          cnName: "王小虎",
          gender: "男",
          roomNum: "503",
          tel: "13888888888",
          birthday: "19900808",
          passport: "126351263715283",
          Nation: "美国",
          stdNo: "1231323123213",
          arriveDate: "20170707",
          religion: "无宗教信仰",
          bzr: '张洋',
          bz: '无'
        }],
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
