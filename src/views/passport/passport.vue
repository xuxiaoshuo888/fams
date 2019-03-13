<template>
  <!--护照居留许可管理-->
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
        <el-input
          placeholder="护照号"
          size="mini"
          v-model="hzhm"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-date-picker
          type="date"
          size="mini"
          v-model="hzyxq"
          placeholder="护照有效期"
          style="width: 100%;"
          value-format="yyyy-MM-dd">
        </el-date-picker>
        <el-date-picker
          type="date"
          size="mini"
          placeholder="居留许可证有效期"
          style="width: 100%;"
          v-model="jlxkdqr"
          value-format="yyyy-MM-dd"></el-date-picker>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
        <el-button type="primary" size="mini" icon="el-icon-view" @click="hzdaoqi">护照到期</el-button>
        <el-button type="primary" size="mini" icon="el-icon-view" @click="jlxkdaoqi">居留许可到期</el-button>
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
          <el-button type="primary" size="mini" @click="add_edit(scope.row.pid)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="120"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm_x"
        label="姓"
        width="200"
        show-overflow-tooltip
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm_m"
        label="名"
        width="200"
        show-overflow-tooltip
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xb"
        label="性别"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zy"
        label="专业"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="nj"
        label="年级"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bj"
        label="班级"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="xy"-->
      <!--label="学院"-->
      <!--width="150"-->
      <!--header-align="center"-->
      <!--align="center">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="hzhm"
        label="护照号码"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="hzyxq"
        label="护照有效期"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="hzyxqdqr"-->
      <!--label="护照有效期到期日"-->
      <!--width="100"-->
      <!--header-align="center"-->
      <!--align="center">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
      <!--prop="hzgxhdqr"-->
      <!--label="护照更新后到期日"-->
      <!--width="100"-->
      <!--header-align="center"-->
      <!--align="center">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="jlxkdqr"
        label="居留许可证有效期"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="jlxkgxhdqr"-->
      <!--label="居留许可更新后到期日"-->
      <!--width="100"-->
      <!--header-align="center"-->
      <!--align="center">-->
      <!--</el-table-column>-->
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
      width="1200px">
      <div slot="title">护照及居留许可管理</div>
      <div>
        <el-form :model="ruleForm" inline="" :rules="rules1" ref="ruleForm" label-width="160px"
                 class="demo-ruleForm">
          <el-form-item label="学号" prop="xh">
            <el-input v-model="ruleForm.xh" @blur="getStdInfo"></el-input>
          </el-form-item>
          <el-form-item label="姓" prop="name">
            <el-input v-model="ruleForm.xmX" disabled></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.xb" disabled>
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
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
          <div class="hr"></div>

        </el-form>
        <el-form :model="ruleForm2" inline="" :rules="rules2" ref="ruleForm2" label-width="160px"
                 class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="12" class="borderRight">
              <div style="min-height: 130px;">
                <el-form-item label="护照号码" prop="hzhm">
                  <el-input v-model="ruleForm2.hzhm" required></el-input>
                </el-form-item>
                <el-form-item label="护照有效期" prop="hzyxq">
                  <el-date-picker
                    type="date"
                    placeholder=""
                    v-model="ruleForm2.hzyxq"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-form-item>
                <!--<el-form-item label="护照有效期到期日" prop="hzyxqdqr">-->
                <!--<el-date-picker-->
                <!--type="date"-->
                <!--placeholder=""-->
                <!--v-model="ruleForm2.hzyxqdqr"-->
                <!--value-format="yyyy-MM-dd">-->
                <!--</el-date-picker>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="护照更新后到期日" prop="">-->
                <!--<el-date-picker-->
                <!--type="date"-->
                <!--placeholder=""-->
                <!--v-model="ruleForm2.hzgxhdqr"-->
                <!--value-format="yyyy-MM-dd">-->
                <!--</el-date-picker>-->
                <!--</el-form-item>-->
              </div>
              <el-row>
                <el-col :span="12">
                  <div class="pic_title"><span class="bitian">*</span>上传护照首页</div>
                  <el-upload
                    class="avatar-uploader"
                    action="/ws/upload/uploadFile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm2.hzsy" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.hzsy).path"
                         class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-col>
                <el-col :span="12">
                  <div class="pic_title"><span class="bitian">*</span>上传签证页</div>
                  <el-upload
                    class="avatar-uploader"
                    action="/ws/upload/uploadFile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm2.qzy" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.qzy).path"
                         class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-col>
              </el-row>

            </el-col>
            <el-col :span="12" x>
              <div style="min-height: 130px;">
                <el-form-item label="居留许可证有效期" prop="jlxkdqr">
                  <el-date-picker
                    type="date"
                    placeholder=""
                    v-model="ruleForm2.jlxkdqr"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </el-form-item>
                <!--<el-form-item label="居留许可更新后到期日" prop="">-->
                <!--<el-date-picker-->
                <!--type="date"-->
                <!--placeholder=""-->
                <!--v-model="ruleForm2.jlxkgxhdqr"-->
                <!--value-format="yyyy-MM-dd">-->
                <!--</el-date-picker>-->
                <!--</el-form-item>-->
              </div>
              <el-row>
                <el-col :span="12">
                  <div class="pic_title"><span class="bitian">*</span>上传居留许可证页</div>
                  <el-upload
                    class="avatar-uploader"
                    action="/ws/upload/uploadFile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm2.jlxkzy" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.jlxkzy).path"
                         class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-col>
                <el-col :span="12">
                  <div class="pic_title"><span class="bitian">*</span>上传临住登记表</div>
                  <el-upload
                    class="avatar-uploader"
                    action="/ws/upload/uploadFile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess6"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm2.lzdjb" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.lzdjb).path"
                         class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <div class="hr"></div>
          <el-row :gutter="20" class="margintop20">
            <el-col :span="6">
              <div class="pic_title"><span class="bitian">*</span>上传JW202</div>
              <el-upload
                class="avatar-uploader"
                action="/ws/upload/uploadFile"
                :show-file-list="false"
                :on-success="handleAvatarSuccess4"
                :before-upload="beforeAvatarUpload">
                <img v-if="ruleForm2.jw202" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.jw202).path"
                     class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <div class="pic_title"><span class="bitian">*</span>上传录取通知书</div>
              <el-upload
                class="avatar-uploader"
                action="/ws/upload/uploadFile"
                :show-file-list="false"
                :on-success="handleAvatarSuccess5"
                :before-upload="beforeAvatarUpload">
                <img v-if="ruleForm2.lqdzs" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.lqdzs).path"
                     class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <div class="pic_title"><span class="bitian">*</span>上传健康证</div>
              <el-upload
                class="avatar-uploader"
                action="/ws/upload/uploadFile"
                :show-file-list="false"
                :on-success="handleAvatarSuccess7"
                :before-upload="beforeAvatarUpload">
                <img v-if="ruleForm2.jkz" :src="'/ws/resource/showImg?path=' + JSON.parse(ruleForm2.jkz).path"
                     class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button size="small" @click="dialogVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>


    <!--学生详情模态框-->
    <!--<el-dialog-->
    <!--title=""-->
    <!--:visible.sync="dialogVisible"-->
    <!--width="60%">-->
    <!--<div slot="title">学生详情</div>-->
    <!--<div>-->
    <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"-->
    <!--class="demo-ruleForm">-->
    <!--<el-form-item label="姓名" prop="name">-->
    <!--<el-input v-model="ruleForm.name"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="护照到期时间" required>-->
    <!--<el-form-item prop="">-->
    <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>-->
    <!--</el-form-item>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <!--</div>-->
    <!--<span slot="footer" class="dialog-footer">-->
    <!--<el-button @click="dialogVisible = false">取消设置</el-button>-->
    <!--<el-button type="primary" @click="dialogVisible = false">设置</el-button>-->
    <!--</span>-->
    <!--</el-dialog>-->

    <!--预览照片模态框-->
    <!--<el-dialog :visible.sync="imgPreview">-->
    <!--<img width="100%" :src="dialogImageUrl" alt="">-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
  import {getStringArr} from '@/utils/tool'

  export default {
    name: 'passport',
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
        hzhm: "",
        hzyxq: "",
        jlxkdqr: "",
        pageNum: 1,
        pageSize: null,
        records: null,
        dialogVisible: false,
        list: [],
        selectedList: [],
        rules1: {
          xh: [{required: true, message: '请输入学号', trigger: 'blur'}]
        },
        rules2: {
          hzhm: [{required: true, message: '请输入护照号码', trigger: 'blur'}],
          hzyxq: [{required: true, message: '请选择护照有效期', trigger: 'blur'}],
          hzyxqdqr: [{required: true, message: '请选择护照有效期到期日', trigger: 'blur'}],
          jlxkdqr: [{required: true, message: '请选择居留许可到期日', trigger: 'blur'}]
        },
        add_edit_flag: false,//false-新增，true-编辑
        ruleForm: {
          xmX: '',//姓
          xmM: "",//名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          lxdh: '',
          csrq: '',
        },
        ruleForm2: {
          xh: "",
          hzhm: "",
          hzyxq: "",
          hzyxqdqr: "",
          hzgxhdqr: "",
          jlxkdqr: "",
          jlxkgxhdqr: "",
          hzsy: '',//护照首页
          qzy: '',//签证页
          jlxkzy: '',//居留许可证页
          jw202: '',//jw202
          lqdzs: '',//录取通知书
          lzdjb: '',//临住登记表
          jkz: '',//健康证
          id: ""
        },
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: '',
        imageUrl4: '',
        imageUrl5: '',
        imageUrl6: '',
        imageUrl7: '',
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.request.post('/ws/passport/page', {
          xm_x: this.xm_x,
          xm_m:this.xm_m,
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
      reset() {//重置搜索条件
        this.xm_x = ''
        this.xm_m = ''
        this.xh = ''
        this.xy = ''
        this.zy = ''
        this.bj = ''
        this.getData()
      },
      reset_form() {
        this.ruleForm = {
          xm_x: '',//姓
          xm_m: '',//名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          zwm: '',
          csrq: "",
          lxdh: ""
        }
        this.ruleForm2 = {
          xh: "",
          hzhm: "",
          hzyxq: "",
          hzyxqdqr: "",
          hzgxhdqr: "",
          jlxkdqr: "",
          jlxkgxhdqr: "",
          hzsy: '',//护照首页
          qzy: '',//签证页
          jlxkzy: '',//居留许可证页
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
          this.request.post('/ws/passport/toEdit', {id: e}).then(res => {
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
            this.request.post('/ws/passport/remove', {ids: m}).then(res => {
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
          url = '/ws/passport/edit'
        } else {
          url = '/ws/passport/add'
        }
        if (this.ruleForm.xh) {
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
        }
      },
      handleSelectionChange(e) {
        this.selectedList = e
      },
      optExport() {
        window.open('/ws/passport/export?xm_x=' + this.xm_x+'&xm_m='+this.xm_m +
          '&xh=' + this.xh +
          '&xy=' + this.xy +
          '&zy=' + this.zy +
          '&bj=' + this.bj +
          '&hzhm=' + this.hzhm +
          '&hzyxq=' + this.hzyxq +
          '&jlxkdqr=' + this.jlxkdqr, '_blank')
      },
      hzdaoqi() {
        this.request.post('/ws/passport/due', {
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
          type: 'hz'
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      jlxkdaoqi() {
        this.request.post('/ws/passport/due', {
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
          type: 'jlxk'
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
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
      //7个照片上传
      handleAvatarSuccess1(res) {
        console.log(res)
        this.ruleForm2.hzsy = JSON.stringify(res.data)
      },
      handleAvatarSuccess2(res) {
        console.log(res)
        this.ruleForm2.qzy = JSON.stringify(res.data)
      },
      handleAvatarSuccess3(res) {
        console.log(res)
        this.ruleForm2.jlxkzy = JSON.stringify(res.data)
      },
      handleAvatarSuccess4(res) {
        console.log(res)
        this.ruleForm2.jw202 = JSON.stringify(res.data)
      },
      handleAvatarSuccess5(res) {
        console.log(res)
        this.ruleForm2.lqdzs = JSON.stringify(res.data)
      },
      handleAvatarSuccess6(res) {
        console.log(res)
        this.ruleForm2.lzdjb = JSON.stringify(res.data)
      },
      handleAvatarSuccess7(res) {
        console.log(res)
        this.ruleForm2.jkz = JSON.stringify(res.data)
      },
      beforeAvatarUpload(file) {
        console.log(file)
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
      },

    }
  }
</script>

<style lang="scss" scoped>
  .el-form-item__label {
    width: 150px;
  }

  .pic_title {
    padding: 0px 15px 15px;
    font-size: 14px;
    color: #606266;
  }
</style>
