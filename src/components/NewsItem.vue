<template>
  <div class="newsWrapper">
    <div class="newsItem">
      <h3>{{ newsItem.title }}</h3>
      <!-- 出版者和时间 -->
      <div class="info">
        <span class="publisher">{{ user.nickname }}</span>
        <span class="date">2019-10-10</span>
      </div>
      <!-- 新闻内容 -->
      <div class="desc" v-html="newsItem.content"></div>
      <!-- 点赞与微信 -->
      <div class="share">
        <div class="share_content">
          <i class="iconfont icondianzan icon"></i>
          <span class="content">{{ newsItem.like_length }}</span>
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
export default {
  data() {
    return {
      newsItem: {},
      user: {},
    };
  },
  props: ["newsId"],
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
    newsId(objId) {
      this.$axios({
        url: "/post/" + objId.newsId,
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.newsItem = data;
          this.user = this.newsItem.user;
        }
      });
    },
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