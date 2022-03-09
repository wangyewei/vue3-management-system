/*
 * @Autor: YeWei Wang
 * @Date: 2021-12-14 18:00:20
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-17 14:38:11
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\components\k4Select\directives\foucs.ts
 */
export default {
  mounted: (el: HTMLElement) => {
    const kSelecotrInput: HTMLDivElement = el.querySelector('.input-field') as HTMLDivElement
    const kInput: HTMLInputElement = kSelecotrInput.querySelector('input') as HTMLInputElement,
      kPlaceholder: HTMLLabelElement = kSelecotrInput.querySelector('label') as HTMLLabelElement,
      KIcon: any = kSelecotrInput.querySelector('.arrow-icon'),
      KSelectorMenu: HTMLDivElement = el.querySelector('.selector-menu') as HTMLDivElement,
      kSelectorMenuItem: NodeList = KSelectorMenu.querySelectorAll('.menu-item')

    const selectorInitAnimate = (): Promise < void > => {
      return new Promise((resolve) => {
        kPlaceholder.style.visibility = 'hidden'
        kSelecotrInput.classList.add('input-filed-drop')
        KIcon.classList.add('arrow-drop')

        setTimeout(() => {
          resolve()
        }, 300)
      })
    }

    const selectorMenuInitAnimate = (): Promise < void > => {
      return new Promise((resolve) => {
        let height: number = 0
        kSelectorMenuItem.forEach(item => {
          height += ((item as HTMLDivElement).clientHeight + 14)
        })
        KSelectorMenu.style.height = height + 'px'
        resolve()
      })

    }

    const selectorBlurAnimate = (): Promise < void > => {
      return new Promise(resolve => {
        setTimeout(() => {
          KSelectorMenu.style.height = 0 + 'px'
          // KSelectorMenu.style.overflow = 'scroll'
        }, 100)
        setTimeout(() => {
          resolve()
        }, 300);
      })
    }

    const selectorMenuBlurAnimate = (): Promise < void > => {
      return new Promise(resolve => {
        kPlaceholder.style.visibility = 'visible'
        kSelecotrInput.classList.remove('input-filed-drop')
        KIcon.classList.remove('arrow-drop')
        resolve()
      })
    }


    kInput.addEventListener('focus', (): any => {
      selectorInitAnimate().then(() => {
        selectorMenuInitAnimate()
      })
    }, false)

    kInput.addEventListener('blur', (): void => {
      selectorBlurAnimate().then(() => {
        selectorMenuBlurAnimate()
      })
    })
  }
}