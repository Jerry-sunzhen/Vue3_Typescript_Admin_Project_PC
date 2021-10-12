<template>
  <div class="user-page">
    <page-search
      :page-search-config="userPageSearchConfig"
      @handleSearch="handleSearch"
      @handleReset="handleReset"
    />
    <page-content
      :page-content-config="userPageContentConfig"
      ref="pageContentRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content"
import PageSearch from "@/components/page-search"

// 引入user中使用JHocForm相关的配置参数对象
import userPageSearchConfig from "./config/user-page-search-config"
// pageSearch中相关事件的hook
import usePageSearchHandle from "@/hooks/use-page-search-handle"

// 引入user中使用PageContent组件相关的配置参数
import userPageContentConfig from "./config/user-page-content-config"

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const { handleReset, handleSearch, pageContentRef } = usePageSearchHandle()

    return {
      userPageSearchConfig,
      handleSearch,
      handleReset,
      pageContentRef,
      userPageContentConfig
    }
  }
})
</script>

<style scoped lang="less">
.user-page {
}
</style>
