import { RouteComponent } from "vue-router"

export default {
  name: "chat",
  path: "/main/story/chat",
  children: [],
  component: (): Promise<RouteComponent> =>
    import("@/views/main/story/chat/chat.vue")
}
