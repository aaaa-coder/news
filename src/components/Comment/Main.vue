<template>
  <div>
    <div class="box">
      <Parent v-if="commentData.parent" :parentData="commentData.parent" />
      {{ commentData.content }}
    </div>
  </div>
</template>

<script>
import Parent from "../Comment/Parent";
export default {
  components: { Parent },
  props: ["commentData"],
  created() {
    // console.log(this.commentData);
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 3px;
  margin: 3px;
  border: 1px solid #ccc;
}
</style>