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
          v-model="input3">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-select size="mini" placeholder="性别">
          <el-option key="1" label="男" value="1"></el-option>
          <el-option key="2" label="女" value="2"></el-option>
        </el-select>
        <el-select size="mini" placeholder="学院">
          <el-option key="1" label="文学院" value="1"></el-option>
          <el-option key="2" label="医学院" value="2"></el-option>
        </el-select>
        <el-select size="mini" placeholder="专业">
          <el-option key="1" label="临床医学" value="1"></el-option>
          <el-option key="2" label="营养学" value="2"></el-option>
        </el-select>
        <el-select size="mini" placeholder="年级">
          <el-option key="1" label="2018" value="1"></el-option>
          <el-option key="2" label="2017" value="2"></el-option>
        </el-select>
        <el-input
          placeholder="处分类型"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-date-picker type="date" size="mini" placeholder="处分时间" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="dialogVisible = true">修改</el-button>
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
        prop="xh"
        label="学号"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="姓名"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="学院"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="cflx"
        label="处分类型"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="处分时间"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="sj"
        label="处分到期时间"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="处分原因"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
    </el-table>
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.xb">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="学号" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="">
            <el-input v-model="ruleForm.bj"></el-input>
          </el-form-item>
          <el-form-item label="年级" prop="">
            <el-input v-model="ruleForm.nj"></el-input>
          </el-form-item>
          <el-form-item label="中文名" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <!--<el-form-item label="活动区域" prop="region">-->
          <!--<el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
          <!--<el-option label="区域一" value="shanghai"></el-option>-->
          <!--<el-option label="区域二" value="beijing"></el-option>-->
          <!--</el-select>-->
          <!--</el-form-item>-->
          <el-form-item label="电话号码" prop="">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="处分类型">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="处分到期时间">
            <el-date-picker
              type="datetime"
              placeholder="选择处分到期时间">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-form label-width="150px">
          <el-form-item label="处分原因" prop="desc" style="width:100%">
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
    name: 'violation',
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [{
          xh:'201808080018',
          xm: '张三',
          cflx: "严重",
          sj: "20180808",
        },
          {
            xh:'201808080018',
            xm: '张三',
            cflx: "严重",
            sj: "20180808",
          },
          {
            xh:'201808080018',
            xm: '张三',
            cflx: "严重",
            sj: "20180808",
          },
          {
            xh:'201808080018',
            xm: '张三',
            cflx: "严重",
            sj: "20180808",
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
          // name: [
          //   { required: true, message: '', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          // region: [
          //   { required: true, message: '请选择活动区域', trigger: 'change' }
          // ],
          // date1: [
          //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          // ],
          // date2: [
          //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          // ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          // ],
          // resource: [
          //   { required: true, message: '请选择活动资源', trigger: 'change' }
          // ],
          // desc: [
          //   { required: true, message: '请填写活动形式', trigger: 'blur' }
          // ]
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
