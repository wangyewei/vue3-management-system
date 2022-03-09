<!--
 * @Author: YeWei Wang
 * @Date: 2021-12-17 21:09:52
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-21 16:02:47
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\components\k4Checkbox\k-checkbox.vue
 * @Autor: YeWei Wang
-->
<template>
  <div class="cb-container">
    <input type="checkbox" id="checkbox">
    <label for="checkbox" class="cb-label" @click="check"></label>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const emit = defineEmits < {
    (e: 'agrrement', value: boolean): void,
  } > ()

  const isCheck = ref < boolean > (false)
  const check = () => {
    isCheck.value = !isCheck.value
    emit('agrrement', isCheck.value)
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style/index.scss';
  $checked-color: $body-color;
  $checked-bg:$main-color;
  $unchecked-color: $disabled-color;
  $unchecked-bg: none;
  $checkbox-height: 24px;
  $background-color:#fff;
  $font-color:$title-color;
  $duration: .4s;

  .cb-container {
    text-align: center;
    display: inline-block;
  }

  #checkbox {
    display: none;
  }

  .cb-label {
    border-radius: 6px;
    height: $checkbox-height;
    width: $checkbox-height;
    background: $unchecked-bg;
    border: $checkbox-height * .1 solid $unchecked-color;
    position: relative;
    // overflow: hidden;
    display: inline-block;
    box-sizing: border-box;
    transition: border-color ease calc($duration/2);
    -moz-transition: border-color ease calc($duration/2);
    -o-transition: border-color ease calc($duration/2);
    -webkit-transition: border-color ease calc($duration/2);
    cursor: pointer;

    &::before,
    &::after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      height: 0;
      width: $checkbox-height * 0.2;
      background: $checked-color;
      display: inline-block;
      -moz-transform-origin: left top;
      -ms-transform-origin: left top;
      -o-transform-origin: left top;
      -webkit-transform-origin: left top;
      transform-origin: left top;
      content: '';
      -webkit-transition: opacity ease 0.5s;
      -moz-transition: opacity ease 0.5s;
      transition: opacity ease 0.5s;
    }

    &::before {
      top: $checkbox-height * 0.76;
      left: $checkbox-height * 0.31;
      -moz-transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }

    &::after {
      top: $checkbox-height * .45;
      left: $checkbox-height * 0;
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }

  input[type=checkbox]:checked+.cb-label,
  .cb-label.checked {

    background: $checked-bg;
    border-color: $checked-bg;

    &::after {
      border-color: $checked-color;
      height: $checkbox-height * .35;
      -moz-animation: dothabottomcheck calc($duration/2) ease 0s forwards;
      -o-animation: dothabottomcheck calc($duration/2) ease 0s forwards;
      -webkit-animation: dothabottomcheck calc($duration/2) ease 0s forwards;
      animation: dothabottomcheck calc($duration/2) ease 0s forwards;
    }

    &::before {
      border-color: $checked-color;
      height: $checkbox-height * 1;
      -moz-animation: dothatopcheck $duration ease 0s forwards;
      -o-animation: dothatopcheck $duration ease 0s forwards;
      -webkit-animation: dothatopcheck $duration ease 0s forwards;
      animation: dothatopcheck $duration ease 0s forwards;
    }

  }

  @-moz-keyframes dothabottomcheck {
    0% {
      height: 0;
    }

    100% {
      height: $checkbox-height *0.35;
    }
  }

  @-webkit-keyframes dothabottomcheck {
    0% {
      height: 0;
    }

    100% {
      height: $checkbox-height *0.35;
    }
  }

  @keyframes dothabottomcheck {
    0% {
      height: 0;
    }

    100% {
      height: $checkbox-height *0.35;
    }
  }

  @keyframes dothatopcheck {
    0% {
      height: 0;
    }

    50% {
      height: 0;
    }

    100% {
      height: $checkbox-height * 0.7;
    }
  }

  @-webkit-keyframes dothatopcheck {
    0% {
      height: 0;
    }

    50% {
      height: 0;
    }

    100% {
      height: $checkbox-height * 0.7;
    }
  }

  @-moz-keyframes dothatopcheck {
    0% {
      height: 0;
    }

    50% {
      height: 0;
    }

    100% {
      height: $checkbox-height * 0.7;
    }
  }
</style>