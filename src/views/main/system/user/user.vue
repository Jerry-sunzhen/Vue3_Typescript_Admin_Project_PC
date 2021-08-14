<template>
  <div class="user-page">
    <page-search :page-search-config="userPageSearchConfig" />
    <page-content :page-content-config="userPageContentConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content"
import PageSearch from "@/components/page-search"

// 引入user中使用JHocForm相关的配置参数对象
import userPageSearchConfig from "@/views/main/system/user/config/user-page-search-config"
// 引入user中使用PageContent组件相关的配置参数
import userPageContentConfig from "@/views/main/system/user/config/user-page-content-config"
export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      userPageSearchConfig,
      userPageContentConfig
    }
  }
})
</script>

<style scoped lang="less">
.user-page {
}
</style>
