<template>
  <div class="container">
    <div class="userImg">
      <img src="@/assets/userImg.jpg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 80 /360 * 100vw;
}
.userImg {
  width: 80 /360 * 100vw;
  height: 80 /360 * 100vw;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>