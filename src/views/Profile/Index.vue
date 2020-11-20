<template>
  <div class="container">
    <div class="userInfo">
      <CircleImg />
      <div class="userWrapper">
        <i class="iconfont iconxingbienan"></i>
        <span>火星网友</span>
        <div class="userBirthday">1314-5-20</div>
      </div>
      <i class="iconfont iconjiantou1"></i>
    </div>

    <div class="useContent">
      <ProfileBar title="我的关注" desc="关注的目标" />
      <ProfileBar title="我的跟帖" desc="跟帖/回复" />
      <ProfileBar title="我的收藏" desc="文章/视频" />
      <ProfileBar title="设置" />
      <AuthBtn btnText="退出" class="exit" />
    </div>
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
import ProfileBar from "@/components/ProfileBar";
import AuthBtn from "@/components/AuthBtn";

export default {
  components: {
    CircleImg,
    ProfileBar,
    AuthBtn,
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
    .iconxingbienan {
      color: skyblue;
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
.exit {
  margin-top: 150 /360 * 100vw;
}
</style>