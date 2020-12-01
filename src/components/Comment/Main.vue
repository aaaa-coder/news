<template>
  <div>
    <div class="main_commnet">
      <Parent v-if="commentData.parent" :parentData="commentData.parent" />
      <div class="info">
        <img
          v-if="commentData.user.head_img"
          :src="$axios.defaults.baseURL + commentData.user.head_img"
          class="avatar"
        />
        <img v-else src="@/assets/smoke.jpg" class="avatar" />
        <div class="userInfo">
          <div class="name">{{ commentData.user.nickname }}</div>
          <div class="date">2小时前</div>
        </div>
        <div class="btn_reply" @click="replyComment">回复</div>
      </div>
      <div class="content">
        {{ commentData.content }}
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
import Parent from "../Comment/Parent";
export default {
  components: { Parent },
  props: ["commentData"],
  methods: {
    //事件总线
    replyComment() {
      eventBus.$emit("textMsg", this.commentData.id);
    },
  },
};
</script>

<style lang="less" scoped>
.main_commnet {
  padding: 0 10 /360 * 100vw;
  border-bottom: 1px solid #ccc;
  .info {
    display: flex;
    margin-top: 10 /360 * 100vw;
    padding: 10 /360 * 100vw 0;
    .avatar {
      width: 36 /360 * 100vw;
      height: 36 /360 * 100vw;
      object-fit: cover;
      border-radius: 18 /360 * 100vw;
    }
    .userInfo {
      flex: 1;
      padding-left: 10 /360 * 100vw;
      color: #333;
      .name {
        font-size: 16 /360 * 100vw;
      }
      .date {
        font-size: 14 /360 * 100vw;
        color: #888;
        margin-top: 3 /360 * 100vw;
      }
    }
    .btn_reply {
      font-size: 14 /360 * 100vw;
      color: #888;
    }
  }
  .content {
    padding: 10 /360 * 100vw 0;
    font-size: 14 /360 * 100vw;
    color: #333;
  }
}
</style>