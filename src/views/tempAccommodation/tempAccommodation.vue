<template>
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
          placeholder="姓名"
          size="mini"
          clearable
          v-model="input2">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学院"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="专业"
          size="mini"
          clearable
          v-model="input3">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="班级"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="辅导员姓名"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="登记老师姓名"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="护照号"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="联系号码"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" size="mini" icon="el-icon-view">即将到期</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="dialogVisible = true">修改</el-button>
        <el-button type="primary" size="mini" icon="el-icon-download">导出Excel</el-button>
      </el-col>
    </el-row>

    <el-tabs type="border-card">
      <el-tab-pane label="出境学生">
        <el-table
          :data="tableData3"
          style="width: 100%"
          border
          header-align="center"
          align="center">
          <el-table-column
            type="selection"
            header-align="center"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            prop="order"
            label="序号"
            width="50"
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
            prop="nj"
            label="年级"
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
          <el-table-column
            prop="birthday"
            label="旧护照号"
            width="120"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="passport"
            label="新护照号"
            width="150"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="cnName"
            label="联系号码"
            width=""
            header-align="center"
            align="center">
          </el-table-column>

          <el-table-column
            prop="gender"
            label="出境学生"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="入境时间"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="入境地点"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="回长时间"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="回长地点"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="到校时间"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="Nation"
            label="辅导员姓名"
            width="160"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="Nation"
            label="登记日期"
            width="160"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="stdNo"
            label="登记老师姓名"
            width="170"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="stdNo"
            label="上报日期"
            width="170"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="arriveDate"
            label="备注"
            width="100"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="国内旅游学生">
        <el-table
          :data="tableData3"
          style="width: 100%"
          border
          header-align="center"
          align="center">
          <el-table-column
            type="selection"
            header-align="center"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            prop="order"
            label="序号"
            width="50"
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
            prop="nj"
            label="年级"
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
          <el-table-column
            prop="birthday"
            label="旧护照号"
            width="120"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="passport"
            label="新护照号"
            width="150"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="cnName"
            label="联系号码"
            width=""
            header-align="center"
            align="center">
          </el-table-column>

          <el-table-column
            prop="roomNum"
            label="国内旅游学生"
            width="120"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="离长时间"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="离长地点"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="到长时间"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="到长地点"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="到校时间"
            width=""
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="Nation"
            label="辅导员姓名"
            width="160"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="Nation"
            label="登记日期"
            width="160"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="stdNo"
            label="登记老师姓名"
            width="170"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="stdNo"
            label="上报日期"
            width="170"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="arriveDate"
            label="备注"
            width="100"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="150"
            header-align="center"
            align="center">
            <template slot-scope="scope">
              <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>


    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px"
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
          <el-form-item label="旧护照号" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item label="新护照号" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item label="联系号码" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item label="类别" prop="">
            <el-select v-model="xslb" placeholder="">
              <el-option v-for="item in options1" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </el-form-item>
          <!--处境学生-->
          <el-form-item v-if="xslb === '1'" label="入境时间" prop="">
            <el-date-picker
              v-model="date1"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-if="xslb === '1'" label="入境地点" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item v-if="xslb === '1'" label="回长时间" prop="">
            <el-date-picker
              v-model="date2"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-if="xslb === '1'" label="回长地点" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <!--国内旅游学生-->
          <el-form-item v-if="xslb === '2'" label="离长时间" prop="">
            <el-date-picker
              v-model="date3"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-if="xslb === '2'" label="离长地点" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item v-if="xslb === '2'" label="到长时间" prop="">
            <el-date-picker
              v-model="date4"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-if="xslb === '2'" label="到长地点" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>

          <el-form-item label="到校时间" prop="">
            <el-date-picker
              v-model="date5"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="辅导员姓名" prop="">
            <el-input v-model="ruleForm.gj"></el-input>
          </el-form-item>
          <el-form-item label="登记日期" prop="">
            <el-date-picker
              v-model="date6"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="登记老师姓名" prop="">
            <el-input v-model="ruleForm.xjzch"></el-input>
          </el-form-item>
          <el-form-item label="上报日期" prop="">
            <el-date-picker
              v-model="date7"
              type="datetime">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-form label-width="200px">
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
    name: 'tempAccommodation',
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        xslb:'',//学生类别
        date1:'',
        date2:'',
        date3:'',
        date4:'',
        date5:'',
        date6:'',
        date7:'',
        options1:[
          {value:'1',label:'出境学生'},
          {value:'2',label:'国内旅游学生'}
        ],
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
