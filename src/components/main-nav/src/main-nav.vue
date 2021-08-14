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
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >狮子头</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >螺蛳粉</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check"
                >蚵仔煎</el-dropdown-item
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
import { useRoute } from "vue-router"
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
    const store = useStore()
    const breadcrumbList = computed(() =>
      mapRouteToBreadcrumbList(route.path, store.state.login.flatUserMenuList)
    )

    return {
      changeFoldStatus,
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
