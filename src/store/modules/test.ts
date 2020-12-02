// 导出的 vuex 子仓库
export default {
    // 公共状态,可看作所有组件的 data 数据
    state: () => ({}),

    // 公共计算属性,可看作所有组件的 computed 计算属性
    // 1.无参  2.(state)  3.(state,其他getter) 4.(state,getter,,rootState)
    getters: {},

    // 公共方法,保存的是更改数据的回调函数 绝不允许异步操作
    // 1.无参 2.(state) 3.(state,自定义参数) 自定义参数较多时建议传入对象
    mutations: {},

    // 公共方法,类似于mutations 允许包含异步操作
    // actions中的回调函数的第一个参数是context,是store的深拷贝;
    // 1.无参  2.(context) || ({state, commit, rootState , getters})
    // 对于modules形式的vuex子仓库
    // context.state为当前仓库,context.rootState是根仓库,因此可以解构写为后面的形式
    actions: {},
};
