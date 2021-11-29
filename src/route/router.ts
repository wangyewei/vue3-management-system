
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Sign = () => import('../pages/sign/signin.vue')
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'sign', component: Sign }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router


