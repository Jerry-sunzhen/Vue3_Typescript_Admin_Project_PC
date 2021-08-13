import * as login from "./login"
import * as main from "./main"
import type { IApi } from "./types"

const api: IApi = {
  login,
  main
}

export default api
