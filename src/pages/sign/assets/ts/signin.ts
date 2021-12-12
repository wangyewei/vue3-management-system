/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 16:35:17
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 登录
 * @LastEditTime: 2021-12-09 16:35:18
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\assets\ts\signin.ts
 */


import {reactive} from 'vue'
interface signInGen {
  user: string;
  pwd: string;
  validity: boolean;
  info: string;
  submit: () => void;
}

export const signIn = reactive < signInGen > ({
  user: '',
  pwd: '',
  validity: false,
  info: '',
  submit: () => {
    // if (signIn.user.length < 6) {
    //   console.log('长度过短')
    // } else {
    //   signup().then(res => {
    //     console.log(res)
    //   })
    // }
  }
})
