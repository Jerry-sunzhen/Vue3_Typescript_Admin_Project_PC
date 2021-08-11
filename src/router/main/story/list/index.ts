import { RouteComponent } from "vue-router"

export default {
  name: "list",
  path: "/main/story/list",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/story/list/list.vue")
}
