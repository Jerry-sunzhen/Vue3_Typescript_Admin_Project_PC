<template>
  <div class="main-nav">
    <div @click="changeFoldStatus" class="nav-icon">
      <i :class="isFolded ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <div class="nav-container">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
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
import { defineComponent } from "vue"

export default defineComponent({
  props: ["isFolded"],
  setup(props, { emit }) {
    function changeFoldStatus() {
      emit("update:isFolded", !props.isFolded)
    }

    return {
      changeFoldStatus
    }
  }
})
</script>

<style scoped lang="less">
.main-nav {
  line-height: 30px;
  border-bottom: 2px solid #545c64;
  display: flex;
  align-items: center;
  .nav-icon {
    font-size: 20px;
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
