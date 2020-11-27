<template>
  <div class="collectionWrapper">
    <ProfileTitle title="我的收藏" />
    <PostItem
      :post="favorite"
      v-for="favorite in favoriteList"
      :key="favorite.id"
      @click.native="
        favorite.type == 1
          ? $router.push({
              name: 'particular',
              query: { newsId: favorite.id },
            })
          : $router.push({
              name: 'videoItem',
              query: { newsId: favorite.id },
            })
      "
    />
  </div>
</template>

<script>
import ProfileTitle from "@/components/ProfileTitle";
import PostItem from "@/components/PostItem";
export default {
  components: {
    ProfileTitle,
    PostItem,
  },
  data() {
    return {
      favoriteList: [],
    };
  },
  methods: {
    getUserStar() {
      this.$axios({
        url: "user_star",
      }).then((res) => {
        if (res.status === 200) {
          // console.log(res);
          const { data } = res.data;
          this.favoriteList = data;
        }
      });
    },
  },
  mounted() {
    this.getUserStar();
  },
};
</script>

<style>
</style>