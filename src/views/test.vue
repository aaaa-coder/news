 <template>
  <div>
    <MainComment
      :commentData="comment"
      v-for="(comment, index) in commentList"
      :key="index"
    />
  </div>
</template>

<script>
import MainComment from "../components/Comment/Main";
export default {
  components: {
    MainComment,
  },
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/1",
    }).then((res) => {
      console.log(res);
      this.commentList = res.data.data;
    });
  },
};
</script>

<style>
</style>

 