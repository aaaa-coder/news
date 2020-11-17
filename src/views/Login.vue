<template>
  <div class="container">
    <!-- 关闭按钮 -->
    <div class="closeBtn">
      <i class="iconfont iconicon-test"></i>
    </div>
    <!-- 登录界面logo -->
    <div class="logoWrapper">
      <i class="iconfont iconnew"></i>
    </div>
    <!-- 用户名 -->
    <AuthInput placeholder="请输入用户名/账号" type="text" :rule="/^.{6,}$/" />
    <!-- 密码 -->
    <AuthInput placeholder="请输入密码" type="password" :rule="/^.{6,}$/" />

    <!-- 登录按钮 -->
    <button class="btn">登录</button>
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
export default {
  components: {
    AuthInput,
  },
};
</script>

<style lang="less">
.container {
  padding: 20 /360 * 100vw;
  // 登录页面关闭按钮
  .iconicon-test {
    font-size: 27 /360 * 100vw;
  }
  // 登录页面logo
  .logoWrapper {
    text-align: center;
    .iconnew {
      font-size: 126 /360 * 100vw;
      color: #d81e06;
    }
  }
  // 登录按钮样式
  .btn {
    width: 100%;
    height: 48 /360 * 100vw;
    margin-top: 50 /360 * 100vw;
    border: 0;
    color: #fff;
    font-size: 20 /360 * 100vw;
    background-color: #cc3300;
    border-radius: 24 /360 * 100vw;
  }
}
</style>