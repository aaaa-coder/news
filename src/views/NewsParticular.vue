<template>
  <div class="newsWrapper">
    <div class="news_header">
      <i class="iconfont iconjiantou2" @click="$router.back()"></i>
      <i class="iconfont iconnew"></i>
      <span v-if="isFollow == false" class="unfollow" @click="follow"
        >关注</span
      >
      <span v-else class="follow" @click="unfollow">已关注</span>
    </div>

    <div class="news_content">
      <NewsItem
        :title="newsItem.title"
        :content="newsItem.content"
        :publisher="publisher.nickname"
      />
    </div>
    <div class="share">
      <NewsShare :like="newsItem.like_length" />
    </div>
  </div>
</template>

<script>
import NewsItem from "../components/NewsItem";
import NewsShare from "../components/NewsShare";
export default {
  data() {
    return {
      newsId: "",
      like: "",
      newsItem: {},
      publisher: {},
      isFollow: false,
    };
  },
  components: {
    NewsItem,
    NewsShare,
  },
  methods: {
    getNewsItem() {
      this.$axios({
        url: "/post/" + this.newsId,
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.newsItem = data;
          this.publisher = this.newsItem.user;
        }
      });
    },
    // 关注
    follow() {
      this.$axios({
        url: "/user_follows/" + this.publisher.id,
      }).then((res) => {
        if (res.status === 200) {
          this.$toast.success(res.data.message);
          this.isFollow = true;
        }
      });
    },
    unfollow() {
      this.$axios({
        url: "/user_unfollow" + this.publisher.id,
      }).then((res) => {
        if (res.status === 200) {
          this.$toast.success(res.data.message);
          this.isFollow = false;
        }
      });
    },
  },
  mounted() {
    this.newsId = this.$route.query.newsId;
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
  .follow,
  .unfollow {
    padding: 0 10 /360 * 100vw;
    height: 24 /360 * 100vw;
    line-height: 24 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    border: 1px solid #ccc;
    border-radius: 12 /360 * 100vw;
  }
  .unfollow {
    border: 0;
    background-color: red;
    color: #fff;
  }
}
</style>