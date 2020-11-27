<template>
  <div class="newsWrapper">
    <div class="news_header">
      <i class="iconfont iconjiantou2" @click="$router.back()"></i>
      <i class="iconfont iconnew"></i>
      <div>
        <span v-if="!newsItem.has_follow" class="unfollow" @click="follow"
          >关注</span
        >
        <span v-else class="follow" @click="unfollow">已关注</span>
      </div>
    </div>

    <div class="news_content">
      <NewsItem
        :title="newsItem.title"
        :content="newsItem.content"
        :publisher="publisher.nickname"
      />
    </div>
    <div class="share">
      <NewsShare
        :content="newsItem.like_length"
        :dianzan="newsItem.has_like == true ? true : false"
        className="icondianzan"
        @click.native="likePost"
      />
      <NewsShare content="微信" className="iconweixin" />
    </div>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem";
import NewsShare from "@/components/NewsShare";
export default {
  data() {
    return {
      newsId: "",
      newsItem: {},
      publisher: {},
      followList: [],
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
          this.getNewsItem();
        }
      });
    },
    unfollow() {
      this.$axios({
        url: "/user_unfollow/" + this.publisher.id,
      }).then((res) => {
        if (res.status === 200) {
          this.$toast.success(res.data.message);
          this.getNewsItem();
        }
      });
    },
    //喜欢点赞
    likePost() {
      this.$axios({
        url: "/post_like/" + this.newsItem.id,
      }).then((res) => {
        this.getNewsItem();
      });
    },
  },
  mounted() {
    this.newsId = this.$route.query.newsId;
    this.getNewsItem();
    // console.log(this.newsItem.has_like);
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
    display: block;
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
.share {
  display: flex;
  justify-content: space-evenly;
  margin: 25 /360 * 100vw 0;
  .good {
    /deep/.icondianzan {
      color: red;
    }
  }
  .ungood {
    /deep/.icondianzan {
      color: #333;
    }
  }
}
</style>