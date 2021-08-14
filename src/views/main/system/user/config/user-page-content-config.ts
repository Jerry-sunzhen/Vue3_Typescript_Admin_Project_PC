// 将user中使用PageContent所需要的配置项抽取到该文件中
import { IPageContentConfig } from "@/components/page-content"

const userPageContentConfig: IPageContentConfig = {
  title: "用户列表",
  propList: [
    { prop: "name", label: "用户名", minWidth: "50" },
    { prop: "realname", label: "真实姓名", minWidth: "75" },
    { prop: "cellphone", label: "手机号码", minWidth: "100" },
    { prop: "enable", label: "状态", minWidth: "50" },
    { prop: "createAt", label: "创建时间", minWidth: "150" },
    { prop: "updateAt", label: "更新时间", minWidth: "150" },
    { prop: "operation", label: "操作", minWidth: "100" }
  ],
  tableColumnAlign: "center",
  showIndexColumn: true,
  showSelectColumn: true
}

export default userPageContentConfig
