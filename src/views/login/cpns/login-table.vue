<template>
  <div class="login-table">
    <h2 class="login-title">Jerry Admin</h2>
    <el-tabs type="border-card" class="login-card" v-model="loginType">
      <el-tab-pane name="username">
        <template #label>
          <span><i class="el-icon-user"></i>用户名登陆</span>
        </template>
        <login-username ref="usernameRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登陆</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="login-handle-password" v-show="loginType === 'username'">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-immediate" @click="login"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginUsername from "./login-username.vue"
import LoginPhone from "./login-phone.vue"
export default defineComponent({
  components: {
    LoginUsername,
    LoginPhone
  },
  setup() {
    const isRemember = ref<boolean>(true)

    // 获取用户名登陆与手机号登陆对应的组件实例
    const usernameRef = ref<InstanceType<typeof LoginUsername>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    type LoginType = "username" | "phone"
    const loginType = ref<LoginType>("username")

    function login(): void {
      switch (loginType.value) {
        case "username":
          // 在调用组件实例身上的login函数的时候使用可选链保证不报错
          // 如果是通过用户名进行的登陆的需要将isRemember传递过去,决定是否保存账号密码
          usernameRef.value?.login(isRemember.value)
          break
        case "phone":
          phoneRef.value?.login()
          break
        default:
          // 在此处可以声明一个变量并定义为never属性,表示该段代码应当永远无法到达
          const type: never = loginType.value
      }
    }

    return {
      isRemember,
      usernameRef,
      phoneRef,
      loginType,
      login
    }
  }
})
</script>

<style scoped lang="less">
.login-table {
  display: flex;

  flex-direction: column;
  .login-title {
    font-size: 20px;
    color: white;
    text-align: center;
  }
  .login-card {
    border: none;
    width: 400px;
    height: 200px;
  }
  .login-handle-password {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 5px;
  }
  .login-immediate {
    font-size: 15px;
    letter-spacing: 10px;
    width: 100%;
  }
}
</style>
