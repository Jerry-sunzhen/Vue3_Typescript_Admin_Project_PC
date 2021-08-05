import { createApp } from "vue"
import App from "./App.vue"
import router from "router"
import store from "store"
// 引入注册函数
import { globalRegister } from "global"

import useResetStore from "@/hooks/use-reset-store"

// 注意: 配置了按需引入element-plus之后还是需要引入基础样式
import "element-plus/lib/theme-chalk/base.css"

// 引入重置样式normalize.css
import "./assets/css/normalize.css"

const app = createApp(App)

app.use(globalRegister)

app.use(router)
app.use(store)

// 每次刷新界面后恢复本地存储的数据到vuex中
useResetStore()

app.mount("#app")
