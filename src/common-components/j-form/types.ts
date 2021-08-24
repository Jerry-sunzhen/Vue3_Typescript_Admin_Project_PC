//----表单元素类型相关
export type IFormItem = IBaseFormItem &
  (
    | IFormTextItem
    | IFormPasswordItem
    | IFormNumberItem
    | IFormSelectItem
    | IFormDataPicker
  )

export interface IBaseFormItem {
  // 绑定数据对应的字段名
  field: string
  // 显示在界面的名称
  label?: string
  placeholder?: string
}

export interface IFormTextItem {
  type: "text"
}

export interface IFormPasswordItem {
  type: "password"
  showPassword?: boolean
}

export interface IFormNumberItem {
  type: "number"
}

export interface IFormSelectItem {
  type: "select"
  options?: IFormOption[]
}
export interface IFormOption {
  label?: string | number
  value?: string | number
}

export interface IFormDataPicker {
  type: "date-picker"
  format?: DateFormatTye
  valueFormat?: DateFormatTye
  startPlaceholder?: string
  endPlaceholder?: string
}
type DateFormatTye = "DD/MM/YYYY" | "YYYY-MM-DD" | "YY-MM-DD HH:mm:ss"

// ---- 表单响应式数据对象类型
export declare interface IResponsiveAttr {
  span?: number
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
}
