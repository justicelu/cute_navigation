import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// 导入主页
import Home from "@/views/Home.vue";
// 导入 game
import Show from "@/views/show/Show.vue";
// 导入网易云
import Music from "@/views/music/index.vue";
import Music_Home from "@/views/music/pages/index/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    // 重定向 将路径 '/' 定向为 '/login'
    // { path: "/", redirect: "/home" },
    {
        path: "/",
        component: Home,
        meta: {
            title: "汝科大_发现更多可能",
        },
    },
    {
        path: "/show",
        component: Show,
        meta: {
            title: "Show => ∞ ",
        },
    },
    // 网易云界面
    {
        path: "/music",
        component: Music,
        meta: {
            title: "网易云音乐",
        },
        // 子路由重定向
        redirect: "/music/home",
        // 配置子路由
        children: [
            {
                path: "/music/home",
                component: Music_Home,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;
