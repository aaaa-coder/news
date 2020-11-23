<template>
  <div class="container">
    <!-- 主页头部 -->
    <div class="index_top">
      <i class="iconfont iconnew"></i>
      <div class="search">
        <i class="iconfont iconsearch"></i>
        <span>搜索新闻</span>
      </div>
      <i class="iconfont iconwode" @click="$router.push('/profile')"></i>
    </div>
    <!-- 主页新闻列表 -->
    <div class="newsList">
      <ul>
        <li><a href="#">关注</a></li>
        <li><a href="#">头条</a></li>
        <li><a href="#">娱乐</a></li>
        <li><a href="#">体育</a></li>
        <li><a href="#">汽车</a></li>
        <li><a href="#">房产</a></li>
        <li>
          <a href="#"><i class="iconfont iconjiantou1"></i></a>
        </li>
      </ul>
    </div>

    <!-- 新闻内容 -->
    <div class="news_content">
      <NewsContent :category="3" />
    </div>
  </div>
</template>

<script>
import NewsContent from "../components/NewsContent";
export default {
  components: {
    NewsContent,
  },
};
</script>

<style lang="less" scoped>
.index_top {
  display: flex;
  align-items: center;
  height: 50 /360 * 100vw;
  background-color: #f00;
  padding: 0 10 /360 * 100vw;
  .iconnew {
    display: block;
    width: 54 /360 * 100vw;
    height: 54 /360 * 100vw;
    font-size: 54 /360 * 100vw;
    color: #fff;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210 /360 * 100vw;
    height: 34 /360 * 100vw;
    background-color: rgba(255, 255, 255, 0.5);
    margin-left: 10 /360 * 100vw;
    margin-right: 30 /360 * 100vw;
    color: #fff;
    border-radius: 17 /360 * 100vw;
    .iconsearch {
      font-size: 18 /360 * 100vw;
      margin-right: 2 /360 * 100vw;
    }
    span {
      font-size: 14 /360 * 100vw;
    }
  }
  .iconwode {
    display: block;
    width: 32 /360 * 100vw;
    height: 32 /360 * 100vw;
    font-size: 26 /360 * 100vw;
    color: #fff;
  }
}
.newsList {
  height: 43 /360 * 100vw;
  background-color: #e4e4e4;
  padding: 0 10 /360 * 100vw;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    li {
      height: 100%;
      a {
        display: block;
        line-height: 43 /360 * 100vw;
        .iconjiantou1 {
          display: block;
          transform: rotate(90deg);
          font-size: 22 /360 * 100vw;
        }
      }
    }
  }
}
</style>