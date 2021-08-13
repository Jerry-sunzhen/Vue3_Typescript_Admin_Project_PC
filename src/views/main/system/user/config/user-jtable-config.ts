import { JTableConfig } from "@/views/main/system/user/config/types"

const userJTableConfig: JTableConfig = {
  propList: [
    { prop: "name", label: "用户名", minWidth: "50" },
    { prop: "realname", label: "真实姓名", minWidth: "75" },
    { prop: "cellphone", label: "手机号码", minWidth: "100" },
    { prop: "enable", label: "状态", minWidth: "50" },
    { prop: "createAt", label: "创建时间", minWidth: "150" },
    { prop: "updateAt", label: "更新时间", minWidth: "150" },
    { prop: "operation", label: "操作", minWidth: "100" }
  ]
}

export default userJTableConfig
