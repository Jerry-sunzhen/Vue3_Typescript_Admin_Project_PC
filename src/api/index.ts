// api 文件的统一出口

import JRequest from "@/api/request"
import { baseURL } from "./request/config"

const jRequest = new JRequest({
  baseURL,
  timeout: 5000,
  // 实例化的时候可以在config中直接传入拦截器函数
  interceptors: {
    // 实例级别的请求拦截器添加token
    requestInterceptor(config) {
      if (localStorage.token) {
        config.headers.Authorization = `Bearer ${localStorage.token}`
      }
      return config
    }
  }
})

export default jRequest
