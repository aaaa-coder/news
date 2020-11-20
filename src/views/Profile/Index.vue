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
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
export default {
  components: {
    CircleImg,
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
</style>