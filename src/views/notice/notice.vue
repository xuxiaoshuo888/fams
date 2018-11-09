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
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>

      <el-table-column
        label="操作"
        width="130"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
      id: '1',
      date: '2018-08-08',
      author: '张三',
      title: '习近平向国家综合性消防救援队伍授旗并致训词'
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
        align="center"
      >
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
        <div ref="editor" style="text-align:left"></div>
        <button v-on:click="getContent">查看内容</button>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>


    <!--资料卡模态框-->
    <el-dialog
      title=""

      width="900px">
      <div slot="title">学生基本信息</div>
      <div>
        <!--基本信息-->
        <div class="card_block">
          <!--<header class="card_title"></header>-->
          <div class="card_content">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <el-form-item label="学号：">
                    <div>201808080012</div>
                  </el-form-item>
                  <el-form-item label="姓名：">
                    <div>Tom</div>
                  </el-form-item>
                  <el-form-item label="中文名：">
                    <div>汤姆</div>
                  </el-form-item>
                  <el-form-item label="性别：">
                    <div>男</div>
                  </el-form-item>
                  <el-form-item label="出生年月：">
                    <div>1993年8月</div>
                  </el-form-item>
                  <el-form-item label="年级：">
                    <div>2016级</div>
                  </el-form-item>
                  <el-form-item label="学院：">
                    <div>工学院</div>
                  </el-form-item>
                  <el-form-item label="专业：">
                    <div>机械工程</div>
                  </el-form-item>
                  <el-form-item label="班级：">
                    <div>机械工程1班</div>
                  </el-form-item>
                  <el-form-item label="入学年月：">
                    <div>2015年1月</div>
                  </el-form-item>
                  <el-form-item label="在校状态：">
                    <div>在校</div>
                  </el-form-item>
                  <el-form-item label="学籍状态：">
                    <div>正常</div>
                  </el-form-item>
                  <el-form-item label="联系电话：">
                    <div>123213123213</div>
                  </el-form-item>
                  <el-form-item label="住宿情况：">
                    <div>2号宿舍楼503</div>
                  </el-form-item>
                  <el-form-item label="出生地：">
                    <div>莫桑比克马普多</div>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <div class="card_pic"><img src="@/assets/1.jpg"/></div>
                  <el-form-item label="国籍：">
                    <div>莫桑比克</div>
                  </el-form-item>
                  <el-form-item label="宗教信仰：">
                    <div>无宗教信仰</div>
                  </el-form-item>
                  <el-form-item label="辅导员工号：">
                    <div>12321321</div>
                  </el-form-item>
                  <el-form-item label="辅导员姓名：">
                    <div>张三</div>
                  </el-form-item>
                  <el-form-item label="辅导员联系方式：">
                    <div>1231232313</div>
                  </el-form-item>
                  <el-form-item label="毕业去向：">
                    <div>长沙XX机械制造有限公司XX分公司</div>
                  </el-form-item>
                  <el-form-item label="永久联系电话：">
                    <div>1231232333</div>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
  </span>
    </el-dialog>


  </div>
</template>

<script>
  import Modal from '@/components/modal/Modal'
  import E from 'wangeditor'
  export default {
    name: 'stdBasic',
    components: {Modal,E},
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
            title: '习近平向国家综合性消防救援队伍授旗并致训词'
          },
          {
            id: '2',
            date: '2018-08-08',
            author: '李四',
            title: '让各国人民共享经济全球化和世界经济增长成果——论习近平主席在首届中国国际进口博览会开幕式上主旨演讲'
          },
          {
            id: '3',
            date: '2018-08-08',
            author: '王五',
            title: '习近平向国家综合性消防救援队伍授旗并致训词'
          },
          {
            id: '4',
            date: '2018-08-08',
            author: '赵六',
            title: '习近平向国家综合性消防救援队伍授旗并致训词'
          },
          {
            id: '5',
            date: '2018-08-08',
            author: '葛八',
            title: '习近平向国家综合性消防救援队伍授旗并致训词'
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
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
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
