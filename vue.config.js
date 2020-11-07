module.exports = {
    // 这里是脚手架的配置,
    // 其中如果想修改 webpack 配置
    publicPath: process.env.NODE_ENV === 'production' ? '/cute_navigation' : '/',
    configureWebpack: {
        // 声明在 configureWebpack 属性对象里面即可
        // 如果没有这个需要, 这个文件可以不存在
    }
}