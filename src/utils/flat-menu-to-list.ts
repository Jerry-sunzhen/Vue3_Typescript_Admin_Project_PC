import type { IUserMenu } from "@/store/login/types"
import { IUserAndSubMenu } from "@/store/login/types"
// 该工具函数负责从后台接口中提取出type为2,即对应具体路由组件的路由配置对象
export default function flatMenuToList(
  userMenu: IUserMenu[]
): IUserAndSubMenu[] {
  const flatMenuList: IUserAndSubMenu[] = []

  _recursiveFlatMenuToList(userMenu)

  function _recursiveFlatMenuToList(menu: any[]) {
    menu.forEach((item) => {
      flatMenuList.push(item)
      // 仅当type为1和type为2时才将该对象推送到flatMenuList中(一级菜单+二级菜单)
      if (item.type === 1 && item.children instanceof Array) {
        _recursiveFlatMenuToList(item.children)
      }
    })
  }
  return flatMenuList
}
