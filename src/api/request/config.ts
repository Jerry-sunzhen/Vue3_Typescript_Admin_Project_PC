// 通过process.env.NODE_ENV可以区分项目的启动模式

// 在不同的模式下给baseURL赋值不同的地址
let baseURL: string

switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "http://152.136.185.210:8000/api/w6"
    break
  case "production":
    baseURL = "http://production.jerry.net"
    break
  case "test":
    baseURL = "http://test.jerry.net"
    break
}

export { baseURL }
