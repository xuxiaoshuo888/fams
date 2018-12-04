<template>
  <div class="pad20">
    <div class="block">
      <el-row>
        <el-col :span="12"><h4>加分活动</h4></el-col>
        <el-col :span="12" class="textr">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="add_edit('add')">新增</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="list"
        style="width: 100%"
        border
        header-align="center"
        align="center">
        <el-table-column
          prop="hdxh"
          label="序号"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="xn"
          label="学年"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="xq"
          label="学期"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdkssj"
          label="活动开始时间"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdjssj"
          label="活动结束时间"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="score"
          label="加分值"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdnr"
          label="活动内容"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdjbdw"
          label="举办活动单位"
          width=""
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
            <el-button type="primary" size="mini" @click="add_edit(scope.row.id)">修改</el-button>
            <el-button type="danger" size="mini" @click="remove(scope.row.id)">删除</el-button>
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
    </div>

    <div class="block">
      <el-row>
        <el-col :span="12"><h4>扣分活动</h4></el-col>
        <el-col :span="12" class="textr">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="add_edit('add2')">新增</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="list2"
        style="width: 100%"
        border
        header-align="center"
        align="center">
        <el-table-column
          prop="hdxh"
          label="序号"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="xn"
          label="学年"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="xq"
          label="学期"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdkssj"
          label="活动开始时间"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdjssj"
          label="活动结束时间"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="score"
          label="加分值"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdnr"
          label="活动内容"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="hdjbdw"
          label="举办活动单位"
          width=""
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
            <el-button type="primary" size="mini" @click="add_edit(scope.row.id)">修改</el-button>
            <el-button type="danger" size="mini" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <!--<div class="pagination-block">-->
      <!--<el-pagination-->
      <!--background-->
      <!--@size-change=""-->
      <!--@current-change=""-->
      <!--@prev-click=""-->
      <!--@next-click=""-->
      <!--:current-page="currentPage4"-->
      <!--:page-sizes="[10, 20, 30, 40]"-->
      <!--:page-size="10"-->
      <!--layout="total, sizes, prev, pager, next,->"-->
      <!--:total="400">-->
      <!--</el-pagination>-->
      <!--</div>-->
    </div>

    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="活动序号" prop="name">
            <el-input v-model="ruleForm.hdxh"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="学年">
            <el-date-picker
              v-model="ruleForm.xn"
              type="year"
              placeholder="选择学年"
              value-format="yyyy">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="学期">
            <el-select placeholder="请选择" v-model="ruleForm.xq">
              <el-option value="第一学期">第一学期</el-option>
              <el-option value="第二学期">第二学期</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单位" prop="name">
            <el-input v-model="ruleForm.hdjbdw"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-date-picker
              v-model="ruleForm.hdkssj"
              type="date"
              clearable
              value-format="yyyy-MM-dd">
            </el-date-picker>
            -
            <el-date-picker
              v-model="ruleForm.hdjssj"
              type="date"
              clearable
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="分值">
            <el-input v-model="ruleForm.score"></el-input>
          </el-form-item>
        </el-form>

        <el-form label-width="100px">
          <el-form-item label="活动内容" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm.hdnr" style="width:100%;"></el-input>
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
  export default {
    name: "matter",
    data() {
      return {
        dialogVisible: false,
        add_edit_flag: false,//false-新增，true-编辑
        list: [],
        pageNum: 1,
        pageSize: null,
        records: null,
        list2: [],
        pageNum2: 1,
        pageSize2: null,
        records2: null,
        ruleForm: {
          name: '',
          hdlx: '',//1-加分，0-减分
          hdxh: '',
          xn: '',
          xq: '',
          hdkssj: '',
          hdjssj: '',
          hdjbdw: '',
          score: '',
          hdnr: ''
        },
        rules: {}
      }
    },
    mounted() {
      this.getData()
      this.getData2()
    },
    methods: {
      getData() {
        this.request.post('/ws/score/itemPage', {
          hdlx: '1',//1-加分，0-扣分
          page: this.pageNum,
          limit: this.pageSize,
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      getData2() {
        this.request.post('/ws/score/itemPage', {
          hdlx: '0',//1-加分，0-扣分
          page: this.pageNum,
          limit: this.pageSize,
        }).then(res => {
          this.list2 = res.data.page.rows
          this.pageNum2 = res.data.page.page
          this.pageSize2 = res.data.page.pageSize
          this.records2 = res.data.page.records
        })
      },
      add_edit(e) {//点击打开模态框
        // this.reset_form()
        this.dialogVisible = true
        if (e === 'add') {//新增-加分
          this.add_edit_flag = false
          this.ruleForm.hdlx = '1'
        } else if (e === 'add2') {//新增-减分
          this.add_edit_flag = false
          this.ruleForm.hdlx = '0'
        } else {//编辑
          this.add_edit_flag = true
          this.request.post('/ws/score/itemToEdit', {id: e}).then(res => {
            if (res.data.data) {
              this.ruleForm = res.data.data
              delete this.ruleForm.whenCreated
              delete this.ruleForm.whenModified
            }
          })
        }
      },
      submit() {
        let url = ''
        if (this.add_edit_flag) {//编辑
          url = '/ws/score/itemEdit'
        } else {
          url = '/ws/score/itemAdd'
        }
        console.log(this.ruleForm)
        this.request.post(url, this.ruleForm).then(res => {
          this.$message({
            message: res.errmsg,
            type: 'success',
            duration: 5 * 1000
          })
          if (this.ruleForm.hdlx === '1') {
            this.getData()
          } else {
            this.getData2()
          }
          this.dialogVisible = false
        })
      },
      remove(e) {//删除
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.request.post('/ws/score/itemRemove', {ids: e}).then(res => {
            this.$message({
              type: 'success',
              message: res.errmsg
            })
            if (this.ruleForm.hdlx === '1') {
              this.getData()
            } else {
              this.getData2()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      },
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

<style lang="scss" scoped>
  .block {
    padding: 15px;
  }
</style>
