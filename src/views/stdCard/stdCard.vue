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
          placeholder="在校状态"
          size="mini"
          clearable
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学籍类别"
          size="mini"
          clearable
          v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="性别"
          size="mini"
          clearable
          v-model="input2">
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
          placeholder="专业"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="学院"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="年级"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="民族"
          size="mini"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="24">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-upload">上传</el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete">批量删除</el-button>
        <el-button type="primary" size="mini" icon="el-icon-document">导出</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData3"
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
      <el-table-column
        prop="order"
        label="序号"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="nj"
        label="年级"
        width="60"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="cnName"
        label="中文名"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="roomNum"
        label="宿舍号"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话号码"
        width="120"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="出生年月"
        width="120"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="passport"
        label="护照号"
        width="180"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="Nation"
        label="国籍"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="stdNo"
        label="学籍注册号"
        width="130"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="arriveDate"
        label="到校日期"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="religion"
        label="宗教"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bzr"
        label="班主任"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bz"
        label="备注"
        width=""
        header-align="center"
        align="center"
        show-overflow-tooltip>
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
      <div slot="title">学生资料卡</div>
      <div>
        <!--基本信息-->
        <div class="card_block">
          <header class="card_title">基本信息</header>
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
        <!--护照-->
        <div class="card_block">
          <header class="card_title">护照居留证信息</header>
          <div class="card_content">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form label-width="130px" size="mini">
                  <el-form-item label="护照号码：">
                    <div>201808080012</div>
                  </el-form-item>
                  <el-form-item label="护照有效期：">
                    <div>2019年8月7日</div>
                  </el-form-item>
                  <el-form-item label="居留许可证件号：">
                    <div>2564132168431</div>
                  </el-form-item>
                  <el-form-item label="居留许可有效期：">
                    <div>2019年7月6日</div>
                  </el-form-item>
                  <el-form-item label="护照首页：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                  <el-form-item label="签证页：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <el-form-item label="护照有效期：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                  <el-form-item label="居留许可页：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                  <el-form-item label="JW202表：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                  <el-form-item label="录取通知书：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                  <el-form-item label="临住登记表：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                  <el-form-item label="健康证：">
                    <div><a href="#" target="_blank">点击预览</a></div>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--保险-->
        <div class="card_block">
          <header class="card_title">保险购买及理赔信息</header>
          <div class="card_content paddingtop0">
            <el-table
              :data="baoxian"
              style="width: 100%">
              <el-table-column type="expand" header-align="center" align="center">
                <template slot-scope="props">
                  <el-form label-position="left" inline>
                    <el-form-item label="病情:">
                      <span>{{ props.row.bq }}</span>
                    </el-form-item>
                    <el-form-item label="报案情况:">
                      <span>{{ props.row.qk }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="购买保险名字"
                prop="name"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                label="金额"
                prop="je"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                label="购买保险日期"
                prop="rq"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                label="就诊医院"
                prop="yy"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>

          </div>
        </div>
        <!--缴费-->
        <div class="card_block">
          <header class="card_title">缴费信息</header>
          <div class="card_content paddingtop0">
            <el-table
              :data="jiaofei"
              style="width: 100%">
              <el-table-column
                prop="xnxq"
                label="收费区间"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="jfxm"
                label="缴费项目"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="jfnd"
                label="缴费年度"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="ysje"
                label="应收金额"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sjje"
                label="实缴金额"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="qfje"
                label="欠费金额"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="jfrq"
                label="缴费日期"
                header-align="center"
                align="center"
                width="100">
              </el-table-column>
              <el-table-column
                prop="qzyqf"
                label="签证延期费"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
            <div class="textr margintop20">
              <el-button type="primary" size="mini"
                         :icon="showMoreJiaofei ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" round
                         @click="toggleJiaofei">
                {{showMoreJiaofei === false ? '更多' : '收起'}}
              </el-button>
            </div>
          </div>
        </div>
        <!--奖惩信息-->
        <div class="card_block">
          <header class="card_title">奖惩信息</header>
          <div class="card_content paddingtop0">
            <div class="card_subtitle">素质评分</div>
            <el-table
              :data="pingfen"
              style="width: 100%">
              <el-table-column
                prop="term"
                label="学年学期"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="lx"
                label="类型"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="xh"
                label="序号"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="date"
                label="加分/扣分日期"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="detail"
                label="活动内容"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>

            <!--处分信息-->
            <div class="card_subtitle">处分信息</div>
            <el-table
              :data="chufen"
              style="width: 100%">
              <el-table-column
                prop="term"
                label="学年学期"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="lx"
                label="处分类型"
                width="80"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="date"
                label="处分时间"
                width="100"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="reason"
                label="处分原因"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="qk"
                label="教育情况"
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <!--临住登记信息-->
        <div class="card_block">
          <header class="card_title">临住登记信息</header>
          <div class="card_content paddingtop0">
            <div class="card_subtitle">出境</div>
            <el-table
              :data="chujing"
              style="width: 100%">
              <el-table-column
                prop="outtime"
                label="出境时间"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="outplace"
                label="地点"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="backtime"
                label="回长沙时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="backplace"
                label="地点"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="backschooltime"
                label="到校时间"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="registtime"
                label="登记日期"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="reporttime"
                label="上报日期"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>

            <!--国内旅游-->
            <div class="card_subtitle">国内旅游</div>
            <el-table
              :data="lvyou"
              style="width: 100%">
              <el-table-column
                prop="outtime"
                label="离长沙时间"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="outplace"
                label="地点"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="backtime"
                label="回长沙时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="backplace"
                label="地点"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="backschooltime"
                label="到校时间"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="registtime"
                label="登记日期"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="reporttime"
                label="上报日期"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>

            <!--更新护照-->
            <div class="card_subtitle">更新护照</div>
            <el-table
              :data="passport"
              style="width: 100%">
              <el-table-column
                prop="oldNum"
                label="旧护照号码"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="newNum"
                label="新护照号码"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="registTime"
                label="登记日期"
                width="100"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="reportTime"
                label="上报日期"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
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
  export default {
    name: 'stdCard',
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        currentPage4: 1,
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
            bz: '无看见的身份卡的话费卡说的话点卡收费但是法律肯定会是否考虑好了上的卡号发'
          }, {
            order: '2',
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
            order: '3',
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
            order: '4',
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
            order: '5',
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
            order: '6',
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
            order: '7',
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
            order: '8',
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
            order: '9',
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
            order: '10',
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
        },
        //缴费
        jiaofei_contain: [
          {
            xnxq: '2018~2019学年第一学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2018~2019学年第一学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2018~2019学年第一学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2018~2019学年第一学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2018~2019学年第二学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2018~2019学年第二学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2018~2019学年第二学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2018~2019学年第二学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2017~2018学年第一学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2017~2018学年第一学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2017~2018学年第一学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2017~2018学年第一学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2017~2018学年第二学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2017~2018学年第二学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2017~2018学年第二学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2017~2018学年第二学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2016~2017学年第一学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2016~2017学年第一学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2016~2017学年第一学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2016~2017学年第一学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2016~2017学年第二学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2016~2017学年第二学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2016~2017学年第二学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2016~2017学年第二学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2015~2016学年第一学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2015~2016学年第一学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2015~2016学年第一学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2015~2016学年第一学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },
          {
            xnxq: '2015~2016学年第二学期',
            jfxm: '学费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2015~2016学年第二学期',
            jfxm: '住宿费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2015~2016学年第二学期',
            jfxm: '保险费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000'
          },
          {
            xnxq: '2015~2016学年第二学期',
            jfxm: '签证费',
            jfnd: '2018',
            qfje: '5000',
            ysje: '20000',
            jfrq: '2018-03-03',
            sjje: '15000',
            qzyqf: '100'
          },

        ],
        jiaofei: [],//绑定表格
        showMoreJiaofei: false,//默认表格是收起的，false代表目前表格是收起的,true表示表格是展开的
        //保险
        baoxian: [
          {
            name: '重大疾病险',
            je: '2000',
            rq: '2018年6月9日',
            yy: '湖北省人民医院',
            bq: '病人XXX，男，XX岁，因患XXXX，于2014年5月XX日住院。经立即施行手术和十天治疗后，现已痊愈，将于2014年5月16日出院。建议在家休息一个星期后再上班工作。',
            qk: '咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间'
          },
          {
            name: '意外险',
            je: '2000',
            rq: '2018年6月10日',
            yy: '湖北省人民医院',
            bq: '病人XXX，男，XX岁，因患XXXX，于2014年5月XX日住院。经立即施行手术和十天治疗后，现已痊愈，将于2014年5月16日出院。建议在家休息一个星期后再上班工作。',
            qk: '咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间'
          },
          {
            name: '财产险',
            je: '2000',
            rq: '2018年6月11日',
            yy: '湖北省人民医院',
            bq: '病人XXX，男，XX岁，因患XXXX，于2014年5月XX日住院。经立即施行手术和十天治疗后，现已痊愈，将于2014年5月16日出院。建议在家休息一个星期后再上班工作。',
            qk: '咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间'
          },
          {
            name: '意外险',
            je: '2000',
            rq: '2018年6月12日',
            yy: '湖北省人民医院',
            bq: '病人XXX，男，XX岁，因患XXXX，于2014年5月XX日住院。经立即施行手术和十天治疗后，现已痊愈，将于2014年5月16日出院。建议在家休息一个星期后再上班工作。',
            qk: '咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间'
          },
          {
            name: '财产险',
            je: '2000',
            rq: '2018年6月13日',
            yy: '湖北省人民医院',
            bq: '病人XXX，男，XX岁，因患XXXX，于2014年5月XX日住院。经立即施行手术和十天治疗后，现已痊愈，将于2014年5月16日出院。建议在家休息一个星期后再上班工作。',
            qk: '咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间'
          },
          {
            name: '财产险',
            je: '2000',
            rq: '2018年6月14日',
            yy: '湖北省人民医院',
            bq: '病人XXX，男，XX岁，因患XXXX，于2014年5月XX日住院。经立即施行手术和十天治疗后，现已痊愈，将于2014年5月16日出院。建议在家休息一个星期后再上班工作。',
            qk: '咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间咯技术的金卡时间'
          }
        ],
        //素质评分
        pingfen: [
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//类型
            xh: '1',//活动序号
            date: '2018-10-01',//活动时间
            detail: '获得奖学金',//加分/扣分内容
          },
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//类型
            xh: '1',//活动序号
            date: '2018-10-01',//活动时间
            detail: '获得奖学金',//加分/扣分内容
          },
          {
            term: '2017~2018学年第一学期',
            lx: '扣分',//类型
            xh: 'A',//活动序号
            date: '2018-10-01',//活动时间
            detail: '旷课',//加分/扣分内容
          },
          {
            term: '2017~2018学年第一学期',
            lx: '扣分',//类型
            xh: 'B',//活动序号
            date: '2018-10-01',//活动时间
            detail: '迟到',//加分/扣分内容
          },
          {
            term: '2017~2018学年第一学期',
            lx: '扣分',//类型
            xh: 'B',//活动序号
            date: '2018-10-01',//活动时间
            detail: '迟到',//加分/扣分内容
          }
        ],
        //处分信息
        chufen: [
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//处分类型
            date: '2018-10-01',//处分时间
            reason: '因与人打架',//处分原因
            qk: '经批评教育，做出深刻的书面和口头检讨，认识到错误的严重性，态度良好。',//教育情况
          },
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//处分类型
            date: '2018-10-01',//处分时间
            reason: '因与人打架',//处分原因
            qk: '经批评教育，做出深刻的书面和口头检讨，认识到错误的严重性，态度良好。',//教育情况
          },
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//处分类型
            date: '2018-10-01',//处分时间
            reason: '因与人打架',//处分原因
            qk: '经批评教育，做出深刻的书面和口头检讨，认识到错误的严重性，态度良好。',//教育情况
          },
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//处分类型
            date: '2018-10-01',//处分时间
            reason: '因与人打架',//处分原因
            qk: '经批评教育，做出深刻的书面和口头检讨，认识到错误的严重性，态度良好。',//教育情况
          },
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//处分类型
            date: '2018-10-01',//处分时间
            reason: '因与人打架',//处分原因
            qk: '经批评教育，做出深刻的书面和口头检讨，认识到错误的严重性，态度良好。',//教育情况
          },
          {
            term: '2017~2018学年第一学期',
            lx: '加分',//处分类型
            date: '2018-10-01',//处分时间
            reason: '因与人打架',//处分原因
            qk: '经批评教育，做出深刻的书面和口头检讨，认识到错误的严重性，态度良好。',//教育情况
          }
        ],
        //临住登记
        //出境
        chujing:[
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          },
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          },
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          },
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          }
        ],
        //国内旅游
        lvyou:[
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          },
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          },
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          },
          {
            outtime:'2018-08-08',
            outplace:'长沙火车站',
            backtime:'2018-09-08',
            backplace:'长沙火车站',
            backschooltime:'2018-09-08',
            registtime:'2018-09-08',
            reporttime:'2018-09-08'
          }
        ],
        //更新护照
        passport:[
          {
            oldNum:'21312321312',
            newNum:'12312321321',
            registTime:'2018-09-09',
            reportTime:'2018-09-09'
          },
          {
            oldNum:'21312321312',
            newNum:'12312321321',
            registTime:'2018-09-09',
            reportTime:'2018-09-09'
          }, {
            oldNum:'21312321312',
            newNum:'12312321321',
            registTime:'2018-09-09',
            reportTime:'2018-09-09'
          }, {
            oldNum:'21312321312',
            newNum:'12312321321',
            registTime:'2018-09-09',
            reportTime:'2018-09-09'
          }
        ]
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
      //初始化10个数据
      initJiaofei() {
        var a = this.jiaofei_contain.slice(0, 9)
        this.jiaofei = a
      },
      //展开/收起缴费信息
      toggleJiaofei() {
        if (!this.showMoreJiaofei) {
          //展开
          this.jiaofei = this.jiaofei.concat(this.jiaofei_contain.slice(9, -1))
          this.showMoreJiaofei = true
        } else {
          // 收起
          this.jiaofei.splice(10)
          this.showMoreJiaofei = false
        }

      }
    },
    computed: {},
    mounted() {
      this.initJiaofei()
    }
  }
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .card_block {
    margin-bottom: 20px;
    display: block;
    font-size: 14px;
    color: #000;
    /*-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);*/
    /*box-shadow: 0 2px 12px 0 rgba(238,238,238,1);*/
    box-shadow: 0px 3px 12px 0 rgba(0, 0, 0, .3);
    .card_title {
      border-bottom: 1px solid rgb(238, 238, 238);
      font-size: 16px;
      font-weight: 600;
      padding: 20px;
      text-align: center;
    }
    .card_content {
      display: block;
      padding: 20px;
      .card_content_subtitle {
        font-size: 14px;
        font-weight: 700;
        padding: 10px;
        text-align: center;
      }
      .card_pic {
        width: 200px;
        height: 300px;
        margin: auto;
        margin-bottom: 15px;
        img {
          width: 100%;
        }
      }
    }
  }
.card_subtitle{
  padding: 15px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;
}
</style>
