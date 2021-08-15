// export * as user from "./user"

import jRequest from "@/api/request/j-request-instance"

// 获取用户列表
function getPageListByPageName(
  url: string,
  data: { offset: number; size: number }
) {
  return jRequest.post({
    url,
    data: {
      offset: data.offset,
      size: data.size
    }
  })
}

export { getPageListByPageName }
