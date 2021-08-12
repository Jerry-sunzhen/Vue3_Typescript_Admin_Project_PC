import type { Module } from "vuex"
import { ElMessage } from "element-plus"
import router from "@/router"

import api from "@/api"
import localCache from "@/utils/local-cache"
import type { IRootState } from "../types"
import type { ILoginState, IUserInfo, IUserMenu } from "@/store/login/types"
import mapMenuToRoutes from "@/utils/map-menu-to-routes"
import flatMenuToList from "@/utils/flat-menu-to-list"

// Module类型接收两个泛型
// 第一个泛型为模块中state函数返回对象类型,第二个泛型为根模块中state返回对象的属性
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: {},
    userMenuList: [],
    flatUserMenuList: []
  }),
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo
    },
    // 当调用setUserMenuList的mutation的同时,将userMenuList对应的路由表映射出来并进行注册
    setUserMenuList(state, userMenuList: IUserMenu[]) {
      state.userMenuList = userMenuList

      // 动态生成userMenu映射成的routes数组,并进行遍历动态注册到main路由中
      const routes = mapMenuToRoutes(userMenuList)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 通过引入工具函数获取到接口返回数据中路由组件对应的对象组成的一维数组并放入login对应的仓库中
      state.flatUserMenuList = flatMenuToList(userMenuList)
    }
  },
  actions: {
    // 通过用户名登陆
    async usernameLogin(ctx, { username, password }) {
      try {
        const result = await api.login.usernameLogin(username, password)
        // 登陆成功后将token存入本地和vuex中
        ctx.commit("setToken", result.data.token)
        localCache.setCache("token", result.data.token)
        ElMessage.success("登陆成功")
        // 登陆成功后请求用户基本信息
        const userInfo = await api.login.getUserInfo(result.data.id)
        ctx.commit("setUserInfo", userInfo.data)
        localCache.setCache("userInfo", userInfo.data)

        // 请求用户菜单信息
        const userMenu = await api.login.getUserMenu(result.data.id)
        ctx.commit("setUserMenuList", userMenu.data)
        localCache.setCache("userMenuList", userMenu.data)

        // 所有请求都发送完毕后跳转到首页
        await router.replace("/main")
      } catch (error) {
        // 如果登陆出错,清空本地与仓库中的token值
        ctx.commit("setToken", "")
        ctx.commit("setUserInfo", {})
        ctx.commit("setUserMenuList", [])
        localCache.removeCache("token")
        ElMessage.error(error.message)
      }
    },

    // 刷新页面后初始化仓库
    resetLoginsState(ctx) {
      const token = localCache.getCache("token")
      if (token) {
        ctx.commit("setToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        ctx.commit("setUserInfo", userInfo)
      }
      const userMenuList = localCache.getCache("userMenuList")
      if (userMenuList) {
        ctx.commit("setUserMenuList", userMenuList)
      }
    }
  }
}

export default loginModule
