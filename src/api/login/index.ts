import jRequest from "@/api/request/j-request-instance"
import type { AxiosPromise } from "axios"

// 为了便于后续url的修改,将所有url统一写入一个枚举类型中
enum LoginUrl {
  usernameLogin = "/login",
  getUserInfo = "/users",
  getUserMenu = "/role"
}

// 用户名登陆
function usernameLogin(name: string, password: string): AxiosPromise {
  return jRequest.post({
    url: LoginUrl.usernameLogin,
    data: {
      name,
      password
    }
  })
}

// 将后续用户信息与用户列表的请求的loading动画进行关闭
function getUserInfo(uId: string): AxiosPromise {
  return jRequest.get({
    url: LoginUrl.getUserInfo + `/${uId}`,
    showLoading: false
  })
}
function getUserMenu(uId: string): AxiosPromise {
  return jRequest.get({
    url: LoginUrl.getUserMenu + `/${uId}/menu`,
    showLoading: false
  })
}

export { usernameLogin, getUserInfo, getUserMenu }
