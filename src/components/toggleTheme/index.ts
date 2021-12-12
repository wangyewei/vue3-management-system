/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-06 16:52:25
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-06 23:16:19
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\components\toggleTheme\index.ts
 */
import { reactive } from "vue"
interface themeGen {
  isDark: string,
  toggleTheme: () => void;
}


const theme = reactive<themeGen>({
  isDark: 'moon',
  toggleTheme: ():void => {
    theme.isDark == 'moon' ? theme.isDark = 'sun' : theme.isDark = 'moon'
    localStorage.setItem('selected-theme', theme.isDark)
    document.body.classList.toggle('dark-theme')
  }
})


export { theme }