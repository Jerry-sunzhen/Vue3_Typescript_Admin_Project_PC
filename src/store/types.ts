// 该文件用来定义store中所有模块中state的类型
// 如果需要在仓库中添加或删除state中的属性,需要到该文件中一并进行修改

import { ILoginState } from "@/store/login/types"

export declare interface IRootState {
  username?: string
}

export declare interface IRootStateModule {
  login: ILoginState
}

// 定义一个包含rootState中子模块与rootState中状态的交叉类型,作为useStore获取仓库的泛型
export declare type IStoreType = IRootState & IRootStateModule
