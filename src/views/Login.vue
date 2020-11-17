<template>
  <div class="container">
    <div class="closeBtn">
      <i class="iconfont iconicon-test"></i>
    </div>
    <div class="logoWrapper">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="inputWrapper">
      <input type="text" />
    </div>
    <div class="inputWrapper">
      <input type="text" />
    </div>
    <button class="btn">登录</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.container {
  padding: 20 /360 * 100vw;
  // background-color: #f2f2f2;

  .iconicon-test {
    font-size: 27 /360 * 100vw;
  }
  .logoWrapper {
    text-align: center;
    .iconnew {
      font-size: 126 /360 * 100vw;
      color: #d81e06;
    }
  }

  .inputWrapper {
    input {
      width: 100%;
      border: 0;
      outline: 0;
      line-height: 38 /360 * 100vw;
      margin-top: 10 /360 * 100vw;
      border-bottom: 1px solid #333;
      font-size: 18 /360 * 100vw;
    }
  }

  .btn {
    width: 100%;
    height: 48 /360 * 100vw;
    margin-top: 30 /360 * 100vw;
    border: 0;
    color: #fff;
    background-color: #cc3300;
    border-radius: 24 /360 * 100vw;
  }
}
</style>