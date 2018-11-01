<template>
    <div style="height:100%;">

            <!--<x-header>列表详情</x-header>-->
            <h1>这是列表详情</h1>
            <p v-for="i in 100">{{i}}</p>

    </div>
</template>

<script>
    import { XHeader, ViewBox, Cell, Group  } from 'vux'

    export default {
        components:{
            XHeader,
            ViewBox,
            Group,
            Cell,
        }
    }
</script>