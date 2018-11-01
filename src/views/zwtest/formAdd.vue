<template>
    <group label-width="4.5em"  title="用户基本信息" label-margin-right="1em" value-align="left" label-align="right" style="margin:0 20px;">
        <x-input title="姓名" v-model="formData.userName"></x-input>
        <popup-radio title="性别" value-align="left" :options="sexOptions" v-model="formData.sex"></popup-radio>
        <x-input title="年龄" v-model="formData.age"></x-input>
        <datetime title="出生日期" :min-year="1960" :max-year="2010" v-model="formData.dateOfBirth" value-text-align="left"></datetime>
        <x-textarea title="备注" v-model="formData.content"></x-textarea>
        <x-button type="primary">提交</x-button>
        <x-button>重置</x-button>
    </group>
</template>

<script>
    import {XInput, Cell, Group, PopupRadio, Radio, Datetime, Checker, CheckerItem, XTextarea} from 'vux';
    import XButton from "vux/src/components/x-button/index";

    export default {
        name: "form-add",
        components: {
            XButton,
            CheckerItem,
            Checker,
            XTextarea,
            Datetime,
            PopupRadio,
            Radio,
            Cell,
            XInput,
            Group
        },
        data() {
            return {
                formData: {
                    userName: "",
                    sex: "男",
                    dateOfBirth:"2000-01-01"
                },

                sexOptions: [{key: "男", value: "男"}, {key: "女", value: "女"}],
                hobbyOptions: [{key: "篮球", value: "篮球"}, {key: "足球", value: "足球"}, {
                    key: "羽毛球",
                    value: "羽毛球"
                }, {key: "唱歌", value: "唱歌"}, {key: "跳舞", value: "跳舞"}]
            }
        }
    }
</script>

<style scoped>

</style>

<style>
    .weui-cells__title {
        height: 25px;
        font-size: 100% !important;
        padding-top: 5px;
        text-align: center;
    }
</style>