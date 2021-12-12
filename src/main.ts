/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 15:21:29
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-09 17:34:38
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import { FontAwesomeIcon } from './plugins/icon'
import './assets/style/index.scss'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


