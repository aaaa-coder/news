  <template>
  <div class="parent_comment">
    <Parent v-if="parentData.parent" :parentData="parentData.parent" />
    <div class="user_info">
      <div class="info">
        <span class="name">{{ parentData.user.nickname }}</span>
        <span class="date">2小时前</span>
      </div>
      <div class="btn_reply" @click="sendCommment">回复</div>
    </div>
    <!-- 内容模块 -->
    <div class="content">
      {{ parentData.content }}
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
export default {
  name: "Parent",
  props: ["parentData"],
  methods: {
    sendCommment() {
      eventBus.$emit("textMsg", this.parentData.id);
    },
  },
};
</script>

<style lang="less" scoped>
.parent_comment {
  padding: 0 3 /360 * 100vw;
  margin-top: 10 /360 * 100vw;
  border: 1px solid #ccc;
  .user_info {
    display: flex;
    padding: 10 /360 * 100vw;
    .info {
      flex: 1;
      font-size: 16 /360 * 100vw;
      color: #333;
      .date {
        font-size: 14 /360 * 100vw;
        color: #888;
        padding-left: 20 /360 * 100vw;
      }
    }
    .btn_reply {
      font-size: 14 /360 * 100vw;
      color: #888;
    }
  }
  .content {
    padding: 10 /360 * 100vw;
    font-size: 16 /360 * 100vw;
    color: #333;
  }
}
</style>