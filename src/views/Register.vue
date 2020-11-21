<template>
  <div class="container">
    <!-- 关闭按钮 -->
    <div class="closeBtn">
      <i class="iconfont iconicon-test" @click="toIndex"></i>
    </div>
    <!-- 登录界面logo -->
    <div class="logoWrapper">
      <i class="iconfont iconnew"></i>
    </div>
    <CircleImg />
    <!-- 用户名 -->
    <AuthInput
      placeholder="请输入用户名"
      type="text"
      :rule="/^.{5,}$/"
      errMsg="请输入正确的用户名"
      @setValue="setUsername"
    />
    <!-- 昵称-->
    <AuthInput
      placeholder="请输入昵称"
      type="text"
      :rule="/^.{5,}$/"
      errMsg="请输入正确的昵称"
      @setValue="setNickname"
    />
    <!-- 密码 -->
    <AuthInput
      placeholder="请输入密码"
      type="password"
      :rule="/^.{5,12}$/"
      errMsg="请输入正确的密码"
      @setValue="setPassword"
    />

    <AuthBtn btnText="注册" @click.native="register" />
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
      nickname: "",
      password: "",
    };
  },
  components: {
    AuthInput,
    AuthBtn,
    CircleImg,
  },
  methods: {
    toIndex() {
      location.href = "/Home";
    },
    //子传父，应该用函数接收传递过来的值
    setUsername(newValue) {
      this.username = newValue;
    },
    setNickname(newValue) {
      this.nickname = newValue;
    },
    setPassword(newValue) {
      this.password = newValue;
    },

    register() {
      this.$axios({
        method: "post",
        url: "/register",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        },
      }).then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.$toast({
            message: res.data.message,
            position: "bottom",
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