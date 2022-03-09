<!--
 * @Author: YeWei Wang
 * @Date: 2021-12-23 11:33:05
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-09 17:04:14
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\home\home.vue
 * @Autor: YeWei Wang
-->

<template>
  <main class="main">
    <KHeader />

    <div class="main-content">
      <div class="main-tab">
        <el-menu
          default-active="1-1"
          class="tab-container"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          width="300px"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <template #title>
                <span>Group One</span>
              </template>
              <el-menu-item index="1-1" @click="routerTo('/home/root')">概览</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>
                <span>item four</span>
              </template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2" @click="routerTo('/home/part')">
            <el-icon>
              <Briefcase />
            </el-icon>
            <template #title>部门</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <BellFilled />
            </el-icon>
            <template #title>内部交流</template>
          </el-menu-item>
          <el-menu-item index="4" @click="routerTo('/home/notice')">
            <el-icon>
              <chat-dot-round />
            </el-icon>
            <template #title>公告发布</template>
          </el-menu-item>

          <div class="toggle-btn">
            <el-icon v-if="isCollapse === true" @click="isCollapse = !isCollapse">
              <arrow-right-bold />
            </el-icon>
            <el-icon v-else @click="isCollapse = !isCollapse">
              <arrow-left-bold />
            </el-icon>
          </div>
        </el-menu>
      </div>
      <!-- <k-tab :options="tablist" /> -->
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>

import {
  HomeFilled,
  Briefcase,
  BellFilled,
  ChatDotRound,
  ArrowRightBold,
  ArrowLeftBold
} from '@element-plus/icons-vue'

import {
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElIcon
} from '../../plugins/element-plus'
import KHeader from './components/k-header.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const routerTo = (path: string) => {
  router.push(path)
}

let isCollapse = ref<boolean>(true)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
@import "../../assets/style/index.scss";

.main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  .main-content {
    display: flex;
    height: calc(100vh - 6vh);
    .main-tab {
      max-width: 200px;
      .tab-container {
        background: $main-color;
        color: $body-color;
        box-shadow: 2px 1.4px 3px $main-color-alt;
        border: none;
        height: calc(100vh - 6vh);
        position: relative;

        .el-menu-item.is-active {
          background: $main-color-alt;
        }

        .el-sub-menu__title,
        .el-menu-item {
          color: $body-color;

          &:hover {
            background: $main-color-alt;
          }
        }

        .el-menu-item-group {
          // color: $body-color;

          .el-menu-item.is-active {
            background: $main-color !important;
          }
          .el-menu-item {
            color: $container-color !important;
            // color: $body-color;
            &:hover {
              background: $main-color;
            }
          }
        }
        .el-menu {
          background: $main-color-alt;
          .el-sub-menu__title {
            &:hover {
              background: $main-color;
            }
          }
          .el-menu-item {
            color: $title-color;
            color: $body-color;
            &:hover {
              background: $main-color;
            }
          }
        }

        .toggle-btn {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 6vh;

          .el-icon {
            cursor: pointer;
            // margin-top: 40px;
            font-size: 25px;
          }
        }
      }

      .tab-container:not(.el-menu--collapse) {
        width: 200px;
      }
    }

    .main-container {
      flex: 1;
    }
  }
}

// @media (max-width: 870px) {
//   .main-content {
//     width: 100%;
//     height: calc(100vh - 120px);
//   }
// }
</style>