import { AxiosPromise } from "axios"

export declare interface ILogin {
  usernameLogin: (username: string, password: string) => AxiosPromise
  getUserInfo: (id: string) => AxiosPromise
  getUserMenu: (id: string) => AxiosPromise
}
