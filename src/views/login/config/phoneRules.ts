export default {
  phone: [
    { required: true, message: "手机号不能为空", trigger: "blur" },
    {
      pattern: /^1[2-9]\d{9}$/,
      message: "手机号不合法",
      trigger: "blur"
    }
  ],
  verifyCode: [
    { required: true, message: "验证码不能位空", trigger: "blur" },
    {
      pattern: /^\d{6}$/,
      message: "验证码需要为6为数字",
      trigger: "blur"
    }
  ]
}
