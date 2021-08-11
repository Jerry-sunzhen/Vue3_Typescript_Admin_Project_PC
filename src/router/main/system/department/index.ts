import { RouteComponent } from "vue-router"

export default {
  name: "department",
  path: "/main/system/department",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/system/department/department.vue")
}
