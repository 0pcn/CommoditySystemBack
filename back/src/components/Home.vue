<template>
  <div>
    <el-container class="el-container">
      <div class="el-aside">
        <el-aside width="200">
        <el-row style="height: 100%;">
          <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
            <el-menu
              text-color="#fff"
              active-text-color="dodgerblue"
              default-active="2"
              class="el-menu" router>
              <el-menu-item index="/Order" class="el-menu-item">
                <i class="el-icon-tickets el-icon"></i>
                <span slot="title">訂單維護</span>
              </el-menu-item>
              <el-menu-item index="/CommodityMaintain" class="el-menu-item">
                <i class="el-icon-shopping-bag-2 el-icon"></i>
                <span slot="title">商品維護</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        </el-aside>
      </div>
      <el-container>
        <el-header class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="el-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main class="el-main"><router-view></router-view></el-main>
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
  height: 100%;
  padding: 0;
  margin: 0;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #304156;
  width: 200px;
}
.el-menu {
  background-color: #304156;
  min-height: 100%;
  width: 200px ;
  padding: 0px 0px;
}
.el-menu-item:hover {
  background-color: #2c3e50;
}
.header {
  background-color: #EFF2F7;
  margin: 0px 0px 20px 0px;
}
.el-breadcrumb {
  position: absolute;
  top: 85px;
}
.el-main {
  padding: 0px 20px;
}
</style>
