<template>
  <div class="pad20">
    <el-row :gutter="20" class="marginbot20">
      <el-col :span="4">
        <el-input
          placeholder="年级"
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          placeholder="班级"
          v-model="input2">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          placeholder="周次"
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
    >
      <el-table-column
        prop="nj"
        label="年级"
        width="">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级"
        width="">
      </el-table-column>
      <el-table-column
        prop="zc"
        label="周次"
        width="">
      </el-table-column>
      <el-table-column
        prop="xq"
        label="星期"
        width="">
      </el-table-column>
      <el-table-column
        prop="rq"
        label="日期"
        width="">
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
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
        <el-form :inline="true" :model="ruleForm" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="年级" prop="">
            <el-input v-model="ruleForm.nj"></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="">
            <el-input v-model="ruleForm.bj"></el-input>
          </el-form-item>
          <el-form-item label="周次" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="星期" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>
          <el-form-item label="时间" required>
            <el-form-item prop="">
              <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
            </el-form-item>
          </el-form-item>
        </el-form>
        <div>
          <el-button type="primary" @click="">全部已到</el-button>
        </div>
        <div>
          <el-table
            :data="tableData4"
            style="width: 100%"
            height="250px"
            border
            class="margintop20"
          >
            <el-table-column
              prop="xh"
              label="学号"
              width="120px">
            </el-table-column>
            <el-table-column
              prop="xm"
              label="姓名"
              width="100px">
            </el-table-column>
            <el-table-column
              prop="qd"
              label="签到"
              width="150px">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.qd"
                  active-text="已到"
                  inactive-text="未到">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              prop="bz"
              label="备注"
              width="">
              <template slot-scope="scope">
                <el-input v-model="scope.row.bz" placeholder="请输入备注"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
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
    name: 'signIn',
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [{
          nj: "2018",
          class: "计算机技术1班",
          zc: "第五周",
          xq: "星期一",
          rq: "2018年10月22日",
        }, {
          nj: "2018",
          class: "计算机技术1班",
          zc: "第五周",
          xq: "星期一",
          rq: "2018年10月22日",
        }, {
          nj: "2018",
          class: "计算机技术1班",
          zc: "第五周",
          xq: "星期一",
          rq: "2018年10月22日",
        },],
        tableData4: [{
          xh: "201808080011",
          xm: "张三",
          qd: true,
          bz: ""
        },
          {
            xh: "201808080012",
            xm: "李四",
            qd: false,
            bz: "未到"
          }, {
            xh: "201808080013",
            xm: "王五",
            qd: true,
            bz: ""
          }, {
            xh: "201808080014",
            xm: "赵六",
            qd: false,
            bz: "未到"
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
