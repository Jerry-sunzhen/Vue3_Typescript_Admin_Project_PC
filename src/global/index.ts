// 所有注册相关的代码都在该文件中进行注册
import { App } from "vue"
import registerElementPlus from "@/global/register-element-plus"
import mountDateFormat from "@/global/date-format"

// 在该函数中调用所有需要注册的相关函数
export function globalRegister(app: App): void {
  // 本质上是执行了registerElementPlus函数,并传入了app对象
  app.use(registerElementPlus)
  app.use(mountDateFormat)
}
