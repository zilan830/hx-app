<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div>
            <group>
                <cell title="请假信息"></cell>
                <cell-form-preview :list="list"></cell-form-preview>
            </group>

            <group>
                <cell title="审批信息"></cell>
                <x-input title="审批人" required v-model="sp_person" ref="input_spr" ></x-input>
                <checklist title="审批结果" required :options='sp_common_list' v-model="sp_check_result"  :max="1" ></checklist>
                <datetime title="审批时间"  v-model="hourListValue" format="YYYY-MM-DD HH:mm"
                          :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']"
                          :minute-list="['00', '15', '30', '45']" @on-change="change"></datetime>

            </group>
        </div>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="submit">提交</x-button>
        </box>

        <alert v-model="show_spr" title="提交失败" > {{ "审批人为空!" }}</alert>
        <alert v-model="show_check" title="提交失败" > {{ "审批结果为空!" }}</alert>
        <alert v-model="show_success" title="提交成功" @on-hide="onHide"> {{ "" }}</alert>

    </div>
</template>

<script>
    import {Group, CellFormPreview, Cell, XInput, Checklist, Datetime, XButton,Alert,Box} from 'vux'

    export default {


        components: {
            Box,
            XInput,
            CellFormPreview, Cell, Group, Checklist, Datetime, XButton,Alert
        },
        data() {
            return {
                list: [{
                    label: '申请人姓名：',
                    value: this.$route.query.name
                }, {
                    label: '所在部门：',
                    value: '安监事业部'
                }, {
                    label: '岗位：',
                    value: '执法员'
                },
                    {
                        label: '假别：',
                        value: '事假'
                    },
                    {
                        label: '请假时间：',
                        value: '2018-9-12 9:00 ~ 2018-9-12 17:30'
                    },
                    {
                        label: '请假总时间：',
                        value: '7小时'
                    },
                    {
                        label: '申请时间：',
                        value: this.$route.query.date
                    }
                ],

                sp_common_list: ['同意', '不同意'],
                sp_check_result:["同意"],
                hourListValue: '2017-06-12 09:00',
                sp_person:"",
                show_spr: false,
                show_check:false,
                show_success:false,
            }

        },
        methods: {
            change(value) {
                console.log('change', value)
            },

            onHide () {
                console.log('on hide')
                this.$router.push("/todo");
            },

            submit(){

                console.log("check",this.sp_check_result[0]==undefined,this.sp_person)

                if(this.sp_person === ""){
                    this.show_spr=true
                    this.$refs.input_spr.focus();
                }else if(this.sp_check_result[0]===undefined){
                    this.show_check=true
                    this.sp_check_result=["同意"]
                }else{

                    this.show_success = true

                }





            }


        }


    }
</script>

<style scoped>

    .button {
        color: #999999;
        font-size: 15px;
    }


</style>