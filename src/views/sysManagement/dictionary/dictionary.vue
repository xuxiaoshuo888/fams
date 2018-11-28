<template>
  <div class="pad20">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="20">
        <el-row :gutter="20" class="search_area">
          <el-col :span="24">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete">批量删除</el-button>
          </el-col>
          <el-table
            :data="data2"
            style="width: 100%;"
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
              fixed="right">
              <template slot-scope="scope">
                <el-button @click="showStd(scope.row)" type="primary" size="mini">详情</el-button>
                <el-button type="danger" size="mini">删除</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="username"
              label="字典代码"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="xm"
              label="代码名称"
              width="200"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="department"
              label="上级代码"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="userType"
              label="是否有效"
              width="80"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="tel"
              label="序号"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'dictionary',
    data() {
      return {
        input1: '',
        input2: '',
        name: 'user',
        userType2: '',
        data1: [
          {
            label: '数据字典',
            children: [
              {
                label: '保险类型'
              },
              {
                label: '处分类型'
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        user: "",
        userType: [
          {label: '教工', value: '1'},
          {label: '学生', value: '2'},
          {label: '管理员', value: '3'},
        ],
        data2: [
          {
            username: 'admin',
            xm: '管理员',
            department: '文学院',
            userType: '教工',
            tel: '1231232213',
            email: '12312321@qq.com'
          },
          {
            username: 'admin1',
            xm: '张三',
            department: '工学院',
            userType: '教工',
            tel: '1231232213',
            email: '12312321@qq.com'
          },
          {
            username: 'admin2',
            xm: '李四',
            department: '理学院',
            userType: '教工',
            tel: '1231232213',
            email: '12312321@qq.com'
          },
          {
            username: 'admin3',
            xm: '王五',
            department: '医药学院',
            userType: '教工',
            tel: '1231232213',
            email: '12312321@qq.com'
          },
          {
            username: 'admin4',
            xm: '赵六',
            department: '临床医学院',
            userType: '教工',
            tel: '1231232213',
            email: '12312321@qq.com'
          },
        ]
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleSelectionChange(e) {
        console.log(e)
      },
      showStd(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
