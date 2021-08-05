// 该文件用来定义store中所有模块中state的类型
// 如果需要在仓库中添加或删除state中的属性,需要到该文件中一并进行修改

export declare interface IRootState {
  username?: string
}

export declare interface ILoginState {
  token: string
  userInfo: any
  userMenuList: any[]
}
