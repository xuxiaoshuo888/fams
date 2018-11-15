<template>
  <div class="pad20">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="20">
        <el-row :gutter="20" class="search_area">
          <el-col :span="24" class="">
            <el-input
              placeholder="用户名"
              size="mini"
              clearable
              v-model="input1">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-input
              placeholder="姓名"
              size="mini"
              clearable
              v-model="input2">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-select size="mini" v-model="user" clearable placeholder="用户类型">
              <el-option
                size="mini"
                v-for="item in userType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2">上传</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete">批量删除</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2">批量修改密码</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2">重置密码</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2">批量授权</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2">启用</el-button>
            <el-button type="primary" size="mini" icon="el-icon-upload2">禁用</el-button>
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
              label="用户名"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="xm"
              label="姓名"
              width="100"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="department"
              label="部门"
              width="130"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="userType"
              label="用户类型"
              width="130"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="tel"
              label="电话"
              width=""
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮件"
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
    data() {
      return {
        input1: '',
        input2: '',
        name: 'user',
        userType2: '',
        data1: [
          {
            label: '长沙医学院',
            children: [
              {
                label: '文学院',
                children: [{label: '汉语言文学1班'}, {label: '英语1班'}]
              },
              {
                label: '理学院',
                children: [{label: '生物技术1班'}]
              },
              {
                label: '工学院',
                children: [{label: '计算机科学与技术1班'}]
              },
              {
                label: '管理学院',
                children: [{label: '管理1班'}, {label: '市场营销1班'}]
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
