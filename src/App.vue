<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
