<template>
  <div class="j-table">
    <slot name="header" :title="title">
      <div class="j-table-header">
        <div class="header-title">
          {{ title }}
        </div>
        <div class="header-handler">
          <slot name="headerHandler"></slot>
        </div>
      </div>
    </slot>

    <el-table
      class="j-table-content"
      :data="tableData"
      style="width: 100%"
      border
      @selection-change="selectionChange"
    >
      <el-table-column type="selection" v-if="showSelectColumn">
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        v-if="showIndexColumn"
        width="50"
        align="center"
      >
      </el-table-column>
      <template v-for="(item, index) in propList" :key="index">
        <el-table-column
          :label="item.label"
          :min-width="item.minWidth"
          :align="tableColumnAlign"
        >
          <!--在el-table-column中通过使用默认作用域插槽获取到列表中每一行的所有信息-->
          <!--可以在其中继续嵌套一个具名作用域插槽并设置默认值-->
          <!--注意给具名作用域插槽返回的prop参数一定要是row,后续涉及请求时会需要获取对象的完整参数信息-->
          <template #default="{ row }">
            <slot :name="item.prop" :prop="row">{{ row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="j-table-footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageInfo.currentPage"
          :page-sizes="[5, 10, 15, 25, 50]"
          :page-size="pageInfo.pageSize"
          layout="prev, pager, next, jumper, ->,sizes,total"
          :total="dataCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PropType } from "vue"
import { IUserListItem } from "@/store/main/system/types"
import { ITablePropItem } from "@/common-components/j-table"

export default defineComponent({
  emits: ["selectChange", "update:page-info"],
  props: {
    title: {
      type: String
    },
    tableData: {
      type: Array as PropType<IUserListItem[]>
    },
    dataCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array as PropType<ITablePropItem[]>,
      default: () => []
    },
    tableColumnAlign: {
      type: String,
      default: "center"
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    pageInfo: {
      type: Object,
      default: () => ({
        currentPage: 1,
        pageSize: 10
      })
    }
  },
  setup(prop, { emit }) {
    function selectionChange(chosenList: any[]) {
      console.log(chosenList)
      emit("selectChange", chosenList)
    }

    function handleSizeChange(pageSize: number) {
      emit("update:page-info", {
        ...prop.pageInfo,
        pageSize
      })
    }
    function handleCurrentChange(currentPage: number) {
      emit("update:page-info", {
        ...prop.pageInfo,
        currentPage
      })
    }
    return {
      selectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.j-table {
  padding: 10px;
  background-color: #fff;
  .j-table-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .header-title {
      flex: 1;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .j-table-footer {
    text-align: center;
  }
}
</style>
