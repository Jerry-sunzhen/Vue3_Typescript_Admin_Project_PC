<template>
  <div class="main-nav">
    <div @click="changeFoldStatus" class="nav-icon">
      <i :class="isFolded ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
    <div class="nav-container">
      <div class="breadcrumb">
        <j-breadcrumb :breadcrumb-list="breadcrumbList" />
      </div>
      <div class="nav-bar">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-s-home" @click="skipToMain"
                >返回首页</el-dropdown-item
              >

              <el-dropdown-item icon="el-icon-error" @click="logout"
                >退出登陆</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "@/store"
import { JBreadcrumb } from "@/common-components"
import mapRouteToBreadcrumbList from "@/utils/map-route-to-breadcrumb-list"
export default defineComponent({
  props: ["isFolded"],
  components: {
    JBreadcrumb
  },
  setup(props, { emit }) {
    function changeFoldStatus() {
      emit("update:isFolded", !props.isFolded)
    }

    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // 计算需要显示的面包屑导航对应的数组
    const breadcrumbList = computed(() =>
      mapRouteToBreadcrumbList(route.path, store.state.login.flatUserMenuList)
    )
    function skipToMain() {
      router.replace("/")
    }

    // 退出登陆
    async function logout() {
      await store.dispatch("login/logout")
      await router.replace("/login")
    }

    return {
      changeFoldStatus,
      skipToMain,
      logout,
      breadcrumbList
    }
  }
})
</script>

<style scoped lang="less">
.main-nav {
  line-height: 30px;
  border-bottom: 2px solid #545c64;
  background-color: #fff;
  display: flex;
  align-items: center;
  z-index: 10;
  position: relative;
  .nav-icon {
    font-size: 30px;
  }
  .nav-container {
    margin-left: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .breadcrumb {
    }
  }
}
</style>
