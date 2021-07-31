import { AxiosRequestConfig, AxiosResponse } from "axios"

// 允许拦截器相关的代码也可以传入axios函数所需的config中,因此需要自定义接口
export declare interface JInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

// 对axios需要传入的config的类型进行扩展
export declare interface JRequestConfig extends AxiosRequestConfig {
  interceptors?: JInterceptors
  // 可以通过传入一个可选参数showLoading是否需要开启loading遮罩层
  showLoading?: boolean
}
