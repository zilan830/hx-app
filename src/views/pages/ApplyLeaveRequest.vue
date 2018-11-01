<template>
    <div>
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
            <x-input name="name" title="申请人" v-validate="'required'" v-model="user.name" text-align="right" ></x-input>
            <p class="warning">{{ vErrors.has('name')?'请输入申请人姓名':'' }}</p>
            <popup-picker name="dept" title="所属部门" v-validate="'required'" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :data="optionDeptStr" v-model="user.dept"></popup-picker>
            <p class="warning">{{ vErrors.has('dept')?'请输入申请人所属部门':'' }}</p>
            <popup-picker name="position" title="职位" v-validate="'required'" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :data="optionPositionStr" v-model="user.position"></popup-picker>
            <p class="warning">{{ vErrors.has('position')?'请输入申请人职位':'' }}</p>
            <!--<x-input title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人" v-model="value1"></x-input>-->
            <datetime name="leaveDateStart" v-validate="'required'" v-model="user.leaveDateStart" format="YYYY-MM-DD HH:mm"
                      :minute-list="['00', '15', '30', '45']"
                      title="开始时间" value-text-align="left"/>
            <p class="warning">{{ vErrors.has('leaveDateStart')?'请输入开始时间':'' }}</p>
            <datetime name="leaveDateEnd" v-validate="'required'" v-model="user.leaveDateEnd" format="YYYY-MM-DD HH:mm"
                      :minute-list="['00', '15', '30', '45']"
                      title="结束时间" value-text-align="left"/>
            <p class="warning">{{ vErrors.has('leaveDateEnd')?'请输入结束时间':'' }}</p>
            <!--<datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>-->
            <x-textarea name="leaveReason" v-validate="'required'" v-model="user.leaveReason" title="请假事由" placeholder="请填写请假事由"
                        :show-counter="false" :rows="5"></x-textarea>
            <p class="warning">{{ vErrors.has('leaveReason')?'请输入请假事由':'' }}</p>
        </group>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="submitRequest()" :show-loading="loading">提交</x-button>
        </box>
    </div>
</template>

<script>
    import {
        GroupTitle,
        Group,
        Cell,
        XInput,
        Selector,
        PopupPicker,
        Datetime,
        XNumber,
        ChinaAddressData,
        XAddress,
        XTextarea,
        XSwitch,
        Box,
        XButton
    } from 'vux'

    export default {
        name: "ApplyLeaveRequest",
        components: {
            XButton,
            Box,
            Group,
            GroupTitle,
            Cell,
            XInput,
            Selector,
            PopupPicker,
            XAddress,
            Datetime,
            XNumber,
            XTextarea,
            XSwitch
        },
        data: function () {
            return {
                optionDeptStr: [["售前组", "产品组", "平台组", "项目组", "UI组"]],
                optionPositionStr: [["总监", "经理", "组长", "组员"]],
                loading: false,
                uName:"",
                user: {
                    name: "",
                    dept: [],
                    position: [],
                    leaveType: "",
                    leaveReason: "",
                    leaveDateStart: "",
                    leaveDateEnd: "",
                }
            }
        },
        methods: {
            submitRequest() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    //表单验证
                    this.$validator.validate().then(result => {
                        console.log(result);
                        if (!result) {// do stuff if not valid.
                        } else {
                            this.user = {
                                name: "",
                                dept: [],
                                position: [],
                                leaveType: "",
                                leaveReason: "",
                                leaveDateStart: "",
                                leaveDateEnd: "",
                            };
                            this.$validator.reset();
                            this.$router.push('/apply');
                        }
                    });
                },600);
            },
            onShow () {
            },
            onHide () {
            },
            onChange(){
            }
        },
        watch:{
            '$route'(){
                this.$validator.reset();
                this.user={
                    name: "",
                    dept: [],
                    position: [],
                    leaveType: "",
                    leaveReason: "",
                    leaveDateStart: "",
                    leaveDateEnd: "",
                }
            }
        },
    }
</script>

<style scoped>
    .warning{
        color:red;
        text-align:right;
        font-size:14px
    }


</style>