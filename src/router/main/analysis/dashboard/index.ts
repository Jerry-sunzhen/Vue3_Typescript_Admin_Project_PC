import { RouteComponent } from "vue-router"

export default {
  name: "dashboard",
  path: "/main/analysis/dashboard",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/analysis/dashboard/dashboard.vue")
}
