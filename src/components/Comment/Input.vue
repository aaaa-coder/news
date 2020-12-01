<template>
  <div class="input_wrapper">
    <div class="deactive" v-if="isWriteComment">
      <input type="text" placeholder="写跟帖" @focus="showTextarea" />
      <div class="comment">
        <i class="iconfont iconpinglun-"></i>
        <span class="nums">{{ postData.comment_length }}</span>
      </div>
      <i class="iconfont iconshoucang"></i>
      <i class="iconfont iconfenxiang"></i>
    </div>
    <div class="active" v-if="!isWriteComment">
      <textarea
        rows="3"
        v-model="commentContent"
        ref="textDom"
        @blur="hideTextarea"
        placeholder=""
      ></textarea>
      <span class="send_comment" @click="sendComment">发送</span>
    </div>
  </div>
</template>

<script>
import eventBus from "@/utils/eventBus";
export default {
  props: ["postData"],
  data() {
    return {
      isWriteComment: true,
      commentContent: "",
      parentId: "",
    };
  },
  methods: {
    //聚焦弹出textarea
    showTextarea() {
      this.isWriteComment = false;
      this.$nextTick(() => {
        this.$refs.textDom.focus();
      });
    },
    //隐藏textarea
    hideTextarea() {
      setTimeout(() => {
        this.isWriteComment = true;
      }, 0);
    },
    //发评论
    sendComment() {
      this.$axios({
        method: "post",
        url: "/post_comment/" + this.$route.query.postId,
        data: {
          parent_id: this.parentId,
          content: this.commentContent,
        },
      }).then((res) => {
        if (res.status === 200) {
          this.$toast.success(res.data.message);
          this.commentContent = "";
          this.$emit("reloadComment");
        }
      });
    },
  },

  mounted() {
    //事件总线
    eventBus.$on("textMsg", (id) => {
      this.showTextarea();
      this.parentId = id;
    });
  },
  destroyed() {
    eventBus.$off("textMsg");
  },
};
</script>
<style lang="less" scoped>
.deactive {
  height: 30 /360 * 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .iconfont {
    font-size: 23 /360 * 100vw;
  }
  input {
    width: 180 /360 * 100vw;
    height: 28 /360 * 100vw;
    border: 0;
    outline: none;
    background-color: #d7d7d7;
    border-radius: 14 /360 * 100vw;
    box-sizing: border-box;
    padding: 0 20 /360 * 100vw;
    color: #333;
    font-size: 14 /360 * 100vw;
  }
  .comment {
    position: relative;
    margin-bottom: 15 /360 * 100vw;
    .nums {
      position: absolute;
      top: -5 /360 * 100vw;
      left: 6 /360 * 100vw;
      font-size: 12 /360 * 100vw;
      color: #fff;
      background-color: red;
      padding: 0 4 /360 * 100vw;
      border-radius: 6 /360 * 100vw;
    }
  }
}
.active {
  display: flex;
  align-items: flex-end;
  width: 100%;
  textarea {
    background-color: #d7d7d7;
    width: 260 /360 * 100vw;
    border-radius: 10 /360 * 100vw;
    padding: 0 10 /360 * 100vw;
    box-sizing: border-box;
    resize: none;
  }
  .send_comment {
    font-size: 16 /360 * 100vw;
    color: #fff;
    background-color: red;
    height: 24 /360 * 100vw;
    line-height: 24 /360 * 100vw;
    padding: 0 15 /360 * 100vw;
    border-radius: 10 /360 * 100vw;
    margin-left: 12 /360 * 100vw;
  }
}
</style>