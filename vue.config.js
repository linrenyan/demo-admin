// vue.config.js
// const path = require('path');
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
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}