<!--
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 18:01:59
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: Tag
 * @LastEditTime: 2021-12-09 18:03:50
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\components\tag.vue
-->

<template>
  <div class="tag">
    <p class="social-text">&copy;2019-2021 攀枝花市东区零六克斯工作室</p>
    <p class="social-text">&copy;2019-2021 06K4 Studio All right reserved.</p>
    <p class="social-text">蜀ICP备 202130306 号</p>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
  @import '@/assets/style/variable';

  .tag {
    margin-top: 60px;
    text-align: center;

    p {
      font-size: $small-font-size;
      color: $text-color
    }
  }
</style>