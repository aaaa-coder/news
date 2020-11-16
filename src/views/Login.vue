<template>
  <div>
    <h1>登录页面</h1>
    <!-- 子组件定义props定义了什么变量,父组件就用什么变量传递 -->
    <MyInput tips="请输入用户名" @send="showValue" />
    <MyInput tips="请输入账号" @send="showValue" />
    <MyInput tips="请输入密码" @send="showValue" />
    <span class="iconfont icondianzan"></span>
  </div>
</template>

<script>
import MyInput from "../components/MyInput";
export default {
  components: {
    MyInput,
  },
  methods: {
    showValue(val) {
      console.log("收到子组件的数据" + val);
    },
  },
};
</script>

<style>
</style>