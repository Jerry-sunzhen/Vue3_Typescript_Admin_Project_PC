import { RouteComponent } from "vue-router"

export default {
  name: "overview",
  path: "/main/analysis/overview",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/analysis/overview/overview.vue")
}
