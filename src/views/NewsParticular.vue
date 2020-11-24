<template>
  <div class="newsWrapper">
    <div class="news_header">
      <i class="iconfont iconjiantou2" @click="$router.back()"></i>
      <i class="iconfont iconnew"></i>
      <span class="follow">已关注</span>
    </div>

    <div class="news_content">
      <NewsItem :newsId="newsId" />
    </div>
  </div>
</template>

<script>
import NewsItem from "../components/NewsItem";
export default {
  data() {
    return {
      newsId: "",
    };
  },
  components: {
    NewsItem,
  },
  mounted() {
    this.newsId = this.$route.query;
  },
};
</script>
<style lang="less" scoped>
.news_header {
  padding: 10 /360 * 100vw;
  display: flex;
  align-items: center;
  .iconjiantou2 {
    font-size: 15 /360 * 100vw;
  }
  .iconnew {
    flex: 1;
    font-size: 54 /360 * 100vw;
    margin-left: 10 /360 * 100vw;
  }
  .follow {
    padding: 0 10 /360 * 100vw;
    height: 24 /360 * 100vw;
    line-height: 24 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    border: 1px solid #ccc;
    border-radius: 12 /360 * 100vw;
  }
}
</style>