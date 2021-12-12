<!--
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 16:39:42
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: pannel
 * @LastEditTime: 2021-12-09 17:53:54
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\components\paneles.vue
-->

<template>
  <div class="panels-container">
    <div class="panel left-panel">
      <toggleTheme class="theme" />
      <div class="content">
        <h3>06K4工作室</h3>
        <h4>后台管理系统</h4>
        <p>
          还没有账号？请先完成注册提交信息后待我们审核后方可登录。
        </p>
        <button @click="animation.toggleAnimate" class="btn transparent" id="sign-up-btn">
          注册
        </button>
      </div>
      <img src="../assets/images/login-svg.svg" class="image" alt="" />
    </div>
    <div class="panel right-panel">
      <toggleTheme class="theme" />
      <div class="content">
        <h3>您有管理员账号？</h3>
        <p>
          请返回登录页面进行登录
        </p>
        <button class="btn transparent" @click="animation.toggleAnimate" id="sign-in-btn">
          登录
        </button>
      </div>
      <img src="../assets/images/register-svg.svg" class="image" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import toggleTheme from '@/components/toggleTheme/toggleTheme.vue';
  import { animation } from '..'
</script>

<style lang="scss">
  @import '@/assets/style/variable';
  @import '../assets/style/public';
  @import '../assets/style/panels';
</style>