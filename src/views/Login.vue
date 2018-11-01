<template>
    <div>
        <!--<cube-form >-->
        <!--<x-input label-width="4em" title="登录名" v-validate="'required|email'" name="userName" :icon-type="iconType"-->
                 <!--v-model="userName"-->
                 <!--placeholder="请输入登录名"/>-->
        <!--<span class="pl-validate-msg">{{ vErrors.has('userName')?'请输入正确的邮箱':'' }}</span>-->
        <!--<x-input label-width="4em" title="密码" v-validate="'required|min:6'" name="password" :icon-type="iconType"-->
                 <!--v-model="password"-->
                 <!--type="password" placeholder="请输入密码"/>-->
        <!--<span class="pl-validate-msg">{{ vErrors.has('password')?'请输入正确的密码':'' }}</span>-->
        <!--<x-input label-width="4em" title="手机" v-validate="'required|phone'" name="phone" v-model="phone"-->
                 <!--placeholder="请输入手机号"/>-->
        <!--<span class="pl-validate-msg">{{ vErrors.has('phone')?'请输入正确的手机号':'' }}</span>-->

        <!--<cube-button @click="handleSubmit(userName,password)" type="primary">登录</cube-button>-->
        <!--</cube-form>-->

        <cube-form
                :model="model"
                :schema="schema"
                :immediate-validate="false"
                :options="options"
                @validate="validateHandler"
                @submit="handleSubmit"
                @reset="resetHandler"/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'login',
        data() {
            return {
                validity: {},
                valid: undefined,
                model: {
                    checkboxValue: false,
                    checkboxGroupValue: [],
                    inputValue: '',
                    radioValue: '',
                    rateValue: 0,
                    selectValue: 2018,
                    switchValue: true,
                    textareaValue: '',
                    uploadValue: []
                },
                schema: {
                    fields:[
                        {
                            type:'input',
                            label:'用户名',
                            modelKey: 'inputValue',
                            props: {
                                placeholder: '请输入'
                            },
                            rules:{
                                required:true
                            },
                            messages:'请输入用户名'
                        },
                        {
                            type:'input',
                            label:'密码',
                            props: {
                                placeholder: '请输入',
                                type:'password'
                            },
                            modelKey: 'passwordValue',
                            rules:{
                                required:true
                            },
                            messages:'请输入密码'
                        },
                        {
                            type: 'submit',
                            label: '登录'
                        }
                    ],
                },
                options: {
                    scrollToInvalidField: true,
                    layout: 'standard' // classic fresh
                }
            }
        },
        methods: {
            handleSubmit() {

                this.$router.push('/todo');

            },
            submitHandler(e) {
                e.preventDefault()
                console.log('submit', e)
            },
            validateHandler(result) {
                this.validity = result.validity
                this.valid = result.valid
                console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
            },
            resetHandler(e) {
                console.log('reset', e)
            },
            ...mapActions([
                'getUser'
            ])

        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        padding: 1.5rem 0;
        font-weight: bold;
        font-size: 1.3rem;
    }

    .login {
        padding: 12rem 1rem 0 1rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .login:after {
        content: "";
        background: #3bb0ed url("../assets/loginback.jpg") center no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .pl-validate-msg {
        color: red;
        line-height: 32px;
        text-align: right;
        box-sizing: border-box;
        padding-left: 16px;
    }

    .pl-validate-msg:empty {
        display: none;
    }

    .footer {
        position: absolute;
        bottom: 1rem;
        font-size: 0.8rem;
        left: 0;
        right: 0;
        text-align: center;
    }
</style>
