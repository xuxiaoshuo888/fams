<template>
    <div class="pad20">
      <el-row :gutter="20" class="marginbot20">
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
            <el-button @click="showStd(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
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
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
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
        }],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    computed:{

    },
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
