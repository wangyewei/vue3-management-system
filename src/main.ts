/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 15:21:29
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-09 14:46:59
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import { FontAwesomeIcon } from './plugins/icon'
import './assets/style/index.scss'
import 'element-plus/dist/index.css'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


