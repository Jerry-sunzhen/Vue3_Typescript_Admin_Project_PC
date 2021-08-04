// 通过process.env.NODE_ENV可以区分项目的启动模式

// 在不同的模式下给baseURL赋值不同的地址
let baseURL: string

switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "/dev-api"
    break
  case "production":
    baseURL = "/prod-api"
    break
  case "test":
    baseURL = "/test-api"
    break
}

export { baseURL }
