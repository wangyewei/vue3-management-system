<!--
 * @Autor: YeWei Wang
 * @Date: 2021-12-14 23:29:37
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: selector-menu
 * @LastEditTime: 2021-12-16 21:39:07
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\components\k4Select\k-selector-menu.vue
-->
<template>
  <div class="selector-menu">
    <div class="menu-item"
         v-for="item in options"
         :key="item.id"
         @click="setItemValue(item)">
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue'
  export interface OptionProps {
    id: number;
    value: string;
    text: string;
  }
  defineProps({
    options: {
      type: Array as PropType < OptionProps[] > ,
      default: () => [{
        id: 1,
        value: '1',
        text: '选项一'
      }, {
        id: 2,
        value: '2',
        text: '选项二'
      }, {
        id: 3,
        value: '3',
        text: '选项三'
      }]
    }
  })


  const emit = defineEmits(['setItemValue'])

  const setItemValue = (item: OptionProps) => {
    emit('setItemValue', item)
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style/index.scss';

  .selector-menu {
    position: absolute;
    width: 100%;
    top: 55px;
    // text-align: center;
    background: $container-color;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: .3s all ease-in-out;
    color: $title-color;
    height: 0px;
    overflow: hidden;
    z-index: 44;

    .menu-item {
      padding: 7px 0 7px 12px;
      margin: 7px 0;
      transition: .4s all linear;
      cursor: pointer;
      font-weight: $font-medium;


      &:hover {
        // color: $main-color-alt;
        background-color: $body-color;
      }
    }
  }
</style>