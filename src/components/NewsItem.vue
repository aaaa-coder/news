<template>
  <div class="newsWrapper">
    <div class="newsItem">
      <h3>车主注意啦！</h3>
      <!-- 出版者和时间 -->
      <div class="info">
        <span class="publisher">火星时报</span>
        <span class="date">2019-10-10</span>
      </div>
      <!-- 新闻内容 -->
      <div class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quos, iure mollitia veniam accusamus unde illum tempora atque qui et
        aperiam, quis magnam numquam tempore voluptatibus soluta ea beatae
        quidem?
      </div>
      <!-- 点赞与微信 -->
      <div class="share">
        <div class="share_content">
          <i class="iconfont icondianzan icon"></i>
          <span class="content">112</span>
        </div>
        <div class="share_content">
          <i class="iconfont iconweixin icon"></i>
          <span class="content">微信</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.newsItem {
  padding: 0 10 /360 * 100vw;
  border-bottom: 5 /360 * 100vw solid #ccc;
  .info {
    font-size: 14 /360 * 100vw;
    color: #888;
    margin: 6 /360 * 100vw 0 20 /360 * 100vw;
  }
  .desc {
    line-height: 24 /360 * 100vw;
  }
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
}
</style>