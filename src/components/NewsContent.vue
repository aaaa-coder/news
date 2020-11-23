<template>
  <div class="container">
    <div class="news" v-for="news in newsList" :key="news.id">
      <!-- 第一种样式 -->
      <div class="news_less" v-if="news.type == 1 && news.cover.length < 3">
        <div class="news_desc">
          <div class="news_lessPic_title">{{ news.title }}</div>
          <div class="pic_list">
            <img
              v-for="pic in news.cover"
              :key="pic.id"
              :src="pic.url"
              class="less_pic"
            />
          </div>
        </div>
        <div class="desc">
          <span class="publisher">{{ news.user.nickname }}</span>
          <span class="follow">52跟帖</span>
        </div>
      </div>

      <!-- 第二种样式 -->
      <div class="news_more" v-if="news.type == 1 && news.cover.length == 3">
        <div class="news_morePic_title">{{ news.title }}</div>
        <img
          v-for="pic in news.cover"
          :key="pic.id"
          :src="pic.url"
          class="more_pic"
        />
        <div class="desc">
          <span class="publisher">{{ news.user.nickname }}</span>
          <span class="follow">52跟帖</span>
        </div>
      </div>

      <!-- 视频图片 -->
      <div class="news_vidoe" v-if="news.type == 2">
        <div class="news_video_title">{{ news.title }}</div>
        <img
          v-for="pic in news.cover"
          :key="pic.id"
          :src="pic.url"
          class="video_pic"
        />
        <div class="desc">
          <span class="publisher">{{ news.user.name }}</span>
          <span class="follow">52跟帖</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    getNews() {
      this.$axios({
        url: "/post",
      })
        .then((res) => {
          const { data } = res.data;
          this.newsList = data;
          console.log(data);
        })
        .catch((res) => {});
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>

<style lang="less" scoped>
.news_less,
.news_more,
.news_vidoe {
  padding: 10 /360 * 100vw;
  border-bottom: 1px solid #ccc;
}

.news_less {
  .news_desc {
    display: flex;

    .news_lessPic_title {
      flex: 1;
    }
    .less_pic {
      width: 110 /360 * 100vw;
      height: 75 /360 * 100vw;
      object-fit: cover;
      margin: 2px 1px;
    }
  }
}

.news_more {
  .more_pic {
    width: 110 /360 * 100vw;
    height: 75 /360 * 100vw;
    object-fit: cover;
    margin: 2px 1px;
  }
}
.news_vidoe {
  .video_pic {
    width: 100%;
    height: 170 /360 * 100vw;
  }
}
.desc {
  font-size: 14 /360 * 100vw;
  color: #888;
  .publisher {
    margin-right: 20 /360 * 100vw;
  }
}
</style>