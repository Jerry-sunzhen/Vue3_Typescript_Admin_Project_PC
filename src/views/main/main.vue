<template>
  <el-container class="main">
    <el-aside :width="isFolded ? '60px' : '180px'" class="main-aside">
      <div class="aside-title">
        <img src="~@/assets/image/logo.jpeg" class="aside-logo" alt="" />
        <h3 class="aside-word" v-show="!isFolded">Jerry CMS</h3>
      </div>
      <main-menu :isFolded="isFolded" />
    </el-aside>
    <el-container>
      <el-header>
        <main-nav v-model:isFolded="isFolded" />
      </el-header>
      <el-main class="main-router-view">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import MainMenu from "@/components/main-menu"
import MainNav from "@/components/main-nav"

export default defineComponent({
  components: {
    MainMenu,
    MainNav
  },
  setup() {
    const isFolded = ref(false)

    return {
      isFolded
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .main-aside {
    transition: 0.6s ease;
    background-color: #545c64;
    color: #fff;
    .aside-title {
      margin: 0 10px;
      height: 50px;
      display: flex;
      align-items: center;
      .aside-word {
        margin: 10px;
        min-width: 100px;
      }
      .aside-logo {
        height: 80%;
      }
    }
  }
  .main-router-view {
    background-color: #f2f6fc;
  }
}
</style>
