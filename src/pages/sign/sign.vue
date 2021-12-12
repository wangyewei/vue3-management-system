<!--
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 23:24:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-12-10 20:04:11
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\pages\sign\sign.vue
-->
<template>
  <div class="container" :class="{'sign-up-mode': animation.animate.value}">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <font-awesome-icon fas icon="user" class="icon" />
            <input type="text" v-model="signIn.user" placeholder="用户名" />
          </div>
          <div class="input-field warn-input">
            <font-awesome-icon fas icon="key" class="icon" />
            <input type="password" v-model="signIn.pwd" placeholder="密码" />
          </div>
          <p class="warntag" v-if="false">请输入用户名!</p>
          <!-- <p class="warntag" v-if="true">用户名或密码错误！</p> -->
          <button class="btn solid" @click.prevent="signIn.submit">登录</button>
          <tag />
        </form>
        <form action="#" class="sign-up-form" v-if="register.step === 1">
          <h2 class="title"><span style="font-size: 23px; font-weight: lighter;">1/4.</span> 注册</h2>
          <div class="input-field"
               :class="{'error-input': register.userValid === 1 || register.userValid === 2 || register.userValid === 4,   
               'success-input': register.userValid == 3}">
            <font-awesome-icon fas icon="user" class="icon" />
            <input type="text"
                   v-model="register.user"
                   placeholder="用户名"
                   @input="register.checkUserValid"
                   @blur="register.checkUserValid" />
            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="register.userValid == 1 || register.userValid == 2 || register.userValid == 4" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="register.userValid == 3" />
          </div>
          <p class="warntag" v-if="register.userValid == 1">请输入用户名</p>
          <p class="warntag" v-if="register.userValid == 2">用户名长度为6-12位字符，只能包括字母，数字，下划线</p>
          <p class="warntag" v-if="register.userValid == 4">用户名被占用</p>
          <div class="input-field"
               :class="{'error-input': register.emailValid == 1 || register.emailValid == 2 || register.emailValid == 4, 
               'success-input': register.emailValid == 3}">
            <font-awesome-icon fas icon="envelope" class="icon" />
            <input
                   type="email"
                   v-model="register.email"
                   placeholder="邮箱"
                   @input="register.checkEmailValid"
                   @blur="register.checkEmailValid" />
            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="register.emailValid == 1 || register.emailValid == 2 || register.emailValid == 4" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="register.emailValid == 3" />
          </div>

          <p class="warntag" v-if="register.emailValid == 1">请输入邮箱</p>
          <p class="warntag" v-if="register.emailValid == 2">邮箱格式错误</p>
          <p class="warntag" v-if="register.emailValid == 4">邮箱被占用</p>
          <div class="input-field"
               :class="{'error-input': register.pwdValid == 1 || register.pwdValid == 2, 
               'success-input': register.pwdValid == 3}">
            <font-awesome-icon fas icon="key" class="icon" />
            <input type="password"
                   v-model="register.pwd"
                   placeholder="密码"
                   @input="register.checkPwdValid"
                   @blur="register.checkPwdValid" />

            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="register.pwdValid == 1 || register.pwdValid == 2" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="register.pwdValid == 3" />
          </div>

          <p class="warntag" v-if="register.pwdValid == 1">请输入密码</p>
          <p class="warntag" v-if="register.pwdValid == 2">最少6位，至少包括1个小写字母，1个数字，1个特殊字符</p>

          <button class="btn"
                  @click.prevent="register.formJudge"
                  :class="{'disabled-btn': register.countDown !== 0}"
                  :disabeld="register.countDown !== 0">
            <span v-if="!register.isLoading"><span v-if="register.countDown !== 0">{{register.countDown}}后</span>下一步</span>
            <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" />
          </button>
          <tag />

        </form>
        <form action="#" class="sign-up-form" v-if="register.step === 2">
          <h2 class="title"><span style="font-size: 23px; font-weight: lighter;">2/4.</span> 邮箱验证</h2>

          <div class="input-field"
               :class="{'error-input': [1, 2].includes(register.emailVertifyStatus), 
               'success-input': register.emailVertifyStatus == 3}">
            <font-awesome-icon fas icon="key" class="icon" />
            <input type="text"
                   v-model="register.emailVertifycode"
                   placeholder="请输入验证码"
                   @input="register.emailVertifyCodeJudge" />
            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="[1, 2].includes(register.emailVertifyStatus)" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="register.emailVertifyStatus == 3" />
          </div>

          <p class="warntag" v-if="register.emailVertifyStatus == 1">请输入6位验证码</p>
          <p class="warntag" v-if="register.emailVertifyStatus == 2">验证码错误</p>

          <div class="btns">
            <button class="btn"
                    @click.prevent="register.backone">
              <span>上一步</span>
              <!-- <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" /> -->
            </button>

            <button class="btn"
                    :class="{'disabled-btn': [0, 1].includes(register.emailVertifyStatus)}"
                    @click.prevent="register.emailVertifyCodeNext">
              <span v-if="!register.isLoading">下一步</span>
              <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" />
            </button>

            <button class="btn"
                    :class="{'disabled-btn': register.countDown !== 0}"
                    @click.prevent="register.formJudge"
                    :disabled="register.countDown !== 0">
              <span><span v-if="register.countDown !== 0">{{register.countDown}}后</span>重新发送</span>
              <!-- <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" /> -->
            </button>
          </div>
          <tag />
        </form>
      </div>
    </div>
    <paneles />
  </div>
</template>
<script setup lang="ts">
  import paneles from './components/paneles.vue';
  import tag from './components/tag.vue';
  import { signIn, animation, register } from './index'
</script>

<style lang="scss" scoped>
  @import '/src/assets/style/variable';
  @import './assets/style/public';
  @import './assets/style/index';
</style>