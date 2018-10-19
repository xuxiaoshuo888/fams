<template>
    <div class="pad20">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input
            placeholder="学号"
            v-model="input1">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input
            placeholder="性别"
            v-model="input2">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input
            placeholder="姓名"
            v-model="input3">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-plus">新增</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="tableData3"
        style="width: 100%"
        border
        height="250">
        <el-table-column
          prop="order"
          label="序号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="nj"
          label="年级"
          width="120">
        </el-table-column>
        <el-table-column
          prop="class"
          label="班级"
          width="120">
        </el-table-column>
        <el-table-column
          prop="xh"
          label="学号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
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
          prop="roomNum"
          label="宿舍号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="电话号码"
          width="120">
        </el-table-column>
        <el-table-column
          prop="birthday"
          label="出生年月"
          width="120">
        </el-table-column>
        <el-table-column
          prop="passport"
          label="护照号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="Nation"
          label="国籍"
          width="120">
        </el-table-column>
        <el-table-column
          prop="stdNo"
          label="学籍注册号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="arriveDate"
          label="到校日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="religion"
          label="宗教"
          width="120">
        </el-table-column>
        <el-table-column
          prop="bzr"
          label="班主任"
          width="120">
        </el-table-column>
        <el-table-column
          prop="bz"
          label="备注"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--模态框-->
      <modal v-show="dialogVisible">
        <span slot="title">学生详细信息</span>
        <div slot="body">
123123123123213123
        </div>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </modal>
      <!--模态框-->
    </div>
</template>

<script>
  import Modal from '@/components/modal/Modal'

  export default {
    name: 'stdInfo',
    components:{ Modal },
    data(){
      return{
        input1:"",
        input2:"",
        input3:"",
        dialogVisible:false,
        tableData3: [{
          order: '1',
          nj:"2018",
          class:"计算机技术1班",
          xh:"20180808001",
          name: "Tom",
          cnName:"王小虎",
          gender:"男",
          roomNum:"503",
          tel:"13888888888",
          birthday:"19900808",
          passport:"126351263715283",
          Nation:"美国",
          stdNo:"1231323123213",
          arriveDate:"20170707",
          religion:"无宗教信仰",
          bzr: '张洋',
          bz: '无'
        },{
          order: '1',
          nj:"2018",
          class:"计算机技术1班",
          xh:"20180808001",
          name: "Tom",
          cnName:"王小虎",
          gender:"男",
          roomNum:"503",
          tel:"13888888888",
          birthday:"19900808",
          passport:"126351263715283",
          Nation:"美国",
          stdNo:"1231323123213",
          arriveDate:"20170707",
          religion:"无宗教信仰",
          bzr: '张洋',
          bz: '无'
        }]
      }
    },
    computed:{

    },
    methods: {
      handleClick(row) {
        this.dialogVisible = true;
        console.log(row);
      },
    }
  }
</script>

<style scoped>

</style>
