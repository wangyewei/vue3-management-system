<!--
 * @Autor: YeWei Wang
 * @Date: 2021-12-14 17:24:21
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-17 20:14:03
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\components\k4Select\k-input.vue
-->

<template>
  <!-- <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input type="text" class="input">
    <font-awesome-icon fas icon="sort-down" class="icon" />
  </div> -->

  <div class="input-field"
       :class="{'input-field-success': successInput,
                'input-field-warn': warnInput,
                'input-filed-error': errorInput}">
    <font-awesome-icon fas :icon="lIcon" class="icon" />
    <label class="placeholder">{{ placeholder }}</label>
    <input type="text" class="selector-input" :value="inputValue" />
    <font-awesome-icon fas icon="sort-down" class="icon arrow-icon" />
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    placeholder: {
      type: String,
      default: '请选择'
    },
    inputValue: String,
    lIcon: {
      type: String,
      default: 'mouse-pointer'
    },
    successInput: Boolean,
    warnInput: Boolean,
    errorInput: Boolean
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/style/index.scss';

  .input-field {
    max-width: 380px;
    width: 100%;
    background-color: $container-color;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    padding: 0 0.4rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $container-color;
    transition: .3s all ease-in-out;

    .placeholder {
      color: $title-color;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 55px;
      font-weight: 500;
      font-size: 1.1rem;
      transition: .3s all ease-in-out;
    }

    .icon {
      text-align: center;
      line-height: 55px;
      color: #acacac;
      transition: 0.5s;
      font-size: 1.1rem;
      display: inline-block;
      margin: 0 20px;
      transition: .3s all ease-in-out;
      // transform: rotate(10deg);

      &.arrow-icon {
        // transform: scale();
        transform: rotate(-90deg);

        &.arrow-drop {
          transform: rotate(0deg);
        }
      }
    }

    input {
      background: none;
      outline: none;
      border: none;
      line-height: 1;
      font-weight: 600;
      font-size: 1.1rem;
      color: $title-color;
      // visibility: hidden;
      // width: 240px;
      height: 100%;
      position: absolute;
      text-align: center;
      cursor: pointer;
    }
  }

  .input-filed-drop {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .input-field-success {
    border: 2px solid $success-color;
  }

  .input-field-warn {
    border: 2px solid $warn-color;
  }

  .input-filed-error {
    border: 2px solid $error-color;
  }
</style>