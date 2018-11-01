<template>
    <div id="app" style="height: 100%;overflow: hidden">
        <div v-transfer-dom>
            <loading v-model="isLoading"/>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import {Loading,TransferDom} from 'vux'
    import {mapState} from 'vuex'

    export default {
        directives: {
            TransferDom
        },
        components: {
            Loading
        },
        computed: {
            ...mapState({
                isLoading: state => state.apis.isLoading,
            }),
        },
    }


</script>



