<template>
  <div>
    <input type="text" :placeholder="tips" v-model="value" />
    <button @click="sendValue">发送数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  //子组件使用props保存数据g
  props: ["tips"],
  methods: {
    sendValue() {
      this.$emit("send", this.value);
    },
  },
};
</script>

<style>
</style>