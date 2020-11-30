<template>
  <div class="searchContainer">
    <div class="title">{{ title }}</div>
    <i class="iconfont iconjiantou1"></i>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.searchContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14 /360 * 100vw;
  border-bottom: 1px solid #ccc;
  padding: 10 /360 * 100vw 0;
  .iconjiantou2 {
    color: #ccc;
  }
}
</style>