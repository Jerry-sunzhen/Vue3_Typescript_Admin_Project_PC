// 将user中使用PageContent所需要的配置项抽取到该文件中
import { IPageContentConfig } from "@/components/page-content"

const rolePageContentConfig: IPageContentConfig = {
  pageName: "role",
  title: "角色列表",
  propList: [
    { prop: "name", label: "角色名称", minWidth: "100" },
    { prop: "intro", label: "角色权限", minWidth: "100" },
    { prop: "createAt", label: "创建时间", minWidth: "150" },
    { prop: "updateAt", label: "更新时间", minWidth: "150" },
    { prop: "operation", label: "操作", minWidth: "100" }
  ],
  tableColumnAlign: "center",
  showIndexColumn: true,
  showSelectColumn: true
}

export default rolePageContentConfig
