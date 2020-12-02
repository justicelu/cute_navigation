import Vue from "vue";
import Vuex from "vuex";
// 导入测试用test Vuex
import test from "./modules/test";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        test,
    },
});
