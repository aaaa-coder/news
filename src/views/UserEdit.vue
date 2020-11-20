<template>
  <div class="container">
    <UserTop />
    <div class="user_info">
      <div class="topWrapper">
        <i class="iconfont iconjiantou2" @click="toPersonal"></i>
        <h4>编辑资料</h4>
      </div>
      <div class="userImg">
        <CircleImg />
      </div>
      <div class="content">
        <AuthOpeartion
          title="昵称"
          :content="nickname"
          @click.native="setNickName()"
          v-model="nickname"
        />
        <!-- 键盘输入框 -->
        <van-cell @touchstart.native.stop="show = true"> </van-cell>
        <van-number-keyboard
          :show="show"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />

        <AuthOpeartion title="密码" :content="password" />
        <AuthOpeartion title="性别" :content="(gender = 1 ? '女' : '男')" />
      </div>
    </div>
  </div>
</template>

<script>
import UserTop from "../components/UserTop";
import CircleImg from "../components/CircleImg";
import AuthOpeartion from "../components/AuthOpeartion";
export default {
  data() {
    return {
      nickname: "",
      gender: "",
      username: "",
      password: "",
      userImg: "",
      show: false,
    };
  },
  components: {
    UserTop,
    CircleImg,
    AuthOpeartion,
  },
  methods: {
    //拿到用户数据，进行渲染
    getUserInfo() {
      console.log(this.$route.query);
      const { userData } = this.$route.query;
      console.log(userData);
      this.nickname = this.$route.query.nickname;
      this.gender = this.$route.query.gender;
      this.username = this.$route.query.username;
      this.password = this.$route.query.password;
      this.userImg = this.$route.query.userImg;
      // console.log(this.nickname, this.password);
    },
    onInput(value) {
      this.$toast(value);
    },
    onDelete() {
      this.$toast("删除");
    },
    //设置
    setNickName(key) {
      this.show = true;
    },
    //跳往个人中心
    toPersonal() {
      this.$router.push("/personal");
    },
    //编辑用户信息
    editUserInfo() {
      const id = localStorage.getItem("userId");
      this.$axios({
        method: "post",
        url: `http://157.122.54.189:9083/user_update/${id}`,
        data: {
          username,
          password,
          password,
          userImg,
          gender,
        },
      });
    },
  },
  //
  watch: {
    content(newContent) {
      console.log(newContent);
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style lang="less" scoped>
.user_info {
  padding: 20 /360 * 100vw;
}
.topWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin-right: 120 /360 * 100vw;
  }
}
.userImg {
  //   text-align: center;
  display: flex;
  justify-content: center;
  margin: 30 /360 * 100vw 0;
}
</style>