<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="add">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-edit" @click="edit">编辑</el-button>
        <el-button type="primary" size="mini" icon="el-icon-upload2">授权</el-button>
        <el-button type="primary" size="mini" icon="el-icon-upload2" @click="distribution">分配用户</el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="del">批量删除</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="list"
      border
      stripe
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="100%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色名"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="scope"
        label="角色管理范围"
        width=""
        header-align="center"
        align="center">
        <template slot-scope="item">{{match(item.row.scope)}}</template>
      </el-table-column>
      <el-table-column
        label="是否系统定制"
        width=""
        header-align="center"
        align="center">
        <template slot-scope="scope">{{scope.row.type === '1' ? '是' : '否'}}</template>
      </el-table-column>
      <el-table-column
        label="是否可维护基本信息"
        width=""
        header-align="center"
        align="center">
        <template slot-scope="scope">{{scope.row.id.indexOf('SYS') !== -1 ? '是' : '否'}}</template>
      </el-table-column>
    </el-table>

    <!--新增/编辑模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible1"
      width="900px">
      <div slot="title">新增</div>
      <div>
        <el-form :model="ruleForm" :inline="true" :rules="rules1" ref="addForm" class="demo-ruleForm"
                 label-width="200px">
          <el-form-item label="角色名" prop="name">
            <el-input v-model="ruleForm.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="是否可维护基本信息" prop="type">
            <el-radio-group v-model="ruleForm.type">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="管理范围" prop="scope">
            <el-select v-model="ruleForm.scope" filterable clearable placeholder="请选择">
              <el-option
                v-for="item in managerScope"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submitAdd">确 定</el-button>
      </span>
    </el-dialog>

    <!--分配用户 弹出框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible2"
      width="1100px">
      <div slot="title">分配用户</div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="textr pad20">
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeUser">删除</el-button>
          </div>
          <el-table
            :data="list2"
            border
            stripe
            @selection-change="handleSelectionChange2">
            <el-table-column
              type="selection"
              header-align="center"
              align="center"
              width="50">
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户名"
              width="120"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="truename"
              label="姓名"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="deptId"
              label="部门"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="usertype"
              label="用户类型"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width=""
              header-align="center"
              align="center">
              <template slot-scope="scope">{{scope.row.status === 1 ? '是' : '否'}}</template>
            </el-table-column>
          </el-table>
          <div class="pad20">
            <el-pagination
              background
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
              :current-page="pageNum2"
              :page-sizes="[10, 20, 50]"
              :page-size="pageSize2"
              layout="total, sizes, prev, pager, next"
              :total="records2">
            </el-pagination>
          </div>
        </el-col>
        <!--右侧-->
        <el-col :span="12">
          <div class="textc">
            <el-input
              placeholder="姓名"
              size="mini"
              clearable
              v-model="truename">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-input
              placeholder="用户名"
              size="mini"
              clearable
              v-model="username">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div class="textc pad20">
            <el-button type="primary" size="mini" icon="el-icon-search" @click="getData3">查询</el-button>
            <el-button type="primary" size="mini" icon="el-icon-check" @click="addUser">选择</el-button>
          </div>
          <el-table
            :data="list3"
            border
            stripe
            @selection-change="handleSelectionChange3">
            <el-table-column
              type="selection"
              header-align="center"
              align="center"
              width="50">
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户名"
              width="120"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="truename"
              label="姓名"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="deptId"
              label="部门"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="usertype"
              label="用户类型"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width=""
              header-align="center"
              align="center">
              <template slot-scope="scope">{{scope.row.status === 1 ? '是' : '否'}}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            @size-change="handleSizeChange3"
            @current-change="handleCurrentChange3"
            :page-sizes="[10, 20, 50]"
            :page-size="pageSize3"
            layout="total, sizes, prev, pager, next"
            :total="records3">
          </el-pagination>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'role',
    data() {
      return {

        list: [],//角色名-name，角色管理范围-scope，定制-type，维护-id里面有SYS-1，没有-0
        managerScope: [
          {label: '学生', value: 'student'},
          {label: '辅导员/班主任', value: 'fdy'},
          {label: '院系管理员', value: 'dept'},
          {label: '留管办', value: 'lgb'},
          {label: '系统管理员', value: 'system'}
        ],
        dialogVisible1: false,//新增/编辑模态框
        dialogVisible2: false,//分配用户弹出框
        rules1: {
          name: [{required: true, message: '请输入角色名', trigger: 'blur'}],
          type: [{required: true, message: '请选择是否可维护基本信息', trigger: 'change'}],
          scope: [{required: true, message: '请选择管理范围', trigger: 'change'}]
        },
        ruleForm: {
          id: '',
          name: '',
          scope: '',
          type: ''
        },
        url: '',//新增和修改提交表单的地址
        selectedList: [],//选中的表单项

        //分配-左侧
        list2: [],//已分配用户
        selectedList2: [],//选中表单项
        pageNum2: null,//当前页
        pageSize2: null,
        records2: null,
        //分配-右侧
        list3: [],//可分配的用户
        selectedList3: [],//选中表单项
        truename: '',
        username: '',
        pageNum3: null,//当前页
        pageSize3: null,
        records3: null,
      }
    },
    created() {
    },
    mounted() {
      this.getData()
    },
    methods: {
      handleSelectionChange(e) {//角色管理/选中某项
        this.selectedList = e
      },
      handleSelectionChange2(e) {//分配用户/选中左侧
        this.selectedList2 = e
      },
      handleSelectionChange3(e) {//分配用户/选中右侧
        this.selectedList3 = e
      },
      //pageSize变化
      handleSizeChange2(e) {
        this.pageSize2 = e
        this.getData2()
      },
      handleSizeChange3(e) {
        this.pageSize3 = e
        this.getData3()
      },
      //pageNum变化
      handleCurrentChange2(e) {
        this.pageNum2 = e
        this.getData2()
      },
      handleCurrentChange3(e) {
        this.pageNum3 = e
        this.getData3()
      },
      //分配用户-左侧-删除
      removeUser() {
        if (this.selectedList2.length > 0) {
          let m = this.getStringArr(this.selectedList2, 'id')
          this.request.post('/api/role/removeRoleUsers', {roleId: this.selectedList[0].id, userids: m}).then(res => {
            this.getData2()
            this.getData3()
            this.$message({
              message: res.errmsg,
              type: 'success',
              duration: 5 * 1000
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
      //分配用户-右侧-选择
      addUser() {
        if (this.selectedList3.length > 0) {
          let m = this.getStringArr(this.selectedList3, 'id')
          this.request.post('/api/role/addUser', {roleId: this.selectedList[0].id, userids: m}).then(res => {
            this.getData2()
            this.getData3()
            this.$message({
              message: res.errmsg,
              type: 'success',
              duration: 5 * 1000
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
      getData() {//拿角色表格数据
        this.request.post('/api/role/list').then(res => {
          this.list = res.data.data
        })
      },
      getData2() {//分配用户左侧表格
        this.request.post('/api/role/getPagerByRole', {
          roleId: this.selectedList[0].id,
          page: this.pageNum2,
          limit: this.pageSize2
        }).then(res => {
          this.list2 = res.data.data.rows
          this.pageNum2 = res.data.data.page
          this.pageSize2 = res.data.data.pageSize
          this.records2 = res.data.data.records
        })
      },
      getData3() {//分配用户右侧表格
        this.request.post('/api/role/getUsersPage', {
          username: this.username,
          truename: this.truename,
          page: this.pageNum3,
          limit: this.pageSize3,
          roleId: this.selectedList[0].id
        }).then(res => {
          this.list3 = res.data.data.rows
          this.pageNum3 = res.data.data.page
          this.pageSize3 = res.data.data.pageSize
          this.records3 = res.data.data.records
        })
      },
      //根据字符串匹配角色管理范围
      match(e) {
        for (let i = 0; i < this.managerScope.length; i++) {
          if (e === this.managerScope[i].value) {
            return this.managerScope[i].label
          }
        }
      },
      add() {//新增
        this.dialogVisible1 = true
        this.url = '/api/role/add'
      },
      edit() {//编辑
        if (this.selectedList.length === 1) {
          this.dialogVisible1 = true
          this.url = '/api/role/edit'
          this.ruleForm = this.selectedList[0]
        } else {
          this.$message({
            message: '请选择一项',
            type: 'warning',
            duration: 5 * 1000
          })
        }
      },
      del() {
        let _this = this
        if (this.selectedList.length > 0) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let a = []
            for (let i = 0; i < this.selectedList.length; i++) {
              a.push(this.selectedList[i].id)
            }
            this.request.post('/api/role/remove', {ids: a}).then(res => {
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
      distribution() {//分配用户
        if (this.selectedList.length === 1) {
          this.dialogVisible2 = true
          this.getData2()
        } else {
          this.$message({
            message: '请选择一项进行编辑',
            type: 'warning',
            duration: 5 * 1000
          })
        }
      },
      //提交表单
      submitAdd() {
        this.$refs['addForm'].validate((valid) => {
          if (valid) {
            this.request.post(this.url, this.ruleForm).then(res => {
              this.dialogVisible1 = false
              this.resetForm('addForm')
              this.getData()
              this.$message({
                message: res.errmsg,
                type: 'success',
                duration: 5 * 1000
              })
            })
          }
        })
      },
      cancel() {
        this.dialogVisible1 = false
        this.resetForm('addForm')
      },
      //清空表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //输入对象数组，key返回value组成的数组
      getStringArr(objArr, m) {
        let a = []
        console.log(objArr)
        for (let i = 0; i < objArr.length; i++) {
          a.push(objArr[i][m])
        }
        return a
      }
    },
  }
</script>

<style scoped>

</style>
