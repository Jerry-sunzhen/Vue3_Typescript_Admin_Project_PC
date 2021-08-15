// 将user中使用PageSearch所需要的配置项抽取到该文件中
import { IPageSearchConfig } from "@/components/page-search/types"

const userPageSearchConfig: IPageSearchConfig = {
  formItemList: [
    {
      field: "username",
      type: "text",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      showPassword: true,
      placeholder: "请输入密码"
    },
    {
      field: "friends",
      type: "select",
      label: "朋友",
      placeholder: "请选择好友",
      options: [
        {
          label: "jerry",
          value: 1
        },
        {
          label: "doris",
          value: 2
        }
      ]
    },
    {
      field: "time",
      type: "date-picker",
      label: "搜索日期",
      startPlaceholder: "start",
      endPlaceholder: "end"
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
