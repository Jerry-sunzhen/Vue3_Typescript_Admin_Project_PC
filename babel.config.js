module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // 当引用element-plus中的组件时,自动引用样式
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ]
}
