/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-09 16:21:48
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 注册
 * @LastEditTime: 2021-12-10 22:54:28
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
import { reactive } from 'vue'
import { postEmailSignUp, EmailSignUp, postFormSignUpJudge, FormSignupJudge, postSendEmailVertifyCode, postJudgeEmailVertifyCode } from '@/service/network'
//

interface Register {
  user: string;
  pwd: string;
  email: string;
  warnTag: boolean;
  userValid: number;
  pwdValid: number;
  emailValid: number;
  isLoading: boolean;
  step: number;
  countDown: number;
  emailVertifycode: string;
  emailVertifyStatus: number;
  formJudge: () => void;
  checkUserValid: () => void;
  checkEmailValid: () => void;
  checkPwdValid: () => void;
  emailJudge: () => void;
  emailSendCode: (parame: EmailSignUp) => AxiosPromise; // 发送注册邮件
  backone: () => void;
  reSendVertiCode: () => void;
  counterDown: () => void;
  emailVertifyCodeJudge: () => void; // 邮箱验证码验证
  emailVertifyCodeNext: () => void; // 邮箱验证码下一步
}


export const register = reactive < Register > ({
  user: '',
  pwd: '',
  email: '',
  warnTag: false,
  userValid: 0,
  pwdValid: 0,
  emailValid: 0,
  isLoading: false,
  step: 2,
  countDown: 0,
  emailVertifycode: '', // 邮箱验证码
  emailVertifyStatus: 0, // 邮箱验证码状态
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
  emailSendCode: (param: EmailSignUp): AxiosPromise => {
    return postEmailSignUp(param)
  },
  counterDown: (): void => {
    const timer = setInterval(() => {
      register.countDown--
      if (register.countDown === 0) clearInterval(timer)
    }, 1000)
  },
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
              postSendEmailVertifyCode(register.email).then((res: any) => {
                console.log(res)
              })
              register.countDown = 60
              register.counterDown()
              register.step = 2
            }
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
  reSendVertiCode: (): void => {
    if (register.countDown === 0) {
      register.emailSendCode({
        user: register.user,
        email: register.email,
        pwd: register.pwd
      }).then((res: any) => {
        register.emailVertifycode = res?.result
      })
    }
  },
  emailJudge: (): void => {

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
  }
})