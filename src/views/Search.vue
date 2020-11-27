<template>
  <div class="container">
    <div class="search_top">
      <i class="iconfont iconjiantou2" @click="$router.back()"></i>
      <div class="search">
        <i class="iconfont iconsearch"></i>
        <input type="text" placeholder="通灵兽消失术" v-model="searchValue" />
      </div>
      <div class="search_right" @click="searchArticles">搜索</div>
    </div>
    <div class="showRecommend" v-if="this.searchValue">
      <SearchBar
        v-for="post in postList"
        :key="post.id"
        :title="post.title"
        @click.native="
          $router.push({
            name: 'postDetail',
            query: { postId: post.id },
          })
        "
      />
    </div>

    <div class="recommend" v-else>
      <!-- 历史记录 -->
      <div class="history">
        <h4>历史记录</h4>
        <div class="recode">
          <span v-for="(history, index) in historyList" :key="index">
            {{ history }}
          </span>
        </div>
      </div>

      <!-- 热门搜索 -->
      <div class="hot_search">
        <h4>热门搜索</h4>
        <span>办公室小野否认解散</span>
        <span>月季如何嫁接</span>
        <span>办公室小野否认解散</span>
        <span>月季如何嫁接</span>
        <span>办公室小野否认解散</span>
        <span>月季如何嫁接</span>
      </div>
    </div>
  </div>
</template>


<script>
import SearchBar from "../components/SearchBar";
export default {
  data() {
    return {
      searchValue: "",
      postList: [],
      searchList: [],
      historyList: [],
    };
  },
  components: {
    SearchBar,
  },
  watch: {
    searchValue(newValue) {
      if (newValue) {
        this.recommendSearch();
      } else {
        this.historyList = JSON.parse(localStorage.getItem("history"));
      }
    },
  },
  methods: {
    searchArticles() {
      this.$axios({
        url: "/post_search",
        params: {
          keyword: this.searchValue,
        },
      }).then((res) => {
        const mySearch = JSON.parse(localStorage.getItem("history")) || [];
        this.searchList.push(this.searchValue);
        let arrSearch = [...mySearch, ...this.searchList];
        localStorage.setItem("history", JSON.stringify(arrSearch));
      });
    },
    //推荐搜索
    recommendSearch() {
      this.$axios({
        url: "/post_search_recommend",
        params: {
          keyword: this.searchValue,
        },
      }).then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          this.postList = data;
        }
      });
    },
  },
  mounted() {
    this.historyList = JSON.parse(localStorage.getItem("history"));
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 20 /360 * 100vw;
}
.search_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20 /360 * 100vw;
  font-size: 14 /360 * 100vw;
  .iconjiantou2 {
    padding-right: 10 /360 * 100vw;
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 20 /360 * 100vw;
    height: 38 /360 * 100vw;
    border: 1px solid #ccc;
    border-radius: 19 /360 * 100vw;
    .iconsearch {
      color: #888;
      margin-right: 3 /360 * 100vw;
    }
    input {
      border: 0;
    }
  }
  .search_right {
    margin-left: 7 /360 * 100vw;
  }
}
.history {
  margin: 20 /360 * 100vw 0;
  border-bottom: 1px solid #ccc;
  .recode {
    margin: 20 /360 * 100vw 0;
    font-size: 14 /360 * 100vw;
    span {
      display: inline-block;
      padding: 5 /360 * 100vw;
      margin: 1px;
    }
  }
}
.hot_search {
  h4 {
    margin-bottom: 10 /360 * 100vw;
  }
  span {
    display: inline-block;
    margin: 10 /360 * 100vw 0;
    font-size: 14 /360 * 100vw;
    &:nth-child(even) {
      margin-right: 40 /360 * 100vw;
    }
  }
}
</style>