<template>
  <div class="container">
    <input type="checkbox" name="choose" id="userChoose" />
    <label for="userChoose" class="userBig"></label>
    <div class="content">
      <div>火星新闻播报</div>
      <div class="date">1314-5-20</div>
    </div>
    <div class="unfollow">取消关注</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 20 /360 * 100vw;

  input {
    width: 30 /360 * 100vw;
    height: 30 /360 * 100vw;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .userBig {
    width: 30 /360 * 100vw;
    height: 30 /360 * 100vw;
  }
  .content {
    flex: 1;
    margin-left: 20 /360 * 100vw;
    line-height: 20 /360 * 100vw;
    .date {
      font-size: 16 /360 * 100vw;
      color: #999;
    }
  }
  .unfollow {
    height: 20 /360 * 100vw;
    text-align: center;
    line-height: 20 /360 * 100vw;
    padding: 3 /360 * 100vw 8 /360 * 100vw;
    border-radius: 20 /360 * 100vw;
    border: 1px solid#ccc;
    font-size: 12 /360 * 100vw;
    color: #888;
  }
}
</style>