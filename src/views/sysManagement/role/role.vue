<template>
  <div class="pad20">
    <el-row :gutter="20" class="search_area">
      <el-col :span="24">
        <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-upload2">授权</el-button>
        <el-button type="primary" size="mini" icon="el-icon-upload2">分配用户</el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete">批量删除</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="data2"
      border
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="100%">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色名"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="area"
        label="角色管理范围"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="dingzhi"
        label="是否系统定制"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="weihu"
        label="是否可维护基本信息"
        width=""
        header-align="center"
        align="center">
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
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'role',
    data() {
      return {
        data2:[
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
          {role:'admin',area:'管理员',dinzhi:'是',weihu:'否'},
        ]
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleSelectionChange(e){
        console.log(e)
      },
      showStd(e){
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
