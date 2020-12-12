import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 全局导入按需注册的element组件
import "../plugins/element";

//  npm i axios -S 安装 axios
//  导入  axios
import axios from "axios";
// 注册挂载  当然这里也可以是你想要命名的其他单词
Vue.prototype.$http = axios;

// 引入全局样式
require("./assets/css/global_base.css");
require("./assets/css/iconfont.css");

Vue.config.productionTip = false;

// 全局时间过滤器
// Vue.filter('dateFormat', function(originVal) {
//     const dt = new Date(originVal)

//     const y = dt.getFullYear()
//     const m = (dt.getMonth() + 1 + '').padStart(2, '0')
//     const d = (dt.getDate() + '').padStart(2, '0')

//     const hh = (dt.getHours() + '').padStart(2, '0')
//     const mm = (dt.getMinutes() + '').padStart(2, '0')
//     const ss = (dt.getSeconds() + '').padStart(2, '0')

//     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// })

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
