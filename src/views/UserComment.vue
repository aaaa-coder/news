<template>
  <div class="comment_warpper">
    <ProfileTitle title="精彩跟帖" />
    <van-list
      v-model="loading"
      :immediate-check="false"
      @load="loadMoreComment"
      :finished="finished"
      finished-text="没有惹"
    >
      <MainComment
        v-for="comment in commentList"
        :key="comment.id"
        :commentData="comment.parent ? comment.parent : comment"
      />
    </van-list>
  </div>
</template>

<script>
import ProfileTitle from "../components/ProfileTitle";
import MainComment from "../components/Comment/Main";
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
    MainComment,
  },
  methods: {
    loadMoreComment() {
      this.pageIndex++;
      this.loadComment();
    },
    loadComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
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

<style>
</style>