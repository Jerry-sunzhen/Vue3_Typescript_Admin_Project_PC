// 该函数接收一个路由地址,返回与路由地址相匹配的面包屑名称和url对象组成的breadcrumbList
import type { IBreadcrumbItem } from "@/common-components/j-breadcrumb/types"

export default function mapRouteToBreadcrumbList(
  routePath: string,
  menuList: any[]
): IBreadcrumbItem[] {
  const breadcrumbList: IBreadcrumbItem[] = []
  const breadcrumbItem = menuList.find((item) => item.url === routePath)

  breadcrumbList.unshift({
    name: breadcrumbItem.name,
    url: breadcrumbItem.url
  })

  _recursiveGetBreadcrumbItem(breadcrumbItem.parentId)

  function _recursiveGetBreadcrumbItem(parentId: string) {
    const parentItem = menuList.find((item) => item.id === parentId)
    if (parentItem) {
      breadcrumbList.unshift({
        name: parentItem.name
      })
      if (parentItem.parentId) {
        _recursiveGetBreadcrumbItem(parentItem.parentId)
      }
    }
  }

  return breadcrumbList
}
