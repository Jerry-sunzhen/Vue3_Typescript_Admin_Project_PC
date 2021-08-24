// export * as user from "./user"

import jRequest from "@/api/request/j-request-instance"

// 获取用户列表
function getPageListByPageName(url: string, data: any) {
  return jRequest.post({
    url,
    data
  })
}

export { getPageListByPageName }
