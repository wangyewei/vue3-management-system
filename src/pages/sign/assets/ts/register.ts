/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 16:21:48
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 注册
 * @LastEditTime: 2021-12-23 19:52:27
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\assets\ts\register.ts
 */

/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 16:14:44
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-09 16:20:08
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\index.ts
 */

import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { reactive, toRefs } from 'vue'
/**业务层接口 */
import { postFormSignUpJudge , postSendEmailVertifyCode, postJudgeEmailVertifyCode } from '@/service/network'

/**业务层接口类型 */
import { 
  FormSignupJudge,
  SendMailVertifyCode
} from '@/service/types'

/**类型 */
import {Register} from './types'


export const register = reactive < Register > ({
  user: '',
  pwd: '',
  email: '',
  warnTag: false,
  userValid: 0,
  pwdValid: 0,
  emailValid: 0,
  isLoading: false,
  step: 1,
  countDown: 0,
  emailVertifycode: '', // 邮箱验证码
  emailVertifyStatus: 0, // 邮箱验证码状态
  // 验证用户名是否合法
  checkUserValid: (): void => {
    const reg: RegExp = /^[a-zA-Z0-9_-]{6,12}$/;
    if (register.user == '') {
      register.userValid = 1
    } else if (!reg.test(register.user)) {
      register.userValid = 2
    } else {
      register.userValid = 3
    }
  },
  // 验证邮箱合法
  checkEmailValid: (): void => {
    const reg: RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (register.email == '') {
      register.emailValid = 1
    } else if (!reg.test(register.email)) {
      register.emailValid = 2
    } else {
      register.emailValid = 3
    }
  },
  // 验证密码合法
  checkPwdValid: (): void => {
    const reg: RegExp = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?. ]).*$/;
    if (register.pwd == '') {
      register.pwdValid = 1
    } else if (!reg.test(register.pwd)) {
      register.pwdValid = 2
    } else {
      register.pwdValid = 3
    }
  },
  // 倒计时 BUG: 改为后端计时
  counterDown: (): void => {
    const timer = setInterval(() => {
      register.countDown--
      if (register.countDown === 0) clearInterval(timer)
    }, 1000)
  },
  // 表单验证
  formJudge: (): void => {
    if (register.countDown == 0) {
      if (register.userValid === 3 && register.pwdValid === 3 && register.emailValid === 3) {
        register.isLoading = true
        const userQuery: FormSignupJudge = {
          key: 'user',
          value: register.user
        }

        const emailQuery: FormSignupJudge = {
          key: 'email',
          value: register.email
        }

        axios.all([postFormSignUpJudge(userQuery), postFormSignUpJudge(emailQuery)]).then(
          axios.spread((userRes: any, emailRes: any) => {

            if (userRes?.result === 0 && emailRes?.result === 0) {
              const parame: SendMailVertifyCode = {
                user: register.user,
                email: register.email,
              }
              postSendEmailVertifyCode(parame)
              register.countDown = 60
              register.counterDown()
              register.step = 2
            }

            console.log(userRes)
            console.log(emailRes)
            userRes?.result !== 0 && (register.userValid = 4)
            emailRes?.result !== 0 && (register.emailValid = 4)

            register.isLoading = false
          })
        )

      } else {
        register.checkUserValid()
        register.checkPwdValid()
        register.checkEmailValid()
      }
    }
  },
  backone: (): void => {
    register.isLoading = true
    register.step--
    register.isLoading = false
  },
  emailVertifyCodeJudge: (): void => {
    if (register.emailVertifycode.length !== 6) {
      register.emailVertifyStatus = 1
    } else {
      register.emailVertifyStatus = 3
    }
  },
  emailVertifyCodeNext: (): void => {
    if (register.emailVertifyStatus !== 1) {
      register.isLoading = true
      postJudgeEmailVertifyCode(register.emailVertifycode).then((res: any) => {
        register.isLoading = false
        if (res.isMatch) {
          register.step++
        }else{
          register.emailVertifyStatus = 2
        }
      })
    }
  },
  name: '',
  nameStatus: 0,
  checkNameValid: ():void => {
    register.name.length ? register.nameStatus = 3 : register.nameStatus = 1
  },
  sex: [0 , 1],
  currsex: 0,
  checkSex: ():void => {
    console.log(register.currsex)
  }
})
