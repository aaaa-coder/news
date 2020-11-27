<template>
  <div class="videoWrapper">
    <div class="play_pic">
      <video :src="newsItem.content" controls></video>
      <i class="iconfont iconshipin"></i>
    </div>

    <div class="info">
      <img
        :src="$axios.defaults.baseURL + user.head_img"
        alt=""
        class="avatar"
      />
      <div class="publisher">{{ user.nickname }}</div>
      <div class="follow">关注</div>
    </div>

    <div class="title">{{ newsItem.title }}</div>
    <div class="share">
      <NewsShare :content="newsItem.like_length" className="icondianzan" />
      <NewsShare content="微信" className="iconweixin" />
    </div>
  </div>
</template>

<script>
import NewsShare from "@/components/NewsShare";
export default {
  data() {
    return {
      newsId: "",
      newsItem: {},
      user: {},
    };
  },
  components: {
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
          this.user = data.user;
          console.log(res);
          console.log(data.content);
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
.videoWrapper {
  padding: 0 10 /360 * 100vw;
  border-bottom: 5/360 * 100vw solid #ccc;
  .play_pic {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    video {
      width: 100%;
    }
    .iconshipin {
      position: absolute;
      font-size: 54 /360 * 100vw;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
    }
  }
  .info {
    display: flex;
    align-items: center;
    .avatar {
      width: 40 /360 * 100vw;
      height: 40 /360 * 100vw;
      object-fit: cover;
      border-radius: 50%;
    }
    .publisher {
      flex: 1;
      font-size: 14 /360 * 100vw;
      color: #888;
      margin-left: 10 /360 * 100vw;
    }
    .follow {
      padding: 0 15 /360 * 100vw;
      height: 24 /360 * 100vw;
      line-height: 24 /360 * 100vw;
      border: 1px solid #ccc;
      border-radius: 12 /360 * 100vw;
    }
  }
  .title {
    margin-top: 20 /360 * 100vw;
    font-size: 16 /360 * 100vw;
    color: #333;
  }
}
.share {
  display: flex;
  justify-content: space-evenly;
  margin: 25 /360 * 100vw 0;
}
</style>