import type { IUserMenu, IUserSubMenu } from "@/store/login/types"
// 该工具函数负责从后台接口中提取出type为2,即对应具体路由组件的路由配置对象
export default function flatMenuToList(userMenu: IUserMenu[]): IUserSubMenu[] {
  const flatMenuList: any[] = []

  _recursiveFlatMenuToList(userMenu)

  function _recursiveFlatMenuToList(menu: any[]) {
    menu.forEach((item) => {
      if (item.type === 2) {
        // 去完整路由表中寻找满足该useMenuItem的路由,并塞入userRoutes数组中
        flatMenuList.push(item)
      } else if (item.type === 1) {
        // 如果menu中对象的type值为1,则说明该对象没有对应的路由,该组件的children有对应的路由,那么进行递归遍历
        _recursiveFlatMenuToList(item.children)
      }
    })
  }

  return flatMenuList
}
