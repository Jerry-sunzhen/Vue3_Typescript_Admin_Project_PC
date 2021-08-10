<template>
  <div class="main-nav">
    <div @click="changeFoldStatus">
      <i
        class="nav-icon"
        :class="isFolded ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      ></i>
      <i class="nav-icon" v-show="!isFolded"></i>
    </div>
    <div>面包屑导航区域</div>
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
  .nav-icon {
    font-size: 20px;
  }
}
</style>
