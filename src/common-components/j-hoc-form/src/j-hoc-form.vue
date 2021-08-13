<template>
  <el-form
    status-icon
    ref="ruleForm"
    :label-width="labelWidth"
    class="j-hoc-form"
    :style="styleConfig"
  >
    <slot name="header"></slot>
    <el-row>
      <template v-for="(item, index) in formItems" :key="index">
        <el-col v-bind="responsiveConfig">
          <el-form-item :label="item.label">
            <template v-if="item.type === 'text'">
              <el-input
                type="text"
                v-model="formData[`${item.label}`]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'password'">
              <el-input
                type="password"
                :show-password="item.showPassword"
                v-model="formData[`${item.label}`]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select v-model="formData[`${item.label}`]">
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
                v-model="formData[`${item.label}`]"
                type="date"
                :start-placeholder="item.startPlaceholder"
                :end-placeholder="item.endPlaceholder"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
    <slot name="footer"></slot>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import type { PropType } from "vue"
import type { IFormItem, IResponsiveAttr } from "../types"
// 封装一个通过的表单相关自定义组件,使用该组件时传入对应的配置即可快速生成常用的表单
// 使用类型断言和PropType给接收的props进行自定义类型限制
export default defineComponent({
  props: {
    modelValue: {
      type: Object
    },
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
  setup(props, { emit }) {
    // 对props中接收到的modelValue对象进行浅拷贝,对传入的数据生成一个新的引用,并赋予响应式
    const formData = ref({ ...props.modelValue })
    // 使用watch监听formData,当formData发生改变的时候需要发射时间修改父组件的formData
    // 注意:需要开启深度监听
    watch(
      formData,
      () => {
        emit("update:modelValue", formData.value)
      },
      {
        deep: true
      }
    )
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.j-hoc-form {
}
</style>
