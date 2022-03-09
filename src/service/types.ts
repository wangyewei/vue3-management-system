/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-14 23:49:03
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 网络层类型
 * @LastEditTime: 2021-12-21 20:34:07
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\service\types.ts
 */

export interface FormSignupJudge {
  key: string;
  value: string;
}

export interface SendMailVertifyCode {
  email: string,
  user: string,
}

export interface BuildUser {
  user: string,
  email: string,
  pwd: string,
  sex: number,
  title: string,
  name: string
}
export interface SignIn {
  user: string;
  pwd: string
}