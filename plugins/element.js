import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 在这按需要导如并注册
// import { Form, FormItem } from 'element-ui'
// import { Input } from 'element-ui'
// 导入弹框提示组件 这个需要全局 挂载
// import { Message } from 'element-ui'
// Vue.prototype.$message = Message;

// 将上面的所有语句合并为一个语句
import {
    Card,
    Input,
    Select,
    Option,
    Button,
    Table,
    TableColumn,
    //  Message 这个弹窗引入很特殊,不需要使用 vue.use 而是要挂载到vue原型中,来代替 alert 原型
    Message,
    Row,
    Col,
    Avatar,
    Tooltip,
    MessageBox,
    Notification,
    Container,
    Header,
    Main,
    Footer,

} from 'element-ui'

// 注册为全局可用的组件
Vue.use(Card)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.use(Tooltip)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)

// 挂载到 Vue原型对象上   通过 this.$message 的方法来使用
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;