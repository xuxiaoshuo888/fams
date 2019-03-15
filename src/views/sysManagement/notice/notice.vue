<template>
  <div class="pad20">
    <!--<el-row :gutter="20" class="search_area">-->
    <!--<el-col :span="24">-->
    <!--<el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>-->
    <!--<el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">新增</el-button>-->
    <!--<el-button type="primary" size="mini" icon="el-icon-upload2">授权</el-button>-->
    <!--<el-button type="primary" size="mini" icon="el-icon-upload2">分配用户</el-button>-->
    <!--<el-button type="danger" size="mini" icon="el-icon-delete">批量删除</el-button>-->
    <!--</el-col>-->
    <!--</el-row>-->
    <el-table
      :data="list"
      border
      stripe>
      <!--<el-table-column-->
      <!--type="selection"-->
      <!--header-align="center"-->
      <!--align="center"-->
      <!--width="100%">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="showName"
        label="提醒类型"
        width=""
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="提前提醒时间"
        width=""
        header-align="center"
        align="center">
        <template slot-scope="scope">{{scope.row.value}}天</template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="80"
        header-align="center"
        align="center"
        fixed="right">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="primary" size="mini">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title">新增</div>
      <div>
        <el-form :model="formData" :inline="true" :rules="rules1" ref="editForm" class="demo-ruleForm"
                 label-width="200px">
          <el-form-item label="请输入天数" prop="num">
            <el-input v-model="formData.num" type="number"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import {isPositiveNumber} from '@/utils/validate'

  export default {
    name: 'notice',
    data() {
      const PositiveNumber = (rule, value, callback) => {
        if (!isPositiveNumber(value)) {
          callback(new Error('请输入正数'))
        } else {
          callback()
        }
      }
      return {
        list: [],
        dialogVisible: false,
        rules1: {
          num: [{required: true, trigger: 'blur', validator: PositiveNumber}]
        },
        formData: {
          id: '',
          num: ''
        }
      }
    },
    mounted() {
      this.getdata()
    },
    methods: {
      getdata() {
        this.request.post('/ws/config/list', {id: '2'}).then(res => {
          this.list = res.data.data
        })
      },
      edit(id) {
        this.formData.id = id
        this.dialogVisible = true
      },
      submit() {
        this.$refs.editForm.validate(valid => {
          if (valid) {
            this.request.post('/ws/config/save', this.formData).then(res => {
              this.$message({
                message: res.errmsg,
                type: 'success',
                duration: 5 * 1000
              })
              this.getdata()
              this.dialogVisible = false
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
