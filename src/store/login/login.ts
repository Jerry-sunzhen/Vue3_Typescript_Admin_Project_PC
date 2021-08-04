import type { Module } from "vuex"
import type { ILoginState, IRootState } from "../types"
// Module类型接收两个泛型
// 第一个泛型为模块中state函数返回对象类型,第二个泛型为根模块中state返回对象的属性
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: {}
  }),
  getters: {},
  mutations: {},
  actions: {
    // usernameLogin() {}
  }
}

export default loginModule
