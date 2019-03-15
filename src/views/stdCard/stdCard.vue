<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24" class="">
        <el-input
          placeholder="学号"
          size="mini"
          clearable
          v-model="xh">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="在校状态"
          size="mini"
          clearable
          v-model="zxzt">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="姓"
          size="mini"
          clearable
          v-model="xm_x">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-input
          placeholder="名"
          size="mini"
          clearable
          v-model="xm_m">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <!--<el-input-->
          <!--placeholder="学院"-->
          <!--size="mini"-->
          <!--v-model="xy"-->
          <!--@focus="choose_select('xy',xy,xyList,true)">-->
          <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->
        <!--<el-input-->
          <!--placeholder="专业"-->
          <!--size="mini"-->
          <!--v-model="zy"-->
          <!--@focus="choose_select('zy',zy,zyList,true)">-->
          <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->
        <el-input
          placeholder="年级"
          size="mini"
          v-model="nj"
          @focus="choose_select('nj',nj,njList,true)">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <!--<el-select size="mini"-->
                   <!--no-data-text=" "-->
                   <!--v-model="mz"-->
                   <!--@focus="choose_select('mz',mz,mzList,false)"-->
                   <!--multiple-->
                   <!--placeholder="民族">-->
        <!--</el-select>-->
      </el-col>
      <el-col :span="24" class="search_btn_area">
        <el-button type="primary" size="mini" icon="el-icon-search" @click="getData">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="list"
      style=""
      max-height="768"
      border
      stripe>
      <el-table-column
        label="操作"
        width="70"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="showStd(scope.row.xh)" type="primary" size="mini">详情</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="nj"
        label="年级"
        width="60"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="bj"
        label="班级"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="110"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm_x"
        label="姓"
        width=""
        show-overflow-tooltip
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xm_m"
        label="名"
        width=""
        show-overflow-tooltip
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zwm"
        label="中文名"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="xb"
        label="性别"
        width="50"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ssh"
        label="宿舍号"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="lxdh"
        label="电话号码"
        width="120"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="csrq"
        label="出生年月"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="hzhm"
        label="护照号"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gb"
        label="国籍"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <!--<el-table-column-->
        <!--prop="xh"-->
        <!--label="学籍注册号"-->
        <!--width="130"-->
        <!--header-align="center"-->
        <!--align="center">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="dxrq"
        label="到校日期"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zjxy"
        label="宗教"
        width="100"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="fdy"
        label="辅导员"
        width="80"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zh"
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
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="prev"
        @next-click="next"
        :current-page="pageNum"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next,jumper"
        :total="records">
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
                    <div>{{list_jb.xh || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="姓：">
                    <div>{{list_jb.xmX || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="名：">
                    <div>{{list_jb.xmM || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="中文名：">
                    <div>{{list_jb.zwm || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="性别：">
                    <div>{{list_jb.xb || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="出生年月：">
                    <div>{{list_jb.csrq || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="年级：">
                    <div>{{list_jb.nj || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="学院：">
                    <div>{{list_jb.xy || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="专业：">
                    <div>{{list_jb.zy || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="班级：">
                    <div>{{list_jb.bj || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="入学年月：">
                    <div>{{list_jb.rxnf || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="在校状态：">
                    <div>{{list_jb.zxzt || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="学籍状态：">
                    <div>{{list_jb.zjzt || '在籍'}}</div>
                  </el-form-item>
                  <el-form-item label="联系电话：">
                    <div>{{list_jb.lxdh || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="永久联系电话：">
                    <div>{{list_jb.lxdh || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="住宿情况：">
                    <div>{{list_jb.ssh || '暂无数据'}}</div>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <div class="card_pic"><img alt="暂无照片" :src="'/ws/resource/showImg?path=' + list_jb.zp"/></div>
                  <el-form-item label="国籍/地区：">
                    <div>{{list_jb.gb || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="出生国籍/地区：">
                    <div>{{list_jb.gb || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="宗教信仰：">
                    <div>{{list_jb.zjxy || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="辅导员工号：">
                    <div>暂无数据</div>
                  </el-form-item>
                  <el-form-item label="辅导员姓名：">
                    <div>{{fdy || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="辅导员联系方式：">
                    <div>暂无数据</div>
                  </el-form-item>
                  <el-form-item label="毕业去向：">
                    <div>暂无数据</div>
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
                    <div>{{list_hz.hzhm || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="护照有效期：">
                    <div>{{list_hz.hzyxq || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="居留许可证件号：">
                    <div>{{list_hz.jlxkzjh || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="居留许可有效期：">
                    <div>{{list_hz.jlxkdqr || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="护照首页：">
                    <div><a @click="showImg(list_hz.hzsy)">{{list_hz.hzsy ? '点击预览' : '暂无数据'}}</a></div>
                  </el-form-item>
                  <el-form-item label="签证页：">
                    <div><a @click="showImg(list_hz.qzy)">{{list_hz.qzy ? '点击预览' : '暂无数据'}}</a></div>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form ref="form" size="mini">
                  <el-form-item label="护照有效期：">
                    <div>{{list_hz.hzyxq || '暂无数据'}}</div>
                  </el-form-item>
                  <el-form-item label="居留许可页：">
                    <div><a @click="showImg(list_hz.jlxkzy)">{{list_hz.jlxkzy ? '点击预览' : '暂无数据'}}</a></div>
                  </el-form-item>
                  <el-form-item label="JW202表：">
                    <div><a @click="showImg(list_hz.jw202)">{{list_hz.jw202 ? '点击预览' : '暂无数据'}}</a></div>
                  </el-form-item>
                  <el-form-item label="录取通知书：">
                    <div><a @click="showImg(list_hz.lqdzs)">{{list_hz.lqdzs ? '点击预览' : '暂无数据'}}</a></div>
                  </el-form-item>
                  <el-form-item label="临住登记表：">
                    <div><a @click="showImg(list_hz.lzdjb)">{{list_hz.lzdjb ? '点击预览' : '暂无数据'}}</a></div>
                  </el-form-item>
                  <el-form-item label="健康证：">
                    <div><a @click="showImg(list_hz.jkz)">{{list_hz.jkz ? '点击预览' : '暂无数据'}}</a></div>
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
              :data="list_bx"
              style="width: 100%">
              <el-table-column type="expand" header-align="center" align="center">
                <template slot-scope="props">
                  <el-form label-position="left" inline>
                    <el-form-item label="病情:">
                      <span>{{ props.row.bq }}</span>
                    </el-form-item>
                    <el-form-item label="报案情况:">
                      <span>{{ props.row.bxba }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="购买保险名字"
                prop="bxxm"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                label="金额"
                prop="bxf"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                label="购买保险日期"
                prop="bxrq"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                label="就诊医院"
                prop="jzyy"
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
              :data="jiaofei_contain"
              style="width: 100%">
              <el-table-column
                prop="sfqj"
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
                prop="ssje"
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
            <div v-if="list_jf.length >= 10" class="textr margintop20">
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
              :data="list_sz"
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
              :data="list_jc"
              style="width: 100%">
              <!--<el-table-column-->
                <!--prop="xnxq"-->
                <!--label="学年学期"-->
                <!--width="180"-->
                <!--header-align="center"-->
                <!--align="center">-->
              <!--</el-table-column>-->
              <el-table-column
                prop="cflx"
                label="处分类型"
                width="80"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="cfsj"
                label="处分时间"
                width="100"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="cfyy"
                label="处分原因"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="jyqk"
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
              :data="list_lz.cj"
              style="width: 100%">
              <el-table-column
                prop="fssj"
                label="入境时间"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="fsdd"
                label="入境地点"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="dcsj"
                label="回长时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="dcdd"
                label="回长地点"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="dxsj"
                label="到校时间"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="djrq"
                label="登记日期"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sbrq"
                label="上报日期"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>

            <!--国内旅游-->
            <div class="card_subtitle">国内旅游</div>
            <el-table
              :data="list_lz.gn"
              style="width: 100%">
              <el-table-column
                prop="fssj"
                label="离长时间"
                width="180"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="fsdd"
                label="地点"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="dcsj"
                label="回长沙时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="dcdd"
                label="地点"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="dxsj"
                label="到校时间"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="djrq"
                label="登记日期"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sbrq"
                label="上报日期"
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>

            <!--更新护照-->
            <div class="card_subtitle">更新护照</div>
            <el-table
              :data="list_lz.gxhz"
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
                prop="djrq"
                label="登记日期"
                width="100"
                header-align="center"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sbrq"
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

    <!--选择学院的列表弹出框，单选-->
    <el-dialog
      title=""
      class="select_dialog"
      :visible.sync="dialogVisible_select_radio"
      width="900px">
      <div slot="title">请选择
        {{select_type === 'xy' ? '学院' : ''}}
        {{select_type === 'zy' ? '专业' : ''}}
        {{select_type === 'nj' ? '年级' : ''}}
        {{select_type === 'mz' ? '民族' : ''}}
      </div>
      <div>
        <el-radio-group v-if="isRadio" v-model="select_value">
          <el-radio v-for="item in select_list"
                    :key="item.name"
                    :label="item.name"
                    @change="change"
                    border>
          </el-radio>
        </el-radio-group>
        <el-checkbox-group v-else v-model="select_value">
          <el-checkbox v-for="item in select_list"
                       :key="item.name"
                       :label="item.name"
                       @change="change"
                       border>
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clear_select_value">置空</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'stdCard',
    data() {
      return {
        xh: "",
        zxzt: "",
        xm_x: "",
        xm_m: "",
        xy: '',
        zy: '',
        nj: '',
        mz: [],
        list: [],//外面列表
        list_jb: [],//基本
        fdy:'',
        list_hz: [],//护照
        list_bx: [],//保险
        list_lz: {//临住
          cj:[],//出境
          gn:[],//国内
          gxhz:[]//更新护照
        },
        list_jc: [],//处分
        list_sz:[],//素质

        //缴费
        jiaofei_contain: [],
        showMoreJiaofei: false,//默认表格是收起的，false代表目前表格是收起的,true表示表格是展开的
        list_jf: [],//绑定展示的缴费数据

        pageNum: 1,
        pageSize: null,
        records: null,
        dialogVisible: false,
        lvyou: [],
        passport: [],
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
        rules: {},
        //缴费

        //保险
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
        //国内旅游
        //更新护照
        dialogVisible_select_radio: false,//弹出框-单选
        dialogVisible_select_multiple: false,//弹出框-多选
        isRadio: true,//true-单选，false多选
        select_type: '',//当前选项类别，比如，学校、年级、民族
        select_value: [],//当前选择的值
        select_list: [],//弹出框当前选项列表
        xyList: [//待选择的学院列表
          {name: '工学院', id: ''},
          {name: '文学院', id: ''},
          {name: '理学院', id: ''},
          {name: '电信学院', id: ''},
        ],
        zyList: [
          {name: '汉语言文学'},
          {name: '临床医学'},
          {name: '英语'},
          {name: '机械制造及其自动化'},
          {name: '护理学'}
        ],
        njList: [
          {name: '2019'},
          {name: '2018'},
          {name: '2017'},
          {name: '2016'},
          {name: '2015'},
          {name: '2014'},
          {name: '2013'}
        ],
        mzList: [
          {name: '汉族'},
          {name: '蒙古族'},
          {name: '回族'},
          {name: '藏族'},
          {name: '维吾尔族'}
        ]
      }
    },
    mounted() {
      this.initJiaofei()
      this.getData()
    },
    methods: {
      getData() {
        this.request.post('/ws/student/page', {
          page: this.pageNum,
          limit: this.pageSize,
          records: this.records,
          xh: this.xh,
          zxzt: this.zxzt,
          xm_x: this.xm_x,
          xm_m: this.xm_m,
          xy: this.xy,
          zy: this.zy,
          nj: this.nj,
          mz: this.mz
        }).then(res => {
          this.list = res.data.page.rows
          this.pageNum = res.data.page.page
          this.pageSize = res.data.page.pageSize
          this.records = res.data.page.records
        })
      },
      reset() {//重置搜索条件
        this.xh = ''
        this.xm_x = ''
        this.xm_m = ''
        this.xb = ''
        this.xy = ''
        this.zy = ''
        this.bj = ''
        this.nj = ''
        this.zxzt = ''
        this.getData()
      },
      showStd(xh) {
        this.dialogVisible = true;
        this.request.post('/ws/student/getStdDetail', {xh: xh}).then(res => {
          console.log(res)
          this.list_jb = res.data.data
          this.list_bx = res.data.bx
          this.list_hz = res.data.hz[0]
          this.list_lz = res.data.lz
          this.list_jc = res.data.jc
          this.jiaofei_contain = res.data.jf//缴费数据容器
          this.fdy = res.data.teacher.xm
        })
      },
      //初始化10个数据
      initJiaofei() {
        if (this.jiaofei_contain.length >= 10) {
          this.list_jf = this.jiaofei_contain.slice(0, 9)
        }
      },
      //展开/收起缴费信息
      toggleJiaofei() {
        if (!this.showMoreJiaofei) {
          //展开
          this.list_jf = this.list_jf.concat(this.jiaofei_contain.slice(9, -1))
          this.showMoreJiaofei = true
        } else {
          // 收起
          this.list_jf.splice(10)
          this.showMoreJiaofei = false
        }
      },
      choose_select(type, value, list, isRadio) {//点击输入框，弹出框，并带入该选项的相关参数
        //type-字段，value-字段值，list-字段选项列表, isRadio，true单选，false复选
        this.select_type = type;
        this.dialogVisible_select_radio = true;
        this.select_list = list;
        this.isRadio = isRadio;
        //数据初始化，当已经选择了值
        if (this.select_type === 'xy') {
          this.select_value = this.xy
        } else if (this.select_type === 'zy') {
          this.select_value = this.zy
        } else if (this.select_type === 'nj') {
          this.select_value = this.nj
        } else if (this.select_type === 'mz') {
          this.select_value = this.mz
        }
      },
      confirm_select() {//将选择的结果写入与视图绑定的数据容器
        // console.log(this.select_value);
        if (this.select_type === 'xy') {
          this.xy = this.select_value
        } else if (this.select_type === 'zy') {
          this.zy = this.select_value
        } else if (this.select_type === 'nj') {
          this.nj = this.select_value
        } else if (this.select_type === 'mz') {
          this.mz = this.select_value
        }
        // this.dialogVisible_select_radio = false;
      },
      change() {
        this.confirm_select()
        // console.log(this.select_value)
      },
      confirm() {
        this.dialogVisible_select_radio = false;
      },
      //清空当前选中的项的值
      clear_select_value() {
        if (this.isRadio) {
          this.select_value = ''
        } else {
          this.select_value = []
        }
        this.confirm_select()
      },
      //分页相关方法
      handleSizeChange(e) {
        this.pageSize = e
        this.getData()
      },
      handleCurrentChange(e) {
        this.pageNum = e
        this.getData()
      },
      prev() {
        this.pageNum = this.pageNum - 1
      },
      next() {
        this.pageNum = this.pageNum + 1
      },
      showImg(e) {//打开新标签页
        if (e) {
          let path = JSON.parse(e).path
          window.open('/ws/resource/showImg?path=' + path, '_blank')
        }
      }
    },

  }
</script>

<style lang="scss" scoped>
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }

  .card_block {
    margin-bottom: 20px;
    display: block;
    font-size: 14px;
    color: #000;
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

  .card_subtitle {
    padding: 15px;
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid #eeeeee;
  }

  .select_dialog {
    .tag {
      display: inline-block;
      background-color: rgba(64, 158, 255, .1);
      display: inline-block;
      padding: 0 10px;
      height: 32px;
      line-height: 30px;
      font-size: 12px;
      color: #409eff;
      border-radius: 4px;
      box-sizing: border-box;
      border: 1px solid rgba(64, 158, 255, .2);
      white-space: nowrap;
    }
  }

  .select_dialog .tag + .tag {
    margin-left: 10px;
  }

  .select_dialog .tag:hover {
    cursor: pointer;
  }
</style>
