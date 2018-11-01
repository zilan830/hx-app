import requestApis from '../../util/api/login'

const apis = {
    state: {
        isLoading:false,
        user: {},
    },
    mutations: {
        updateLoading(state, payload) {
            state.isLoading = payload.isLoading;
        },
        getUser(state, payload) {
            state.user = payload.data;
        }
    },
    actions: {
        updateLoading({commit}, payload) {
            commit({type: 'updateLoading', ...payload})
        },
        getUser({dispatch,commit}, payload) {
            //发起菊花action
            dispatch('updateLoading',{isLoading:true});
            const router = payload.router;
            let data = {};
            setTimeout(() => {
                const obj = {};
                obj.name = payload.name;
                obj.password = payload.password;
                dispatch('updateLoading',{isLoading:false});
                // data = res;
                commit({type: 'getUser', data});
                router.push('/todo');

                /*requestApis.login(obj).then(res => {
                    //发起关闭菊花action

                }).catch(err => {
                    dispatch('updateLoading',{isLoading:true})
                    data.error = "error";
                    commit({type: 'getUser', data})
                });*/
            }, 2000);
        }
    }
};

export default apis;

