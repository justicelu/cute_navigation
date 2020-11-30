// 导出的 vuex 子仓库
export default {
    // 公共状态,可看作所有组件的 data 数据
    state: () => ({
      name:'justicelu'
    }),
    // 公共方法,保存的是更改数据的回调函数 绝不允许异步操作
    // 第一个参数是state, 第二参数是payload, 也就是自定义的参数;
    mutations: {},
    // 公共方法,类似于mutations 允许包含异步操作
    // actions中的回调函数的第一个参数是context,是一个与store实例具有相同属性和方法的对象;

    actions: {},
    // 公共计算属性,可看作所有组件的 computed 计算属性
    getters: {}
};