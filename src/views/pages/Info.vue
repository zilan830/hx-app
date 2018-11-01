<template>
    <div>
    <blur :blur-amount=40 :url="url">
        <p class="center"><img :src="url"></p>
        <p style="color:white;font-size:18px;text-align:center;line-height: 45px">小强</p>
        <p style="color:white;text-align: center">研发组组长</p>
    </blur>

        <div gap="10px 10px" style="margin: 300px auto; width: 80%;">
            <x-button type="warn" @click.native="logout">退出</x-button>
        </div>
   </div>
</template>

<script>
    import {Blur,XButton} from 'vux'

    export default {
        components: {
            Blur,XButton
        },

        data () {
            return {
                url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
            }

        },

        methods: {

            logout(){
                window.localStorage.removeItem("x-auth-token");
                window.location.href="/";
            }


        }



    }
</script>


<style scoped>
    .center {
        text-align: center;
        padding-top: 20px;
        color: #fff;
        font-size: 18px;
    }
    .center img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #ececec;
    }

    span{text-align: center;display: block}

</style>