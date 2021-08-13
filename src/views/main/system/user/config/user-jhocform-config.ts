// 将user中使用JHocForm所需要的配置项抽取到该文件中

import { JHocFormConfig } from "@/views/main/system/user/config/types"

const userJHocFormConfig: JHocFormConfig = {
  formItems: [
    {
      type: "text",
      label: "username",
      placeholder: "请输入用户名"
    },
    {
      type: "password",
      label: "password",
      showPassword: true,
      placeholder: "请输入密码"
    },
    {
      type: "select",
      label: "friends",
      placeholder: "请选择好友",
      options: [
        {
          value: 1,
          label: "jerry"
        },
        {
          value: 2,
          label: "doris"
        }
      ]
    },
    {
      type: "date-picker",
      label: "time",
      startPlaceholder: "start",
      endPlaceholder: "end"
    }
  ],
  styleConfig: {
    padding: "22px 22px 0 0",
    backgroundColor: "#e9eef3",
    color: "#333",
    borderRadius: "5px"
  },
  responsiveConfig: {
    lg: 8
  }
}

export default userJHocFormConfig
