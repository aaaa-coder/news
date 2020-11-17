<template>
  <div>
    <button class="btn">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props: ["btnText"],
};
</script>

<style lang="less" scoped>
// 登录按钮样式
.btn {
  width: 100%;
  height: 48 /360 * 100vw;
  margin-top: 50 /360 * 100vw;
  border: 0;
  color: #fff;
  font-size: 20 /360 * 100vw;
  background-color: #cc3300;
  border-radius: 24 /360 * 100vw;
}
</style>