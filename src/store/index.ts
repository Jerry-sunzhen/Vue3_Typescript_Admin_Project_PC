import { createStore } from "vuex"
import login from "./login/login"
// createStore函数接收一个泛型,该类型用来约束state
const store = createStore({
  state: () => ({}),
  modules: {
    login
  }
})

export default store
