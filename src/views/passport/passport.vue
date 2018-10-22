<template>
  <div class="pad20">
    <el-table
      :data="tableData3"
      style="width: 100%"
      border
    >
      <el-table-column
        prop="nj"
        label="年级"
        width="">
      </el-table-column>
      <el-table-column
        prop="bj"
        label="班级"
        width="">
      </el-table-column>
      <el-table-column
        prop="xh"
        label="学号"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="">
      </el-table-column>
      <el-table-column
        prop="cnName"
        label="中文名"
        width="">
      </el-table-column>
      <el-table-column
        prop="hzhm"
        label="护照号码"
        width="">
      </el-table-column>
      <el-table-column
        prop="hzyxq"
        label="护照有效期"
        width="">
      </el-table-column>
      <el-table-column
        prop="jlxkdqr"
        label="居留许可到期日"
        width="">
      </el-table-column>
      <el-table-column
        prop="gxhdqr"
        label="更新后到期日"
        width="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'passport',
    data() {
      return {
        tableData3: [{
          nj:"2018级",
          bj:"电气1班",
          xh: "20180808001",
          name: "Tom",//英文名
          cnName: "王小虎",//中文名
          hzhm:"123123123",//护照号码
          hzyxq:"3年",//护照有效期
          jlxkdqr:"20180808",//居留许可到期日
          gxhdqr:'20190909',//更新后到期日
        },
          {
            nj:"2018级",
            bj:"电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm:"123123123",//护照号码
            hzyxq:"3年",//护照有效期
            jlxkdqr:"20180808",//居留许可到期日
            gxhdqr:'20190909',//更新后到期日
          },
          {
            nj:"2018级",
            bj:"电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm:"123123123",//护照号码
            hzyxq:"3年",//护照有效期
            jlxkdqr:"20180808",//居留许可到期日
            gxhdqr:'20190909',//更新后到期日
          },
          {
            nj:"2018级",
            bj:"电气1班",
            xh: "20180808001",
            name: "Tom",//英文名
            cnName: "王小虎",//中文名
            hzhm:"123123123",//护照号码
            hzyxq:"3年",//护照有效期
            jlxkdqr:"20180808",//居留许可到期日
            gxhdqr:'20190909',//更新后到期日
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
