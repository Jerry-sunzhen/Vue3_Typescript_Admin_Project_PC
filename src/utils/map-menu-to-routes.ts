// 该工具函数负责将接收到的权限菜单对象映射成对应的路由对象

import type { RouteRecordRaw } from "vue-router"
import type { IUserMenu } from "@/store/login/types"

export default function mapMenuToRoutes(
  userMenu: IUserMenu[]
): RouteRecordRaw[] {
  const userRoutes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []

  const routeFilePathList = require
    // 获取某文件夹中所有满足filter要求的文件,并开启了deep递归查找
    .context("../router/main", true, /\.ts(x)?$/)
  // 获取满足文件的相对路径
  // 使用webpack提供的require函数时需要注意,不能直接给require传入一个变量,否则webpack无法识别该路径
  routeFilePathList.keys().forEach((item) => {
    const route = require("../router/main" + item.split(".")[1]).default
    // 将所有路由对应的route对象存放到allRoutes数组中
    allRoutes.push(route)
  })

  // 当userMenu中对象的type值为2时,说明该路由对应一个组件,需要从之前生成好的allRoutes中获取对应组件
  // 需要定义一个内部函数,用来递归调用获取userMenu中所有的路由相关对象
  function _recursiveGetRoute(menu: any[]) {
    menu.forEach((item) => {
      if (item.type === 2) {
        // 去完整路由表中寻找满足该useMenuItem的路由,并塞入userRoutes数组中
        const route = allRoutes.find((route) => route.path === item.url)
        if (route) {
          userRoutes.push(route)
        }
      } else if (item.type === 1) {
        // 如果menu中对象的type值为1,则说明该对象没有对应的路由,该组件的children有对应的路由,那么进行递归遍历
        _recursiveGetRoute(item.children)
      }
    })
  }

  _recursiveGetRoute(userMenu)

  return userRoutes
}
