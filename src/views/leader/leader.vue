<template>
  <div class="pad20">
    <el-row :gutter="20" class="marginbot10">
      <el-col :span="8">
        <label>年级:</label>
        <span>2018级</span>
      </el-col>
      <el-col :span="8">
        <label>班级:</label>
        <span>电气1班</span>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData3"
      style="width: 100%"
      border
      height="250">
      <el-table-column
        prop="xh"
        label="学号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="英文名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="cnName"
        label="中文名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="bjzw"
        label="班级职务"
        width="120">
      </el-table-column>

      <el-table-column
        prop="tel"
        label="电话号码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="roomNum"
        label="宿舍号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="rzqx"
        label="任职期限"
        width="120">
      </el-table-column>
      <el-table-column
        prop="gzbx"
        label="工作表现"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="showStd(scope.row)" type="text" size="small">详情</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="60%">
      <div slot="title">学生详情</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="英文名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="中文名" prop="">
            <el-input v-model="ruleForm.zwm"></el-input>
          </el-form-item>
          <el-form-item label="学号" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.xb">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="宿舍号" prop="">
            <el-input v-model="ruleForm.ssh"></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="班级职务" prop="">
            <el-input v-model="ruleForm.bjzw"></el-input>
          </el-form-item>
          <el-form-item label="任职期限" prop="">
            <el-input v-model="ruleForm.rzqx"></el-input>
          </el-form-item>
          <el-form-item label="工作表现" prop="">
            <el-input v-model="ruleForm.gzbx"></el-input>
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
    name: 'leader',
    data() {
      return {
        dialogVisible: false,
        tableData3: [{
          xh: "20180808001",
          name: "Tom",//英文名
          cnName: "王小虎",//中文名
          gender: "男",
          bjzw: "班长",//班级职务
          tel: "13888888888",//电话
          roomNum: "503",//宿舍
          rzqx: "1年",
          gzbx: "好"//工作表现
        },
          {
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            gender: "男",
            bjzw: "班长",//班级职务
            tel: "13888888888",//电话
            roomNum: "503",//宿舍
            rzqx: "1年",
            gzbx: "好"//工作表现
          },
          {
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            gender: "男",
            bjzw: "班长",//班级职务
            tel: "13888888888",//电话
            roomNum: "503",//宿舍
            rzqx: "1年",
            gzbx: "好"//工作表现
          },
          {
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            gender: "男",
            bjzw: "班长",//班级职务
            tel: "13888888888",//电话
            roomNum: "503",//宿舍
            rzqx: "1年",
            gzbx: "好"//工作表现
          }
        ],
        ruleForm: {
          xh: "20180808001",
          name: "Tom",//英文名
          cnName: "王小虎",//中文名
          gender: "男",
          bjzw: "班长",//班级职务
          tel: "13888888888",//电话
          roomNum: "503",//宿舍
          rzqx: "1年",
          gzbx: "好"//工作表现
        },
        rules: {}
      }
    },
    computed: {},
    methods: {
      showStd(row) {
        this.dialogVisible = true;
        console.log(row);
      },
    }
  }
</script>

<style scoped>

</style>
