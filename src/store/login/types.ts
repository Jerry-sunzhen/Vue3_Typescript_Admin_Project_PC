export declare interface ILoginState {
  token: string
  userInfo: IUserInfo | Record<string, never>
  userMenuList: IUserMenu[] | []
  flatUserMenuList: IUserSubMenu[] | []
}

//----自动生成的接口
export interface IRole {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface IDepartment {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: IRole
  department: IDepartment
}

//----
export interface IUserBtnMenu {
  id: number
  url?: any
  name: string
  sort?: any
  type: number
  parentId: number
  permission: string
}

export interface IUserSubMenu {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children: IUserBtnMenu[] | null
  parentId: number
}

export interface IUserMenu {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: IUserSubMenu[]
}
