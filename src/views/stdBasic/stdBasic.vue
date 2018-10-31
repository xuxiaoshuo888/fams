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
        <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <el-button type="primary" icon="el-icon-upload2">上传</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData3"
      style="width: 100%"
      border
      >
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
        <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="">
            <el-radio-group v-model="ruleForm.xb">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="学号" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
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
          <!--<el-form-item label="活动区域" prop="region">-->
          <!--<el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
          <!--<el-option label="区域一" value="shanghai"></el-option>-->
          <!--<el-option label="区域二" value="beijing"></el-option>-->
          <!--</el-select>-->
          <!--</el-form-item>-->
          <el-form-item label="出生年月" required>
            <el-form-item prop="">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="到校日期" required>
            <el-form-item prop="">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2"></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="宿舍号" prop="">
            <el-input v-model="ruleForm.ssh"></el-input>
          </el-form-item>

          <el-form-item label="电话号码" prop="">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="护照号码" prop="">
            <el-input v-model="ruleForm.hzhm"></el-input>
          </el-form-item>
          <el-form-item label="国籍" prop="">
            <el-input v-model="ruleForm.gj"></el-input>
          </el-form-item>
          <el-form-item label="学籍注册号" prop="">
            <el-input v-model="ruleForm.xjzch"></el-input>
          </el-form-item>
          <el-form-item label="宗教" prop="">
            <el-input v-model="ruleForm.religion"></el-input>
          </el-form-item>
          <el-form-item label="班主任" prop="">
            <el-input v-model="ruleForm.bzr"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="100px">
          <el-form-item label="备注" prop="desc" style="width:100%">
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
  import Modal from '@/components/modal/Modal'

  export default {
    name: 'stdBasic',
    components: {Modal},
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [
          {
          order: '1',
          nj: "2018",
          class: "计算机技术1班",
          xh: "20180808001",
          name: "Tom",
          cnName: "王小虎",
          gender: "男",
          roomNum: "503",
          tel: "13888888888",
          birthday: "19900808",
          passport: "126351263715283",
          Nation: "美国",
          stdNo: "1231323123213",
          arriveDate: "20170707",
          religion: "无宗教信仰",
          bzr: '张洋',
          bz: '无'
        }, {
          order: '1',
          nj: "2018",
          class: "计算机技术1班",
          xh: "20180808001",
          name: "Tom",
          cnName: "王小虎",
          gender: "男",
          roomNum: "503",
          tel: "13888888888",
          birthday: "19900808",
          passport: "126351263715283",
          Nation: "美国",
          stdNo: "1231323123213",
          arriveDate: "20170707",
          religion: "无宗教信仰",
          bzr: '张洋',
          bz: '无'
        },
          {
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          },{
            order: '1',
            nj: "2018",
            class: "计算机技术1班",
            xh: "20180808001",
            name: "Tom",
            cnName: "王小虎",
            gender: "男",
            roomNum: "503",
            tel: "13888888888",
            birthday: "19900808",
            passport: "126351263715283",
            Nation: "美国",
            stdNo: "1231323123213",
            arriveDate: "20170707",
            religion: "无宗教信仰",
            bzr: '张洋',
            bz: '无'
          }],
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
        rules: {
          // name: [
          //   { required: true, message: '', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          // region: [
          //   { required: true, message: '请选择活动区域', trigger: 'change' }
          // ],
          // date1: [
          //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          // ],
          // date2: [
          //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          // ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          // ],
          // resource: [
          //   { required: true, message: '请选择活动资源', trigger: 'change' }
          // ],
          // desc: [
          //   { required: true, message: '请填写活动形式', trigger: 'blur' }
          // ]
        }
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
