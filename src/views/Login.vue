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

    <CircleImg />
    <!-- 用户名 -->
    <AuthInput
      placeholder="请输入用户名/账号"
      type="text"
      :rule="/^.{5,11}$/"
      errMsg="请输入正确的用户名"
      @setValue="setUsername"
    />
    <!-- 密码 -->
    <AuthInput
      placeholder="请输入密码"
      type="password"
      :rule="/^.{3,12}$/"
      errMsg="请输入正确密码"
      @setValue="setPassword"
    />

    <!-- 登录按钮 -->
    <AuthBtn btnText="登录" @click.native="login" />
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
import CircleImg from "../components/CircleImg";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    AuthInput,
    AuthBtn,
    CircleImg,
  },

  methods: {
    setUsername(newValue) {
      this.username = newValue;
    },
    setPassword(newValue) {
      this.password = newValue;
    },
    login() {
      this.$axios({
        method: "post",
        url: "http://157.122.54.189:9083/login",
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        // console.log(res);
        if (res.status === 200) {
          this.$toast({
            message: res.data.message,
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
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