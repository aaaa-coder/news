<template>
  <div class="shareWrapper">
    <!-- 点赞与微信 -->
    <div class="share">
      <div class="share_content">
        <i class="iconfont icondianzan icon"></i>
        <span class="content">{{ like }}</span>
      </div>
      <div class="share_content">
        <i class="iconfont iconweixin icon"></i>
        <span class="content">微信</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["like"],
};
</script>

<style lang="less" scoped>
.share {
  display: flex;
  justify-content: space-evenly;
  margin: 25 /360 * 100vw 0;
  .share_content {
    font-size: 14 /360 * 100vw;
    border: 1px solid #ccc;
    padding: 0 15 /360 * 100vw;
    height: 28 /360 * 100vw;
    line-height: 28 /360 * 100vw;
    border-radius: 14 /360 * 100vw;
    .icon {
      margin-right: 8 /360 * 100vw;
    }
    .iconweixin {
      color: #17b017;
    }
  }
}
</style>