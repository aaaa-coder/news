<template>
  <div class="container">
    <ProfileTitle title="栏目管理" />
    <div class="active">
      <h2>点击删除以下频道</h2>
      <div class="content">
        <span
          class="item"
          v-for="(active, index) in activeList"
          :key="active.index"
          >{{ active.name }}</span
        >
      </div>
    </div>
    <div class="deactive">
      <h2>点击增加以下频道</h2>
      <div class="content">
        <span
          class="item"
          v-for="(deactive, index) in deactiveList"
          :key="deactive.index"
          >{{ deactive.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import ProfileTitle from "../components/ProfileTitle";
export default {
  components: { ProfileTitle },
  data() {
    return {
      activeList: [],
      deactiveList: [],
    };
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        const { data } = res.data;
        this.activeList = data;
      }
    });
  },
};
</script>

<style lang="less" scoped>
h2 {
  padding-left: 10 /360 * 100vw;
  font-weight: 400;
  color: #888;
  font-size: 10 /360 * 100vw;
  margin-bottom: 10 /360 * 100vw;
}
.content {
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 6 /360 * 100vw 12 /360 * 100vw;
    border: 1px solid #ccc;
    margin: 6 /360 * 100vw 12 /360 * 100vw;
  }
}
.deactive {
  h2 {
    margin-top: 20 /360 * 100vw;
  }
}
</style>