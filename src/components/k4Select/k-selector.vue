<!--
 * @Autor: YeWei Wang
 * @Date: 2021-12-14 17:16:46
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 下拉选择框
 * @LastEditTime: 2021-12-17 20:09:01
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\components\k4Select\k-selector.vue
-->
<template>
  <div class="selector" v-foucs="vFoucs">
    <k-input :placeholder="placeholder"
             :value="inputValue"
             :lIcon="lIcon"
             :successInput="successInput"
             :warnInput="warnInput"
             :errorInput="errorInput" />
    <k-selector-menu
                     :options="options"
                     @setItemValue="setItemValue" />
    <!-- <h2>hello</h2> -->
  </div>
</template>

<script lang="ts" setup>
  import kInput from './k-input.vue';
  import vFoucs from './utils/foucs';
  import KSelectorMenu from './k-selector-menu.vue'
  import { reactive, toRefs, PropType } from 'vue';
  import { OptionProps } from './k-selector-menu.vue';
  const state = reactive({
    inputValue: ''
  })
  const { inputValue } = toRefs(state)

  defineProps({
    placeholder: {
      type: String
    },
    options: {
      type: Array as PropType < OptionProps[] >
    },
    lIcon: String,
    successInput: Boolean,
    warnInput: Boolean,
    errorInput: Boolean
  })

  const emit = defineEmits < {
    (e: 'setItemValue', value: string): void,

  } > ()
  const setItemValue = (item: OptionProps): void => {
    state.inputValue = item.text
    emit('setItemValue', item.value)
  }
</script>

<style lang="scss" scoped>
  .selector {
    position: relative;
    width: 300px;
  }
</style>