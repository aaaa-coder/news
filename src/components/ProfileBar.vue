<template>
  <div class="container">
    <div class="myFocus">{{ title }}</div>
    <div class="focus">{{ desc }}</div>
    <i class="iconfont iconjiantou1"></i>
  </div>
</template>

<script>
export default {
  props: ["title", "desc"],
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  line-height: 40 /360 * 100vw;
  padding-right: 20 /360 * 100vw;
  margin-left: 20 /360 * 100vw;
  border-bottom: 1px solid #ccc;
  .myFocus {
    flex: 1;
    color: #333;
  }
  .focus {
    margin-right: 10 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    color: #888;
  }
  .iconjiantou1 {
    color: #ccc;
  }
}
</style>