// 在该文件中对axios进行二次封装,让项目请求于axios库进行解耦
// 对类、实例、实例方法三个层级进行拦截器的设置
import axios from "axios"
import type { AxiosInstance, AxiosPromise } from "axios"
import type { JInterceptors, JRequestConfig } from "./types"

import { ElLoading } from "element-plus"
import type { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

class JRequest {
  instance: AxiosInstance
  interceptors?: JInterceptors
  showLoading?: boolean
  loading?: ILoadingInstance

  // 在构造器中使用create函数创建axios实例
  constructor(config: JRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true // 默认开启loading界面

    // 在类中对实例化时传入的拦截器函数进行注册,作用于该实例
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 可以在类中定义拦截器,作用于全局请求
    this.instance.interceptors.request.use((config: JRequestConfig) => {
      // 如果在请求拦截器的config中传入了showLoading的值,则使用传入的值来确定是否需要开启loading遮罩层
      // 未传入,那么就使用JRequest实例上默认的showLoading
      if (config.showLoading ?? this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: "拼命加载中",
          spinner: "el-icon-loading",
          background: "rgba(0,0,0,.7)"
        })
      }

      return config
    })
    // 全局级别的响应拦截器中进行data的剥离
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      () => {
        // 产生错误时也需移除loading
        this.loading?.close()
      }
    )
  }

  // 还可以在request函数中单独定义拦截器,作用域实例的某个函数
  // 由于该函数返回一个带泛型的promise,因此在定义request函数时候需要定义一个泛型,供返回值使用
  request(config: JRequestConfig): AxiosPromise {
    if (config.interceptors?.requestInterceptor) {
      this.instance.interceptors.request.use(
        config.interceptors.requestInterceptor
      )
    }
    if (config.interceptors?.responseInterceptor) {
      this.instance.interceptors.response.use(
        config.interceptors.responseInterceptor
      )
    }

    // 由于axios返回的是一个AxiosPromise
    return this.instance(config)
  }

  get(config: JRequestConfig): AxiosPromise {
    return this.request({ ...config, method: "get" })
  }
  post(config: JRequestConfig): AxiosPromise {
    return this.request({ ...config, method: "post" })
  }
  put(config: JRequestConfig): AxiosPromise {
    return this.request({ ...config, method: "put" })
  }
  delete(config: JRequestConfig): AxiosPromise {
    return this.request({ ...config, method: "delete" })
  }
}

export default JRequest
