<template>
  <el-menu
    class="main-menu"
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    :collapse="isFolded"
    collapse-transition
    active-text-color="#ffd04b"
  >
    <el-submenu
      :index="`${menu.id}`"
      v-for="menu in userMenuList"
      :key="menu.id"
    >
      <template #title>
        <i :class="menu.icon"></i>
        <span style="margin-left: 10px">{{ menu.name }}</span>
      </template>
      <el-menu-item-group v-for="submenu in menu.children" :key="submenu.id">
        <el-menu-item
          :index="`${submenu.id}`"
          @click="menuItemClick(submenu.url)"
          >{{ submenu.name }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
`
<script lang="ts">
import { defineComponent, computed } from "vue"
// 组件中都不使用原生useStore,而是使用自定义的store/index.ts中的useStore函数
// import { useStore } from "vuex"
import { useStore } from "@/store"
import { useRouter } from "vue-router"
export default defineComponent({
  props: {
    isFolded: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    // 为了更好的约束store的类型,需要自定义一个useStore的hook将vuex中原生提供的useStore进行类型约束增强
    const store = useStore()
    const userMenuList = computed(() => store.state.login.userMenuList)
    const router = useRouter()
    function menuItemClick(url: string) {
      router.push(url)
    }
    return {
      userMenuList,
      menuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.main-menu {
  border: none;
}
</style>
