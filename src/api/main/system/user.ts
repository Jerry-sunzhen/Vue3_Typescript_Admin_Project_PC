import jRequest from "@/api/request/j-request-instance"

// 获取用户列表
function getUserList(offset: number, size: number) {
  return jRequest.post({
    url: "/users/list",
    data: {
      offset,
      size
    }
  })
}

export { getUserList }
