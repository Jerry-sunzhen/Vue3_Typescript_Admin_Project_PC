export interface ISystemState {
  userList: IUserListItem[] | []
  userTotalCount: number
}

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
