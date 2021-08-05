import type { Module } from "vuex"
import { ElMessage } from "element-plus"
import router from "@/router"

import api from "@/api"
import localCache from "@/utils/local-cache"
import type { ILoginState, IRootState } from "../types"

// Module类型接收两个泛型
// 第一个泛型为模块中state函数返回对象类型,第二个泛型为根模块中state返回对象的属性
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: {},
    userMenuList: []
  }),
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setUserMenuList(state, userMenuList) {
      state.userMenuList = userMenuList
    },
    resetLoginsState(state) {
      const token = localCache.getCache("token")
      if (token) {
        state.token = token
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        state.userInfo = userInfo
      }
      const userMenuList = localCache.getCache("userMenuList")
      if (userMenuList) {
        state.userMenuList = userMenuList
      }
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
      ctx.commit("resetLoginsState")
    }
  }
}

export default loginModule
