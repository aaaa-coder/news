<template>
  <div class="inputWrapper">
    <input
      :class="{ error: !isOk }"
      :placeholder="placeholder"
      :type="type"
      v-model="value"
      @blur="showErrMsg"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      isOk: true,
    };
  },
  props: ["placeholder", "type", "rule", "errMsg"],
  watch: {
    value(newValue) {
      if (this.rule.test(newValue)) {
        this.isOk = true;
      } else {
        console.log(this.errMsg);
        this.isOk = false;
      }
    },
  },
  methods: {
    showErrMsg() {
      if (!this.isOk) {
        alert(this.errMsg);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.inputWrapper {
  input {
    width: 100%;
    border: 0;
    outline: 0;
    line-height: 38 /360 * 100vw;
    margin-top: 10 /360 * 100vw;
    border-bottom: 2px solid #333;
    font-size: 18 /360 * 100vw;
  }
  .error {
    border-color: #a00;
  }
  .reset {
    border-color: #333;
  }
}
</style>