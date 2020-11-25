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
        <van-list
          @load="loadMore"
          :immediate-check="false"
          v-model="category.loading"
          :finished="category.finished"
          finished-text="人家也是有底线的好伐"
        >
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
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      //如果没文章才加载
      if (currentCategory.postList.length == 0) {
        this.loadPostList();
      }
    },
  },
  methods: {
    //分页加载更多
    loadMore() {
      //先拿到页数，每次需要翻页都自增
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      currentCategory.pageIndex++;
      this.loadPostList();
    },
    //获取每个分栏的文章
    loadPostList() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      this.$axios({
        url: "/post",
        params: {
          category: currentCategory.id,
          pageIndex: currentCategory.pageIndex,
          pageSize: currentCategory.pageSize,
        },
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          //进行结构，将原数据与请求的数据进行拼接，而不是替代
          currentCategory.postList = [...currentCategory.postList, ...data];
          //加载一页后，将loading变为false，不然加载一页后会卡在loading=true而无法进行加载其他页
          currentCategory.loading = false;
          //加载完毕后将finished改为true
          if (data.length < currentCategory.pageSize) {
            currentCategory.finished = true;
          }
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
              pageIndex: 1,
              pageSize: 5,
              loading: false,
              finished: false,
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