<template>
  <div class="role-page">
    <page-content :page-content-config="rolePageContentConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content"
import rolePageContentConfig from "./config/role-page-content-config"

export default defineComponent({
  components: {
    PageContent
  },
  setup() {
    return {
      rolePageContentConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
