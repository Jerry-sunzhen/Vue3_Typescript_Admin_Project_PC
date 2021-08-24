// 将user中使用PageSearch所需要的配置项抽取到该文件中
import { IPageSearchConfig } from "@/components/page-search/types"

const userPageSearchConfig: IPageSearchConfig = {
  formItemList: [
    {
      label: "用户名",
      field: "name",
      type: "text",
      placeholder: "请输入用户名"
    },
    {
      label: "真实姓名",
      field: "realname",
      type: "password",
      placeholder: "请输入密码",
      showPassword: true
    },
    {
      field: "cellphone",
      type: "text",
      label: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      field: "enable",
      type: "select",
      label: "搜索日期",
      options: [
        {
          value: 0,
          label: "可用"
        },
        {
          value: 1,
          label: "禁用"
        }
      ]
    },
    {
      label: "创建时间",
      field: "createAt",
      type: "date-picker",
      startPlaceholder: "请输入开始日期",
      endPlaceholder: "请输入结束日期"
    }
  ],
  styleConfig: {
    padding: "22px 22px 10px 0",
    color: "#333",
    backgroundColor: "#fff",
    borderRadius: "5px"
  },
  responsiveConfig: {
    lg: 8,
    md: 12,
    sm: 24
  }
}

export default userPageSearchConfig
