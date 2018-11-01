//思路：通过路由meta判断方向左右，从而加载不同的动画效果

const router = {
    state: {
        direction: 'forward',
        routeIndex: 10,
        name:'待办'
    },
    mutations: {
        transitionStyle(state, payload) {
            let style = 'backward';
            const fromIndex = payload.fromIndex.toString();
            const toIndex = payload.toIndex.toString();
            if (fromIndex.length < toIndex.length) {
                style = 'forward';
            } else if (fromIndex.length === toIndex.length) {
                const fromNum = fromIndex.charAt(fromIndex.length - 1);
                const toNum = toIndex.charAt(toIndex.length - 1);
                if (fromNum < toNum) {
                    style = 'forward';
                }
            }
            state.direction = style
        },
        routeChange(state, payload) {
            const routeIndex = payload.routeIndex.toString().charAt(1);
            switch (routeIndex) {
                case '0':
                    state.routeIndex = 0;
                    break;
                case '1':
                    state.routeIndex = 1;
                    break;
                case '2':
                    state.routeIndex = 2;
                    break;
                default:
                    break;
            }
            state.name = payload.name;
            state.routeIndex = payload.routeIndex;
        }
    },
    actions: {
        transitionStyle({commit}, payload) {
            commit({type: 'transitionStyle', ...payload})
        },
        routeChange({commit}, payload) {
            //脑残跳登录页
            /*if(!window.localStorage.getItem('Login')){
                window.location.href="/";
            }*/
            commit({type: 'routeChange', ...payload})
        }
    }
};

export default router;