<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="作者"
          size="mini"
          clearable
          v-model="author">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-date-picker
          v-model="time"
          size="mini"
          type="date"
          value-format="yyyy-MM-dd"
          @change="abc"
          placeholder="选择日期">
        </el-date-picker>
        <el-input
          placeholder="标题"
          size="mini"
          clearable
          v-model="title">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getList">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="showDia('')">新增</el-button>
        <el-button type="danger" size="mini" icon="el-icon-edit-delete" @click="remove">批量删除</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="newsList"
      style=""
      max-height="768"
      border
      stripe
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        label="操作"
        width="160"
        header-align="center"
        align="left"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="showDia(scope.row)" type="primary" size="mini">编辑</el-button>
          <el-button v-if="scope.row.status == '1'" type="danger" size="mini" @click="changeState(scope.row.id,'0')">
            取消发布
          </el-button>
          <el-button v-else type="success" size="mini" @click="changeState(scope.row.id,'1')">发布</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="index"
        label="序号"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="发布时间"
        width="180"
        header-align="center"
        align="center">
        <template slot-scope="scope">{{scope.row.whenCreated.substr(0,10)}}
        </template>
      </el-table-column>
      <el-table-column
        prop="userId"
        label="作者"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="deptId"
        label="发布单位"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="80"
        header-align="center"
        align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == '1'" type="success" size="small">已发布</el-tag>
          <el-tag v-else type="danger" size="small">未发布</el-tag>
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
        layout="total, sizes, prev, pager, next"
        :total="records">
      </el-pagination>
    </div>
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">通知公告管理</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="标题" prop="name">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="发布单位" prop="">
            <el-input v-model="ruleForm.deptId"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
        </el-form>
        <editor ref="editor1" :msg="ruleForm.content"></editor>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="submit">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import editor from '@/components/editor/editor'
  import {getStringArr} from '@/utils/tool'

  export default {
    name: 'notice',
    components: {editor},
    data() {
      return {
        author: "",
        time: "",
        title: "",
        newsList: [],
        selectedList: [],//选中表单项
        pageNum: null,//当前页
        pageSize: null,
        records: null,
        dialogVisible: false,
        ruleForm: {
          title: "",
          dept: "",
          author: "",
          content: "asdfasdfasdfas",
          id: ''
        },
        rules: {},
        add_edit_flag: false,//false-新增，true-编辑
      }
    },
    created() {
      this.getList()
    },
    mounted() {

    },
    methods: {
      getList() {
        this.request.post('/api/notice/page', {
          page: this.pageNum,
          limit: this.pageSize,
          userId: this.author,
          whenCreated: this.time,
          title: this.title,
          type: 'all'
        }).then(res => {
          this.newsList = res.data.page.rows,
            this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      showDia(row) {//打开模态框，新增/编辑共用
        this.dialogVisible = true;
        console.log(row)
        if (row) {//编辑
          this.add_edit_flag = true
          this.ruleForm.content = row.content
          this.ruleForm.title = row.title
          this.ruleForm.deptId = row.deptId
          this.ruleForm.userId = row.userId
          this.ruleForm.id = row.id
        } else {//新增
          this.add_edit_flag = false
        }
      },
      submit() {//新增/编辑
        let url = ''
        if (this.add_edit_flag) {
          url = '/api/notice/edit'
        } else {
          url = '/api/notice/add'
        }
        console.log(url)
        this.request.post(url, {
          userId: this.ruleForm.author,
          deptId: this.ruleForm.deptId,
          title: this.ruleForm.title,
          content: 'qwertyuiop',
          id: this.ruleForm.id
        }).then(res => {
          this.$message({
            message: res.errmsg,
            type: 'success',
            duration: 5 * 1000
          })
          this.dialogVisible = false
          this.add_edit_flag = false
          this.getList()
          this.resetForm('ruleForm')
        })
      },
      remove() {
        if (this.selectedList.length > 0) {
          this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/api/notice/remove', {ids: this.selectedList}).then(res => {
              this.$message({
                type: 'success',
                message: res.errmsg
              })
              this.getList()
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
      //清空表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeState(e, state) {
        this.request.post('/api/notice/updateStatus ', {
          status: state,
          id: e
        }).then(res => {
          this.$message({
            message: res.errmsg,
            type: 'success',
            duration: 5 * 1000
          })
          this.getList()
        })
      },
      abc(e) {
        console.log(this.time)
      },
      handleSizeChange(e) {
        this.pageSize = e
        this.getList()
      },
      handleCurrentChange(e) {
        this.pageNum = e
        this.getList()
      },
      prev() {
        this.pageNum = this.pageNum + 1
        this.getList()
      },
      next() {
        this.pageNum = this.pageNum - 1
        this.getList()
      },
      handleSelectionChange(e) {
        this.selectedList = getStringArr(e, 'id')
        console.log(this.selectedList)
      },
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
