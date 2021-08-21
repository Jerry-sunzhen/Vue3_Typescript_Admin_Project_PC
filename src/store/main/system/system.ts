import { Module } from "vuex"
import type { IRootState } from "@/store/types"
import type {
  ISystemState,
  IUserListItem,
  IRoleListItem,
  IGetListPayLoad
} from "@/store/main/system/types"

import api from "@/api"
import formatCapitalLetter from "@/utils/format-capital-letter"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersTotalCount: 0,
    roleList: [],
    roleTotalCount: 0
  }),
  getters: {
    // 使用函数柯里化,通过给getters传入具体的pageName获取不同的state信息
    // 在使用时候就无需调用各自的state,统一入口
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}TotalCount`]
      }
    }
  },
  mutations: {
    setUsersList(state, userList: IUserListItem[]) {
      state.usersList = userList
    },
    setUsersTotalCount(state, totalCount: number) {
      state.usersTotalCount = totalCount
    },
    setRoleList(state, userList: IRoleListItem[]) {
      state.roleList = userList
    },
    setRoleTotalCount(state, totalCount: number) {
      state.roleTotalCount = totalCount
    }
  },
  actions: {
    // 将所有获取页面列表信息的异步操作统一封装成一个action
    // 通过给payload对象传入不同的pageName来确定需要获取页面的名称并调用不同的mutation
    async getPageListByPageName(
      ctx,
      { pageName, offset, size }: IGetListPayLoad
    ) {
      const capitalPageName = formatCapitalLetter(pageName)

      const { data } = await api.main.system.getPageListByPageName(
        `/${pageName}/list`,
        {
          offset,
          size
        }
      )
      ctx.commit(`set${capitalPageName}List`, data.list)
      ctx.commit(`set${capitalPageName}TotalCount`, data.totalCount)
    }
  }
}

export default systemModule
