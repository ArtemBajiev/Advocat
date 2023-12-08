<!-- eslint-disable max-len -->
<template>
  <router-link to="/aut">
  <div class="main__top__img-and-text">
    <img src="../assets/img/slideImg1.jpg" alt="" class="main__top__img">
    <p class="main__top__text" v-html="$store.state.allContent.main.imgText[$store.state.language] "></p>
  </div></router-link>

  <ArticlesMain/>
</template>
<script>
import ArticlesMain from '@/components/ArticlesMain.vue';

export default {
  components: { ArticlesMain },
};
</script>
<style>
  .main__top__img-and-text
  {
    width: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
  }
  .main__top__img
  {
    width: 100%;
  }
  .main__top__text
  {
    font-size: clamp(12px,3vw, 45px);
    position: absolute;
    top: 30%;
    vertical-align: center;
    left: 5%;
    max-width: 50%;
    color: white;
    font-weight: 700;
  }
  @media (max-width: 1024px) {
    .main__top__text
  {
    max-width: 80%;
  }
  }
</style>
