module.exports = {
  // 生成环境sourceMap
  productionSourceMap: false,
  devServer: {
    hot: true,
    open: true,
    port: 8055
  }
  // 关闭eslint 团队协同开发慎用
  // lintOnSave: false
}
