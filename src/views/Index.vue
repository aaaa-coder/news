<template>
  <div class="container">
    <!-- 主页头部 -->
    <div class="index_top">
      <i class="iconfont iconnew"></i>
      <div class="search">
        <i class="iconfont iconsearch"></i>
        <span>搜索新闻</span>
      </div>
      <i class="iconfont iconwode" @click="$router.push('/profile')"></i>
    </div>
    <!-- 主页新闻列表 -->
    <div class="newsList"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.index_top {
  display: flex;
  align-items: center;
  height: 50 /360 * 100vw;
  background-color: #f00;
  padding: 0 10 /360 * 100vw;
  .iconnew {
    display: block;
    width: 54 /360 * 100vw;
    height: 54 /360 * 100vw;
    font-size: 54 /360 * 100vw;
    color: #fff;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210 /360 * 100vw;
    height: 34 /360 * 100vw;
    background-color: rgba(255, 255, 255, 0.5);
    margin-left: 10 /360 * 100vw;
    margin-right: 30 /360 * 100vw;
    color: #fff;
    border-radius: 17 /360 * 100vw;
    .iconsearch {
      font-size: 18 /360 * 100vw;
      margin-right: 2 /360 * 100vw;
    }
    span {
      font-size: 14 /360 * 100vw;
    }
  }
  .iconwode {
    display: block;
    width: 32 /360 * 100vw;
    height: 32 /360 * 100vw;
    font-size: 32 /360 * 100vw;
    color: #fff;
  }
}
</style>