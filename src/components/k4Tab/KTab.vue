<!--
 * @Author: YeWei Wang
 * @Date: 2021-12-23 16:07:48
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 控制栏
 * @LastEditTime: 2021-12-23 22:52:42
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\components\k4Tab\KTab.vue
 * @Autor: YeWei Wang
-->

<template>

  <header class="header-container">
    <div class="header-l">06k4 后台管理系统</div>
    <div class="header-r">
      <span class="header-img"></span>
      <span class="header-name">Yewei_Wang</span>
    </div>
  </header>
  <aside class="tab-container">
    <ul class="tab-content">
      <li class="tab-item"
          v-for="item in options"
          :key="item.path"
          @click="linkTo(item.path)">
        {{item.name}}
      </li>
    </ul>


    <div class="tab-content-phone">
      <div class="tab-left">{{currRoute}}</div>

      <div class="tab-right" @click="tabToggle">Menu</div>


    </div>

    <ul class="tablist-phone"
        :class="{'open': isToggle}">
      <li class="tab-item"
          v-for="item in options"
          :key="item.path"
          @click="linkTo(item.path, item.name)">
        {{item.name}}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
  import { PropType, ref } from 'vue';
  import { Tablist } from '@/pages/home/types';
  import { useRouter } from 'vue-router';

  defineProps({
    options: {
      type: Array as PropType < Tablist[] > ,
    }
  })
  const router = useRouter()



  let isToggle = ref < boolean > (false)

  const tabToggle = (): void => {
    isToggle.value = !isToggle.value
  }

  let currRoute = ref < string > ('首页')
  const linkTo = (path: string, name ? : string): void => {
    router.push(path)
    name && (currRoute.value = name)
    tabToggle()
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style/index.scss';

  .header-container {
    width: 100%;
    height: 60px;
    // border: 1px solid red;
    display: flex;
    // justify-content: center;
    align-items: center;
    padding: 0 60px;
    background-color: $tab-body-select-color;
    overflow: hidden;

    .header-l {
      flex: 1;
      color: $body-color;
      font-size: $h3-font-size;
      font-weight: $font-semo-bold;
    }

    .header-r {
      // w100%
      flex: 1;
      text-align: right;
      color: $body-color;
      display: flex;
      align-items: center;
      justify-content: right;
      // border: 1px solid red;

      .header-img {
        width: 36px;
        height: 36px;
        display: inline-block;
        background: #000;
        margin: 26px;
        border-radius: 100%;
      }
    }
  }


  .tab-container {
    width: 200px;
    height: calc(100vh - 60px);
    // overflow: hidden;
    // border: 1px solid red;
    background-color: $tab-body-color;
    // box-shadow: 4px 1px 3px #ddd;
    padding: $mb-3 0;
    box-sizing: border-box;
    display: inline-block;
    // border: 1px solid red;


    .tab-content {
      text-align: center;
      color: $title-color;

      .tab-item {
        padding: 20px 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: .1s all ease-in-out;

        &.select {
          background-color: $tab-body-select-color;
          color: $body-color;
        }
      }
    }
  }


  .tab-content-phone {
    // display: none;
    // border: 1px solid red;
    color: #fff;

    padding: 0 25px;

    .tab-left {
      width: 50%;
      display: inline-block;
      text-align: center;
    }

    .tab-right {
      // border: 1px solid red;
      width: 50%;
      display: inline-block;
      text-align: right;
    }


  }

  .tablist-phone {
    display: none;
    position: absolute;
    width: 100%;
    height: calc(100vh - 120px);
    top: calc(-100vh + 120px);
    background-color: $tab-body-color;
    right: -100vw;
    padding: 24px 0;
    text-align: center;
    box-shadow: 1px 1px 1px #ddd;
    transition: .3s right linear;


    .tab-item {
      // border: 1px solid red;
      width: 100%;
      padding: 10px 0;
    }
  }

  .open {
    right: 0;
  }

  @media (max-width: 870px) {
    .tab-container {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      z-index: 999;

      // display: flex;
      .tab-content {
        display: flex;

        .tab-item {
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 570px) {
    .header-container {
      padding: 0px 14px;

      .header-r {
        // border: 1px solid red;

        .header-name {
          display: none;
        }
      }
    }

    .tab-content {
      display: none !important;
    }

    .tablist-phone {
      display: block !important;
    }
  }
</style>