<template>
  <div class="container">
    <ProfileTitle title="我的关注" />
    <ProfileFocusBar />
    <ProfileFocusBar />
    <ProfileFocusBar />
  </div>
</template>

<script>
import ProfileTitle from "@/components/ProfileTitle";
import ProfileFocusBar from "@/components/ProfileFocusBar";
export default {
  components: {
    ProfileTitle,
    ProfileFocusBar,
  },
};
</script>

<style lang="less" scoped>
</style>