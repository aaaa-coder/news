<template>
  <div class="container">
    <ProfileTitle title="编辑资料" />
    <img
      v-if="userInfo.head_img"
      :src="$axios.defaults.baseURL + userInfo.head_img"
    />
    <CircleImg v-else class="userImg" />
    <!-- 编辑功能 -->
    <div class="userEdit">
      <ProfileBar
        title="昵称"
        :desc="userInfo.nickname"
        @click.native="showEdit = true"
      />
      <ProfileBar
        title="密码"
        desc="******"
        @click.native="editPassword = true"
      />
      <ProfileBar
        title="性别"
        :desc="userInfo.gender == 1 ? '小锅锅' : '小改改'"
        is-link
        @click.native="show = true"
      />
    </div>

    <!-- vant组件 -->
    <div>
      <van-dialog
        v-model="showEdit"
        title="修改昵称"
        show-cancel-button
        @confirm="setEditInfo({ nickname: newNickname })"
      >
        <!-- 修改昵称 -->
        <van-field v-model="newNickname" placeholder="请输入修改的昵称" />
      </van-dialog>
    </div>
    <!-- 修改密码 -->
    <div>
      <van-dialog
        v-model="editPassword"
        title="修改密码"
        show-cancel-button
        @confirm="setEditInfo({ password: newPassword })"
      >
        <!-- 修改密码 -->
        <van-field
          v-model="newPassword"
          placeholder="请输入修改的密码"
          type="password"
        />
      </van-dialog>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
      @select="setGender"
    />
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
      show: false,
      showEdit: false,
      editPassword: false,
      actions: [{ name: "男" }, { name: "女" }],
      newNickname: "",
      newPassword: "",
      newGender: "",
    };
  },
  methods: {
    //获取用户数据
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
            this.newdata = data;
          }
        }
      });
    },

    //编辑信息
    setEditInfo(newdata) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: newdata,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { data, message } = res.data;
          if (message == "修改成功") {
            this.userInfo = data;
            this.$toast(message);
            this.getUserInfo();
            console.log(newdata);
            for (let item in newdata) {
              // console.log(item);
              if (item == "password") {
                this.$router.replace("/login");
              }
            }
          }
        }
      });
    },

    setGender(action, index) {
      if (action.name == "男") {
        this.newGender = 1;
      } else {
        this.newGender = 0;
      }
      this.setEditInfo({ gender: this.newGender });
    },
    onCancel() {
      this.$toast("取消");
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