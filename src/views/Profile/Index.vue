<template>
  <div class="container">
    <div class="userInfo" @click="$router.push('/userInfoEdit')">
      <div v-if="userInfo.head_img">
        <img
          :src="$axios.defaults.baseURL + userInfo.head_img"
          class="userAvatar"
        />
      </div>
      <div v-else>
        <CircleImg />
      </div>
      <div class="userWrapper">
        <i
          class="iconfont"
          :class="{
            iconxingbienan: (gender = 1),
            iconxingbienv: (gender = 0),
          }"
        ></i>
        <span>{{ userInfo.nickname }}</span>
        <div class="userBirthday">1314-5-20</div>
      </div>
      <i class="iconfont iconjiantou1"></i>
    </div>

    <div class="useContent">
      <ProfileBar title="我的关注" desc="关注的目标" />
      <ProfileBar title="我的跟帖" desc="跟帖/回复" />
      <ProfileBar title="我的收藏" desc="文章/视频" />
      <ProfileBar title="设置" />
      <AuthBtn btnText="退出" class="exit" @click.native="logout" />
    </div>
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
import ProfileBar from "@/components/ProfileBar";
import AuthBtn from "@/components/AuthBtn";

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  components: {
    CircleImg,
    ProfileBar,
    AuthBtn,
  },
  methods: {
    //获取用户信息进行渲染
    getUserInfo() {
      this.$axios({
        method: "get",
        url: "/user/" + localStorage.getItem("userId"),
      }).then((res) => {
        // console.log(res);
        if (res.status === 200) {
          const { data, message } = res.data;
          if (message == "获取成功") {
            this.userInfo = data;
          }
        }
      });
    },
    //退出登录
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$toast("退出成功");
      this.$router.replace("/login");
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
  align-items: center;
  padding: 20 /360 * 100vw;
  border-bottom: 5 /360 * 100vw solid #ccc;
  .userWrapper {
    flex: 1;
    margin-left: 20 /360 * 100vw;
    line-height: 25 /360 * 100vw;
    .iconfont {
      margin: 5 /360 * 100vw;
      margin-left: 0;
    }
    .iconxingbienan {
      color: skyblue;
    }
    .iconxingbienv {
      color: #ebe;
    }
    .userBirthday {
      font-size: 14px;
      color: #888;
    }
    .iconjiantou1 {
      color: #999;
      font-size: 17 /360 * 100vw;
    }
  }
}
.userAvatar {
  width: 70 /360 * 100vw;
  height: 70 /360 * 100vw;
  border-radius: 50%;
}
.exit {
  margin-top: 150 /360 * 100vw;
}
</style>