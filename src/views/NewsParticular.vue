<template>
  <div class="newsWrapper">
    <div class="news_header">
      <i class="iconfont iconjiantou2"></i>
      <i class="iconfont iconnew"></i>
      <span class="follow">已关注</span>
    </div>

    <div class="news_content">
      <NewsItem />
    </div>
  </div>
</template>

<script>
import NewsItem from "../components/NewsItem";
export default {
  components: {
    NewsItem,
  },
  methods: {
    getNewsItem() {
      const id = this.$route.query;
      this.$axios({
        url: "/post/" + id,
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          console.log(data);
        }
      });
    },
  },
  mounted() {
    // console.log(this.$route.query);
    this.getNewsItem();
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