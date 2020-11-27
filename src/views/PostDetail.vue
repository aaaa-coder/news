<template>
  <div class="postContainer">
    <!-- 普通新闻 -->
    <div class="normalPost" v-if="postList.type == 1">
      <!-- 新闻头部 -->
      <div class="header">
        <i class="iconfont iconjiantou2"></i>
        <i class="iconfont iconnew"></i>
        <span
          class="follow"
          @click="follow"
          :class="{
            unfollow: !postList.has_follow,
          }"
          >{{ !postList.has_follow ? "关注" : "已关注" }}</span
        >
      </div>
      <!-- 标题 -->
      <div class="title">
        <h4>{{ postList.title }}</h4>
      </div>
      <!-- 新闻信息 -->
      <div class="info">
        <div class="name">{{ user.nickname }}</div>
        <div class="date">2020-10-10</div>
      </div>
      <!-- 内容 -->
      <div class="postContent" v-html="postList.content"></div>
      <div class="dianzan">
        <div
          class="good"
          @click="postLike"
          :class="{
            favorite: postList.has_like,
          }"
        >
          <i class="iconfont icondianzan"></i>
          <span>{{ postList.like_length }}</span>
        </div>
        <div class="weixin">
          <i class="iconfont iconweixin"></i>
          <span>微信</span>
        </div>
      </div>
    </div>
    <div class="videoPost" v-if="postList.type == 2">
      <!-- 视频部分 -->
      <div class="video">
        <video
          ref="video"
          :src="postList.content"
          controls
          :poster="$axios.defaults.baseURL + postList.cover[0].url"
          @pause="pauseVideo"
          @play="playVideo"
        ></video>
        <i class="iconfont iconshipin" @click="playVideo" v-if="play"></i>
      </div>
      <!-- 信息 -->
      <div class="info">
        <img class="avatar" :src="$axios.defaults.baseURL + user.head_img" />
        <div class="name">{{ user.nickname }}</div>
        <span
          class="follow"
          @click="follow"
          :class="{
            unfollow: !postList.has_follow,
          }"
          >{{ !postList.has_follow ? "关注" : "已关注" }}</span
        >
      </div>
      <!-- 标题 -->
      <div class="title">{{ postList.title }}</div>
      <!-- 点赞模块 -->
      <div class="dianzan">
        <div
          class="good"
          @click="postLike"
          :class="{
            favorite: postList.has_like,
          }"
        >
          <i class="iconfont icondianzan"></i>
          <span>{{ postList.like_length }}</span>
        </div>
        <div class="weixin">
          <i class="iconfont iconweixin"></i>
          <span>微信</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postList: {},
      user: {},
      play: true,
    };
  },
  methods: {
    loadPost() {
      this.$axios({
        url: "/post/" + this.$route.query.postId,
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.postList = data;
          this.user = data.user;
          console.log(res);
        }
      });
    },
    //关注用户
    follow() {
      if (!this.postList.has_follow) {
        this.$axios({
          url: "/user_follows/" + this.postList.user.id,
        }).then((res) => {
          if (res.status === 200) {
            this.postList.has_follow = true;
            this.$toast.success(res.data.message);
          }
        });
      } else {
        this.$axios({
          url: "/user_unfollow/" + this.postList.user.id,
        }).then((res) => {
          if (res.status === 200) {
            this.postList.has_follow = false;
            this.$toast(res.data.message);
          }
        });
      }
    },
    //点赞功能
    postLike() {
      this.$axios({
        url: "/post_like/" + this.postList.id,
      }).then((res) => {
        if (res.status === 200) {
          if (res.data.message == "点赞成功") {
            this.postList.like_length++;
            this.postList.has_like = true;
            this.$toast.success(res.data.message);
          } else {
            this.postList.like_length--;
            this.postList.has_like = false;
            this.$toast(res.data.message);
          }
        }
      });
    },
    //视频播放功能
    playVideo() {
      this.$refs.video.play();
      this.play = false;
    },
    pauseVideo() {
      this.$refs.video.pause();
      this.play = true;
    },
  },
  mounted() {
    this.loadPost();
  },
};
</script>

<style lang="less" scoped>
.postContainer {
  padding: 0 20 /360 * 100vw;
}
.normalPost {
  .header {
    display: flex;
    align-items: center;
    .iconnew {
      font-size: 54 /360 * 100vw;
      flex: 1;
      padding-left: 5 /360 * 100vw;
    }
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 14 /360 * 100vw;
    color: #888;
    margin-top: 10 /360 * 100vw;
    .date {
      padding-left: 10 /360 * 100vw;
    }
  }
  .postContent {
    color: #333;
    /deep/ img {
      max-width: 100%;
    }
  }
}
//关注
.follow {
  height: 24 /360 * 100vw;
  line-height: 24 /360 * 100vw;
  padding: 0 10 /360 * 100vw;
  border: 1px solid #ccc;
  border-radius: 12 /360 * 100vw;
  font-size: 14 /360 * 100vw;
  color: #333;
  &.unfollow {
    background-color: red;
  }
}
//点赞
.dianzan {
  margin-top: 20 /360 * 100vw;
  display: flex;
  justify-content: space-evenly;
  color: #333;
  font-size: 14 /360 * 100vw;
  .weixin,
  .good {
    border: 1px solid #ccc;
    &.favorite {
      color: red;
    }
    .iconweixin {
      color: #00c800;
    }
  }
  .iconfont {
    padding-right: 10 /360 * 100vw;
  }
  .good,
  .weixin {
    padding: 0 10 /360 * 100vw;
    border: 1px solid #ccc;
    height: 26 /360 * 100vw;
    line-height: 26 /360 * 100vw;
    border-radius: 13 /360 * 100vw;
  }
}

.videoPost {
  .video {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
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
    margin-top: 10 /360 * 100vw;
    .avatar {
      max-width: 30 /360 * 100vw;
      height: 30 /360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
    }
    .name {
      flex: 1;
      padding-left: 10 /360 * 100vw;
    }
  }
}
</style>