<template>
    <div class="wrapperContainer">
        <h-header :left-options="{showBack: routeIndex.toString().length > 2}">{{name}}</h-header>
        <section class="content">
            <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
                <keep-alive>
                    <router-view class="router-view" style="padding-bottom: 60px"/>
                </keep-alive>
            </transition>
        </section>
        <footer ref="footerContainer" class="footerContainer">
            <!--<h-tabbar :tab-column="tabColumn"/>-->
        </footer>
        <!--{{renderFooter()}}-->
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data () {
            return {
                tabColumn:{
                    selectedLabelDefault: '待办',
                    tabs: [{
                        label: '待办',
                        icon: 'cubeic-home',
                        path: '/todo'
                    }, {
                        label: '应用',
                        icon: 'cubeic-like',
                        path: '/apply'
                    }, {
                        label: '我的',
                        icon: 'cubeic-person',
                        path: '/info'
                    }],
                }
            }
        },
        computed: {
            ...mapState({
                direction: state => state.router.direction,
                routeIndex: state => state.router.routeIndex,
                name: state => state.router.name,
            }),
        },
        watch: {
            '$route'(to, from) {
                this.transitionStyle({fromIndex: from.meta.index, toIndex: to.meta.index});
                this.routeChange({routeIndex: to.meta.index, name: to.name});
            }
        },
        mounted() {
            this.$nextTick(() => {
                const index = this.$router.history.current.meta.index;
                const name = this.$router.history.current.name;
                this.routeChange({routeIndex: index, name: name})
            });
            this.callByAndroid(this)
        },
        methods: {
            ...mapActions([
                'transitionStyle',
                'routeChange'
            ]),
            clickHandler (label) {
                // if you clicked home tab, then print 'Home'



                console.log(label)

            },
            changeHandler (label) {
                // if you clicked different tab, this methods can be emitted
            },
            //通过cube的createAPI可以这样调用封装组件
            renderFooter () {
                this.$createHTabbar({tabColumn:this.tabColumn}).show()
            }
        }

    }
</script>


