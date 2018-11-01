<!--<template>-->
    <!--<div class="hx-header">-->
        <!--<div class="hx-header-left">-->
            <!--<slot name="overwrite-left">-->
                <!--<transition :name="transition">-->
                    <!--<a class="hx-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}</a>-->
                <!--</transition>-->
                <!--<transition :name="transition">-->
                    <!--<div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>-->
                <!--</transition>-->
            <!--</slot>-->
            <!--<slot name="left"/>-->
        <!--</div>-->
        <!--<h1 class="hx-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">-->
            <!--<slot>-->
                <!--<transition :name="transition">-->
                    <!--<span v-show="title">{{title}}</span>-->
                <!--</transition>-->
            <!--</slot>-->
        <!--</h1>-->
        <!--<div class="hx-header-title-area" v-if="shouldOverWriteTitle">-->
            <!--<slot name="overwrite-title"/>-->
        <!--</div>-->
        <!--<div class="hx-header-right">-->
            <!--<a class="hx-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>-->
            <!--<slot name="right"/>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import objectAssign from 'object-assign'-->

    <!--export default {-->
        <!--name: 'h-header',-->
        <!--props: {-->
            <!--leftOptions: Object,-->
            <!--title: String,-->
            <!--transition: String,-->
            <!--rightOptions: {-->
                <!--type: Object,-->
                <!--default () {-->
                    <!--return {-->
                        <!--showMore: false-->
                    <!--}-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--beforeMount () {-->
            <!--if (this.$slots['overwrite-title']) {-->
                <!--this.shouldOverWriteTitle = true-->
            <!--}-->
        <!--},-->
        <!--computed: {-->
            <!--_leftOptions () {-->
                <!--return objectAssign({-->
                    <!--showBack: true,-->
                    <!--preventGoBack: false-->
                <!--}, this.leftOptions || {})-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--onClickBack () {-->
                <!--if (this._leftOptions.preventGoBack) {-->
                    <!--this.$emit('on-click-back')-->
                <!--} else {-->
                    <!--this.$router ? this.$router.back() : window.history.back()-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--data () {-->
            <!--return {-->
                <!--shouldOverWriteTitle: false-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style lang="less">-->
    <!--@import '../util/style/variable.less';-->

    <!--.hx-header {-->
        <!--position: relative;-->
        <!--padding: 3px 0;-->
        <!--box-sizing: border-box;-->
        <!--background-color: @header-background-color;-->
    <!--}-->
    <!--.hx-header .hx-header-title {-->
        <!--line-height: 40px;-->
        <!--text-align: center;-->
        <!--font-size: 18px;-->
        <!--font-weight: 400;-->
        <!--color: @header-title-color;-->
    <!--}-->
    <!--.hx-header-title-area, .hx-header .hx-header-title {-->
        <!--margin: 0 88px;-->
        <!--height: 40px;-->
        <!--width: auto;-->
        <!--overflow: hidden;-->
        <!--text-overflow: ellipsis;-->
        <!--white-space: nowrap;-->
    <!--}-->
    <!--.hx-header .hx-header-title > span {-->
        <!--display: inline-block;-->
    <!--}-->
    <!--.hx-header .hx-header-left,.hx-header .hx-header-right {-->
        <!--position: absolute;-->
        <!--top: 14px;-->
        <!--display: block;-->
        <!--font-size: 14px;-->
        <!--line-height: 21px;-->
        <!--color: @header-text-color;-->
    <!--}-->
    <!--.hx-header .hx-header-left a,.hx-header .hx-header-left button,.hx-header .hx-header-right a,.hx-header .hx-header-right button {-->
        <!--float: left;-->
        <!--margin-right: 8px;-->
        <!--color: @header-text-color;-->
    <!--}-->
    <!--.hx-header .hx-header-left a:active,.hx-header .hx-header-left button:active,.hx-header .hx-header-right a:active,.hx-header .hx-header-right button:active {-->
        <!--opacity: .5-->
    <!--}-->
    <!--.hx-header .hx-header-left {-->
        <!--left: 18px-->
    <!--}-->
    <!--.hx-header .hx-header-left .hx-header-back {-->
        <!--padding-left: 16px-->
    <!--}-->
    <!--.hx-header .hx-header-left .left-arrow {-->
        <!--position: absolute;-->
        <!--width: 30px;-->
        <!--height: 30px;-->
        <!--top: -5px;-->
        <!--left: -5px;-->

        <!--&:before {-->
            <!--content: "";-->
            <!--position: absolute;-->
            <!--width: 12px;-->
            <!--height: 12px;-->
            <!--border: 1px solid @header-arrow-color;-->
            <!--border-width: 1px 0 0 1px;-->
            <!--transform: rotate(315deg);-->
            <!--top: 8px;-->
            <!--left: 7px;-->
        <!--}-->
    <!--}-->
    <!--.hx-header .hx-header-right {-->
        <!--right: 15px-->
    <!--}-->
    <!--.hx-header .hx-header-right a,.hx-header .hx-header-right button {-->
        <!--margin-left: 8px;-->
        <!--margin-right: 0-->
    <!--}-->
    <!--.hx-header .hx-header-right .hx-header-more:after {-->
        <!--content: "\2022\0020\2022\0020\2022\0020";-->
        <!--font-size: 16px;-->
    <!--}-->
    <!--.hx-header-fade-in-right-enter-active {-->
        <!--animation: fadeinR .5s;-->
    <!--}-->
    <!--.hx-header-fade-in-left-enter-active {-->
        <!--animation: fadeinL .5s;-->
    <!--}-->
    <!--@keyframes fadeinR {-->
        <!--0% {-->
            <!--opacity: 0;-->
            <!--transform: translateX(150px);-->
        <!--}-->
        <!--100% {-->
            <!--opacity:1;-->
            <!--transform:translateX(0);-->
        <!--}-->
    <!--}-->
    <!--@keyframes fadeinL{-->
        <!--0% {-->
            <!--opacity: 0;-->
            <!--transform: translateX(-150px);-->
        <!--}-->
        <!--100% {-->
            <!--opacity: 1;-->
            <!--transform: translateX(0);-->
        <!--}-->
    <!--}-->
<!--</style>-->
