<template>
  <div class="HomeContainer">
    <!-- 首页头部 -->
    <HomeHeader />
    <!-- 头部新闻列表 -->
    <van-tabs v-model="activeCategoryIndex">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        {{ category.name }}的内容
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
export default {
  data() {
    return {
      activeCategoryIndex: 0,
      categoryList: [],
    };
  },
  components: {
    HomeHeader,
  },
  methods: {
    getCategoryList() {
      this.$axios({
        url: "/category",
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.categoryList = data.map((category) => {
            return {
              ...category,
              postList: [],
            };
            console.log(category);
            console.log(postList);
          });
          // console.log(res);
        }
      });
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style lang="less" scoped>
</style>