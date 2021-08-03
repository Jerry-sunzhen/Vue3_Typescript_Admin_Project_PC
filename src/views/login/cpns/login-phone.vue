<template>
  <div>
    <el-form :model="phoneInfo" :rules="phoneRules" ref="phoneFormRef">
      <el-form-item label="手机号" label-width="70px" prop="phone">
        <el-input v-model="phoneInfo.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码" label-width="70px" prop="verifyCode">
        <el-input
          v-model="phoneInfo.verifyCode"
          class="verify-input"
          placeholder="请输入验证码"
        />
        <el-button type="primary" class="verify-btn" @click="getVerifyCode"
          >获取验证码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"
import phoneRules from "../config/phoneRules"
export default defineComponent({
  setup() {
    const phoneInfo = reactive({
      phone: "",
      verifyCode: ""
    })

    const phoneFormRef = ref<InstanceType<typeof ElForm>>()

    function getVerifyCode() {
      console.log("getVerifyCode")
    }

    function login(): void {
      console.log("phone")
    }

    return {
      phoneInfo,
      phoneRules,
      phoneFormRef,
      getVerifyCode,
      login
    }
  }
})
</script>

<style scoped lang="less">
.verify-input {
  width: 150px;
}
.verify-btn {
  float: right;
}
</style>
