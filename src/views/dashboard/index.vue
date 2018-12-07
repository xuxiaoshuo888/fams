<template>
  <div class="pad20">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="always">
          <header class="title">通知公告
            <router-link to="notice" style="font-size: 14px;float: right;color: #409EFF;">更多详情</router-link>
          </header>
          <div class="sub-block">
            <el-table
              :data="list_tzgg"
              style="width: 100%">
              <el-table-column
                label="发布时间"
                width="180"
                header-align="center"
                align="center">
                <template slot-scope="scope">{{scope.row.whenCreated.substr(0,10)}}</template>
              </el-table-column>
              <el-table-column
                prop="deptId"
                label="发布单位"
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
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <header class="title">系统提示</header>
          <div class="sub-block">
            <header class="sub_title">护照到期提醒（{{hz_num}}人）
              <router-link to="Passport">更多</router-link>
            </header>
            <el-table
              :data="list_hz"
              style="width: 100%">
              <el-table-column
                prop="student.xm"
                label="姓名"
                width=""
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="xh"
                label="学号"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{scope.row.xh}}</div>
                </template>
              </el-table-column>

              <el-table-column
                prop="hzyxq"
                label="到期时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
          </div>

          <div class="sub-block">
            <header class="sub_title">保险到期提醒（{{bx_num}}人）
              <router-link to="Insurance">更多</router-link>
            </header>
            <el-table
              :data="list_bx"
              style="width: 100%">
              <el-table-column
                prop="student.xm"
                label="姓名"
                width=""
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="xh"
                label="学号"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{scope.row.xh}}</div>
                </template>
              </el-table-column>

              <el-table-column
                prop="bxrq"
                label="到期时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
          </div>

          <div class="sub-block">
            <header class="sub_title">临住到期提醒 （{{lz_num}}人）
              <router-link to="TempAccommodation">更多</router-link>
            </header>
            <el-table
              :data="list_lz"
              style="width: 100%">
              <el-table-column
                prop="student.xm"
                label="姓名"
                width=""
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="xh"
                label="学号"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{scope.row.xh}}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="dxsj"
                label="到校时间"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        list_tzgg: [],
        list_hz: [],
        hz_num: '',
        list_bx: [],
        bx_num: '',
        list_lz: [],
        lz_num: '',
      }
    },
    mounted() {
      this.get_tzgg()
      this.get_hz()
      this.get_bx()
      this.get_lz()
    },
    methods: {
      get_tzgg() {
        this.request.post('/ws/notice/page', {
          page: this.pageNum,
          limit: this.pageSize,
        }).then(res => {
          this.list_tzgg = res.data.page.rows
        })
      },
      get_hz() {
        this.request.post('/ws/passport/due', {
          page: this.pageNum,
          limit: 3,
        }).then(res => {
          this.list_hz = res.data.page.rows
          this.hz_num = res.data.page.records
        })
      },
      get_bx() {
        this.request.post('/ws/insurance/page', {
          page: this.pageNum,
          limit: 3,
        }).then(res => {
          this.list_bx = res.data.page.rows
          this.bx_num = res.data.page.records
        })
      },
      get_lz() {
        this.request.post('/ws/roomassing/page', {
          page: this.pageNum,
          limit: 3,
        }).then(res => {
          this.list_lz = res.data.page.rows
          this.lz_num = res.data.page.records
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    font-size: 22px;
    font-weight: normal;
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 10px;
  }

  .sub_title {
    padding: 10px 10px;
    text-align: left;
    border-bottom: 1px solid #ebeef5;
    background-color: rgb(238, 238, 238);
    margin-top: 20px;
  }

  .sub-block {
    /*margin-bottom: 10px;*/
    text-align: center;
    header {
      a {
        font-size: 14px;
        float: right;
        color: #409EFF;

      }
    }

  }
</style>
