/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-14 23:47:08
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-23 11:50:53
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\sign\assets\ts\types.ts
 */
// /*
//  * @Autor: YeWei Wang
//  * @Date: 2021-12-14 23:47:08
//  * @WeChat: Studio06k4
//  * @Motto: 求知若渴，虚心若愚
//  * @Description: 
//  * @LastEditTime: 2021-12-14 23:47:09
//  * @Version: vue3后台管理系统
//  * @FilePath: \vue3-management-system\src\pages\sign\assets\ts\types.ts
//  */
export interface Register {
  user: string;
  pwd: string;
  email: string;
  warnTag: boolean;
  userValid: number;
  pwdValid: number;
  emailValid: number;
  isLoading: boolean;
  step: number; // 注册进度
  countDown: number; // 倒计时
  emailVertifycode: string; // 邮箱验证码
  emailVertifyStatus: number; // 邮箱验证码状态
  name: string; // 姓名
  nameStatus: number; // 姓名合法状态
  sex: Array<number>; // 性别
  currsex: number; // 选中的性别
  checkNameValid: () => void; // 姓名合法校验
  formJudge: () => void;
  checkUserValid: () => void;
  checkEmailValid: () => void;
  checkPwdValid: () => void;
  backone: () => void;
  counterDown: () => void;
  emailVertifyCodeJudge: () => void; // 邮箱验证码验证
  emailVertifyCodeNext: () => void; // 邮箱验证码下一步
  checkSex: () => void; //选中性别的事件
}

export interface SignIn {
  user: string,
  pwd: string,
  userValid: number,
  pwdValid: number,
  isLoading: boolean,
  routerIsReady: boolean
}

