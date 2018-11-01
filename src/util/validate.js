import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

Validator.extend('phone', {
    validate: value => (value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value))

});

Vue.use(VeeValidate,
    {
        errorBagName: 'vErrors',
        fieldsBagName: 'fields',
        locale: 'zh',
        events: 'blur|input',
        dictionary: {
            zh: {
                messages: {
                    email: () => '请输入正确的邮箱格式',
                    password: () => '请输入正确的密码',
                    tel: () => '请输入正确的手机号',
                    required: (field) => "请输入信息",
                },
                attributes: {
                    email: '邮箱',
                    password: '密码',
                    name: '账号',
                    phone: '手机',
                    OldPassword: '旧密码',
                    NewPassword: '新密码',
                    ConfirmNewPassword: '确认密码',
                }
            },
        }
    }
);