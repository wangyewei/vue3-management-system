/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 23:25:03
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: api接口
 * @LastEditTime: 2021-12-21 20:35:14
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\service\network.ts
 */
import { axiosInstace }from './config'
import { AxiosPromise }from 'axios'
/** 业务层类型 */
import {
  FormSignupJudge,
  SendMailVertifyCode,
  BuildUser,
  SignIn
} from './types'

//表单验证
export const postFormSignUpJudge = (param: FormSignupJudge): AxiosPromise => {
  return axiosInstace.post('/signupjudge', param).then((res:any) => res.data)
}

// 发送邮箱验证码
export const postSendEmailVertifyCode = (param: SendMailVertifyCode): AxiosPromise => {
  return axiosInstace.post('/sendemailvertifycode', param).then((res: any) => res.data)
}

// 邮箱验证码验证
export const postJudgeEmailVertifyCode = (vertifycode: string): AxiosPromise => {
  return axiosInstace.post('/signup/judgemailvertifycode', {vertifycode}).then((res: any) => res.data)
}

// 注册信息提交
export const postBuildUser = (param: BuildUser): AxiosPromise => {
  return axiosInstace.post('/signup/builduser', param).then((res: any) => res.data)
}

// 登录
export const postSignIn = (query: SignIn): AxiosPromise => {
  return axiosInstace.post('/signin', query).then((res: any) => res.data)
}