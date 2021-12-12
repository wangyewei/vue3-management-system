/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 23:20:16
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-06 23:35:59
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\api\BASE_URL.ts
 */

let BASED_APIURL: string

process.env.NODE_ENV === 'development' ? BASED_APIURL = 'http://192.168.146.1:3005' : BASED_APIURL = 'https://api.06k4.com'

export { BASED_APIURL }
