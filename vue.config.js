module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }
}