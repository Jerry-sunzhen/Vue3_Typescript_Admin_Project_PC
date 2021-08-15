export interface ISystemState {
  usersList: IUserListItem[]
  usersTotalCount: number
  roleList: IRoleListItem[]
  roleTotalCount: number
}

// store中action接口
export interface IGetListPayLoad {
  offset: number
  size: number
  pageName: string
}

//------------------接口返回数据类型如下---------------
export interface IUserListItem {
  id: number
  name: string
  realname: string
  cellphone: any
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}

export interface IRoleListItem {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}
