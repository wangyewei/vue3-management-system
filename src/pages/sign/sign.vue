<!--
 * @Autor: YeWei Wang
 * @Date: 2021-11-29 23:24:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 登陆注册页
 * @LastEditTime: 2021-12-23 19:51:48
 * @Version: 1.0
 * @FilePath: \vue3-management-system\src\pages\sign\sign.vue
-->
<template>
  <div class="container" :class="{'sign-up-mode': animation.animate.value}">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <h2 class="title">登录</h2>
          <div class="input-field"
               :class="{'error-input': [1, 3].includes(signIn.userValid.value),   
               'success-input': signIn.userValid.value == 2}">
            <font-awesome-icon fas icon="user" class="icon" />
            <input type="text"
                   v-model="signIn.user.value"
                   placeholder="用户名"
                   @input="signIn.userJudge"
                   @blur="signIn.userJudge" />
            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="[1, 3].includes(signIn.userValid.value)" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="signIn.userValid.value == 2" />
          </div>
          <p class="warntag" v-if="signIn.userValid.value === 1">请输入用户名!</p>
          <div class="input-field"
               :class="{'error-input': [1, 3].includes(signIn.pwdValid.value),   
               'success-input': signIn.pwdValid.value == 2}">
            <font-awesome-icon fas icon="key" class="icon" />
            <input type="password"
                   v-model="signIn.pwd.value"
                   placeholder="密码"
                   @input="signIn.pwdJudge"
                   @blur="signIn.pwdJudge" />
            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="[1, 3].includes(signIn.pwdValid.value)" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="signIn.pwdValid.value == 2" />
          </div>
          <p class="warntag" v-if="signIn.pwdValid.value === 1">请输入密码!</p>
          <p class="warntag" v-if="signIn.userValid.value === 3">用户名或密码错误!</p>
          <!-- <button class="btn solid" @click.prevent="signIn.submit">登录</button> -->
          <button class="btn solid"
                  @click.prevent="signIn.submit">
            <span v-if="!signIn.isLoading.value">登录</span>
            <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="signIn.isLoading.value" />
          </button>
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
        <form action="#" class="sign-up-form" v-if="register.step === 3">
          <h2 class="title"><span style="font-size: 23px; font-weight: lighter;">3/4.</span> 详细资料</h2>

          <div class="input-field"
               :class="{'error-input': [1, 2].includes(register.nameStatus), 
               'success-input': register.nameStatus == 3}">
            <font-awesome-icon fas icon="pen-fancy" class="icon" />
            <input type="text"
                   v-model="register.name"
                   placeholder="请输入您的真实姓名"
                   @input="register.checkNameValid" />
            <font-awesome-icon fas icon="times-circle" class="icon icon-error" v-if="[1, 2].includes(register.nameStatus)" />
            <font-awesome-icon fas icon="check-circle" class="icon icon-success" v-if="register.nameStatus == 3" />
          </div>

          <p class="warntag" v-if="register.emailVertifyStatus == 1">请输入姓名</p>

          <div class="sex-check">
            <k-selector :placeholder="placeholer"
                        @setItemValue="setItemValue"
                        :options="options"
                        lIcon="venus-mars"
                        :errorInput="sexJudge === 1"
                        :successInput="sexJudge === 2" />
          </div>


          <div class="title-check">
            <k-selector :placeholder="titlePlaceholder"
                        @setItemValue="setTitleValue"
                        :options="titleOptions"
                        lIcon="id-badge"
                        :errorInput="titleJudge === 1"
                        :successInput="titleJudge === 2" />
          </div>

          <div class="btns">
            <button class="btn"
                    @click.prevent="register.backone">
              <span>上一步</span>
              <!-- <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" /> -->
            </button>

            <button class="btn"
                    :class="{'disabled-btn': [0, 1].includes(titleJudge)}"
                    @click.prevent="informationSubmit">
              <span v-if="!register.isLoading">下一步</span>
              <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" />
            </button>

          </div>
          <tag />
        </form>
        <form action="#" class="sign-up-form" v-if="register.step === 4">
          <h2 class="title"><span style="font-size: 23px; font-weight: lighter;">4/4.</span> 用户协议</h2>


          <div class="agreement-content">
            <span>
              <kCheckbox @agrrement="agreementCheck" />
            </span>
            <span @click="toAgreement">我已仔细阅读并同意<span class="agreement">用户注册协议与隐私政策</span></span>
          </div>

          <div class="btns">
            <button class="btn"
                    @click.prevent="register.backone">
              <span>上一步</span>
              <!-- <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" /> -->
            </button>

            <button class="btn"
                    :class="{'disabled-btn': !isAgreement}"
                    @click.prevent="signupSubmit">
              <span v-if="!register.isLoading">完成</span>
              <font-awesome-icon fas icon="spinner" class="loading-icon" v-if="register.isLoading" />
            </button>

          </div>
          <tag />
        </form>
        <form action="#" class="sign-up-form" v-if="register.step === 5">
          <h2 class="title"><span style="font-size: 23px; font-weight: lighter;"></span> 您已完成注册</h2>
          <p class="text">您已完成注册申请，请耐心等待审核通过，我们会通过邮箱告知您的注册进度，请保持关注。</p>
          <p class="text">回到官网<span @click="toWebSite">https://06k4.com</span></p>
          <tag />
        </form>
      </div>
    </div>
    <paneles />
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref, toRefs, watch } from 'vue'
  import paneles from './components/paneles.vue';
  import kSelector from '@/components/k4Select/k-selector.vue';
  import tag from './components/tag.vue';
  import { signIn, animation, register } from './index'
  import kCheckbox from '@/components/k4Checkbox/k-checkbox.vue';
  import { BuildUser } from '@/service/types';
  import { postBuildUser } from '@/service/network';
  import { useRouter } from 'vue-router';
  ///////////////////////////////////////////////

  const state = reactive({
    sexJudge: 0,
    titleJudge: 0
  })

  const { sexJudge, titleJudge } = toRefs(state)
  let placeholer = ref < string > ('请选择您的性别')

  const setItemValue = (value: string) => {
    Number(value) === 0 ? placeholer.value = '女' : placeholer.value = '男'
    sexJudge.value = 2
  }

  const options = [
    { id: 0, value: '0', text: '女' },
    { id: 1, value: '1', text: '男' }
  ]
  //////////////////////////////////////////////

  let titlePlaceholder = ref < string > ('请选择您的部门')

  const setTitleValue = (value: string) => {
    titleJudge.value = 2
    titlePlaceholder.value = value
  }
  const titleOptions = [
    { id: 0, value: '技术部', text: '技术部' },
    { id: 1, value: '行政部', text: '行政部' },
    { id: 2, value: '财务部', text: '财务部' },
    { id: 3, value: '招商部', text: '招商部' },
    { id: 4, value: '法务部', text: '法务部' },
  ]
  /////////////////////////////////////////////


  const informationSubmit = (): void => {

    if (sexJudge.value !== 2) {
      sexJudge.value = 1
    }

    if (titleJudge.value !== 2) {
      titleJudge.value = 1
    }

    if (register.nameStatus === 3 && titleJudge.value === 2 && sexJudge.value === 2) {
      register.step = 4
    }
  }
  ///////////////////////////
  const toAgreement = (): void => {
    window.open('/src/pages/sign/components/agreement.html', '_blank')
  }

  let isAgreement = ref < boolean > (false)

  const agreementCheck = (isCheck: boolean) => {
    isAgreement.value = isCheck
  }

  const signupSubmit = () => {
    if (!isAgreement.value) return false

    const data: BuildUser = {
      user: register.user,
      email: register.email,
      pwd: register.pwd,
      name: register.name,
      title: titlePlaceholder.value,
      sex: placeholer.value === '男' ? 1 : 0
    }

    postBuildUser(data).then(res => {
      if (res.status === 200) {
        register.step++

        setTimeout(() => {
          register.step = 1
        }, 10000)
      }
    })
  }

  const toWebSite = () => {
    window.open('https://06k4.com', '_blank')
  }

  ////// 不可抽离 /////////
  const router = useRouter()
  watch(signIn.routerIsReady, () => {
    if (signIn.routerIsReady.value) {
      router.push({
        path: '/home'
      })
    }
  })
  ////////////////////////
</script>

<style lang="scss" scoped>
  @import '/src/assets/style/variable';
  @import './assets/style/public';
  @import './assets/style/index';
</style>