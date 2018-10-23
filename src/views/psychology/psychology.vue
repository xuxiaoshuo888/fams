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
        width="">
      </el-table-column>
      <el-table-column
        prop="xm"
        label="姓名"
        width="">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="">
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
        <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px"
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
          <el-form-item label="出生年月" required>
            <el-form-item prop="">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="国籍\护照" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>
          <el-form-item label="年级\班级\学号" prop="">
            <el-input v-model="ruleForm.xh"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="是否接受过辅导" prop="">
            <el-radio-group v-model="ruleForm.sfjsgfd">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="ruleForm.sfjsgfd == '是'" label="接受辅导次数" prop="">
            <el-input v-model="ruleForm.jsfdcs"></el-input>
          </el-form-item>
          <el-form-item v-if="ruleForm.sfjsgfd == '是'" label="最早辅导时间" prop="">
            <el-form-item prop="">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.zzjsfdsj"></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="是否有人陪同" prop="">
            <el-radio-group v-model="ruleForm.sfpt">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="ruleForm.sfpt == '是'" label="与陪同者关系" prop="">
            <el-input v-model="ruleForm.ptgx"></el-input>
          </el-form-item>
          <el-form-item label="预约方式" prop="">
            <el-select v-model="ruleForm.yyfs" placeholder="请选择预约方式">
              <el-option label="主动预约" value=""></el-option>
              <el-option label="辅导员推荐" value=""></el-option>
              <el-option label="康复后辅导" value=""></el-option>
              <el-option label="定期回访" value=""></el-option>
              <el-option label="其他" value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="健康状况与医疗史" prop="">
            <el-input v-model="ruleForm.jkzk"></el-input>
          </el-form-item>
          <el-form-item label="问题归类" prop="">
            <el-select v-model="ruleForm.wtgl" placeholder="请选择问题归类">
              <el-option label="学习生活" value=""></el-option>
              <el-option label="人际关系" value=""></el-option>
              <el-option label="自我意识" value=""></el-option>
              <el-option label="恋爱关系" value=""></el-option>
              <el-option label="情绪问题" value=""></el-option>
              <el-option label="人格问题" value=""></el-option>
              <el-option label="经济问题" value=""></el-option>
              <el-option label="重大生活事件" value=""></el-option>
              <el-option label="精神异常" value=""></el-option>
              <el-option label="躯体疾病" value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="紧急联系人" prop="">
            <el-input v-model="ruleForm.jjlxr"></el-input>
          </el-form-item>
          <el-form-item label="与紧急联系人关系" prop="">
            <el-input v-model="ruleForm.jjlxrgx"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人电话" prop="">
            <el-input v-model="ruleForm.ssh"></el-input>
          </el-form-item>
          <el-form-item label="是否重点关注对象" prop="">
            <el-radio-group v-model="ruleForm.zdgz">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="辅导老师" prop="">
            <el-input v-model="ruleForm.fdjy"></el-input>
          </el-form-item>

          <el-form-item label="辅导日期" required>
            <el-form-item prop="">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.fdsj"></el-date-picker>
            </el-form-item>
          </el-form-item>

        </el-form>
        <el-form label-width="200px">
          <el-form-item label="学生谈话记录" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm.thjl" style="width:100%;"></el-input>
          </el-form-item>
          <el-form-item label="辅导与建议" prop="desc" style="width:100%">
            <el-input type="textarea" v-model="ruleForm.fdjy" style="width:100%;"></el-input>
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
    name: 'psychology',
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        dialogVisible: false,
        tableData3: [
          {
            xh: '201808080001',
            xm: "张三",
          },
          {
            xh: '201808080001',
            xm: "张三",
          },
          {
            xh: '201808080001',
            xm: "张三",
          },
          {
            xh: '201808080001',
            xm: "张三",
          }
        ],
        ruleForm: {
          xm: '',//姓名
          xb: '',//中文名
          csny: '',//出生年月
          gjhz: '',//国籍护照
          njbjxh: '',//年级\班级\学号
          dh: '',//电话
          sfjsgfd: '',//是否接受过辅导
          fdcs: '',//辅导次数
          fdsj: '',//辅导时间
          sfpt: '',//是否有人陪同
          ptgx: '',//与陪同者关系
          yyfs: '',//预约方式
          jkzk: '',//健康状况与医疗史
          wtgl: '',//问题归类
          zdgz: '',//重点关注
          jjlxr: '',//紧急联系人
          jjlxrgx: '',//与紧急联系人关系
          jjlxrdh: '',//紧急联系人电话
          thjl: '',//学生谈话记录
          fdjy: '',//辅导与建议
          fdls: '',//辅导老师
          fdsj: '',//辅导时间
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
