<template>
  <div class="container">
    <h3>模拟收藏</h3>
    <button @click="collect(10)">收藏文章1</button>
  </div>
</template>

<script>
export default {
  methods: {
    collect(id) {
      this.$axios({
        url: "/post_star/" + id,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>