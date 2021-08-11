import { RouteComponent } from "vue-router"

export default {
  name: "category",
  path: "/main/product/category",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/product/category/category.vue")
}
