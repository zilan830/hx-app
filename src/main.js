import Vue from 'vue'
import App from './App.vue'
import router from './util/router/index'
import store from './store/index'
import './util/style/index.less'
import axios from 'axios'
//import './cube-ui'
import './util/globalMethod/android'
//import Install from './components/hxIndex'
//引入自己的组件库及样式
import 'hxui-components'
import 'hxui-components/dist/hxui.css'
//import './testApi'


const FastClick = require('fastclick');

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

FastClick.attach(document.body);//解决移动端点击延迟

//全局注册hx组件
// Object.keys(Install).forEach(Component => {
//     Vue.use(Install[Component])
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

