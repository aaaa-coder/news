<template>
  <div class="comment_warpper">
    <ProfileTitle title="精彩跟帖" />
    <MainComment
      v-for="comment in commentList"
      :key="comment.id"
      :commentData="comment.parent ? comment.parent : comment"
    />
  </div>
</template>

<script>
import ProfileTitle from "../components/ProfileTitle";
import MainComment from "../components/Comment/Main";
export default {
  data() {
    return {
      commentList: [],
    };
  },
  components: {
    ProfileTitle,
    MainComment,
  },
  created() {
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
    }).then((res) => {
      if (res.status === 200) {
        const { data } = res.data;
        this.commentList = data;
      }
    });
  },
};
</script>

<style>
</style>