module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 自定义规则, name: [0, 'always', 3], 数组第一位0为disable，1为warning，2为error
  // 第二位 应用为否 值为, always|never
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'upd', // 更新某项功能
        'feature', // 新功能
        'fix', // 修补bug
        'style' // 格式
      ]
    ]
  }
}
