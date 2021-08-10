// 此处在外部初始化component变量ts可以进行类型推导
const component = import("@/views/main/analysis/dashboard/dashboard.vue")

export default {
  name: "dashboard",
  path: "/main/analysis/dashboard",
  children: [],
  component
}
