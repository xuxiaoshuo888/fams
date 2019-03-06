<template>
  <div class="pad20">
    <el-row :gutter="10" class="search_area">
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
        <el-input
          placeholder="性别"
          size="mini"
          clearable
          v-model="xb">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学院"
          size="mini"
          clearable
          v-model="xy">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="年级"
          size="mini"
          clearable
          v-model="nj">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="专业"
          size="mini"
          clearable
          v-model="zy">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="班级"
          size="mini"
          clearable
          v-model="bj">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="国籍"
          size="mini"
          clearable
          v-model="gb">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="remove">批量删除</el-button>
        <el-button type="primary" size="mini" icon="el-icon-upload2" @click="dialogVisible_import = true">导入</el-button>
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
        width="90"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
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
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="110"
        header-align="center"
        align="center">
      </el-table-column>
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
        prop="zwm"
        label="中文名"
        width="80"
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
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="hzhm"
        label="护照号"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gb"
        label="国籍"
        width="80"
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
        prop="fdy"
        label="辅导员"
        width="80"
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
          <el-form-item label="姓" prop="">
            <el-input v-model="ruleForm.xmX" disabled></el-input>
          </el-form-item>
          <el-form-item label="名" prop="">
            <el-input v-model="ruleForm.xmM" disabled></el-input>
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

    <!--导入的模态框-->
    <el-dialog
      v-if="dialogVisible_import"
      title=""
      :visible.sync="dialogVisible_import"
      width="900px">
      <div slot="title">数据导入</div>
      <div>
        <div class="daoru_block borderBottom">
          <header>导入说明：</header>
          <div class="">本系统支持xls,xlsx格式，请确保表格中的数据不含有空格等特殊符号，标准格式请参考【<a @click="import_template" target="_blank">导入模板</a>】
          </div>
        </div>
        <div class="daoru_block borderBottom">
          <header>注意事项：</header>
          <div class="">导入学生基本信息若系统已存在，只改变所属班级专业学院信息，个人信息不改变</div>
        </div>
        <div class="daoru_block borderBottom">
          <header>文件上传：</header>
          <div class="">
            <el-upload
              class="upload-block"
              drag
              :limit="1"
              :multiple="multiple"
              action="/ws/data_import/upload?id=studentInfo"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传xlsx/xls文件，且不超过500kb</div>
              <div v-if="error_notice" class="el-upload__tip" style="font-size: 20px" slot="tip">
                错误条数 <span style="color: red;">{{download_info.importData.errorCount}}</span> 条,<a @click="downLoad">下载查看</a><br/>
                正确条数 <span style="color: green;">{{download_info.importData.succCount}}</span> 条,<a v-if="download_info.importData.succCount > 0" @click="succImport">导入成功</a>
              </div>
            </el-upload>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible_import = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {getStringArr} from '@/utils/tool'

  export default {
    name: 'stdEntry',
    data() {
      return {
        xh: "",
        xm_x: "",
        xm_m: "",
        xb: "",
        xy: "",
        zy: "",
        bj: "",
        nj: "",
        gb: '',
        pageNum: 1,
        pageSize: null,
        records: null,
        dialogVisible: false,
        dialogVisible_import: false,
        list: [],
        selectedList: [],
        rules: {},
        add_edit_flag: false,//false-新增，true-编辑
        detail: {},
        ruleForm: {//修改基本信息
          xmX:'',
          xmM:'',
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
        fileUrl: '',//文件类型
        error_notice: false,//是否显示错误提示信息
        X: '',//错误数
        download_info: {},//下载链接
        multiple:false,//false不支持多选
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.request.post('/ws/student/page', {
          xm_x: this.xm_x,
          xm_m:this.xm_m,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          nj: this.nj,
          gb: this.gb,
          xb: this.xb,
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
        this.xh = ''
        this.xm_x = ''
        this.xm_m = ''
        this.xb = ''
        this.xy = ''
        this.zy = ''
        this.bj = ''
        this.nj = ''
        this.gb = ''
        this.getData()
      },
      remove() {//批量删除
        if (this.selectedList.length > 0) {
          let m = getStringArr(this.selectedList, 'id')
          this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/ws/student/remove', {ids: m}).then(res => {
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
      handleSelectionChange(e) {
        this.selectedList = e
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
      reset_form() {//置空弹出框里的表单
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
            cflx: "",
            cfsj: "",
            cfdqsj: "",
            fcyy: "",
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
      import_template() {//下载导入模板
        window.open('/ws/data_import/downloadTemplate?id=studentInfo', '_blank')
      },
      handleAvatarSuccess(res, file, fileList) {
        console.log(res)//后台返回的数据
        this.error_notice = true
        this.X = res.data.importData.errorCount
        this.download_info = res.data
        if(fileList.length === 1){
          this.error_notice = true
        }else{
          this.error_notice = false
        }
        // this.fileUrl = URL.createObjectURL(file.raw);
        // this.request.post('/ws/data_import/upload').then(res => {
        //   this.$message({
        //     type: 'success',
        //     message: res.errmsg
        //   })
        // })
      },
      beforeAvatarUpload(file) {
        console.log(file)
        const isXlsx = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        const isXls = file.type === 'application/vnd.ms-excel'
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isXlsx && !isXls) {
          this.$message.error('上传表格只能是xlsx/xls格式文件');
        }
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 2MB!');
        }
        return (isXlsx || isXls) && isLt2M;
      },
      downLoad() {//点击下载上传导入模板后的错误信息
        let importDataId = this.download_info.importData.id
        let importId = this.download_info.importDTO.id
        window.open(`/ws/data_import/export?importDataId=${importDataId}&importId=${importId}&status=0`, '_blank')
      },
      //导入成功按钮
      succImport() {
        this.request.post('/ws/student/importData', {importDataId:this.download_info.importData.id}).then(res => {
          if(res){

          }
        })
      }
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
