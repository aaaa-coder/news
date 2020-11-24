<template>
  <div class="newsWrapper">
    <div class="newsItem">
      <h3>{{ title }}</h3>
      <!-- 出版者和时间 -->
      <div class="info">
        <span class="publisher">{{ publisher }}</span>
        <span class="date">2019-10-10</span>
      </div>
      <!-- 新闻内容 -->
      <div class="desc" v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsItem: {},
      user: {},
    };
  },
  props: ["title", "content", "publisher"],
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
  watch: {
    newsId(objId) {},
  },
};
</script>

<style lang="less" scoped>
.newsItem {
  padding: 0 10 /360 * 100vw;
  border-bottom: 5 /360 * 100vw solid #ccc;
  .info {
    font-size: 14 /360 * 100vw;
    color: #888;
    margin: 6 /360 * 100vw 0 20 /360 * 100vw;
    .publisher {
      margin-right: 10 /360 * 100vw;
    }
  }
  .desc {
    width: 100%;
    line-height: 24 /360 * 100vw;
    /deep/ img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>