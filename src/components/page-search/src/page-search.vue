<template>
  <div class="page-search">
    <j-form v-bind="pageSearchConfig" v-model="formData">
      <template #header>
        <div class="form-header">检索表</div>
      </template>
      <template #footer>
        <div class="form-footer">
          <el-button type="info" icon="el-icon-refresh-right" size="mini"
            >重置</el-button
          >
          <el-button type="primary" icon="el-icon-search" size="mini"
            >搜索</el-button
          >
        </div>
      </template>
    </j-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import type { IPageSearchConfig } from "@/components/page-search"
import JForm from "@/common-components/j-form"

export default defineComponent({
  props: {
    pageSearchConfig: {
      type: Object as PropType<IPageSearchConfig>
    }
  },
  components: {
    JForm
  },
  setup(props) {
    // 传入j-form的表单数据需要根据pageSearchConfig中的每一个formItem的field字段动态生成
    const formDataObj: { [index: string]: string } = {}
    for (let formItem of props.pageSearchConfig?.formItemList || []) {
      formDataObj[formItem.field] = ""
    }
    const formData = ref(formDataObj)
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.page-search {
  .form-header {
    height: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
  }
  .form-footer {
    display: flex;
    justify-content: flex-end;
  }
  .table-section {
    margin-top: 20px;
  }
}
</style>
