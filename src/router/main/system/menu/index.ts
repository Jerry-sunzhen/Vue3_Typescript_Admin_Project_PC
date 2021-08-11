import { RouteComponent } from "vue-router"

export default {
  name: "menu",
  path: "/main/system/menu",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/system/menu/menu.vue")
}
