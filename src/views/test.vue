<template>
  <div class="newsWrapper">
    <PostItem
      v-for="post in postList"
      :key="post.id"
      :post="post"
      @click.native="$router.push({ name: 'particular', query: post.id })"
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
        // console.log(res);
        const { data } = res.data;
        this.postList = data;
      }
    });
  },
};
</script>

<style>
</style>