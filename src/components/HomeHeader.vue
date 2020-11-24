<template>
  <div class="headerWrapper">
    <i class="iconfont iconnew"></i>
    <div class="search_wrapper">
      <i class="iconfont iconsearch"></i>
      <span>搜索新闻</span>
    </div>
    <i class="iconfont iconwode"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.headerWrapper {
  display: flex;
  align-items: center;
  color: #fff;
  background-color: red;
  padding: 0 20 /360 * 100vw;
  .iconnew {
    font-size: 54 /360 * 100vw;
  }
  .iconwode {
    font-size: 32 /360 * 100vw;
    opacity: 0.6;
  }
  .search_wrapper {
    flex: 1;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    height: 34 /360 * 100vw;
    line-height: 34 /360 * 100vw;
    font-size: 16 /360 * 100vw;
    margin: 0 16 /360 * 100vw;
    border-radius: 17 /360 * 100vw;
    .iconsearch {
      margin-right: 3 /360 * 100vw;
      font-size: 18 /360 * 100vw;
    }
  }
}
</style>