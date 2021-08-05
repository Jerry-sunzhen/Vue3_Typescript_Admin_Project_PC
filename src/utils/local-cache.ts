import jwt from "jsonwebtoken"
import KEY from "@/assets/keys/key"
import type { JwtPayload } from "jsonwebtoken"
// 该文件封装了本地化存储相关的代码,将所有存储方法封装到一个类中
// 在封装setCache和getCache方法的的时候,需要定义第三个变量isEncrypt是否将存储数据进行加密
class LocalCache {
  setCache(key: string, value: any, encoded?: boolean) {
    // encoded值为true就使用jwt进行加密
    if (encoded) {
      const encodeValue = jwt.sign({ [key]: value }, KEY, {
        algorithm: "HS512",
        expiresIn: 60 * 60 * 24
      })
      localStorage.setItem(key, encodeValue)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, encoded?: boolean): any {
    const value = localStorage.getItem(key)
    if (value) {
      if (encoded) {
        try {
          const decodeObj = jwt.verify(value, KEY, {
            algorithms: ["HS512"]
          }) as JwtPayload
          return decodeObj[key]
        } catch (e) {
          // 如果进入错误处理说明jwt验证token失败,清除localStorage中的token信息
          localStorage.removeItem(key)
          return ""
        }
      } else {
        return JSON.parse(value as string)
      }
    }
  }

  removeCache(key: string) {
    localStorage.removeItem(key)
  }
}

// 将封装好的类进行实例化后导出
export default new LocalCache()
