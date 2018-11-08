<template>
  <div class="pad20">
    <div class="block">
      <el-row>
        <el-col :span="12"><h4>加分活动</h4></el-col>
        <el-col :span="12" class="textr">
          <el-button type="primary"  size="small"  icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="tableData3"
        style="width: 100%"
        border
        header-align="center"
        align="center">
        <el-table-column
          prop="no"
          label="序号"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="学年"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="学期"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="shijian"
          label="活动时间"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="加分值"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="neirong"
          label="活动内容"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="举办活动单位"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width=""
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="block">
      <el-row>
        <el-col :span="12"><h4>扣分活动</h4></el-col>
        <el-col :span="12" class="textr">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="tableData3"
        style="width: 100%"
        border
        header-align="center"
        align="center">
        <el-table-column
          prop="no"
          label="序号"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="学年"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="学期"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="shijian"
          label="活动时间"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="加分值"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="neirong"
          label="活动内容"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="举办活动单位"
          width=""
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width=""
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="60%">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="活动序号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="学年">
            <el-select placeholder="请选择">
              <el-option label="2018学年" value="a2018"></el-option>
              <el-option label="2017学年" value="a2017"></el-option>
              <el-option label="2016学年" value="a2016"></el-option>
              <el-option label="2015学年" value="a2015"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学期">
            <el-select placeholder="请选择">
              <el-option label="第一学期" value="1"></el-option>
              <el-option label="第二学期" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="date" placeholder="选择结束日期" v-model="date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
        </el-form>

        <el-form label-width="100px">
          <el-form-item label="活动内容" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm.bz" style="width:100%;"></el-input>
          </el-form-item>
        </el-form>

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
    name: "matter",
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [
          {
            no: '1',
            shijian: '2018-08-08',
            neirong: 'sasdasd'
          },
          {
            no: '2',
            shijian: '2018-08-08',
            neirong: 'sasdasd'
          },
          {
            no: '3',
            shijian: '2018-08-08',
            neirong: 'sasdasd'
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
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    padding: 15px;
  }
</style>
