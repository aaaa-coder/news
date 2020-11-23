<template>
  <div class="container">
    <UserTop />
    <ProfileTitle title="编辑资料" />
    <div class="userImg">
      <CircleImg />
    </div>
    <div class="content">
      <AuthOpeartion
        title="昵称"
        :content="nickname"
        @click.native="setNickName()"
      />
      <AuthOpeartion title="密码" :content="password" />
      <AuthOpeartion title="性别" :content="(gender = 1 ? '男' : '女')" />
    </div>
  </div>
</template>

<script>
import UserTop from "@/components/UserTop";
import CircleImg from "@/components/CircleImg";
import AuthOpeartion from "@/components/AuthOpeartion";
import ProfileTitle from "@/components/ProfileTitle";
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
    ProfileTitle,
  },
  methods: {
    //拿到用户数据，进行渲染
    getUserInfo() {
      this.nickname = this.$route.query.nickname;
      this.gender = this.$route.query.gender;
      this.username = this.$route.query.username;
      this.password = this.$route.query.password;
      this.userImg = this.$route.query.userImg;
    },
    //设置
    setNickName(key) {
      this.show = true;
    },
    //编辑用户信息
    editUserInfo() {
      const id = localStorage.getItem("userId");
      this.$axios({
        method: "post",
        url: `/user_update/${id}`,
        data: {
          username,
          password,
          nickname,
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

.userImg {
  //   text-align: center;
  display: flex;
  justify-content: center;
  margin: 30 /360 * 100vw 0;
}
</style>