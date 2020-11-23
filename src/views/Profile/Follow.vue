<template>
  <div class="container">
    <ProfileTitle title="我的关注" />
    <div class="info" v-for="user in followList" :key="user.id">
      <img
        class="avatar"
        v-if="user.head_img"
        :src="$axios.defaults.baseURL + user.head_img"
      />
      <img v-else src="@/assets/smoke.jpg" class="avatar" />
      <div class="follow_info">
        <div class="name">{{ user.nickname }}</div>
        <div class="date">1314-5-20</div>
      </div>

      <div class="unfollow" @click="unfollow(user.id)">取消关注</div>
    </div>
  </div>
</template>

<script>
import ProfileTitle from "@/components/ProfileTitle";
export default {
  data() {
    return {
      followList: [],
    };
  },
  components: {
    ProfileTitle,
  },
  methods: {
    getFollow() {
      this.$axios({
        url: "/user_follows",
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          //   console.log(data);
          this.followList = data;
        }
      });
    },
    unfollow(userId) {
      this.$axios({
        url: "/user_unfollow/" + userId,
      }).then((res) => {
        if (res.status === 200) {
          const { message } = res.data;
          if (message == "取消关注成功") {
            // console.log(res);
            this.getFollow();
          }
        }
      });
    },
  },

  mounted() {
    this.getFollow();
  },
};
</script>

<style lang="less" scoped>
.info {
  display: flex;
  align-items: center;
  padding: 20 /360 * 100vw;
  border-bottom: 1px solid #ccc;
  .avatar {
    width: 40 /360 * 100vw;
    height: 40 /360 * 100vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .follow_info {
    flex: 1;
    padding-left: 15 /360 * 100vw;
    .name {
      font-size: 16 /360 * 100vw;
    }
    .date {
      font-size: 14 /360 * 100vw;
      color: #888;
      margin-top: 2 /360 * 100vw;
    }
  }
  .unfollow {
    font-size: 12 /360 * 100vw;
    color: #555;
    background-color: #e1e1e1;
    height: 32 /360 * 100vw;
    line-height: 32 /360 * 100vw;
    padding: 0 8 /360 * 100vw;
    border-radius: 16 /360 * 100vw;
  }
}
</style>