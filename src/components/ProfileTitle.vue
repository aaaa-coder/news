<template>
  <div class="profile_nav">
    <i class="iconfont iconjiantou2" @click="$router.back()"></i>
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.profile_nav {
  display: flex;
  align-items: center;
  padding: 20 /360 * 100vw;
  .iconjiantou2 {
    flex: 1;
  }
  h4 {
    margin-right: 120 /360 * 100vw;
  }
}
</style>