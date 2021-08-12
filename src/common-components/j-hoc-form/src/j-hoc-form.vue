<template>
  <el-form
    status-icon
    ref="ruleForm"
    :label-width="labelWidth"
    class="j-hoc-form"
    :style="styleConfig"
  >
    <el-row>
      <template v-for="(item, index) in formItems" :key="index">
        <el-col v-bind="responsiveConfig">
          <el-form-item :label="item.label">
            <template v-if="item.type === 'text'">
              <el-input type="text"></el-input>
            </template>
            <template v-else-if="item.type === 'password'">
              <el-input
                type="password"
                :show-password="item.showPassword"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select v-model="selectsValue">
                <el-option
                  v-for="(option, index) in item.options"
                  :key="index"
                  :label="option.label"
                  :value="option.value"
                  >{{ option.label }}</el-option
                >
              </el-select>
            </template>
            <template v-else-if="item.type === 'date-picker'">
              <el-date-picker
                type="date"
                :start-placeholder="item.startPlaceholder"
                :end-placeholder="item.endPlaceholder"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import type { PropType } from "vue"
import type { IFormItem, IResponsiveAttr } from "../types"
// 封装一个通过的表单相关自定义组件,使用该组件时传入对应的配置即可快速生成常用的表单
// 使用类型断言和PropType给接收的props进行自定义类型限制
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    styleConfig: {
      type: Object
    },
    responsiveConfig: {
      type: Object as PropType<IResponsiveAttr>,
      default: () => ({
        xl: 4,
        lg: 6,
        md: 8,
        sm: 12,
        xs: 24
      })
    }
  },
  setup() {
    const selectsValue = ref<string | number>()

    return {
      selectsValue
    }
  }
})
</script>

<style scoped lang="less">
.j-hoc-form {
}
</style>
