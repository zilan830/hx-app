import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/todo',
            component: () => import('@/views/Login.vue'),
            meta: {index: 0}
        },
        {
            path: '/container',
            component: () => import('@/views/Index.vue'),
            meta: {index: 1},
            children: [
                {
                    path: '/todo',
                    name: '组件列表',
                    component: () => import('@/views/pages/Todo.vue'),
                    meta: {index: 10}
                },
                {
                    path: '/test',
                    name: '测试',
                    component: () => import('@/views/pages/Test.vue'),
                    meta: {index: 100}
                },
                {
                    path: '/apply',
                    name: '应用',
                    component: () => import('@/views/pages/Apply.vue'),
                    meta: {index: 11}
                },
                {
                    path: '/applyLeave',
                    name:'请假申请',
                    component: () => import('@/views/pages/ApplyLeaveRequest.vue'),
                    meta:{index:110}
                },
                {
                    path: '/info',
                    name: '我的',
                    component: () => import('@/views/pages/Info.vue'),
                    meta: {index: 12},
                },
                {
                    path: '/infoList',
                    name: '信息列表',
                    component: () => import('@/views/pages/InfoList.vue'),
                    meta: {index: 120}
                },

                {
                    path: '/leave_sp',
                    name:'请假审批',
                    component: () => import('@/views/pages/leave_sp.vue'),
                    meta:{index:101}
                },

            ]
        },
        {
            path: "/zwtest",
            component: () => import("@/views/zwtest/formAdd.vue"),
            children: [
                {path:"formAdd", component: () => import("@/views/zwtest/formAdd.vue")}
            ]
        }
    ]
})
