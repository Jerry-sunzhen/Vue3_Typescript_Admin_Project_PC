export default {
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    {
      pattern: /^[\w-]{6,15}$/,
      message: "用户名需要为6~15位数字、字母、_、- 组成",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "密码不能位空", trigger: "blur" },
    {
      pattern: /^[\w-]{6,15}$/,
      message: "密码需要为6~15位数字、字母、_、- 组成",
      trigger: "blur"
    }
  ]
}
