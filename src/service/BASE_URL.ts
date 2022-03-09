/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 23:20:16
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: base api url
 * @LastEditTime: 2022-03-09 19:38:55
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\service\BASE_URL.ts
 */

const BASED_APIURL = process.env.NODE_ENV === 'development' ? 'http://10.40.34.214:3005' : 'https://api.06k4.com'

export { BASED_APIURL }
