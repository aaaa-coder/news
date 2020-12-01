<template>
  <div class="comment_wrapper">
    <ProfileTitle title="我的跟帖" />
    <van-list
      :immediate-check="false"
      @load="loadMoreComment"
      :finished="finished"
      finished-text="没有惹"
      v-model="loading"
    >
      <div class="comment" v-for="comment in commentList" :key="comment.id">
        <div>
          <div class="date">
            <span>2019-10-10</span>
            <span class="hour">10.25</span>
          </div>
          <div class="comment_content" v-if="comment.parent">
            <div class="reply">
              回复：{{
                comment.parent.user.nickname || comment.parent.user.username
              }}
            </div>
            <div class="reply_content">
              {{ comment.parent.content }}
            </div>
          </div>
          <div class="content">{{ comment.content }}</div>
          <div class="title">
            <span v-if="comment.post">原文：{{ comment.post.title }}</span>
            <span v-else>原文：该帖子被删除了</span>
            <i
              class="iconfont iconjiantou1"
              @click="
                $router.push({
                  path: 'postDetail',
                  query: { postId: comment.post.id },
                })
              "
            ></i>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import ProfileTitle from "../../components/ProfileTitle";
export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1,
      pageSize: 10,
      loading: false,
      finished: false,
    };
  },
  components: {
    ProfileTitle,
  },
  methods: {
    loadMoreComment() {
      this.pageIndex++;
      this.loadComment();
    },

    loadComment() {
      this.$axios({
        url: "/user_comments",
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
        },
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.commentList = [...this.commentList, ...data];
          this.loading = false;
          if (data.length < this.pageSize) {
            this.finished = true;
          }
        }
      });
    },
  },
  created() {
    this.loadComment();
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
</style>