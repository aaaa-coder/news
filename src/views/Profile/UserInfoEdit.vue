<template>
  <div class="container">
    <div class="userInfo">
      <i class="iconfont iconjiantou2"></i>
      <h4>编辑信息</h4>
    </div>
    <CircleImg class="userImg" />
    <div class="userEdit">
      <ProfileBar title="昵称" desc="火星网友" />
      <ProfileBar title="秘密" desc="******" />
      <ProfileBar title="性别" desc="男" />
    </div>
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
import ProfileBar from "@/components/ProfileBar";
export default {
  components: {
    CircleImg,
    ProfileBar,
  },
};
</script>

<style lang="less" scoped>
.userInfo {
  display: flex;
  align-items: center;
  //   justify-content: center;
  padding: 20 /360 * 100vw;
  .iconjiantou2 {
    flex: 1;
  }
  h4 {
    margin-right: 120 /360 * 100vw;
  }
}
.userImg {
  margin: 20 /360 * 100vw auto;
}
</style>