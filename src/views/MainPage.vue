<!-- eslint-disable max-len -->
<template>
  <div class="main__top__img-and-text">
    <img src="../assets/img/slideImg1.jpg" alt="" class="main__top__img">
    <p class="main__top__text" v-html="$store.state.allContent.main.imgText[$store.state.language] "></p>
  </div>

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
    background-image: url('../assets/img/slideImg1.jpg');
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
    font-size: 45px;
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
    font-size: calc(var(--index));
  }
  }
</style>
