import type { IFormItem, IResponsiveAttr } from "@/common-components/j-hoc-form"

export interface JHocFormConfig {
  formItems?: IFormItem[]
  styleConfig?: any
  labelWidth?: string
  responsiveConfig?: IResponsiveAttr
}

export interface JTableConfig {
  propList: ITablePropItem[]
}

export interface ITablePropItem {
  prop?: string
  minWidth?: string | number
  label?: string
}
