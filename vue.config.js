module.exports = {
        // 这里是脚手架的配置,
        // 其中如果想修改 webpack 配置
        const BASE_URL = process.env.NODE_ENV === 'production' ? '/xxx(打包文件所在目录名)/' : '/'
        module.exports = {
            publicPath: BASE_URL,

        }