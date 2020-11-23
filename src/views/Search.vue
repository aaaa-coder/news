<template>
  <div class="container">
    <div class="search_top">
      <i class="iconfont iconjiantou2"></i>
      <div class="search">
        <i class="iconfont iconsearch"></i>
        <span>通灵兽召唤术</span>
      </div>
      <div class="search_right">搜索</div>
    </div>
    <!-- 历史记录 -->
    <div class="history">
      <h4>历史记录</h4>
      <span class="recode">美女</span>
    </div>

    <!-- 热门搜索 -->
    <div class="hot_search">
      <h4>热门搜索</h4>
      <span>办公室小野否认解散</span>
      <span>月季如何嫁接</span>
      <span>办公室小野否认解散</span>
      <span>月季如何嫁接</span>
      <span>办公室小野否认解散</span>
      <span>月季如何嫁接</span>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  padding: 20 /360 * 100vw;
}
.search_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20 /360 * 100vw;
  .iconjiantou2 {
    padding-right: 10 /360 * 100vw;
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 20 /360 * 100vw;
    height: 38 /360 * 100vw;
    border: 1px solid #ccc;
    border-radius: 19 /360 * 100vw;
    .iconsearch {
      color: #888;
      margin-right: 3 /360 * 100vw;
    }
  }
  .search_right {
    margin-left: 7 /360 * 100vw;
  }
}
.history {
  margin: 20 /360 * 100vw 0;
  border-bottom: 1px solid #ccc;
  .recode {
    display: block;
    margin: 20 /360 * 100vw 0;
    font-size: 14 /360 * 100vw;
  }
}
.hot_search {
  h4 {
    margin-bottom: 10 /360 * 100vw;
  }
  span {
    display: inline-block;
    margin: 10 /360 * 100vw 0;
    font-size: 14 /360 * 100vw;
    &:nth-child(even) {
      margin-right: 40 /360 * 100vw;
    }
  }
}
</style>