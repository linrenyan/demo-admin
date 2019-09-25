// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        // @/ 是 src/ 的别名
        // 配置var.scss全局引入
        sass: {
            prependData: `@import "~@/styles/var.scss";`
        }
      }
    }
  }