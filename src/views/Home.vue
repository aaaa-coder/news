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
        <!-- 遍历还是应该遍历category的postList -->
        <PostItem
          v-for="post in category.postList"
          :key="post.id"
          :post="post"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import PostItem from "../components/PostItem";

export default {
  data() {
    return {
      activeCategoryIndex: 0,
      categoryList: [],
    };
  },
  components: {
    HomeHeader,
    PostItem,
  },
  watch: {
    activeCategoryIndex() {
      this.getPostList();
    },
  },
  methods: {
    getPostList() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      this.$axios({
        url: "/post/",
        params: {
          category: currentCategory.id,
        },
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { data } = res.data;
          currentCategory.postList = data;
        }
      });
    },
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
          });
          this.getPostList();
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