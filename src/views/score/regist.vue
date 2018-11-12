<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="学号"
          size="mini"
          clearable
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="姓名"
          size="mini"
          clearable
          v-model="input3">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学院"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="专业"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="班级"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
        <el-button type="primary" size="mini" icon="el-icon-download">导出Excel</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData3"
      style="width: 100%"
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
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="姓名"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="学院"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="专业"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="班级"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="加分总分"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="扣分总分"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="总分"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        width="150"
        header-align="center"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--模态框-->
    <el-dialog
      title=""
      width="1100px"
      :visible.sync="dialogVisible">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px"
                 class="demo-ruleForm">
          <el-form-item label="学号" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.xb">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="">
            <el-input v-model="ruleForm.bj"></el-input>
          </el-form-item>
          <el-form-item label="年级" prop="">
            <el-input v-model="ruleForm.nj"></el-input>
          </el-form-item>
          <el-form-item label="中文名" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
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
                prop="no"
                label="序号"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.no}}</span>
                  <el-input v-else v-model="scope.row.no" clearable placeholder="请输入序号"></el-input>
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
                  <el-select v-else style="width: 100%;text-align: center" v-model="scope.row.name" placeholder="选择名称">
                    <el-option style="width: 100%;text-align: center"
                               v-for="item in add_name_list"
                               :key="item.value"
                               :label="item.name"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="datetime"
                label="活动时间"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.datetime}}</span>
                  <!--点击新增后-->
                  <el-date-picker v-else
                                  v-model="scope.row.datetime"
                                  type="date"
                                  placeholder="选择日期">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column
                prop="content"
                label="活动内容"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.content}}</span>
                  <el-input v-else v-model="scope.row.content" clearable placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="count"
                label="分值"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.count}}</span>
                  <el-input v-else v-model="scope.row.count" clearable placeholder="请输入分值"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="department"
                label="单位"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.department}}</span>
                  <el-input v-else v-model="scope.row.department" clearable placeholder="请输入单位"></el-input>
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
                               @click="delete_item(jiafen_list,scope)"></el-button>
                  </span>
                  <!--历史数据-->
                  <el-button v-else type="danger" size="mini" icon="el-icon-close" circle
                             @click="delete_item(jiafen_list,scope)"></el-button>
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
                prop="no"
                label="序号"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.no}}</span>
                  <el-input v-else v-model="scope.row.no" clearable placeholder="请输入序号"></el-input>
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
                  <el-select v-else style="width: 100%;text-align: center" v-model="scope.row.name" placeholder="选择名称">
                    <el-option style="width: 100%;text-align: center"
                               v-for="item in koufen_name_list"
                               :key="item.value"
                               :label="item.name"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                prop="datetime"
                label="活动时间"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <!--历史数据-->
                  <span v-if="!scope.row.editable">{{scope.row.datetime}}</span>
                  <!--点击新增后-->
                  <el-date-picker v-else
                                  v-model="scope.row.datetime"
                                  type="date"
                                  placeholder="选择日期">
                  </el-date-picker>
                </template>
              </el-table-column>
              <el-table-column
                prop="content"
                label="活动内容"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.content}}</span>
                  <el-input v-else v-model="scope.row.content" clearable placeholder="请输入内容"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="count"
                label="分值"
                width=""
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.count}}</span>
                  <el-input v-else v-model="scope.row.count" clearable placeholder="请输入分值"></el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="department"
                label="单位"
                header-align="center"
                align="center">
                <template slot-scope="scope">
                  <span v-if="!scope.row.editable">{{scope.row.department}}</span>
                  <el-input v-else v-model="scope.row.department" clearable placeholder="请输入单位"></el-input>
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
                               @click="deliver_item(koufen_list,scope)"></el-button>
                    <el-button type="danger" size="mini" icon="el-icon-close" circle
                               @click="delete_item(koufen_list,scope)"></el-button>
                  </span>
                  <!--历史数据-->
                  <el-button v-else type="danger" size="mini" icon="el-icon-close" circle
                             @click="delete_item(koufen_list,scope)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "regist",
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [
          {xh: '12312321', xm: 'tom'},
          {xh: '12312321', xm: 'tom'},
          {xh: '12312321', xm: 'tom'}
        ],
        //加分活动名单
        add_name_list: [
          {name: "奖学金1", value: '奖学金1'},
          {name: "奖学金2", value: '奖学金2'},
          {name: "奖学金3", value: '奖学金3'},
          {name: "奖学金4", value: '奖学金4'},
          {name: "奖学金5", value: '奖学金5'},
          {name: "奖学金6", value: '奖学金6'}
        ],
        //扣分名单
        koufen_name_list: [
          {name: "打架斗殴", value: '打架斗殴'},
          {name: "旷课", value: '旷课'},
          {name: "迟到", value: '迟到'},
          {name: "早退", value: '早退'},
          {name: "违纪", value: '违纪'},
          {name: "记大过", value: '记大过'}
        ],
        //加分的历史纪录
        jiafen_list: [
          {
            no: '1',//活动序号
            name: '奖学金1',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '获得奖学金',//活动内容
            count: '1',//分值
            department: '文学院',//单位
          },
          {
            no: '2',//活动序号
            name: '奖学金2',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '获得奖学金',//活动内容
            count: '2',//分值
            department: '文学院'
          },
          {
            no: '3',//活动序号
            name: '奖学金3',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '获得奖学金',//活动内容
            count: '3',//分值
            department: '文学院'
          },
          {
            no: '4',//活动序号
            name: '奖学金4',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '获得奖学金',//活动内容
            count: '4',//分值
            department: '文学院'
          }
        ],
        //扣分历史纪录
        koufen_list: [
          {
            no: 'A',//活动序号
            name: '打架斗殴',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '打架斗殴',//活动内容
            count: '5',//分值
            department: '文学院',//单位
          },
          {
            no: 'B',//活动序号
            name: '旷课',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '旷课',//活动内容
            count: '2',//分值
            department: '文学院',//单位
          },
          {
            no: 'B',//活动序号
            name: '旷课',//活动名称
            datetime: '2018-08-08',//活动时间
            content: '旷课',//活动内容
            count: '1',//分值
            department: '文学院',//单位
          }
        ],
        ruleForm: {
          name: '',//姓名
          zwm: '',//中文名
          xh: '',//学号
          bj: '',//班级
          nj: '',//年级
          ssh: '',//宿舍号
          sex: '',
          tel: '',
          birth: '',
          hzhm: '',//护照号码
          gj: '',//国籍
          xjzch: '',//学籍注册号
          dxrq: '',//到校日期
          region: '',//宗教
          bzr: '',//班主任
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''//备注
        },
        rules: {}
      }
    },
    methods: {
      showStd(row) {
        this.dialogVisible = true;
        console.log(row);
      },
      //新增加分项
      add_item(list) {
        let item = {
          no: '',//活动序号
          name: '',//活动名称
          datetime: '',//活动时间
          content: '',//活动内容
          count: '',//分值
          department: '',
          editable: true
        }
        list.push(item)
      },
      //删除新增项
      delete_item(list, scope) {
        console.log(scope);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //1、请求后台删除数据，返回成功后，重新刷新数据
          list.splice(scope.$index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //提交新增项
      deliver_item(list, scope) {
        // let index = scope.$index;
        list[scope.$index].editable = false
      }
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
