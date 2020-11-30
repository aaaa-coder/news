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
      commentList: [
        { content: "666" },
        { content: "999" },
        { content: "秀啊老弟" },
        { content: "可以的" },
        {
          content: "老哥稳",
          parent: {
            content: "123",
            parent: { content: "456", parent: { content: "789" } },
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>

 