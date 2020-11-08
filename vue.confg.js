const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'));
        .set('#', resolve('public'));

        config.resolve.symlinks(true);
    },
    // devServer: {
    //     proxy: {
    //         "/api": {
    //             target: "http://",
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": "/"
    //             }
    //         }
    //     }
    // }

}