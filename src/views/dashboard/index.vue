<template>
  <div class="pad20">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="always">
          <header class="title">通知公告</header>
          <div class="sub-block">
            <el-table
              :data="table1"
              style="width: 100%">
              <el-table-column
                label="标题"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <a href="" target="_blank" style="text-decoration: underline">{{scope.row.title}}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="author"
                label="发布人"
                width="150"
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="date"
                label="日期"
                width="100"
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
            <header class="sub_title">护照到期提醒</header>
            <el-table
              :data="table2"
              style="width: 100%">
              <el-table-column
                label="姓名"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <a href="" target="_blank" style="text-decoration: underline">{{scope.row.name}}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="time1"
                label="到期时间"
                width=""
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="time2"
                label="发布日期"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
          </div>

          <div class="sub-block">
            <header class="sub_title">保险到期提醒</header>
            <el-table
              :data="table2"
              style="width: 100%">
              <el-table-column
                label="姓名"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <a href="" target="_blank" style="text-decoration: underline">{{scope.row.name}}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="time1"
                label="到期时间"
                width=""
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="time2"
                label="发布日期"
                width=""
                header-align="center"
                align="center">
              </el-table-column>
            </el-table>
          </div>

          <div class="sub-block">
            <header class="sub_title">临住到期提醒</header>
            <el-table
              :data="table2"
              style="width: 100%">
              <el-table-column
                label="姓名"
                header-align="center"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <a href="" target="_blank" style="text-decoration: underline">{{scope.row.name}}</a>
                </template>
              </el-table-column>
              <el-table-column
                prop="time1"
                label="到期时间"
                width=""
                header-align="center"
                align="center"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="time2"
                label="发布日期"
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
        table1: [
          {
            title: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
            author: '王小虎王小虎王小虎王小虎王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
          {
            title: '上海市普陀区金沙江路 1518 弄',
            author: '王小虎',
            date: '2016-05-02',
          },
        ],
        table2:[
          {
            name:'张三',
            time1:'2019-08-08',
            time2:'2018-08-08',
          },
          {
            name:'张三',
            time1:'2019-08-08',
            time2:'2018-08-08',
          },
          {
            name:'张三',
            time1:'2019-08-08',
            time2:'2018-08-08',
          }
        ]
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
    background-color: rgb(238,238,238);
    margin-top: 20px;
  }
  .sub-block {
    /*margin-bottom: 10px;*/
    text-align: center;
  }
</style>
