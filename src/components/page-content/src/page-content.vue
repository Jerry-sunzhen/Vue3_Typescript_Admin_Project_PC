<template>
  <div class="page-content">
    <j-table
      :table-data="tableData"
      :data-count="dataCount"
      v-model:page-info="pageInfo"
      class="table-section"
      v-bind="pageContentConfig"
    >
      <template #headerHandler>
        <el-button type="primary" size="mini">添加用户</el-button>
        <el-button icon="el-icon-refresh" size="mini"></el-button>
      </template>
      <template #enable="{ prop: { enable } }">
        <el-button
          :type="enable === 1 ? 'success' : 'danger'"
          :icon="enable === 1 ? 'el-icon-success' : 'el-icon-warning'"
          size="mini"
          plain
        ></el-button>
      </template>
      <template #operation>
        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
        <el-button type="primary" icon="el-icon-delete" size="mini"></el-button>
      </template>
      <template #createAt="{ prop }">
        {{ $dateFormat(prop.createAt) }}
      </template>
      <template #updateAt="{ prop }">
        {{ $dateFormat(prop.updateAt) }}
      </template>
    </j-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue"
import { useStore } from "@/store"
import { JTable } from "@/common-components"
import type { IFormData } from "@/components/page-search"
import type { IPageContentConfig } from "@/components/page-content"

export default defineComponent({
  props: {
    pageContentConfig: {
      type: Object as PropType<IPageContentConfig>,
      required: true
    }
  },
  components: {
    JTable
  },
  setup(props) {
    const pageName = ref(props.pageContentConfig.pageName)
    const store = useStore()

    const pageInfo = ref({
      currentPage: 1,
      pageSize: 5
    })

    function getPageListByPageName(data: IFormData = {}) {
      store.dispatch("system/getPageListByPageName", {
        pageName: pageName.value,
        offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
        size: pageInfo.value.pageSize,
        queryData: data
      })
    }
    watch(
      pageInfo,
      () => {
        getPageListByPageName()
      },
      {
        deep: true,
        immediate: true
      }
    )

    // 注意:此处读取仓库中的getter,需要使用computed函数进行包裹保证响应式
    // (options API中也需要在computed中对mapGetters进行解构)
    let tableData = computed(() =>
      store.getters["system/pageListData"](pageName.value)
    )
    let dataCount = computed(() =>
      store.getters["system/pageListCount"](pageName.value)
    )

    return {
      tableData,
      getPageListByPageName,
      pageInfo,
      dataCount
    }
  }
})
</script>

<style scoped lang="less"></style>
