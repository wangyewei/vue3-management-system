/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 15:21:29
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-09 16:36:42
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\vite.config.ts
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
