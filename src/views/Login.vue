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
    <AuthInput
      placeholder="请输入用户名/账号"
      type="text"
      :rule="/^.{6,}$/"
      errMsg="请输入正确的用户名"
    />
    <!-- 密码 -->
    <AuthInput
      placeholder="请输入密码"
      type="password"
      :rule="/^.{6,12}$/"
      errMsg="请输入正确密码"
    />

    <!-- 登录按钮 -->
    <AuthBtn btnText="登录" />
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
export default {
  components: {
    AuthInput,
    AuthBtn,
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
}
</style>