/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 16:33:09
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 动画
 * @LastEditTime: 2021-12-10 16:43:25
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\assets\ts\animation.ts
 */

import { ref } from 'vue'

export let animate = ref <boolean>(false)
export const toggleAnimate = ():void => {
  animate.value = !animate.value
}