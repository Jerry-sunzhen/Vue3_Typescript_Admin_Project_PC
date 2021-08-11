import { RouteComponent } from "vue-router"

export default {
  name: "user",
  path: "/main/system/user",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/system/user/user.vue")
}
