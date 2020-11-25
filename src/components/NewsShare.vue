<template>
  <div class="shareWrapper">
    <!-- 点赞与微信 -->
    <div class="share">
      <div class="share_content" v-if="className == 'icondianzan'">
        <i class="iconfont icon icondianzan"></i>
        <span class="content">{{ content }}</span>
        <span></span>
      </div>

      <div class="share_content" v-else>
        <i class="iconfont icon iconweixin"></i>
        <span class="content">{{ content }}</span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "className"],
  mounted() {},
};
</script>

<style lang="less" scoped>
.share {
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