module.exports = {
  // 生成环境sourceMap
  productionSourceMap: false,
  devServer: {
    hot: true,
    open: true,
    port: 8055
  }
  // 生产环境保存关闭eslint
  // lintOnSave: process.env.NODE_ENV !== 'production'
}
