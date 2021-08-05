// 该文件用来确保页面刷新后,保存在本地的数据能够同步到Vuex中
import store from "store"

export default function useResetStore(): void {
  store.dispatch("login/resetLoginsState")
}
