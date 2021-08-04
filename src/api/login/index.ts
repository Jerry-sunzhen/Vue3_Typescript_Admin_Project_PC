import jRequest from "@/api/request/j-request-instance"
import type { AxiosPromise } from "axios"

// 用户名登陆
function usernameLogin(name: string, password: string): AxiosPromise {
  return jRequest.post({
    url: "/login",
    data: {
      name,
      password
    }
  })
}

export { usernameLogin }
