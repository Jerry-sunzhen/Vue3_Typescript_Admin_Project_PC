import { IFormItem, IResponsiveAttr } from "@/common-components/j-form"

export interface IPageSearchConfig {
  formItemList?: IFormItem[]
  styleConfig?: any
  labelWidth?: string
  responsiveConfig?: IResponsiveAttr
}

export interface IFormData {
  [index: string]: string
}
