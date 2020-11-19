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
      <div class="userFocus">
        <span>我的关注</span>
        <span class="common_focus">关注的用户</span>
        <i class="iconfont iconjiantou1"></i>
      </div>
      <div class="userFocus">
        <span>我的更贴</span>
        <span class="common_focus">跟帖/回复</span>
        <i class="iconfont iconjiantou1"></i>
      </div>
      <div class="userFocus">
        <span>我的收藏</span>
        <span class="common_focus">视频/文章</span>
        <i class="iconfont iconjiantou1"></i>
      </div>
      <div class="userFocus">
        <span>设置</span>
        <i class="iconfont iconjiantou1"></i>
      </div>
    </div>
  </div>
</template>

<script>
import CircleImg from "../components/CircleImg";
export default {
  components: {
    CircleImg,
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
    margin-right: 100 /360 * 100vw;
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
  .userFocus {
    display: flex;
    justify-content: space-between;
    font-size: 16 /360 * 100vw;
    line-height: 50 /360 * 100vw;
    border-bottom: 1px solid #ccc;
    .common_focus {
      margin-left: 160 /360 * 100vw;
      font-size: 14 /360 * 100vw;
      color: #757575;
    }
    .iconjiantou1 {
      margin-right: 10 /360 * 100vw;
    }
  }
}
</style>