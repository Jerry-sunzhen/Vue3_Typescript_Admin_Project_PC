import { AxiosPromise } from "axios"

export interface ISystem {
  user: IUser
}

export interface IUser {
  getUserList: (offset: number, limit: number) => AxiosPromise
}
