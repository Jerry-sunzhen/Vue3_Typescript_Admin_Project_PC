import type { App } from "vue"
import dayjs from "dayjs"

const BASE_PATTERN = "YYYY-MM-DD HH:mm:ss"

export default function mountDateFormat(app: App) {
  // 将日期格式化函数挂载到app上供全局组件使用
  app.config.globalProperties.$dateFormat = dateFormat

  function dateFormat(
    originTime: Date | string,
    pattern: string = BASE_PATTERN
  ) {
    return dayjs(originTime).format(pattern)
  }
}
