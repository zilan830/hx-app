<template>
    <div>
        <grid v-for="(gridObj ,i) in gridObjArr" :key="i">
            <grid-item v-for="(obj,ii) in gridObj" :key="ii" :label="obj.label"
                       :link="obj.routeLink" @on-item-click="onItemClick2">
                <img solt="icon" :src="obj.iconUrl" class="imgStyle"/>
            </grid-item>

        </grid>
    </div>
</template>

<script>
    import {Grid, GridItem, GroupTitle} from 'vux'
    import png1 from '../../assets/1.png'
    import png2 from '../../assets/2.png'
    import png3 from '../../assets/3.png'
    import png4 from '../../assets/4.png'
    import png5 from '../../assets/5.png'

    export default {
        components: {
            Grid,
            GridItem,
            GroupTitle
        },
        data: function () {
            return {
                gridObjArr: [
                    [{
                        label: "请假",
                        iconUrl: png1,
                        routeLink: '/applyLeave',
                        iconStyle: {
                            'width': '100px',
                            'height': '100px'
                        }
                    }, {
                        label: "加班",
                        iconUrl: png5,
                        iconStyle: {
                            'font-size': '20px',
                            'color': 'red'
                        },
                        routeLink: '/applyLeave'
                    }],
                    [{
                        label: "报销",
                        iconUrl: png3,
                        iconStyle: {
                            'font-size': '20px',
                            'color': 'red'
                        },
                        routeLink: '/applyLeave'
                    }, {
                        label: "出差",
                        iconUrl: png4,
                        iconStyle: {
                            'font-size': '20px',
                            'color': 'red'
                        },
                        routeLink: '/applyLeave'
                    }]
                ],
            }
        },
        methods: {
            onItemClick2() {

                // console.log("!!!!!!!!!!!!!!");
                // this.$router.push({name: "请假申请", params: {index:9}});
            }
        }
    }
</script>

<style lang="less" scoped>

        .imgStyle {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            display: block;
        }


</style>