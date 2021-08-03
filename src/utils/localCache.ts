// 该文件封装了本地化存储相关的代码,将所有存储方法封装到一个类中
// 在封装setCache和getCache方法的的时候,需要定义第三个变量isEncrypt是否将存储数据进行加密
class LocalCache {
  setCache(key: string, value: any, isEncrypt?: boolean) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string, isEncrypt = false): undefined | string {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    localStorage.removeItem(key)
  }
}

// 将封装好的类进行实例化后导出
export default new LocalCache()
