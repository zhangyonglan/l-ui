//引入组件
import SendCode from './index.vue'
//注册全局组件
const sendCode={
    install(Vue){
        Vue.component('SendCode',SendCode)
    }
}
//导出全局组件
export default sendCode