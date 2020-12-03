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
          @click="deleteItem(index)"
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
          @click="addItem(index)"
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
    if (localStorage.getItem("activeList")) {
      this.activeList = JSON.parse(localStorage.getItem("activeList"));
      if (localStorage.getItem("deactiveList")) {
        this.deactiveList = JSON.parse(localStorage.getItem("deactiveList"));
      }
    } else {
      this.$axios({
        url: "/category",
      }).then((res) => {
        if (res.status === 200) {
          console.log(res);
          const { data } = res.data;
          this.activeList = data;
        }
      });
    }
  },
  methods: {
    deleteItem(index) {
      if (this.activeList.length > 1) {
        this.deactiveList.push(this.activeList[index]);
        this.activeList.splice(index, 1);
      } else {
        this.$toast("再删就出事了哦");
      }
    },
    addItem(index) {
      this.activeList.push(this.deactiveList[index]);
      this.deactiveList.splice(index, 1);
    },
  },
  watch: {
    activeList() {
      localStorage.setItem("activeList", JSON.stringify(this.activeList));
    },
    deactiveList() {
      localStorage.setItem("deactiveList", JSON.stringify(this.deactiveList));
    },
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