<template>
  <div>
    <el-container>
      <el-aside width="200px">
          <el-col>
            <el-menu
              background-color="lightgray"
              default-active="2"
              class="el-menu-vertical-demo" router>
              <el-menu-item index="/Order">
                <i class="el-icon-tickets"></i>
                <span slot="title">訂單維護</span>
              </el-menu-item>
              <el-menu-item index="/CommodityMaintain">
                <i class="el-icon-shopping-bag-2"></i>
                <span slot="title">商品維護</span>
              </el-menu-item>
            </el-menu>
          </el-col>
      </el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
html,body {
  padding: 0;
  margin: 0;
}

</style>
