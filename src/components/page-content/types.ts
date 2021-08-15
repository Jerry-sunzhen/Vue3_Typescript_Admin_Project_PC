import { ITablePropItem } from "@/common-components/j-table"

export interface IPageContentConfig {
  pageName: "users" | "role"
  title?: string
  propList: ITablePropItem[]
  tableColumnAlign?: string
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}
