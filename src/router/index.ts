// 如果从包中引入的是类型,那么通常在import关键字之后添加type关键字,提示之后引入的都是类型
import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHistory } from "vue-router"
import localCache from "@/utils/local-cache"
import store from "store"
import { IStoreType } from "@/store/types"

const routes: RouteRecordRaw[] = [
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/main.vue"),
    // 注意: main路由下的main-menu菜单相关的子路由需要动态生成
    children: []
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/",
    redirect: "/main"
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 除了直接访问login界面,如果没有登陆,那么自动跳转到登陆界面,使用路由守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    } else if (to.path === "/main") {
      // 如果登陆成功状态直接访问根目录会首先被重定向到/main
      // 进入该逻辑分支并被再次重定向到flatUserMenuList中第一个对象中的url
      return (store.state as IStoreType).login.flatUserMenuList[0]?.url
    }
  }
})

export default router
