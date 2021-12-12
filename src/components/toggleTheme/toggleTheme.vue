<!--
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 16:41:29
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-10 15:51:55
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\components\toggleTheme\toggleTheme.vue
-->
<template>
  <font-awesome-icon fas :icon="theme.isDark" @click="theme.toggleTheme" id="toggleTheme" />
</template>

<script setup lang="ts">
  import { onBeforeMount, onMounted } from 'vue'
  import { theme } from './index'

  onBeforeMount((): void => {
    theme.isDark = localStorage.getItem('selected-theme') as string || 'sun'
    if (theme.isDark == 'moon') {
      document.body.classList.add('dark-theme')
    }
  })
</script>

<style scoped>

</style>