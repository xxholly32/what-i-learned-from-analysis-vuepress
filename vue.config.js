module.exports = {
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("file-loader")
      .loader("file-loader")
      .end();
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/what-i-learned-from-analysis-vuepress/"
      : "/"
};
