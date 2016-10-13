<template>
  <div id="app">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/">Vue Demos</el-menu-item>
      <el-submenu index="2">
        <template slot="title">组件</template>
        <el-menu-item index="2-1">组件1</el-menu-item>
        <el-menu-item index="2-2">组件2</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">Demo</el-menu-item>
    </el-menu>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">导航二</el-menu-item>
          <el-menu-item index="3">导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view class="view"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style>
body {
  font-family: Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
