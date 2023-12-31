const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader');
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Advocat/'
    : '/',
});
