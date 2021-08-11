import { RouteComponent } from "vue-router"

export default {
  name: "goods",
  path: "/main/product/goods",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/product/goods/goods.vue")
}
