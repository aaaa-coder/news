<template>
  <div class="newsWrapper">
    <PostItem
      v-for="post in postList"
      :key="post.id"
      :post="post"
      @click.native="
        post.type == 1
          ? $router.push({ name: 'particular', query: { newsId: post.id } })
          : $router.push({ name: 'videoItem', query: { newsId: post.id } })
      "
    />
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
export default {
  data() {
    return {
      postList: [],
    };
  },
  components: {
    PostItem,
  },

  mounted() {
    this.$axios({
      url: "/post",
    }).then((res) => {
      if (res.status === 200) {
        const { data } = res.data;
        this.postList = data;
      }
    });
  },
};
</script>

<style>
</style>