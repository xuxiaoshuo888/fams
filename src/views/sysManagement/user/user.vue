<template>
  <div class="pad20">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="20">
        <el-row :gutter="20" class="search_area">
          <el-col :span="24" class="">
            <el-input
              placeholder="用户名"
              size="mini"
              clearable
              v-model="yhm">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-input
              placeholder="姓名"
              size="mini"
              clearable
              v-model="xm">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-select size="mini" v-model="user" clearable placeholder="用户类型">
              <el-option
                size="mini"
                v-for="item in userType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="add_edit('add')">新增</el-button>
            <!--<el-button type="primary" size="mini" icon="el-icon-upload2">上传</el-button>-->
            <!--<el-button type="danger" size="mini" icon="el-icon-delete">批量删除</el-button>-->
            <!--<el-button type="primary" size="mini" icon="el-icon-upload2">批量修改密码</el-button>-->
            <!--<el-button type="primary" size="mini" icon="el-icon-upload2">重置密码</el-button>-->
            <el-button type="primary" size="mini" icon="el-icon-upload2" @click="Authorize">授权</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2" @click="ctrlUsage('1')">启用</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2" @click="ctrlUsage('0')">禁用</el-button>
          </el-col>
          <el-table
            :data="tableList"
            style="width: 100%;"
            border
            stripe
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              header-align="center"
              align="center"
              width="50">
            </el-table-column>
            <el-table-column
              label="操作"
              width="150"
              header-align="center"
              align="center"
              fixed="right">
              <template slot-scope="scope">
                <el-button @click="add_edit(scope.row.id)" type="primary" size="mini">修改</el-button>
                <el-button type="danger" size="mini" @click="deletUser(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户名"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="truename"
              label="姓名"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="deptId"
              label="部门"
              width="130"
              header-align="center"
              align="center">
              <template slot-scope="scope">
                {{transformDeptType(scope.row.deptId)}}
              </template>
            </el-table-column>
            <el-table-column
              label="用户类型"
              width="130"
              header-align="center"
              align="center">
              <template slot-scope="scope">
                {{transformUserType(scope.row.usertype)}}
              </template>
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="电话"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮件"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </el-row>
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

      </el-col>
    </el-row>

    <!--新增修改模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">新增用户</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules1" ref="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" :disabled="add_edit_flag"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.sex" :disabled="add_edit_flag">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名" prop="truename">
            <el-input v-model="ruleForm.truename" :disabled="add_edit_flag"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="">
            <el-input v-model="ruleForm.address" :disabled="add_edit_flag"></el-input>
          </el-form-item>
          <el-form-item label="部门" prop="">
            <el-input v-model="ruleForm.dept" :disabled="add_edit_flag"></el-input>
          </el-form-item>
          <el-form-item label="用户类别" prop="userType">
            <!--<el-input v-model="ruleForm.usertype" :disabled="add_edit_flag"></el-input>-->
            <el-select v-model="ruleForm.usertype" prop="userType" :disabled="add_edit_flag" clearable
                       placeholder="用户类型">
              <el-option
                size="mini"
                v-for="item in userType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="ruleForm.mobile"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

    <!--授权模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible_Authorize"
      width="900px">
      <div slot="title">新增用户</div>
      <div>
        <el-checkbox v-for="(item,index) in authorize_list" v-model="item.Check" :label="item.name" border></el-checkbox>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_Authorize = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        yhm: '',//用户名
        xm: '',//姓名
        user: "",//用户类别
        userType: [//用户类别选项列表
          {label: '教工', value: '2'},
          {label: '学生', value: '4'}
        ],
        deptType: [
          {label: '部门一', value: '0400'},
          {label: '部门二', value: '87'}
        ],
        // deptId:''//保留字段，暂未使用
        pageNum: 1,
        pageSize: null,
        records: null,
        tree: [
          {
            label: '长沙医学院',
            children: [
              {
                label: '文学院',
                children: [{label: '汉语言文学1班'}, {label: '英语1班'}]
              },
              {
                label: '理学院',
                children: [{label: '生物技术1班'}]
              },
              {
                label: '工学院',
                children: [{label: '计算机科学与技术1班'}]
              },
              {
                label: '管理学院',
                children: [{label: '管理1班'}, {label: '市场营销1班'}]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableList: [],//列表
        dialogVisible: false,
        ruleForm: {//表单的基本信息
          username: '',
          sex: '',
          truename: '',
          address: '',
          dept: '',
          usertype: '',
          mobile: '',
          email: ''
        },
        add_edit_flag: false,//false-新增，true-编辑
        rules1: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          truename: [{required: true, message: '请输入姓名', trigger: 'blur'}],
          userType: [{required: true, message: '请输入用户类型', trigger: 'blur'}]
        },
        dialogVisible_Authorize:false,
        authorize_list:[
          {name:'班主任',val:'001'},
          {name:'管理员',val:'002'}
        ]
      };
    },
    mounted() {
      this.getData()
      this.getDeptList()
      this.getAuthorList()
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleSelectionChange(e) {
        this.selectedList = e
      },
      getDeptList() {
        this.request.post('/ws/dept/list', {}).then(res => {
          this.deptType = res.data.data
        })
      },
      transformDeptType(e) {//转换部门
        let label = ''
        if (e) {
          for (let i = 0; i < this.deptType.length; i++) {
            if (e == this.deptType[i].id) {
              label = this.deptType[i].name
            }
          }
        }
        return label
      },
      transformUserType(e) {//转换用户
        let label = ''
        if (e) {
          for (let i = 0; i < this.userType.length; i++) {
            if (e == this.userType[i].value) {
              label = this.userType[i].label
            }
          }
        }
        return label
      },
      getData() {
        this.request.post('/ws/user/page', {
          page: this.pageNum,
          limit: this.pageSize,
          records: this.records,
          truename: this.xm,
          username: this.yhm,
          usertype: this.user
        }).then(res => {
          this.tableList = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
          this.total = res.data.page.total
        })
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
      add_edit(e) {
        this.dialogVisible = true
        if (e === 'add') {//新增
          this.add_edit_flag = false
        } else {//编辑
          this.add_edit_flag = true
          this.request.post('/ws/user/toEdit', {id: e}).then(res => {
            this.ruleForm = {...res.data.user}
            delete this.ruleForm.whenCreated
            delete this.ruleForm.whenModified
          })
        }
      },
      submit() {
        let url = ''
        if (this.add_edit_flag) {//编辑
          url = '/ws/user/edit'
        } else {
          url = '/ws/user/add'
        }
        // this.ruleForm2.xh = this.ruleForm.xh
        this.request.post(url, this.ruleForm).then(res => {
          this.$message({
            message: res.errmsg,
            type: 'success',
            duration: 5 * 1000
          })
          this.getData()
          this.dialogVisible = false
        })
      },
      deletUser(e) {//删除单个用户
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.request.post('/ws/user/remove', {userids: e})
            .then(res => {
              this.$message({
                message: res.errmsg,
                type: 'success',
                duration: 5 * 1000
              })
              this.getData()
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      ctrlUsage(e) {//1-启用/ 0-禁用，
        if (this.selectedList && this.selectedList.length > 0) {
          this.request.post('/ws/user/isbatchForbidden', {id: this.selectedList, status: e})
            .then(res => {
              this.$message({
                message: res.errmsg,
                type: 'success',
                duration: 5 * 1000
              })
            })
        } else {
          this.$message({
            message: '请至少选中一项',
            type: 'info',
            duration: 5 * 1000
          })
        }
      },
      Authorize(){//批量授权
        if (this.selectedList && this.selectedList.length > 0) {
          this.dialogVisible_Authorize = true
        } else {
          this.$message({
            message: '请至少选中一项',
            type: 'info',
            duration: 5 * 1000
          })
        }
      },
      getAuthorList(){
        this.request.post('/ws/role/list')
          .then(res => {

          })
      },
      submit_Authorize(){

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
