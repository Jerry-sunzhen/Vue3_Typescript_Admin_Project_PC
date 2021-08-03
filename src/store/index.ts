import { createStore } from "vuex"
import login from "./login/login"
const store = createStore({
  state() {
    return {}
  },
  modules: {
    login
  }
})

export default store
