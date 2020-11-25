<template>
  <div class="container">
    <!-- 头部的阴影部分 -->
    <UserTop />
    <!-- 用户信息模块 -->
    <div class="userInfo">
      <!-- 用户信息左侧 -->
      <div class="userInfo_left">
        <CircleImg />
      </div>
      <!-- 用户中间部分信息 -->
      <div class="userInfo_center">
        <i
          :class="{
            iconfont: true,
            iconxingbienan: !isMan,
            iconxingbienv: isMan,
          }"
        ></i>
        <span class="user_nickname">{{ nickname }}</span>
        <div class="user_birthday">2019-10-10</div>
      </div>
      <!-- 用户信息中的右边箭头 -->
      <div class="userInfo_right">
        <i class="iconfont iconjiantou1" @click="toUserEdit"></i>
      </div>
    </div>
    <!-- 下面的内容部分 -->
    <div class="content">
      <AuthOpeartion
        title="我的关注"
        content="关注的内容"
        @click.native="toFocus"
      />
      <AuthOpeartion title="我的跟帖" content="跟帖/回复" />
      <AuthOpeartion title="我的收藏" content="文章/视频" />
      <AuthOpeartion title="设置" />
    </div>
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
import AuthOpeartion from "@/components/AuthOpeartion";
export default {
  data() {
    return {
      nickname: "",
      gender: "",
      username: "",
      password: "",
      isMan: true,
      userImg: "",
    };
  },
  components: {
    CircleImg,
    AuthOpeartion,
  },
  methods: {
    //
    toUserEdit() {
      this.$router.push({
        name: "userEdit",
        query: {
          nickname: this.nickname,
          gender: this.gender,
          username: this.username,
          password: this.password,
          userImg: this.userImg,
        },
      });
    },
    toFocus() {
      this.$router.push("/userFocus");
    },
    getUserInfo() {
      const id = localStorage.getItem("userId");
      this.$axios({
        method: "get",
        url: `/user/${id}`,
        //问号的形式才能用这个，:是需要直接拼接
        // params: { id },
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          // console.log(data);
          this.nickname = data.nickname;
          this.gender = data.gender;
          this.password = data.password;
          this.username = data.username;
          // console.log(this.nickname, this.gender, this.password, this.username);
          if (data.gender === 1) {
            this.isMan = false;
          } else {
            this.isMan = true;
          }
        }
      });
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style lang="less" scoped>
.userInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120 /360 * 100vw;
  padding: 10 /360 * 100vw;
  border-bottom: 5px solid #ccc;
  .userInfo_center {
    // height: 50 /360 * 100vw;
    line-height: 25 /360 * 100vw;
    margin-right: 90 /360 * 100vw;
    .iconxingbienan,
    .iconxingbienv {
      margin-right: 10 /360 * 100vw;
      margin-bottom: 10 /360 * 100vw;
      color: skyblue;
    }
    .iconxingbienv {
      color: #eae;
    }
    .user_birthday {
      color: #a5a2a2;
    }
  }
  .iconjiantou1 {
    font-size: 17 /360 * 100vw;
    color: #a2a2ab;
  }
}

.content {
  padding-left: 10 /360 * 100vw;
}
</style>