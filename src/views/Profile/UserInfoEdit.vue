<template>
  <div class="container">
    <ProfileTitle title="编辑资料" />
    <CircleImg class="userImg" />
    <div class="userEdit">
      <ProfileBar title="昵称" desc="火星网友" />
      <ProfileBar title="秘密" desc="******" />
      <ProfileBar title="性别" desc="男" />
    </div>
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
import ProfileBar from "@/components/ProfileBar";
import ProfileTitle from "@/components/ProfileTitle";
export default {
  components: {
    CircleImg,
    ProfileBar,
    ProfileTitle,
  },
};
</script>

<style lang="less" scoped>
.userImg {
  margin: 20 /360 * 100vw auto;
}
</style>