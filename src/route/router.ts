/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 22:51:57
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-09 11:58:06
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\route\router.ts
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Sign = () => import('../pages/sign/sign.vue')
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'sign', component: Sign }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router


