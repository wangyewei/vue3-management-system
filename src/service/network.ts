/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 23:25:03
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: api接口
 * @LastEditTime: 2021-12-10 20:03:15
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\service\network.ts
 */
import {axiosInstace}from './config'
import {AxiosPromise, AxiosResponse}from 'axios'
// export const signup = ():AxiosPromise => {
//   return axiosInstace.get('/team').then((res: AxiosResponse) => res.data)
// }

export interface EmailSignUp {
  user: string,
  email: string,
  pwd: string
}

export const postEmailSignUp = (param: EmailSignUp):AxiosPromise => {
  return axiosInstace.post('/rootsignup', param).then((res: any) => res.data)
}


//表单验证
export interface FormSignupJudge {
  key: string;
  value: string;
}

export const postFormSignUpJudge = (param: FormSignupJudge): AxiosPromise => {
  return axiosInstace.post('/signupjudge', param).then((res:any) => res.data)
}

// 发送邮箱验证码
export const postSendEmailVertifyCode = (email: string): AxiosPromise => {
  return axiosInstace.post('/sendemailvertifycode', email).then((res: any) => res.data)
}

// 邮箱验证码验证
export const postJudgeEmailVertifyCode = (vertifycode: string): AxiosPromise => {
  return axiosInstace.post('/signup/judgemailvertifycode', {vertifycode}).then((res: any) => res.data)
}