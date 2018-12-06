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
        <el-input
          placeholder="在校状态"
          size="mini"
          clearable
          v-model="zxzt">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-select size="mini" v-model="xjlb" placeholder="学籍类别">
          <el-option key="1" label="在籍" value="1"></el-option>
          <el-option key="2" label="不在籍" value="2"></el-option>
        </el-select>
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
        <el-select size="mini" v-model="mz" placeholder="民族">
          <el-option key="1" label="汉族" value="1"></el-option>
          <el-option key="2" label="满族" value="2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="resetPassword">重置密码</el-button>
        <el-button type="primary" size="mini" icon="el-icon-download" @click="optExport">导出Excel</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="list"
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
        width="150"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="showDetail(scope.row.xh)" type="primary" size="mini">详情</el-button>
          <el-button type="primary" size="mini" @click="add_edit(scope.row.xh)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="nj"
        label="年级"
        width="60"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bj"
        label="班级"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="姓名"
        width="150"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zwm"
        label="中文名"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xb"
        label="性别"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ssh"
        label="宿舍号"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="lxdh"
        label="电话号码"
        width="120"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="csrq"
        label="出生年月"
        width="120"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="hzhm"
        label="护照号"
        width="180"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gb"
        label="国籍"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="xh"-->
      <!--label="学籍注册号"-->
      <!--width="130"-->
      <!--header-align="center"-->
      <!--align="center">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="dxrq"
        label="到校日期"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zjxy"
        label="宗教"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bzr"
        label="班主任"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bz"
        label="备注"
        width=""
        header-align="center"
        align="center"
        show-overflow-tooltip>
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


    <!--修改模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">学生基本信息管理</div>
      <div>
        <el-form :model="ruleForm" inline="" :rules="rules" ref="ruleForm" label-width="120px"
                 class="demo-ruleForm">
          <el-form-item label="学号" prop="xh">
            <el-input v-model="ruleForm.xh" disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="xm">
            <el-input v-model="ruleForm.xm" disabled></el-input>
          </el-form-item>
          <el-form-item label="中文名" prop="">
            <el-input v-model="ruleForm.zwm" disabled></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-input v-model="ruleForm.xb" disabled></el-input>
          </el-form-item>
          <el-form-item label="年级" prop="">
            <el-input v-model="ruleForm.nj" disabled></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.csrq"
              value-format="yyyy-MM-dd" disabled>
            </el-date-picker>
          </el-form-item>
          <el-form-item label="学院" prop="">
            <el-input v-model="ruleForm.xy" disabled></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="">
            <el-input v-model="ruleForm.zy" disabled></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="">
            <el-input v-model="ruleForm.bj" disabled></el-input>
          </el-form-item>
          <el-form-item label="入学年月" required>
            <el-form-item prop="">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.rxnf"
                value-format="yyyy-MM-dd" disabled></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="在校状态" prop="region">
            <el-select placeholder="请选择在校状态" v-model="ruleForm.zxzt">
              <el-option label="在校" value="1"></el-option>
              <el-option label="不在校" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电话号码" prop="">
            <el-input v-model="ruleForm.lxdh"></el-input>
          </el-form-item>
          <el-form-item label="宿舍号" prop="">
            <el-input v-model="ruleForm.ssh"></el-input>
          </el-form-item>
          <el-form-item label="出生地" prop="">
            <el-input v-model="ruleForm.csd"></el-input>
          </el-form-item>
          <el-form-item label="国籍" prop="">
            <el-input v-model="ruleForm.gb"></el-input>
          </el-form-item>
          <el-form-item label="宗教信仰" prop="">
            <el-input v-model="ruleForm.zjxy"></el-input>
          </el-form-item>
          <el-form-item label="辅导员工号" prop="">
            <el-input v-model="ruleForm.fdygh"></el-input>
          </el-form-item>
          <el-form-item label="辅导员姓名" prop="">
            <el-input v-model="ruleForm.fdyxm"></el-input>
          </el-form-item>
          <el-form-item label="辅导员联系方式" prop="">
            <el-input v-model="ruleForm.fdylxdh"></el-input>
          </el-form-item>
          <el-form-item label="毕业去向" prop="">
            <el-input v-model="ruleForm.byqx"></el-input>
          </el-form-item>
          <el-form-item label="永久联系电话" prop="">
            <el-input v-model="ruleForm.yjlxdh"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="120px">
          <el-form-item label="备注" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm.bz" style="width:100%;"></el-input>
          </el-form-item>
        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="submit">确 定</el-button>
  </span>
    </el-dialog>


    <!--详情 模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible_detail"
      width="900px">
      <div slot="title">学生基本信息</div>
      <div>
        <!--基本信息-->
        <div class="card_block">
          <!--<header class="card_title"></header>-->
          <div class="card_content">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <el-form-item label="学号：">
                    <div>{{detail.xh}}</div>
                  </el-form-item>
                  <el-form-item label="姓名：">
                    <div>{{detail.xm}}</div>
                  </el-form-item>
                  <el-form-item label="中文名：">
                    <div>{{detail.zwm}}</div>
                  </el-form-item>
                  <el-form-item label="性别：">
                    <div>{{detail.xb}}</div>
                  </el-form-item>
                  <el-form-item label="出生年月：">
                    <div>{{detail.csrq}}</div>
                  </el-form-item>
                  <el-form-item label="年级：">
                    <div>{{detail.nj}}</div>
                  </el-form-item>
                  <el-form-item label="学院：">
                    <div>{{detail.xy}}</div>
                  </el-form-item>
                  <el-form-item label="专业：">
                    <div>{{detail.zy}}</div>
                  </el-form-item>
                  <el-form-item label="班级：">
                    <div>{{detail.bj}}</div>
                  </el-form-item>
                  <el-form-item label="入学年月：">
                    <div>{{detail.rxrq}}</div>
                  </el-form-item>
                  <el-form-item label="在校状态：">
                    <div>{{detail.zxzt}}</div>
                  </el-form-item>
                  <el-form-item label="学籍状态：">
                    <div>{{detail.xjzt}}</div>
                  </el-form-item>
                  <el-form-item label="联系电话：">
                    <div>{{detail.lxdh}}</div>
                  </el-form-item>
                  <el-form-item label="住宿情况：">
                    <div>{{detail.zsqk}}</div>
                  </el-form-item>
                  <el-form-item label="出生地：">
                    <div>{{detail.csd}}</div>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <div class="card_pic"><img src="@/assets/1.jpg"/></div>
                  <el-form-item label="国籍：">
                    <div>{{detail.gb}}</div>
                  </el-form-item>
                  <el-form-item label="宗教信仰：">
                    <div>{{detail.zjxy}}</div>
                  </el-form-item>
                  <el-form-item label="辅导员工号：">
                    <div>{{detail.fdy}}</div>
                  </el-form-item>
                  <el-form-item label="辅导员姓名：">
                    <div>{{detail.fdy}}</div>
                  </el-form-item>
                  <el-form-item label="辅导员联系方式：">
                    <div>{{detail.fdy}}</div>
                  </el-form-item>
                  <el-form-item label="毕业去向：">
                    <div>{{detail.byqx}}</div>
                  </el-form-item>
                  <el-form-item label="永久联系电话：">
                    <div>{{detail.yjlxdh}}</div>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'stdBasic',
    data() {
      return {
        xh: "",
        zxzt: '',
        xjlb: "",
        xm: "",
        xb: "",
        xy: "",
        zy: "",
        bj: "",
        nj: "",
        mz: '',
        pageNum: 1,
        pageSize: null,
        records: null,
        dialogVisible: false,
        dialogVisible_detail: false,
        list: [],
        selectedList: [],
        rules: {},
        add_edit_flag: false,//false-新增，true-编辑
        detail: {},
        ruleForm: {//修改基本信息
          xm: '',//姓名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.request.post('/ws/student/page', {
          xm: this.xm,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          zxzt: this.zxzt,
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
      resetPassword() {
        if (this.selectedList.length === 1) {
          console.log(this.selectedList)
          this.$confirm('确定重置?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/ws/student/resetPwd', {id: this.selectedList[0].xh}).then(res => {
              this.$message({
                type: 'success',
                message: res.errmsg
              })
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消重置'
            })
          })
        } else {
          this.$message({
            message: '只能选择一项',
            type: 'warning',
            duration: 5 * 1000
          })
        }
      },
      reset_form() {//置空弹出框里的表单
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
      add_edit(e) {//编辑
        this.reset_form()
        this.dialogVisible = true
        this.request.post('/ws/student/getStdInfo', {xh: e}).then(res => {
          if (res.data.data) {
            this.ruleForm = res.data.data
            // this.ruleForm2 = res.data.data
            // delete this.ruleForm2.student
            // delete this.ruleForm2.whenCreated
            // delete this.ruleForm2.whenModified
          }
        })
      },
      showDetail(xh) {
        this.dialogVisible_detail = true
        if (xh) {
          this.request.post('/ws/student/getStdInfo', {xh: xh}).then(res => {
            console.log(res)
            if (res.data.data) {
              this.detail = res.data.data
            }
          })
        }
      },
      submit() {
        delete this.ruleForm.student
        delete this.ruleForm.dept
        delete this.ruleForm.whenCreated
        delete this.ruleForm.whenModified
        this.request.post('/ws/student/edit', this.ruleForm).then(res => {
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
        window.open('/ws/student/export?xm=' + this.xm +
          '&xh=' + this.xh +
          '&xy=' + this.xy +
          '&zy=' + this.zy +
          '&bj=' + this.bj , '_blank')
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

<style lang="scss" scoped>
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
