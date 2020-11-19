<template>
  <div class="container">
    <!-- 头部的阴影部分 -->
    <div class="topWrapper"></div>
    <!-- 用户信息模块 -->
    <div class="userInfo">
      <!-- 用户信息左侧 -->
      <div class="userInfo_left">
        <CircleImg />
      </div>
      <!-- 用户中间部分信息 -->
      <div class="userInfo_center">
        <i class="iconfont iconxingbienan"></i>
        <span class="user_nickname">火星网友</span>
        <div class="user_birthday">2019-10-10</div>
      </div>
      <!-- 用户信息中的右边箭头 -->
      <div class="userInfo_right">
        <i class="iconfont iconjiantou1"></i>
      </div>
    </div>
    <!-- 下面的内容部分 -->
    <div class="content">
      <AuthOpeartion title="我的关注" content="关注的内容" />
      <AuthOpeartion title="我的跟帖" content="跟帖/回复" />
      <AuthOpeartion title="我的收藏" content="文章/视频" />
      <AuthOpeartion title="设置" />
    </div>
  </div>
</template>

<script>
import CircleImg from "../components/CircleImg";
import AuthOpeartion from "../components/AuthOpeartion";
export default {
  components: {
    CircleImg,
    AuthOpeartion,
  },
  mounted() {
    const id = localStorage.getItem("userId");
    this.$axios({
      method: "get",
      url: `http://157.122.54.189:9083/user/${id}`,
      //问号的形式才能用这个，:是需要直接拼接
      // params: { id },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="less" scoped>
.topWrapper {
  width: 100%;
  height: 30 /360 * 100vw;
  background-color: #757575;
}
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
    .iconxingbienan {
      margin-right: 10 /360 * 100vw;
      margin-bottom: 10 /360 * 100vw;
      color: skyblue;
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