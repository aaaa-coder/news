<template>
  <div class="postContainer">
    <div class="header">
      <i class="iconfont iconjiantou2"></i>
      <i class="iconfont iconnew"></i>
      <span
        @click="follow"
        :class="{
          unfollow: !postList.has_follow,
        }"
        >{{ !postList.has_follow ? "关注" : "已关注" }}</span
      >
    </div>
    <div class="normalPost" v-if="postList.type == 1">
      <div class="title">
        <h4>{{ postList.title }}</h4>
      </div>
      <div class="info">
        <div class="name">{{ user.nickname }}</div>
        <div class="date">2020-10-10</div>
      </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      postList: {},
      user: {},
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
.header {
  display: flex;
  align-items: center;
  .iconnew {
    font-size: 54 /360 * 100vw;
    flex: 1;
    padding-left: 5 /360 * 100vw;
  }
  span {
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
</style>