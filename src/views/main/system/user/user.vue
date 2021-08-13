<template>
  <div class="user-page">
    <j-hoc-form v-bind="userJHocFormConfig" v-model="formData">
      <template #header>
        <div class="form-header">检索表</div>
      </template>
      <template #footer>
        <div class="form-footer">
          <el-button type="info" icon="el-icon-refresh-right">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </j-hoc-form>

    <j-table
      :table-data="tableData"
      v-bind="userJTableConfig"
      class="table-section"
    >
      <template #operation>
        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
        <el-button type="primary" icon="el-icon-delete" size="mini"></el-button>
      </template>
    </j-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { JHocForm, JTable } from "@/common-components"
import { useStore } from "@/store"

// 引入user中使用JHocForm相关的配置参数对象
import userJHocFormConfig from "@/views/main/system/user/config/user-jhocform-config"
import userJTableConfig from "@/views/main/system/user/config/user-jtable-config"
export default defineComponent({
  components: {
    JHocForm,
    JTable
  },
  setup() {
    const formData = ref({
      username: "",
      password: "",
      friends: "",
      time: ""
    })

    const store = useStore()
    store.dispatch("system/getUserList", { offset: 0, limit: 10 })

    // 注意:此处读取仓库中的属性,需要使用computed函数进行包裹保证响应式(options API中也需要在computed中使用)
    const tableData = computed(() => store.state.system.userList)

    return {
      formData,
      userJHocFormConfig,
      tableData,
      userJTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.user-page {
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
    text-align: center;
  }
}
</style>
