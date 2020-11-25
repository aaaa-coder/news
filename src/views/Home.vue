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
        <van-list
          @load="loadMore"
          :immediate-check="false"
          v-model="category.loading"
          :finished="category.finished"
          finished-text="在拉就要坏了"
        >
          <!-- 遍历还是应该遍历category的postList -->
          <PostItem
            v-for="post in category.postList"
            :key="post.id"
            :post="post"
          />
        </van-list>
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
      //category只是某个栏目
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      if (currentCategory.postList.length == 0) {
        this.getPostList();
      }
    },
  },
  methods: {
    // 分页的事件
    loadMore() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      currentCategory.pageIndex++;
      this.getPostList();
    },
    //根据分栏拿文章
    getPostList() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      this.$axios({
        url: "/post/",
        params: {
          category: currentCategory.id,
          pageIndex: currentCategory.pageIndex,
          pageSize: currentCategory.pageSize,
        },
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          currentCategory.postList = [...currentCategory.postList, ...data];
          currentCategory.loading = false;
          if (data.length < currentCategory.pageSize) {
            currentCategory.finished = true;
          }
        }
      });
    },
    //拿到所有分栏
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
              pageIndex: 1,
              pageSize: 5,
              loading: false,
              finished: false,
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