<template>
  <div class="container">
    <div class="userImg">
      <img src="../assets/userImg.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: -40 /360 * 100vw;
}
.userImg {
  width: 100 /360 * 100vw;
  height: 100 /360 * 100vw;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>