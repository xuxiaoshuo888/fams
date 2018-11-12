<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="作者"
          size="mini"
          clearable
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="发布时间"
          size="mini"
          clearable
          v-model="input2">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="标题"
          size="mini"
          clearable
          v-model="input3">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh">重置</el-button>
      </el-col>
      <el-col :span="24" class="functional_area">
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <el-button type="danger" size="mini" icon="el-icon-edit-delete">批量删除</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="newsList"
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
        width="220"
        header-align="center"
        align="left"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="showStd(scope.row)" type="primary" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
          <el-button v-if="scope.row.status === 1" type="danger" size="mini">取消发布</el-button>
          <el-button v-else type="success" size="mini">发布</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="序号"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
          prop="status"
          label="状态"
          width="100"
          header-align="center"
          align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 1" type="success" size="small">已发布</el-tag>
          <el-tag v-else type="danger" size="small">未发布</el-tag>
        </template>

        </el-table-column>
    </el-table>

    <!--分页-->
    <div class="pagination-block">
      <el-pagination
        background
        @size-change=""
        @current-change=""
        @prev-click=""
        @next-click=""
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next,->"
        :total="400">
      </el-pagination>
    </div>
    <!--模态框-->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">通知公告管理</div>
      <div>
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="标题" prop="name">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="发布单位" prop="">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="">
            <el-input></el-input>
          </el-form-item>

        </el-form>
        <editor></editor>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import Modal from '@/components/modal/Modal'
  import editor from '@/components/editor/editor'

  export default {
    name: 'stdBasic',
    components: {Modal, editor},
    data() {
      return {
        editorContent: '',
        input1: "",
        input2: "",
        input3: "",
        currentPage4: 1,
        dialogVisible: false,
        newsList: [
          {
            id: '1',
            date: '2018-08-08',
            author: '张三',
            title: '习近平向国家综合性消防救援队伍授旗并致训词',
            status: 1
          },
          {
            id: '2',
            date: '2018-08-08',
            author: '李四',
            title: '让各国人民共享经济全球化和世界经济增长成果——论习近平主席在首届中国国际进口博览会开幕式上主旨演讲',
            status: 0
          },
          {
            id: '3',
            date: '2018-08-08',
            author: '王五',
            title: '习近平向国家综合性消防救援队伍授旗并致训词',
            status: 1

          },
          {
            id: '4',
            date: '2018-08-08',
            author: '赵六',
            title: '习近平向国家综合性消防救援队伍授旗并致训词',
            status: 0
          },
          {
            id: '5',
            date: '2018-08-08',
            author: '葛八',
            title: '习近平向国家综合性消防救援队伍授旗并致训词',
            status: 1
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
    computed: {},
    methods: {
      showStd(row) {
        this.dialogVisible = true;
        console.log(row);
      },
      handleSelectionChange(e) {
        console.log(e)
      },
    },
    mounted() {

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
