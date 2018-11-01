<template>
    <div>
        <panel header="请假审批" :footer="footer" :list="list" type="1" @on-img-error="onImgError"></panel>
        <group title="其他待办">
            <cell title="测试" link="/test"/>
        </group>
        <i class="cubeic-alert"></i>
        <cube-button @click="showDialog">test</cube-button>
        <panel header="其他待办" :footer="footer" :list="list2" type="1" @on-img-error="onImgError"></panel>
    </div>
</template>

<script>
  import {XHeader, ViewBox, Cell, Group, XButton, Panel, Radio} from 'vux'

  export default {
    components: {
      XButton,
      Panel,
      Radio,
      XHeader,
      ViewBox,
      Cell,
      Group,
      Panel,
      Radio
    },
    data() {
      return {
        leave_datas: [{message: '小明', date: '2018-9-14'}, {message: '小红', date: '2018-9-12'}, {
          message: '小刚',
          date: '2018-9-09'
        }],
        password: '',


        type: '1',
        list: [{
          src: './images/todo/leave.png',
          title: '张伟',
          desc: '时间：2018-09-18 09:00 至 2018-09-18 17:30<br/>原因：妹妹结婚，请假1一天回老家参加婚礼。',
          url: '/leave_sp'
        }, {
          src: './images/todo/leave.png',
          title: '李广',
          desc: '时间：2018-09-18 09:00 至 2018-09-18 12:00<br/>原因：家中装修，请假半天安装防盗门。',
          url: {
            path: '/test',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        list2: [{
          src: './images/todo/phone.png',
          title: '相机测试',
          desc: '调用原生相机进行拍照测试',
          url: '/test'
        }],
        footer: {
          title: "更多待办",
          url: '/leave_sp'
        }
      }
    },
    methods: {
      showDialog(){
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      },
      onImgError (item, $event) {
      },
      goDetail(name, date){
        this.$router.push({path: "/leave_sp", query: {name: name, date: date}});

      },
      handleSubmit(userName, password) {
        this.isDisabled = true;
        this.btnText = '请稍等';

        this.$router.push('/apply');

        this.$validator.validate().then((result, argus) => {

          if (!result) {
            // do stuff if not valid.
            console.log('result', result)
            console.log("userName,password", userName, password)

          } else {
            setTimeout(() => {
              this.btnText = '登录';
              this.isDisabled = false;
              this.$router.push('/about');
            }, 2000)
          }
        });
      },

    }

  }


</script>

<style>
    .weui-media-box__thumb {

    }
</style>
