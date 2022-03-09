/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-03 16:12:49
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description:icon
 * @LastEditTime: 2021-12-17 15:08:24
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\plugins\icon.ts
 */
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faKey, faUser, faEnvelope, faSun, faMoon, faCheckCircle, faTimesCircle, faSpinner, faSortDown, faVenusMars, faPenFancy, faIdBadge, faMousePointer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(faUser, faKey, faEnvelope, faSun, faMoon, faCheckCircle, faTimesCircle, faSpinner, faSortDown, faVenusMars, faPenFancy, faIdBadge, faMousePointer)
// config.autoAddCss = false
export { FontAwesomeIcon }





