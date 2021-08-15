import { AxiosPromise } from "axios"

export interface ISystem {
  getPageListByPageName: (url: string, data: IPageListData) => AxiosPromise
  // user: IUser
}

// export interface IUser {
//
// }

export interface IPageListData {
  offset: number
  size: number
}
