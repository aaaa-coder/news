<template>
  <div class="box">
    <parent v-if="parentData.parent" :parentData="parentData.parent" />
    {{ parentData.content }}
  </div>
</template>

<script>
export default {
  name: "parent",
  props: ["parentData"],
  created() {},
};
</script>

<style lang="less" scoped>
.box {
  padding: 3px;
  margin: 3px;
  font-size: 14px;
  color: #888;
  border-bottom: 1px solid pink;
}
</style>