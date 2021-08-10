import { createStore, Store, useStore as baseUseStore } from "vuex"
import login from "./login/login"
import { IRootState, IStoreType } from "@/store/types"
// createStore函数接收一个泛型,该类型用来约束state
const store = createStore<IRootState>({
  state: () => ({}),
  modules: {
    login
  }
})

// 自定义一个useStore用来对原生的vuex中useStore进行拓展,添加对子模块的类型支持
// 需要去类型文件中对rootState的类型进行扩展,生成一个新类型
export function useStore(): Store<IStoreType> {
  return baseUseStore<IStoreType>()
}

export default store
