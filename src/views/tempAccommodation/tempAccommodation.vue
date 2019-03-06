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
        <!--<el-input-->
        <!--placeholder="学院"-->
        <!--size="mini"-->
        <!--clearable-->
        <!--v-model="xy">-->
        <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->
        <!--<el-input-->
        <!--placeholder="专业"-->
        <!--size="mini"-->
        <!--clearable-->
        <!--v-model="zy">-->
        <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->
        <el-select size="mini" v-model="nj" clearable placeholder="年级">
          <el-option label="2019" value="2019"></el-option>
          <el-option label="2018" value="2018"></el-option>
          <el-option label="2017" value="2017"></el-option>
          <el-option label="2016" value="2016"></el-option>
          <el-option label="2015" value="2015"></el-option>
          <el-option label="2014" value="2014"></el-option>
          <el-option label="2013" value="2013"></el-option>
        </el-select>
        <el-input
          placeholder="班级"
          size="mini"
          clearable
          v-model="bj">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="辅导员姓名"
          size="mini"
          clearable
          v-model="fdyxm">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="登记老师姓名"
          size="mini"
          clearable
          v-model="djlsxm">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="护照号"
          size="mini"
          clearable
          v-model="hzhm">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="联系号码"
          size="mini"
          clearable
          v-model="lxdh">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
        <el-button type="primary" size="mini" icon="el-icon-view" @click="daoqi">即将到期</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="add_edit('add')">新增</el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="remove">批量删除</el-button>
        <el-button type="primary" size="mini" icon="el-icon-download" @click="optExport">导出Excel</el-button>
      </el-col>
    </el-row>

    <el-tabs type="border-card" @tab-click="toggleTab">
      <el-tab-pane label="出境学生"></el-tab-pane>
      <el-tab-pane label="国内旅游学生"></el-tab-pane>
      <el-table
        :data="list"
        style="width: 100%"
        border
        header-align="center"
        @selection-change="handleSelectionChange"
        align="center">
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="50">
        </el-table-column>
        <!--<el-table-column-->
        <!--prop="order"-->
        <!--label="序号"-->
        <!--width="50"-->
        <!--header-align="center"-->
        <!--align="center">-->
        <!--</el-table-column>-->
        <el-table-column
          prop="xm_x"
          label="姓"
          width=""
          show-overflow-tooltip
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="xm_m"
          label="名"
          width=""
          show-overflow-tooltip
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
          prop="hzhmOld"
          label="旧护照号"
          width="120"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hzhmNew"
          label="新护照号"
          width="150"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="lxdh"
          label="联系号码"
          width="130"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="fssj"
          :label="cj_flag === '0' ? '入境时间' : '离长时间'"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="fsdd"
          :label="cj_flag === '0' ? '入境地点' : '离长地点'"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="dcsj"
          :label="cj_flag === '0' ? '回长时间' : '到长时间'"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="dcdd"
          :label="cj_flag === '0' ? '回长地点' : '到长地点'"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="dxsj"
          label="到校时间"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="fdyxm"
          label="辅导员姓名"
          width="160"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="djrq"
          label="登记日期"
          width="160"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="djlsxm"
          label="登记老师姓名"
          width="170"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="sbrq"
          label="上报日期"
          width="170"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="bz"
          label="备注"
          width="100"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="70"
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="add_edit(scope.row.pid)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tabs>

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
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px"
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
          <el-form-item label="姓" prop="name">
            <el-input v-model="ruleForm.xmX" disabled></el-input>
          </el-form-item>
          <el-form-item label="名" prop="name">
            <el-input v-model="ruleForm.xmM" disabled></el-input>
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
          <el-form-item label="旧护照号" prop="">
            <el-input v-model="ruleForm2.hzhmOld"></el-input>
          </el-form-item>
          <el-form-item label="新护照号" prop="">
            <el-input v-model="ruleForm2.hzhmNew"></el-input>
          </el-form-item>
          <el-form-item label="类别" prop="">
            <el-select v-model="ruleForm2.fslb" placeholder="">
              <el-option v-for="item in options1" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </el-form-item>
          <!--处境学生-->
          <el-form-item :label="ruleForm2.fslb === '0' ? '入境时间' : '离长时间'" prop="">
            <el-date-picker
              type="date"
              v-model="ruleForm2.fssj"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item :label="ruleForm2.fslb === '0' ? '入境地点' : '离长地点'" prop="">
            <el-input v-model="ruleForm2.fsdd"></el-input>
          </el-form-item>
          <el-form-item :label="ruleForm2.fslb === '0' ? '回长时间' : '到长时间'" prop="">
            <el-date-picker
              type="date"
              v-model="ruleForm2.dcsj"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item :label="ruleForm2.fslb === '0' ? '回长地点' : '到长地点'" prop="">
            <el-input v-model="ruleForm2.dcdd"></el-input>
          </el-form-item>
          <el-form-item label="到校时间" prop="">
            <el-date-picker
              v-model="ruleForm2.dxsj"
              type="date"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="辅导员姓名" prop="">
            <el-input v-model="ruleForm2.fdyxm"></el-input>
          </el-form-item>
          <el-form-item label="登记日期" prop="">
            <el-date-picker
              v-model="ruleForm2.djrq"
              type="date"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="登记老师姓名" prop="">
            <el-input v-model="ruleForm2.djlsxm"></el-input>
          </el-form-item>
          <el-form-item label="上报日期" prop="">
            <el-date-picker
              v-model="ruleForm2.sbrq"
              type="date"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-form label-width="200px">
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
    name: 'tempAccommodation',
    data() {
      return {
        xh: "",
        xm_x: "",
        xm_m: "",
        xy: "",
        zy: "",
        bj: "",
        nj: "",
        fdyxm: "",
        djlsxm: "",
        hzhm: "",
        lxdh: "",
        xjlb: "",
        pageNum: 1,
        pageSize: null,
        records: null,
        list: [],
        selectedList: [],
        cj_flag: '0',//出境-0，国内-1
        dialogVisible: false,
        xslb: '',//学生类别
        add_edit_flag: false,//false-新增，true-编辑
        options1: [
          {value: '0', label: '出境学生'},
          {value: '1', label: '国内旅游学生'}
        ],
        ruleForm: {
          xmX: '',//姓名
          xmM: '',//姓名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
        ruleForm2: {
          xh: "",
          hzhmOld: "",
          hzhmNew: "",
          fslb: "",
          fssj: "",
          fsdd: "",
          dcsj: "",
          dcdd: "",
          dxsj: "",
          fdyxm: "",
          djrq: "",
          djlsxm: "",
          sbrq: "",
          bz: "",
          id: ""
        },
        rules: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.request.post('/ws/roomassing/page', {
          xm_x: this.xm_x,
          xm_m: this.xm_m,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          nj: this.nj,
          fdyxm: this.fdyxm,
          djlsxm: this.djlsxm,
          hzhm: this.hzhm,
          lxdh: this.lxdh,
          page: this.pageNum,
          limit: this.pageSize,
          lb: this.cj_flag
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      toggleTab(e) {//切换出境/国内
        if (e.label === '出境学生') {
          this.cj_flag = '0'
        } else {
          this.cj_flag = '1'
        }
        this.getData()
      },
      reset() {//重置
        this.xm_x = ''
        this.xm_m = ''
        this.xh = ''
        this.xy = ''
        this.zy = ''
        this.bj = ''
        this.fdyxm = ''
        this.djlsxm = ''
        this.hzhm = ''
        this.lxdh = ''
        this.getData()
      },
      add_edit(e) {
        this.reset_form()
        this.dialogVisible = true
        if (e === 'add') {//新增
          this.add_edit_flag = false
        } else {//编辑
          this.add_edit_flag = true
          this.request.post('/ws/roomassing/toEdit', {id: e}).then(res => {
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
          let m = getStringArr(this.selectedList, 'pid')
          this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/ws/roomassing/remove', {ids: m}).then(res => {
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
      handleSelectionChange(e) {
        this.selectedList = e
      },
      submit() {
        let url = ''
        if (this.add_edit_flag) {//编辑
          url = '/ws/roomassing/edit'
        } else {
          url = '/ws/roomassing/add'
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
      reset_form() {
        this.ruleForm = {
          xmX: '',//姓名
          xmM: '',//姓名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
          this.ruleForm2 = {
            xh: "",
            hzhmOld: "",
            hzhmNew: "",
            fslb: "",
            fssj: "",
            fsdd: "",
            dcsj: "",
            dcdd: "",
            dxsj: "",
            fdyxm: "",
            djrq: "",
            djlsxm: "",
            sbrq: "",
            bz: "",
            id: ""
          }
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
      optExport() {
        window.open('/ws/roomassing/export?xm_x=' + this.xm_x + '&xm_m=' +this.xm_m +
          '&xh=' + this.xh +
          '&xy=' + this.xy +
          '&zy=' + this.zy +
          '&bj=' + this.bj, '_blank')
      },
      daoqi() {
        this.request.post('/ws/roomassing/due', {
          xm_x: this.xm_x,
          xm_m:this.xm_m,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          fdyxm: this.fdyxm,
          djlsxm: this.djlsxm,
          hzhm: this.hzhm,
          lxdh: this.lxdh,
          page: this.pageNum,
          limit: this.pageSize,
          lb: this.cj_flag
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      }
    }
  }
</script>

<style scoped>

</style>
