<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="学号"
          size="mini"
          clearable
          v-model="xh">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <!--<el-input-->
        <!--placeholder="性别"-->
        <!--size="mini"-->
        <!--clearable-->
        <!--v-model="input2">-->
        <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->
        <el-input
          placeholder="姓名"
          size="mini"
          clearable
          v-model="xm">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-input
          placeholder="保险项目"
          size="mini"
          clearable
          v-model="bxxm">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" size="mini" icon="el-icon-view" @click="daoqi">即将到期</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="add_edit('add')">新增</el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="remove">批量删除</el-button>

        <el-button type="primary" size="mini" icon="el-icon-download" @click="optExport">导出Excel</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="list"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        header-align="center"
        align="center"
        width="110">
      </el-table-column>
      <el-table-column
        prop="std_xm"
        label="姓名(护照用名)"
        header-align="center"
        align="center"
        width="250">
      </el-table-column>
      <el-table-column
        prop="std_hzhm"
        label="护照号码"
        header-align="center"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="std_gb"
        label="国籍"
        header-align="center"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="bxxm"
        label="保险项目"
        header-align="center"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bxf"
        label="保险费"
        header-align="center"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="bxrq"
        label="保险日期"
        header-align="center"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="gmqk"
        label="购买情况"
        header-align="center"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="jzyy"
        label="就诊医院"
        header-align="center"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bq"
        label="病情"
        header-align="center"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bxba"
        label="保险报案"
        header-align="center"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bz"
        label="备注"
        header-align="center"
        align="center"
        width="">
      </el-table-column>
      <el-table-column
        label="操作"
        width="80"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="add_edit(scope.row.id)">编辑</el-button>
        </template>
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
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules1" ref="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="学号" prop="">
            <el-input v-model="ruleForm.xh" @blur="getStdInfo"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.xb" disabled>
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.xm" disabled></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="">
            <el-input v-model="ruleForm.bj" disabled></el-input>
          </el-form-item>
          <el-form-item label="年级" prop="">
            <el-input v-model="ruleForm.nj" disabled></el-input>
          </el-form-item>
          <el-form-item label="中文名" prop="">
            <el-input v-model="ruleForm.zwm" disabled></el-input>
          </el-form-item>
          <el-form-item label="出生年月" required>
            <el-input v-model="ruleForm.csrq" disabled></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="">
            <el-input v-model="ruleForm.lxdh" disabled></el-input>
          </el-form-item>
        </el-form>

        <el-form :inline="true" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="保险项目" prop="bxxm">
            <el-input v-model="ruleForm2.bxxm"></el-input>
          </el-form-item>
          <el-form-item label="保险费" prop="bxf">
            <el-input v-model="ruleForm2.bxf"></el-input>
          </el-form-item>
          <el-form-item label="保险日期" prop="bxrq">
            <el-date-picker
              type="date"
              value-format="yyyy-MM-dd"
              v-model="ruleForm2.bxrq">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="购买情况" prop="gmqk">
            <el-input v-model="ruleForm2.gmqk"></el-input>
          </el-form-item>
          <el-form-item label="就诊医院" prop="">
            <el-input v-model="ruleForm2.jzyy"></el-input>
          </el-form-item>
        </el-form>

        <el-form label-width="150px">
          <el-form-item label="病情" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm2.bq" style="width:100%;"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="150px">
          <el-form-item label="保险备案" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm2.bxba" style="width:100%;"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="150px">
          <el-form-item label="备注" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm2.bz" style="width:100%;"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import {getStringArr} from '@/utils/tool'

  export default {
    name: 'insurance',
    data() {
      return {
        xh: "",
        xm: "",
        bxxm: "",
        list: [],
        pageNum: 1,
        pageSize: null,
        records: null,
        dialogVisible: false,
        selectedList: [],
        add_edit_flag: false,//false-新增，true-编辑
        tableData3: [],
        ruleForm: {
          xm: '',//姓名
          zwm: '',//中文名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
        ruleForm2: {
          xh: "",
          bxxm: "",
          bxf: "",
          bxrq: "",
          gmqk: "",
          jzyu: "",
          bz: "",
          id: ""
        },
        rules1: {
          xh: [{required: true, message: '请输入学号', trigger: 'blur'}]
        },
        rules2: {
          bxxm: [{required: true, message: '请输入保险项目', trigger: 'blur'}],
          bxf: [{required: true, message: '请输入保险费', trigger: 'blur'}],
          bxrq: [{required: true, message: '请选择保险日期', trigger: 'blur'}],
          gmqk: [{required: true, message: '请填写报名情况', trigger: 'blur'}]
        },
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {//分配用户左侧表格
        this.request.post('/ws/insurance/page', {
          xm: this.xm,
          xh: this.xh,
          bxxm: this.bxxm,
          page: this.pageNum,
          limit: this.pageSize
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      daoqi() {
        this.request.post('/ws/insurance/due', {
          xm: this.xm,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          hzhm: this.hzhm,
          hzyxq: this.hzyxq,
          jlxkdqr: this.jlxkdqr,
          page: this.pageNum,
          limit: this.pageSize,
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      add_edit(e) {
        this.dialogVisible = true
        if (e === 'add') {//新增
          this.add_edit_flag = false
        } else {//编辑
          this.add_edit_flag = true
          this.request.post('/ws/insurance/toEdit', {id: e}).then(res => {
            this.ruleForm = res.data.data.student
            this.ruleForm2 = res.data.data
            delete this.ruleForm2.student
            delete this.ruleForm2.whenCreated
            delete this.ruleForm2.whenModified
          })
        }
      },
      handleSelectionChange(e) {
        this.selectedList = e
      },
      remove() {//删除
        if (this.selectedList.length > 0) {
          let m = getStringArr(this.selectedList, 'id')
          this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/ws/insurance/remove', {ids: m}).then(res => {
              this.$message({
                type: 'success',
                message: res.errmsg
              })
              this.getData()
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        } else {
          this.$message({
            message: '请至少选择一项',
            type: 'warning',
            duration: 5 * 1000
          })
        }
      },
      getStdInfo() {
        if (this.ruleForm.xh) {
          this.request.post('/ws/student/getStdInfo', {xh: this.ruleForm.xh}).then(res => {
            this.ruleForm = res.data.data
          })
        }
      },
      submit() {
        let url = ''
        if (this.add_edit_flag) {//编辑
          url = '/ws/insurance/edit'
        } else {
          url = '/ws/insurance/add'
        }
        this.ruleForm2.xh = this.ruleForm.xh
        this.request.post(url, this.ruleForm2).then(res => {
          this.$message({
            message: res.errmsg,
            type: 'success',
            duration: 5 * 1000
          })
          this.getData()
          this.dialogVisible = false
        })
      },
      optExport() {
        window.open('/ws/insurance/export?xm=' + this.xm +
          '&xh=' + this.xh +
          '&xy=' + this.xy +
          '&zy=' + this.zy +
          '&bj=' + this.bj, '_blank')
      },
      //分页相关方法
      handleSizeChange(e) {
        this.pageSize = e
        this.getData()
      },
      handleCurrentChange(e) {
        this.pageNum = e
        this.getData()
      },
      prev() {
        this.pageNum = this.pageNum - 1
      },
      next() {
        this.pageNum = this.pageNum + 1
      },
    }
  }
</script>

<style scoped>

</style>
