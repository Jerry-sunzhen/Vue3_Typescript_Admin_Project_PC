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

app.use(store)

// 每次刷新界面后恢复本地存储的数据到vuex中
useResetStore()
// 注意注册路由需要放在useResetStore之后,因为恢复store的时候会动态注册路由,
// 在此之前如果直接使用了app.use(router),那么会通过当前url去事先匹配路由,
// 由于动态注册的路由都还未注册,最终只能匹配到notFound,因此为了避免该bug,应当先调用useResetStore
app.use(router)

app.mount("#app")
