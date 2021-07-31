import { createRouter, createWebHistory } from "vue-router"

// 如果从包中引入的是类型,那么通常在import关键字之后添加type关键字,提示之后引入的都是类型
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () => import("views/main/main.vue")
  },
  {
    path: "/login",
    component: () => import("views/login/login.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
