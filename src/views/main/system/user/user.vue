<template>
  <div>
    <h2>User</h2>
    <j-hoc-form v-bind="userJHocFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { JHocForm } from "@/common-components"

// 引入user中使用JHocForm相关的配置参数对象
import userJHocFormConfig from "@/views/main/system/user/config/user-jhocform-config"
export default defineComponent({
  components: {
    JHocForm
  },
  setup() {
    return {
      userJHocFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
