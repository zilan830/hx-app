import Vue from 'vue'
import HTabbar from './HTabbar'
import HHeader from './HHeader'

//全局注册组件，方便使用

const components = {
    //HHeader,
    HTabbar
};

const installs = {};

function install (Vue) {
    Object.keys(components).forEach(key=> {
        components[key].install = (Vue) => {
            Vue.component(key,components[key])
        };
        installs[key] = components[key];
    });
}

install(Vue);

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default installs;









