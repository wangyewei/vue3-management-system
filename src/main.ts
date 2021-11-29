/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 15:21:29
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-11-29 23:44:30
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
const app = createApp(App).use(router).mount('#app')
