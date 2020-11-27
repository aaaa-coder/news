<template>
  <div class="postContainer">
    <div class="header">
      <i class="iconfont iconjiantou2"></i>
      <i class="iconfont iconnew"></i>
      <span
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
        console.log(res);
      });
    },
    follow() {
      this.$axios({
        url: "",
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
  /deep/ img {
    max-width: 100%;
  }
}
</style>