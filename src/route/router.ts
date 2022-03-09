/*
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 22:51:57
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-23 17:42:55
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\route\router.ts
 */

import { NO } from '@vue/shared'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Sign = () => import('../pages/sign/sign.vue')
const Home = () => import('../pages/home/home.vue')
// 二级路由
const Root = () => import('@/pages/root/root.vue')
const Mine = () => import('@/pages/mine/mine.vue')
const Part = () => import('@/pages/part/part.vue')
const Todo = () => import('@/pages/todo/todo.vue')
const Talk = () => import('@/pages/talk/talk.vue')
const Notice = () => import('@/pages/notice/notice.vue')
const routes: Array < RouteRecordRaw > = [
  { path: '/', name: 'sign', component: Sign },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      { path: '/home', redirect: '/home/root', meta: { keepAlive: true } },
      { path: 'root', component: Root, meta: { keepAlive: true } },
      { path: 'mine', component: Mine, meta: { keepAlive: true } },
      { path: 'part', component: Part, meta: { keepAlive: true } },
      { path: 'todo', component: Todo, meta: { keepAlive: true } },
      { path: 'Talk', component: Talk, meta: { keepAlive: true } },
      { path: 'notice', component: Notice, meta: { keepAlive: true } },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router