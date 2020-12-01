<template>
  <div class="comment_wrapper">
    <ProfileTitle title="我的跟帖" />

    <div class="comment" v-for="comment in commentList" :key="comment.id">
      <div v-if="comment.post.type == 1">
        <div class="date">
          <span>2019-10-10</span>
          <span class="hour">10.25</span>
        </div>
        <div class="content">{{ comment.content }}</div>
        <div class="title">
          <span>原文：{{ comment.post.title }}</span>
          <i class="iconfont iconjiantou1"></i>
        </div>
      </div>
      <div v-if="comment.post.type == 2">
        <div class="date">
          <span>2019-10-10</span>
          <span class="hour">10.25</span>
        </div>
        <div class="comment_content">
          <div class="reply">回复：xxx</div>
          <div class="reply_content">阿信是谁</div>
        </div>
        <div class="content">{{ comment.content }}</div>
        <div class="title">
          <span>原文：{{ comment.post.title }}</span>
          <i class="iconfont iconjiantou1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileTitle from "../../components/ProfileTitle";
export default {
  data() {
    return {
      commentList: [],
    };
  },
  components: {
    ProfileTitle,
  },
  created() {
    this.$axios({
      url: "/user_comments",
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        const { data } = res.data;
        this.commentList = data;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.comment {
  padding: 0 16 /360 * 100vw;
  border-bottom: 1px solid #ccc;
  .date {
    font-size: 14 /360 * 100vw;
    color: #888;
    margin-top: 10 /360 * 100vw;
    .hour {
      margin-left: 10 /360 * 100vw;
    }
  }
  .content {
    font-size: 16 /360 * 100vw;
    color: #333;
    padding: 10 /360 * 100vw 0;
  }
  .title {
    width: 328 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    color: #888;
    display: flex;
    align-items: center;
    padding-bottom: 10 /360 * 100vw;

    span {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.comment_content {
  height: 70 /360 * 100vw;
  background-color: #e4e4e4;
  padding-left: 10 /360 * 100vw;
  margin-top: 10 /360 * 100vw;
  color: #888;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .reply {
    font-size: 14 /360 * 100vw;
  }
  .reply_content {
    font-size: 16 /360 * 100vw;
  }
}
</style>