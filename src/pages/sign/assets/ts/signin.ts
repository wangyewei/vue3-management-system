/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 16:35:17
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 登录
 * @LastEditTime: 2021-12-23 11:57:32
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\assets\ts\signin.ts
 */


import { reactive, toRefs } from "vue";
import { SignIn } from "./types";
import { postSignIn } from "@/service/network"

const state = reactive<SignIn>({
  user: '',
  pwd: '',
  userValid: 0,
  pwdValid: 0,
  isLoading: false,
  routerIsReady: false,
})


export const {user, pwd, userValid, pwdValid, isLoading, routerIsReady} = toRefs(state)


export const userJudge = () => {
  if(!user.value.length) {
    userValid.value = 1
  }else {
    userValid.value = 2
  }
}

export const pwdJudge = () => {
  if(!pwd.value.length) {
    pwdValid.value = 1
  }else {
    pwdValid.value = 2
  }
}

export const submit = () => {
  if(userValid.value === 2 && pwdValid.value === 2) {
    isLoading.value = true
    routerIsReady.value = false
    postSignIn({
      user: user.value,
      pwd: pwd.value
    }).then(res => {
      isLoading.value = false
      if(res.status === 400) {
        userValid.value = 3
        pwdValid.value = 3
      }else if(res.status === 200) {
        routerIsReady.value = true
      }
    })
  }else {
    userJudge()
    pwdJudge()
  }
}