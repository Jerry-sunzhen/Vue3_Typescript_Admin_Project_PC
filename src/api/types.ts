// 该文件用来存放所有与请求模块相关的接口类型
import { AxiosPromise } from "axios"

export declare interface IApi {
  login: ILogin
}

export declare interface ILogin {
  usernameLogin: (username: string, password: string) => AxiosPromise
}
