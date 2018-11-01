import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import router from './modules/router'
import apis from './modules/apis'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        router,
        apis
    },
    getters
});

export default store;