import { Module } from "vuex"
import type { IRootState } from "@/store/types"
import type { ISystemState, IUserListItem } from "@/store/main/system/types"

import api from "@/api"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => ({
    userList: [],
    userTotalCount: 0
  }),
  mutations: {
    setUserList(state, userList: IUserListItem[]) {
      state.userList = userList
    },
    setUserTotalCount(state, totalCount) {
      state.userTotalCount = totalCount
    }
  },
  actions: {
    async getUserList(
      ctx,
      { offset, limit }: { offset: number; limit: number }
    ) {
      const { data } = await api.main.system.user.getUserList(offset, limit)
      ctx.commit("setUserList", data.list)
      ctx.commit("setUserTotalCount", data.totalCount)
    }
  }
}

export default systemModule
