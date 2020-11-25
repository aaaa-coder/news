<template>
  <div class="HomeContainer">
    <!-- 首页头部 -->
    <HomeHeader />
    <van-tabs v-model="activeCategoryIndex">
      <van-tab
        v-for="category in categoryList"
        :key="category.id"
        :title="category.name"
      >
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
      this.loadPostList();
    },
  },
  methods: {
    //获取每个分栏的文章
    loadPostList() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      this.$axios({
        url: "/post",
        params: {
          category: currentCategory.id,
        },
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          currentCategory.postList = data;
        }
      });
    },
    //获取分栏列表
    loadCategoryList() {
      this.$axios({
        url: "/category",
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.categoryList = data.map((item) => {
            return {
              ...item,
              postList: [],
            };
          });
          this.loadPostList();
        }
      });
    },
  },
  mounted() {
    this.loadCategoryList();
  },
};
</script>

<style lang="less" scoped>
</style>