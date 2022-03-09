<!--
 * @Author: YeWei Wang
 * @Date: 2021-12-23 16:56:13
 * @WeChat: Studio06k4
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-09 19:35:06
 * @Version: vue3后台管理系统
 * @FilePath: \vue3-management-system\src\pages\root\root.vue
 * @Autor: YeWei Wang
-->

<template>
  <section class="section">
    <ul class="head-item-group">
      <li class="head-item">
        <el-icon>
          <Management />
        </el-icon>06k4 后台管理系统欢迎您
      </li>
      <li class="head-item">
        <el-icon>
          <Calendar />
        </el-icon>工作月报
      </li>
      <li class="head-item">
        <el-icon>
          <Platform />
        </el-icon>请假申请
      </li>
      <li class="head-item">
        <el-icon>
          <checked />
        </el-icon>待办事项
      </li>
      <li class="head-item">
        <el-icon>
          <folder />
        </el-icon>档案查询
      </li>
      <li class="head-item">
        <el-icon>
          <coffee />
        </el-icon>技术博客
      </li>

      <li class="head-item">
        <el-icon>
          <help-filled />
        </el-icon>内部云盘
      </li>
      <!-- <li>通知</li> -->
    </ul>

    <div class="root-container">
      <div class="container-left">
        <el-calendar v-model="DateValue">
          <template #dateCell="{ data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split('-').slice(2).join('-') }}
              {{ data.isSelected ? '✔️' : '' }}
            </p>
          </template>
        </el-calendar>
      </div>

      <div class="container-right">
        <div class="list-1">
          <span class="title">最新公告</span>

          <ul class="notice-list">
            <li class="notice">
              <span class="content">《后台管理系统维护通知》</span>
              <span class="info">
                <div class="date">2022/3/9 19:03</div>
              </span>
            </li>
          </ul>
        </div>
        <div class="list-2">
          <div class="title">正在进行中</div>

          <ul class="program-progresses">
            <li>
              <span class="name">06K4-vue:</span>
              <span class="progress">
                <el-progress :percentage="32" />
              </span>
            </li>

            <li>
              <span class="name">k4kit:</span>
              <span class="progress">
                <el-progress indeterminate :duration="4" :percentage="17" color="#FC427B" />
              </span>
            </li>

            <li>
              <span class="name">design-06k4:</span>
              <span class="progress">
                <el-progress :percentage="37" color="#BDC581" />
              </span>
            </li>
          </ul>
        </div>
        <div class="list-3">
          <span class="title">自定义事件</span>

          <ul class="events">
            <li>
              <div>GitHub提交打卡</div>
              <el-progress type="circle" status="success" :percentage="100" color="#BDC581" />
            </li>

            <li>
              <div>本月进度</div>
              <el-progress
                type="circle"
                status="success"
                :percentage="(9 / 30 * 100)"
                color="#82589F"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import {ref} from 'vue'
import {
  Management,
  Calendar,
  Platform,
  Checked,
  Folder,
  Coffee,
  HelpFilled
} from '@element-plus/icons-vue'
import { ElIcon, ElCalendar, ElProgress } from '../../plugins/element-plus'
import { ref } from 'vue'
const DateValue = ref<Date>(new Date())
</script>

<style lang="scss" scoped>
@import "../../assets/style/index.scss";

.section {
  padding: 16px 25px;
  background: $container-color;
  height: auto;
  .head-item-group {
    display: flex;

    .head-item {
      padding: 0 14px;
      border-radius: 5px;
      margin: 0 8px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $body-color;
      cursor: pointer;
      transition: 0.4s all ease-in-out;

      &:hover {
        color: $title-color;
      }
      .el-icon {
        font-size: 33px;
        font-weight: bold;
        cursor: pointer;
        display: inline-block;
        margin-right: 8px;
      }

      &:nth-child(1) {
        background: #f9ca24;

        &:hover {
          background: #f6e58d;
        }
      }

      &:nth-child(2) {
        background: #f0932b;

        &:hover {
          background: #ffbe76;
        }
      }

      &:nth-child(3) {
        background: #6ab04c;
        &:hover {
          background: #badc58;
        }
      }

      &:nth-child(4) {
        background: #130f40;
        &:hover {
          background: #30336b;
        }
      }
      &:nth-child(5) {
        background: #22a6b3;
        &:hover {
          background: #7ed6df;
        }
      }
      &:nth-child(6) {
        background: #535c68;
        &:hover {
          background: #95afc0;
        }
      }

      &:nth-child(7) {
        background: #be2edd;
        &:hover {
          background: #e056fd;
        }
      }
    }
  }

  .root-container {
    margin-top: 16px;
    display: flex;

    .container-left {
      width: 60%;
      background: $body-color;
      height: 680px;
      margin-right: 16px;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 1px 1px 3px $body-color;
      cursor: pointer;
    }

    .container-right {
      flex: 1;

      div {
        padding: 12px 6px;
        border-radius: 14px;
        cursor: pointer;
        box-shadow: 1px 1px 3px $body-color;
        background: #ffffff;
        .title {
          color: $title-color;
          font-weight: bolder;
        }
      }

      .list-1 {
        height: 240px;
        margin-bottom: 8px;

        .notice-list {
          .notice {
            margin: 16px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: nowrap;
            color: $text-color;
            height: 26px;
            // width: 100%;
            border-bottom: 1px dashed $text-color;

            .content {
              flex: 1;
            }
          }
        }
      }
      .list-2 {
        // height: 320px;
        margin-bottom: 8px;
        color: $text-color;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px 16px;

          .name {
            width: 135px;
            text-align: left;
          }

          .progress {
            flex: 1;
          }
        }
        // background: #30336b;
      }
      .list-3 {
        // height: 180px;
        // margin-bottom: 32px;
        // background: #6ab04c;

        ul {
          display: flex;

          li {
            div {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>