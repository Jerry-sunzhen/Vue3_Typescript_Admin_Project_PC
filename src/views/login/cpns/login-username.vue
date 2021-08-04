<template>
  <div>
    <el-form :model="userInfo" :rules="userRules" ref="userFormRef">
      <el-form-item label="用户名" label-width="70px" prop="username">
        <el-input v-model="userInfo.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" label-width="70px" prop="password">
        <el-input
          v-model="userInfo.password"
          type="password"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"
// 引入用户名密码登陆所需满足的规则
import userRules from "../config/userRules"
import localCache from "@/utils/local-cache"
import api from "@/api"

export default defineComponent({
  setup() {
    // 初始化userInfo属性的时候优先从本地存储读取
    const userInfo = reactive({
      username: localCache.getCache("username") ?? "",
      password: localCache.getCache("password", true) ?? ""
    })
    const userFormRef = ref<InstanceType<typeof ElForm>>()

    function login(isRemember: boolean): void {
      // 调用el-form组件的validate方法获取验证的状态
      userFormRef.value?.validate(async (isValidate) => {
        if (isValidate) {
          const result = await api.login.usernameLogin(
            userInfo.username,
            userInfo.password
          )
          console.log(result)
          // 调用actions发送请求,并将数据保存到state中
          if (isRemember) {
            // 如果记住密码被勾选中则将账号密码存储到localStorage中,密码在进行本地存储的时候进行加密再存储
            localCache.setCache("username", userInfo.username)
            localCache.setCache("password", userInfo.password, true)
          } else {
            // 如果没有勾选记住密码就要将本地存储中的账号密码信息进行清除
            localCache.removeCache("username")
            localCache.removeCache("password")
          }
        }
      })
    }

    return {
      userInfo,
      userRules,
      userFormRef,
      login
    }
  }
})
</script>

<style scoped lang="less"></style>
