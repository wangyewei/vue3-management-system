<!--
 * @Author: YeWei Wang
 * @Date: 2022-03-09 15:06:57
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-09 17:32:52
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\home\components\k-header.vue
 * @Autor: YeWei Wang
-->
<template>
  <header class="main-header">
    <div class="header-left">
      <span class="logo">06k4 Studio</span>
      <span class="desc">后台管理系统</span>
    </div>

    <div class="header-right">
      <span class="head">
        <img src="../../../../public/favicon.ico" />
      </span>
      <span class="name">
        <el-dropdown>
          <span class="inner-name">
            Yewei_Wang
            <el-icon>
              <ArrowDown />
            </el-icon>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的资料</el-dropdown-item>
              <el-dropdown-item>我的私信</el-dropdown-item>
              <el-dropdown-item>待办</el-dropdown-item>
              <el-dropdown-item disabled>技术部</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
    </div>
  </header>
</template>

<script lang="ts" setup>

import {
  ArrowDown,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from '../../../plugins/element-plus'
</script>

<style lang="scss" scoped>
@import "../../../assets/style/index.scss";
.main-header {
  background-color: $main-color;
  height: 6vh;
  line-height: 6vh;
  display: flex;
  box-shadow: 0 0 13px $main-color-alt;
  z-index: 2;
  // margin-bottom: 1px;
  // border-bottom: 1px solid $main-color-alt;
  color: $body-color;

  .header-left {
    flex: 1;
    margin: 0 82px;
    cursor: pointer;

    .logo {
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
    .desc {
      font-weight: lighter;
      font-size: 12px;
      display: inline-block;
      margin-left: 13px;
    }
  }

  .header-right {
    flex: 1;
    text-align: right;
    margin: 0 82px;
    display: flex;
    align-items: center;
    justify-content: right;
    cursor: pointer;

    .name {
      display: flex;
      justify-content: center;
      align-items: center;
      .inner-name {
        color: $body-color;
      }
    }
    .head {
      width: 30px;
      height: 30px;
      display: inline-block;
      border: 1px solid red;
      border-radius: 100%;
      overflow: hidden;
      background: #fff;
      margin-right: 13px;
    }
  }
}
</style>