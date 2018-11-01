<template>
    <div>
        <div>
            <span style="text-align: center;line-height: 40px;margin-left: 20px">拍照回调显示测试！</span>
            <x-button mini plain type="warn" @click.native="takePhoto">拍照</x-button>
        </div>
        <x-img :src="src" class="sizeImg"/>

    </div>
</template>

<script>
    import {
        XButton,
        XImg
    } from 'vux';

    let _this;

    export default {
        created() {
            _this = this;
        },
        components: {
            XImg,
            XButton,
        },

        data() {
            return {
                styls: {
                    'background-color': 'red'
                },
                cls: {
                    bg1: true,
                    bg2: false
                },
                staticBg1: true,
                staticBg2: false,
                src: " ",
                srcBase64: "",
            }
        },
        methods: {
            takePhoto: function () {
                alert("take");
                window.take_photo.startPhotoActivity(1);
            },


            look2: function (str) {
                // this.srcBase64 = "data:image/png;base64," + str;
                this.src = "data:image/png;base64," + str;
            }

        },


    }


    window.callByAndroid = function (msg) {
        // alert(`11111${msg.photo_str}`)
        alert(_this),
            _this.look2(msg.photo_str)
    }


</script>

<style scoped>
    .sizeImg {
        width: 80px;
        height: 80px;
    }
</style>









