
<template>
  <div class="TestWorld">
    <div>
      <el-button @click="dialogFormVisible = true" icon="el-icon-plus">新增</el-button>

      <el-dialog title="新增" :visible.sync="dialogFormVisible">
        <el-form :model="newValue">
          <el-form-item label="商品名稱" :label-width="formLabelWidth">
            <el-input v-model="newValue.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="價錢" :label-width="formLabelWidth">
            <el-input v-model="newValue.price" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleAdd">確 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="name" label="商品名稱">
        <template slot-scope="scope">
          <template v-if="scope.row.editing">
            <el-input class="edit-input" v-model="scope.row.name"  placeholder="商品名稱"></el-input>
          </template>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="價錢">
        <template slot-scope="scope">
          <template v-if="scope.row.editing">
            <el-input class="edit-input" v-model="scope.row.price" placeholder="價錢"></el-input>
          </template>
          <span v-else>{{ scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="editing" label="操作">
        <template slot-scope="scope">
          <el-button
            type="danger"
            v-if="!scope.row.editing"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
          <el-button
            type="primary"
            v-if="!scope.row.editing"
            icon="el-icon-edit"
            v-model="scope.$index"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <div v-else>
            <el-button
              type="info"
              icon="el-icon-close"
              v-model="scope.$index"
              @click="handleCancle(scope.$index, scope.row)">取消
            </el-button>
            <el-button
              type="success"
              icon="el-icon-check"
              @click="savemodify(scope.$index, scope.row)">保存
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

export default {
  name:'TestWorld',
  data() {
    return {
      tableData:[
        {
          name: 'orange',
          price: 100,
          editing: false,
          saving: false
        },
        {
          name: 'grape',
          price: 100,
          editing: false,
          saving: false
        },
        {
          name: 'banana',
          price: 100,
          editing: false,
          saving: false
        }
      ],
      prevValue:{},
      dialogTableVisible: false,
      dialogFormVisible: false,
      newValue: {
        name: '',
        price: '',
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    handleDelete(index){ //刪除行數
      this.tableData.splice(index, 1)
    },
    handleEdit(index,row){  //編輯
      row.editing = true;
      console.log(index)
      this.prevValue = JSON.parse(JSON.stringify(row));
    },
    handleCancle(index,row){  //取消
      row.editing = false;
      let prevContent = this.prevValue.name;
      this.$set(row,"name",prevContent);
    },
    savemodify(index,row){               //保存
      row.editing = false;
      row.saving = true;
      console.log(JSON.stringify(this.tableData))
    },
    clearInput() {
      this.newValue.name = ''
      this.newValue.price = ''
    },
    handleAdd() {
      this.tableData.push({name:this.newValue.name,price:this.newValue.price}) //新增
      this.dialogFormVisible = false
      this.clearInput();
    },
  }
}
</script>
