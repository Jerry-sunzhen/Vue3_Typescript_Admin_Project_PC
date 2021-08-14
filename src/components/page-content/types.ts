import { ITablePropItem } from "@/common-components/j-table"

export interface IPageContentConfig {
  title?: string
  propList: ITablePropItem[]
  tableColumnAlign?: string
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}
