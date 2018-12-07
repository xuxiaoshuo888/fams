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
        <el-input
          placeholder="姓名"
          size="mini"
          clearable
          v-model="xm">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-select size="mini" v-model="xb" placeholder="性别">
          <el-option key="1" label="男" value="1"></el-option>
          <el-option key="2" label="女" value="2"></el-option>
        </el-select>
        <el-select size="mini" v-model="xy" placeholder="学院">
          <el-option key="1" label="文学院" value="1"></el-option>
          <el-option key="2" label="医学院" value="2"></el-option>
        </el-select>
        <el-select size="mini" v-model="zy" placeholder="专业">
          <el-option key="1" label="临床医学" value="1"></el-option>
          <el-option key="2" label="营养学" value="2"></el-option>
        </el-select>
        <el-select size="mini" v-model="nj" placeholder="年级">
          <el-option key="1" label="2018" value="1"></el-option>
          <el-option key="2" label="2017" value="2"></el-option>
        </el-select>
        <el-input
          placeholder="处分类型"
          size="mini"
          v-model="cflx"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-date-picker type="date" size="mini" v-model="cfsj" placeholder="处分时间" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="add_edit('add')">新增</el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="remove">批量删除</el-button>
        <el-button type="primary" size="mini" icon="el-icon-download">导出Excel</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="list"
      style="width: 100%"
      @selection-change="handleSelectionChange"
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
          <el-button type="primary" size="mini" @click="add_edit(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="student.xh"
        label="学号"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.xm"
        label="姓名"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.xb"
        label="性别"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.zy"
        label="专业"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.nj"
        label="年级"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.bj"
        label="班级"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.xy"
        label="学院"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.gb"
        label="国籍"
        width=""
        header-align="center"
        align="center">
      </el-table-column>

      <el-table-column
        prop="student.hzhm"
        label="护照号"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="student.lxdh"
        label="联系方式"
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
        prop="cfsj"
        label="处分时间"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="cfdqsj"
        label="处分到期时间"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="cfyy"
        label="处分原因"
        width=""
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
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
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
          <el-form-item label="出生年月">
            <el-input v-model="ruleForm.csrq" disabled></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="">
            <el-input v-model="ruleForm.lxdh" disabled></el-input>
          </el-form-item>
          <el-form-item label="处分类型">
            <el-input v-model="ruleForm2.cflx"></el-input>
          </el-form-item>
          <el-form-item label="处分时间">
            <el-date-picker
              type="date"
              placeholder=""
              v-model="ruleForm2.cfsj"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="处分到期时间">
            <el-date-picker
              type="date"
              placeholder=""
              v-model="ruleForm2.cfdqsj"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-form label-width="150px">
          <el-form-item label="处分原因" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm2.cfyy" style="width:100%;"></el-input>
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
    name: 'violation',
    data() {
      return {
        xh: "",
        xm: "",
        xb: "",
        xy: "",
        zy: "",
        bj: "",
        nj: "",
        cflx: '',
        cfsj: "",
        pageNum: 1,
        pageSize: null,
        records: null,
        dialogVisible: false,
        list: [],
        selectedList: [],
        rules: {},
        add_edit_flag: false,//false-新增，true-编辑
        ruleForm: {
          xm: '',//姓名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
        ruleForm2: {
          xh: "",
          cflx: "",
          cfsj: "",
          cfdqsj: "",
          fcyy: "",
          bz: "",
          id: ""
        },
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.request.post('/ws/punishment/page', {
          xm: this.xm,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          cflx: this.cflx,
          cfsj: this.cfsj,
          page: this.pageNum,
          limit: this.pageSize,
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      reset() {//重置搜索条件
        this.xm = ''
        this.xh = ''
        this.xy = ''
        this.zy = ''
        this.bj = ''
        this.getData()
      },
      reset_form() {
        this.ruleForm = {
          xm: '',//姓名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
          this.ruleForm2 = {
            xh: "",
            cflx: "",
            cfsj: "",
            cfdqsj: "",
            fcyy: "",
            bz: "",
            id: ""
          }
      },
      add_edit(e) {
        this.reset_form()
        this.dialogVisible = true
        if (e === 'add') {//新增
          this.add_edit_flag = false
        } else {//编辑
          this.add_edit_flag = true
          this.request.post('/api/punishment/toEdit', {id: e}).then(res => {
            if (res.data.data) {
              this.ruleForm = res.data.data.student
              this.ruleForm2 = res.data.data
              delete this.ruleForm2.student
              delete this.ruleForm2.whenCreated
              delete this.ruleForm2.whenModified
            }
          })
        }
      },
      remove() {//删除
        if (this.selectedList.length > 0) {
          let m = getStringArr(this.selectedList, 'id')
          this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/api/punishment/remove', {ids: m}).then(res => {
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
            if (res) {
              this.ruleForm = res.data.data
            }
          })
        }
      },
      submit() {
        let url = ''
        if (this.add_edit_flag) {//编辑
          url = '/api/punishment/edit'
        } else {
          url = '/api/punishment/add'
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
      handleSelectionChange(e) {
        this.selectedList = e
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
