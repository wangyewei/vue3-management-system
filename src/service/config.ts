
/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 23:24:26
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-09 16:31:39
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\service\config.ts
 */

import axios, { AxiosInstance } from 'axios'
import { BASED_APIURL } from './BASE_URL'
export const axiosInstace: AxiosInstance = axios.create({
  baseURL: BASED_APIURL,
})
