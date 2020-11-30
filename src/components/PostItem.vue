<template>
  <div class="postwrapper">
    <!-- 少图的情况 -->
    <div
      class="signlePost"
      v-if="post.type == 1 && post.cover.length > 0 && post.cover.length < 3"
    >
      <div class="left">
        <div class="post_title">{{ post.title }}</div>
        <div class="info">
          <span class="publisher">{{ post.user.nickname }}</span>
          <span class="comment">{{ post.comment_length }}跟帖</span>
        </div>
      </div>
      <div class="right">
        <img :src="post.cover[0].url | setImgUrl" alt="" class="signle_cover" />
      </div>
    </div>
    <!-- 多图的情况 -->
    <div class="multiplePost" v-if="post.type == 1 && post.cover.length >= 3">
      <div class="post_title">{{ post.title }}</div>
      <div class="pic">
        <img :src="post.cover[0].url | setImgUrl" alt="" class="mult_cover" />
        <img :src="post.cover[1].url | setImgUrl" alt="" class="mult_cover" />
        <img :src="post.cover[2].url | setImgUrl" alt="" class="mult_cover" />
      </div>
      <div class="info">
        <span class="publisher">{{ post.user.nickname }}</span>
        <span class="comment">{{ post.comment_length }}跟帖</span>
      </div>
    </div>
    <!-- 视频样式 -->
    <div class="video" v-if="post.type == 2 && post.cover.length > 0">
      <div class="post_title">{{ post.title }}</div>
      <div class="video_pic">
        <img :src="post.cover[0].url | setImgUrl" alt="" class="video_cover" />
        <span class="play iconfont iconshipin"></span>
      </div>
      <div class="info">
        <span class="publisher">{{ post.user.nickname }}</span>
        <span class="comment">{{ post.comment_length }}跟帖</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="less" scoped>
.postwrapper {
  padding: 0 10 /360 * 100vw;
}
.post_title {
  font-size: 14 /360 * 100vw;
  color: #333;
  margin-bottom: 5 /360 * 100vw;
}
.info {
  font-size: 12 /360 * 100vw;
  margin-top: 5 /360 * 100vw;
  color: #888;
  .comment {
    margin-left: 10 /360 * 100vw;
  }
}
//单页图片样式
.signlePost {
  display: flex;
  padding: 10 /360 * 100vw 0;
  border-bottom: 1px solid #ccc;
  .signle_cover {
    width: 121 /360 * 100vw;
    height: 75 /360 * 100vw;
    object-fit: cover;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 6 /360 * 100vw;
    margin-right: 5 /360 * 100vw;
    height: 70 /360 * 100vw;
  }
}
// 多图片样式
.multiplePost {
  padding: 10 /360 * 100vw 0;

  border-bottom: 1px solid #ccc;

  .pic {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    .mult_cover {
      width: 112 /360 * 100vw;
      height: 74 /360 * 100vw;
    }
  }
}
//视频样式
.video {
  border-bottom: 1px solid #ccc;
  padding: 10 /360 * 100vw 0;
  .video_pic {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .video_cover {
      width: 100%;
      height: 170 /360 * 100vw;
      object-fit: cover;
    }
    .iconshipin {
      position: absolute;
      font-size: 54 /360 * 100vw;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
    }
  }
}
</style>