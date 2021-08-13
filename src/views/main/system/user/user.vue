<template>
  <div>
    <j-hoc-form v-bind="userJHocFormConfig" v-model="formData">
      <template #header>
        <p class="form-header">检索表</p>
      </template>
      <template #footer>
        <div class="form-footer">
          <el-button type="info" icon="el-icon-refresh-right">重置</el-button>
          <el-button type="primary" @click="search" icon="el-icon-search"
            >搜索</el-button
          >
        </div>
      </template>
    </j-hoc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { JHocForm } from "@/common-components"

// 引入user中使用JHocForm相关的配置参数对象
import userJHocFormConfig from "@/views/main/system/user/config/user-jhocform-config"
export default defineComponent({
  components: {
    JHocForm
  },
  setup() {
    const formData = ref({
      username: "",
      password: "",
      friends: "",
      time: ""
    })

    function search() {
      console.log("!!!")
    }

    return {
      formData,
      userJHocFormConfig,
      search
    }
  }
})
</script>

<style scoped lang="less">
.form-header {
  height: 20px;
  text-align: center;
  font-size: 20px;
}
.form-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
