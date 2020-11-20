<template>
  <div>
    <div class="commonFocus">
      <span>{{ title }}</span>
      <span class="common_focus">{{ content }}</span>
      <i class="iconfont iconjiantou1"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style lang="less" scoped>
.commonFocus {
  display: flex;
  justify-content: space-between;
  font-size: 16 /360 * 100vw;
  line-height: 50 /360 * 100vw;
  border-bottom: 1px solid #ccc;
  .common_focus {
    margin-left: 160 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    color: #757575;
  }
  .iconjiantou1 {
    margin-right: 10 /360 * 100vw;
  }
}
</style>