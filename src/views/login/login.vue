<template>
  <div class="login">
    <login-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginTable from "./cpns/login-table.vue"
export default defineComponent({
  components: {
    LoginTable
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("~assets/image/background.jpeg") center/100% 100%;
}
</style>
