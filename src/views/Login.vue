<template>
  <div>
    <h1>登录页面</h1>
    <!-- 子组件定义props定义了什么变量,父组件就用什么变量传递 -->
    <MyInput tips="请输入用户名" />
    <MyInput tips="请输入账号" />
    <MyInput tips="请输入密码" />
  </div>
</template>

<script>
import MyInput from "../components/MyInput";
export default {
  components: {
    MyInput,
  },
};
</script>

<style>
</style>