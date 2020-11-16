<template>
  <div>
    <input type="text" :placeholder="tips" />
  </div>
</template>

<script>
export default {
  //子组件使用props保存数据
  props: ["tips"],
};
</script>

<style>
</style>