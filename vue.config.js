const path = require("path")

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("global", resolve("src/global"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("views", resolve("src/views"))
      .set("hooks", resolve("src/hooks"))
  },
  configureWebpack: {
    devServer: {
      hot: true,
      proxy: {
        "/dev-api": {
          target: "http://152.136.185.210:5000",
          changeOrigin: true,
          pathRewrite: {
            "^/dev-api": ""
          }
        }
      }
    }
  }
}
