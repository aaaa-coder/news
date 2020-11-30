<template>
  <div class="postContainer">
    <!-- 普通新闻 -->
    <div class="normalPost" v-if="postList.type == 1">
      <!-- 新闻头部 -->
      <div class="header">
        <i class="iconfont iconjiantou2" @click="$router.back()"></i>
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
    <!-- 视频新闻 -->
    <div class="videoPost" v-if="postList.type == 2">
      <!-- 视频部分 -->
      <div class="video">
        <video
          ref="video"
          :src="postList.content"
          :poster="$axios.defaults.baseURL + postList.cover[0].url"
          @click="pauseVideo"
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
    <!-- 评论模块 -->
    <div class="comment">
      <h3>精彩跟帖</h3>
      <div class="comment_content">
        <MainComment
          v-for="comment in commentList"
          :key="comment.id"
          :commentData="comment.parent ? comment.parent : comment"
        />
      </div>
      <div
        class="btn_morecommnet"
        v-if="isShowMore"
        @click="$router.push('/userComment/' + $route.query.postId)"
      >
        更多跟帖
      </div>
      <div class="tips" v-if="!commentList.length">暂无跟帖,抢占沙发</div>
    </div>
    <!-- 底部发布评论模块 -->
    <footer>
      <div class="deactive" v-if="isWriteComment">
        <input type="text" placeholder="写跟帖" @click="write_comment" />
        <div class="comment">
          <i class="iconfont iconpinglun-"></i>
          <span class="nums">{{ postList.comment_length }}</span>
        </div>
        <i class="iconfont iconshoucang"></i>
        <i class="iconfont iconfenxiang"></i>
      </div>
      <div class="active" v-if="!isWriteComment">
        <textarea rows="3" v-model="commentContent" v-focus></textarea>
        <span class="send_comment" @click="send_comment">发送</span>
      </div>
    </footer>
  </div>
</template>

<script>
import MainComment from "../components/Comment/Main";
export default {
  components: {
    MainComment,
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  data() {
    return {
      postList: {},
      user: {},
      play: true,
      commentList: [],
      isShowMore: false,
      isWriteComment: true,
      commentContent: "",
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
    //视频暂停功能
    pauseVideo() {
      this.$refs.video.pause();
      this.play = true;
    },
    write_comment() {
      this.isWriteComment = false;
    },
    //发评论
    send_comment() {
      this.$axios({
        method: "post",
        url: "/post_comment/" + this.$route.query.postId,
        data: {
          content: this.commentContent,
        },
      }).then((res) => {
        if (res.status === 200) {
          this.$toast.success(res.data.message);
          this.loadComment();
          this.commentContent = "";
          this.isWriteComment = true;
        }
      });
    },
    loadComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.query.postId,
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          if (data.length > 3) {
            this.commentList = data.slice(0, 3);
            this.isShowMore = true;
          } else {
            this.commentList = data;
          }
        }
      });
    },
  },

  created() {
    //获取评论数据
    this.loadComment();
  },
  mounted() {
    this.loadPost();
  },
};
</script>

<style lang="less" scoped>
.postContainer {
  padding: 0 10 /360 * 100vw;
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
  border-bottom: 5/360 * 100vw solid#ccc;
  padding-bottom: 20 /360 * 100vw;
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
//视频模块
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
    margin-bottom: 20 /360 * 100vw;
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
  .title {
    font-size: 16 /360 * 100vw;
    color: #333;
  }
}
// 评论模块
.comment {
  margin-top: 20 /360 * 100vw;
  margin-bottom: 60 /360 * 100vw;

  h3 {
    width: 100 /360 * 100vw;
    margin: 0 auto;
    font-weight: normal;
  }
  .btn_morecommnet {
    width: 120 /360 * 100vw;
    height: 30 /360 * 100vw;
    line-height: 30 /360 * 100vw;
    text-align: center;
    margin: 30 /360 * 100vw auto;
    margin-bottom: 70/360 * 100vw;
    border: 1px solid #ccc;
    border-radius: 15 /360 * 100vw;
    font-size: 16 /360 * 100vw;
    color: #333;
  }
  .tips {
    width: 200 /360 * 100vw;
    margin: 0 auto;
    margin-top: 30 /360 * 100vw;
    text-align: center;
    font-size: 16 /360 * 100vw;
    color: #888;
  }
}
footer {
  position: fixed;
  bottom: 10 /360 * 100vw;
  width: 100%;

  .deactive {
    height: 30 /360 * 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .iconfont {
      font-size: 23 /360 * 100vw;
    }
    input {
      width: 180 /360 * 100vw;
      height: 28 /360 * 100vw;
      border: 0;
      outline: none;
      background-color: #d7d7d7;
      border-radius: 14 /360 * 100vw;
      box-sizing: border-box;
      padding: 0 20 /360 * 100vw;
      color: #333;
      font-size: 14 /360 * 100vw;
    }
    .comment {
      position: relative;
      margin-bottom: 15 /360 * 100vw;
      .nums {
        position: absolute;
        top: -5 /360 * 100vw;
        left: 6 /360 * 100vw;
        font-size: 12 /360 * 100vw;
        color: #fff;
        background-color: red;
        padding: 0 4 /360 * 100vw;
        border-radius: 6 /360 * 100vw;
      }
    }
  }
  .active {
    display: flex;
    align-items: flex-end;
    width: 100%;
    textarea {
      background-color: #d7d7d7;
      width: 260 /360 * 100vw;
      border-radius: 10 /360 * 100vw;
      padding: 0 10 /360 * 100vw;
      box-sizing: border-box;
    }
    .send_comment {
      font-size: 16 /360 * 100vw;
      color: #fff;
      background-color: red;
      height: 24 /360 * 100vw;
      line-height: 24 /360 * 100vw;
      padding: 0 15 /360 * 100vw;
      border-radius: 10 /360 * 100vw;
      margin-left: 12 /360 * 100vw;
    }
  }
}
</style>