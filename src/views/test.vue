<template>
  <div class="contariner">
    <h2>模拟关注</h2>
    <button @click="follow(1)">关注用户1</button>
    <button @click="follow(2)">关注用户2</button>
    <button @click="follow(3)">关注用户3</button>
    <button @click="follow(4)">关注用户4</button>
  </div>
</template>

<script>
export default {
  methods: {
    follow(userId) {
      //   console.log(userId);
      this.$axios({
        url: "/user_follows/" + userId,
      }).then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      });
    },
  },
};
</script>

<style>
</style>