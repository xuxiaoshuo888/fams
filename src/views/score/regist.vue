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
        <!--clearable>-->
        <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->
        <!--<el-input-->
        <!--placeholder="专业"-->
        <!--size="mini"-->
        <!--v-model="zy"-->
        <!--clearable>-->
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
          v-model="bj"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData()">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="resetForm()">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="add_std_record">新增</el-button>
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
        width="55"
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
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm_m"
        label="名"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xy"
        label="学院"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zy"
        label="专业"
        width="100"
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
        prop="add_scores"
        label="加分总分"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="sub_scores"
        label="扣分总分"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="total_scores"
        label="总分"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        width="80"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="add_edit(scope.row.pid)" type="primary" size="mini">修改</el-button>
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
      width="1200px"
      :visible.sync="dialogVisible">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
                 class="demo-ruleForm">
          <el-form-item label="学号" prop="">
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
        </el-form>

        <!--加分项-->
        <div class="score_div">
          <header><span class="">加分项</span>
            <el-button type="primary" size="mini" icon="el-icon-plus" circle @click="add_item(jiafen_list)"></el-button>
          </header>
          <div class="score_list">
            <el-table
              :data="jiafen_list"
              style="width: 100%"
              header-align="center"
              align="center">
              <el-table-column
                prop="hdxh"
                label="序号"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.hdxh}}</span>
                  <el-input v-else v-model="scope.row.hdxh" clearable disabled placeholder="请输入序号"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="活动名称"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.name}}</span>
                  <!--点击新增后-->
                  <el-select v-else style="width: 100%;text-align: center" v-model="score_form.itemId" filterable
                             placeholder="选择名称" @change="load_add">
                    <el-option style="width: 100%;text-align: center"
                               v-for="item in add_name_list"
                               :key="item.id"
                               :label="item.name"
                               :value="item.id">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdkssj"
                label="活动开始时间"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.hdkssj}}</span>
                  <!--点击新增后-->
                  <el-date-picker v-else
                                  v-model="scope.row.hdkssj"
                                  type="date"
                                  format="yyyy-MM-dd"
                                  value-format="yyyy-MM-dd"
                                  disabled
                                  placeholder="选择日期">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdjssj"
                label="活动结束时间"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.hdjssj}}</span>
                  <!--点击新增后-->
                  <el-date-picker v-else
                                  v-model="scope.row.hdjssj"
                                  type="date"
                                  format="yyyy-MM-dd"
                                  value-format="yyyy-MM-dd"
                                  disabled
                                  placeholder="选择日期">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdnr"
                label="活动内容"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.hdnr}}</span>
                  <el-input v-else v-model="scope.row.hdnr" clearable placeholder="请输入内容" disabled></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="score"
                label="分值"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.score}}</span>
                  <el-input v-else v-model="scope.row.score" clearable placeholder="请输入分值" disabled></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdjbdw"
                label="单位"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.hdjbdw}}</span>
                  <el-input v-else v-model="scope.row.hdjbdw" clearable placeholder="请输入单位" disabled></el-input>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width=""
                header-align="center"
                align="center"
                fixed="right">
                <template slot-scope="scope">
                  <!--点击新增后-->
                  <span v-if="scope.row.editable">
                    <el-button type="success" size="mini" icon="el-icon-check" circle
                               @click="deliver_item(jiafen_list,scope)"></el-button>
                    <el-button type="danger" size="mini" icon="el-icon-close" circle
                               @click="delete_item(scope.row.id)"></el-button>
                  </span>
                  <!--历史数据-->
                  <el-button v-else type="danger" size="mini" icon="el-icon-close" circle
                             @click="delete_item(scope.row.id)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>


        <!--扣分项-->
        <div class="score_div">
          <header><span class="">扣分项</span>
            <el-button type="primary" size="mini" icon="el-icon-plus" circle @click="add_item(koufen_list)"></el-button>
          </header>
          <div class="score_list">
            <el-table
              :data="koufen_list"
              style="width: 100%"
              header-align="center"
              align="center">
              <el-table-column
                prop="hdxh"
                label="序号"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.hdxh}}</span>
                  <el-input v-else v-model="scope.row.hdxh" clearable placeholder="请输入序号"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="活动名称"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.name}}</span>
                  <!--点击新增后-->
                  <el-select v-else style="width: 100%;text-align: center" v-model="score_form.itemId"
                             placeholder="选择名称" @change="load_jianfen">
                    <el-option style="width: 100%;text-align: center"
                               v-for="item in koufen_name_list"
                               :key="item.id"
                               :label="item.name"
                               :value="item.id">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdkssj"
                label="扣分时间"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.hdkssj}}</span>
                  <!--点击新增后-->
                  <el-date-picker v-else
                                  v-model="scope.row.hdkssj"
                                  type="date"
                                  format="yyyy 年 MM 月 dd 日"
                                  value-format="yyyy-MM-dd"
                                  placeholder="选择日期">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdnr"
                label="扣分内容"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.hdnr}}</span>
                  <el-input v-else v-model="scope.row.hdnr" clearable placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="score"
                label="分值"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.score}}</span>
                  <el-input v-else v-model="scope.row.score" clearable placeholder="请输入分值"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="hdjbdw"
                label="单位"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.hdjbdw}}</span>
                  <el-input v-else v-model="scope.row.hdjbdw" clearable placeholder="请输入单位"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width=""
                header-align="center"
                align="center"
                fixed="right">
                <template slot-scope="scope">
                  <!--点击新增后-->
                  <span v-if="scope.row.editable">
                    <el-button type="success" size="mini" icon="el-icon-check" circle
                               @click="deliver_item(jiafen_list,scope)"></el-button>
                    <el-button type="danger" size="mini" icon="el-icon-close" circle
                               @click="delete_item(scope.row.id)"></el-button>
                  </span>
                  <!--历史数据-->
                  <el-button v-else type="danger" size="mini" icon="el-icon-close" circle
                             @click="delete_item(scope.row.id)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="default" @click="dialogVisible = false">关闭</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import {getStringArr} from '@/utils/tool'

  export default {
    name: "regist",
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
        pageNum: 1,
        pageSize: null,
        records: null,
        list: [],//加分
        list2: [],//扣分
        selectedList: [],
        add_edit_flag: false,//false-新增，true-编辑
        dialogVisible: false,
        current_edit_flag: false,//false-当前无正在新增的项目，true表示有正在新增的项目，不允许再次新增
        //加分活动名单
        add_name_list: [],
        //扣分名单
        koufen_name_list: [],
        //加分的历史纪录
        jiafen_list: [],
        //扣分历史纪录
        koufen_list: [],
        ruleForm: {
          xmX: '',//姓
          xmM: '',//名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          zwm: '',
          id: ''
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
        score_form: {//加分项，新增记录，提交表单
          itemId: '',
          xh: '',
          id: ''
        },
        rules: {}
      }
    },
    mounted() {
      this.getData()
      this.getOptionList()
    },
    methods: {
      getData() {//最外层列表
        this.request.post('/ws/score/page', {
          xm_x: this.xm_x,
          xm_m: this.xm_m,
          xh: this.xh,
          xy: this.xy,
          zy: this.zy,
          bj: this.bj,
          nj: this.nj,
          page: this.pageNum,
          limit: this.pageSize,
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      add_std_record() {//新增某个学生的记录
        this.dialogVisible = true
        this.resetForm()
      },
      add_edit(e) {//修改拿列表
        // this.reset_form()
        this.jiafen_list = []
        this.koufen_list = []
        this.dialogVisible = true
        if (e === 'add') {//新增
          this.add_edit_flag = false
        } else {//编辑
          this.add_edit_flag = true
          this.request.post('/ws/score/toEdit', {id: e}).then(res => {
            if (res.data.data) {
              this.ruleForm = res.data.data.student
              this.ruleForm.id = res.data.data.id
              if (res.data.data.scoreItems) {
                for (let i = 0; i < res.data.data.scoreItems.length; i++) {
                  if (res.data.data.scoreItems[i].hdlx === '1') {//加分
                    this.jiafen_list.push(res.data.data.scoreItems[i])
                  } else {
                    this.koufen_list.push(res.data.data.scoreItems[i])
                  }
                }
              }
              delete this.ruleForm2.student
              delete this.ruleForm2.whenCreated
              delete this.ruleForm2.whenModified
            }
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
      getOptionList() {//拿加分项/扣分项下拉框list
        this.request.post('/ws/score/itemList').then(res => {
          if (res) {
            let list = res.data.data
            for (let i = 0; i < list.length; i++) {
              if (list[i].hdlx === '1') {//加分名字选项
                this.add_name_list.push(list[i])
              } else {//扣分
                this.koufen_name_list.push(list[i])
              }
            }
          }
        })
      },
      load_add(e) {//选中活动名称后自动加载其他的数据
        let id = e
        let item = []
        for (let i = 0; i < this.add_name_list.length; i++) {
          if (id == this.add_name_list[i].id) {
            item = this.add_name_list[i];
            item['editable'] = true
            this.jiafen_list[this.jiafen_list.length - 1] = item
            console.log(item)
          }
        }
      },
      load_jianfen(e) {
        let id = e
        let item = []
        for (let i = 0; i < this.koufen_name_list.length; i++) {
          if (id == this.koufen_name_list[i].id) {
            item = this.koufen_name_list[i];
            item['editable'] = true
            this.koufen_list[this.koufen_list.length - 1] = item
            console.log(item)
          }
        }
      },
      //新增加分项
      add_item(list) {
        if (this.ruleForm.xh) {
          if (!this.current_edit_flag) {
            this.current_edit_flag = true
            let item = {
              hdxh: '',//活动序号
              name: '',//活动名称
              hdkssj: '',//活动开始时间
              hdjssj: '',//活动结束时间
              time: '',//扣分时间
              hdnr: '',//活动内容
              score: '',//分值
              hdjbdw: '',
              editable: true
            }
            list.push(item)
          } else {
            this.$message({
              type: 'warning',
              message: '当前已有正在编辑的项!'
            });
          }
        } else {
          this.$message({
            type: 'warning',
            message: '请输入学号!'
          });
        }
      },
      //删除新增项
      delete_item(id) {
        console.log(id);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //1、请求后台删除数据，返回成功后，重新刷新数据
          console.log(id);
          this.request.post('/ws/score/removeDetail', {itemId: id, id: this.ruleForm.id}).then(res => {
            this.$message({
              type: 'success',
              message: res.errmsg
            })
            this.add_edit(res.data.id);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //提交新增项
      deliver_item() {
        this.score_form.xh = this.ruleForm.xh
        console.log(this.score_form)
        this.request.post('/ws/score/add', this.score_form).then(res => {
          this.$message({
            type: 'success',
            message: res.errmsg
          })
          this.add_edit(res.data.id);
          this.getData()
          this.current_edit_flag = false
        })
      },
      resetForm() {
        this.jiafen_list = []
        this.koufen_list = []
        this.ruleForm = {
          xmX: '',//姓名
          xmM: '',//姓名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          xb: '',
          zwm: '',
          id: ''
        }
      },
      handleSelectionChange(e) {
        this.selectedList = e
      },
      remove() {//删除
        if (this.selectedList.length > 0) {
          let m = getStringArr(this.selectedList, 'pid')
          this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.request.post('/ws/score/remove', {ids: m}).then(res => {
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
      optExport() {
        window.open('/ws/score/export?xm_x=' + this.xm_x + '&xm_m=' + this.xm_m +
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

<style lang="scss" scoped>
  .score_div {
    padding: 10px 0;
    border-top: 1px solid #e6e6e6;
    header {
      span {
        margin: 0 10px;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .el-input, .el-input--suffix {
      width: 100% !important;
    }
  }

  .el-button--mini.is-circle {
    padding: 7px !important;
  }

  .score_div .el-input {
    width: 100% !important;
  }
</style>
