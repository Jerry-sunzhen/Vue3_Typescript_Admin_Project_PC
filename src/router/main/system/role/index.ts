import { RouteComponent } from "vue-router"

export default {
  name: "role",
  path: "/main/system/role",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/system/role/role.vue")
}
