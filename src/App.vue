<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :router="true">
          <el-menu-item index="/">Vue Demos</el-menu-item>
          <el-menu-item index="/firebase">firebase</el-menu-item>
          <el-menu-item index="/markdown">Markdown</el-menu-item>
          <el-menu-item index="/modal">Modal</el-menu-item>
          <el-menu-item index="/elastic">Elastic header</el-menu-item>
          <el-menu-item index="/github">github</el-menu-item>
          <el-menu-item index="/grid">grid</el-menu-item>
          <el-menu-item index="/tree">tree</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16" :offset="2" class="view-content">
        <router-view class="view"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style>
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin: 0;
  padding: 0;
}

.el-menu-vertical-demo{
  height:100vh;
}

.el-menu-demo{

}

.view{
  /*text-align:center;*/
  /*padding:40px;*/
}

</style>
