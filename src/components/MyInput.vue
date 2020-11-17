<template>
  <div class="myinput">
    <input type="text" :placeholder="tips" v-model="value" />
    <button @click="sendValue">发送数据</button>
    <br />
    <span class="iconfont icondianzan"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: ["tips"],
  methods: {
    sendValue() {
      this.$emit("send", this.value);
    },
  },
};
</script>

<style lang="less">
</style>