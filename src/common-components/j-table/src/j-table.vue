<template>
  <el-table class="j-table" :data="tableData" style="width: 100%" border>
    <el-table-column type="index"> </el-table-column>
    <template v-for="(item, index) in propList" :key="index">
      <el-table-column :label="item.label" :min-width="item.minWidth">
        <template v-slot="{ row }">
          <slot :name="item.prop">{{ row[item.prop] }}</slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PropType } from "vue"
import { IUserListItem } from "@/store/main/system/types"

export default defineComponent({
  props: {
    tableData: {
      type: Array as PropType<IUserListItem[]>
    },
    propList: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
