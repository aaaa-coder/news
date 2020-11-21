<template>
  <div class="container">
    <ProfileTitle title="编辑资料" />
    <img
      v-if="userInfo.head_img"
      :src="$axios.defaults.baseURL"
      +
      userInfo.head_img
    />
    <CircleImg v-else class="userImg" />
    <div class="userEdit">
      <ProfileBar title="昵称" :desc="userInfo.nickname" />
      <ProfileBar title="秘密" desc="******" />
      <ProfileBar title="性别" :desc="(gender = 1 ? '小锅锅' : '小改改')" />
    </div>
  </div>
</template>

<script>
import CircleImg from "@/components/CircleImg";
import ProfileBar from "@/components/ProfileBar";
import ProfileTitle from "@/components/ProfileTitle";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    getUserInfo() {
      this.$axios({
        method: "get",
        url: "/user/" + localStorage.getItem("userId"),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        if (res.status === 200) {
          const { data, message } = res.data;
          if (message == "获取成功") {
            this.userInfo = data;
            console.log(this.userInfo);
          }
        }
      });
    },
  },
  mounted() {
    this.getUserInfo();
  },
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