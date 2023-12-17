<!-- eslint-disable max-len -->
<template>
  <router-link to="/aut">
    <div class="main__top__img-and-text">
      <img :src="mobil ? require('../assets/img/homeMobil.jpg') :require('../assets/img/slideImg1.jpg')" alt="" class="main__top__img">
      <p class="main__top__text" v-html="$store.state.allContent.main.imgText[$store.state.language] "></p>
    </div>
  </router-link>

  <ArticlesMain/>
</template>
<script>
import ArticlesMain from '@/components/ArticlesMain.vue';

export default {
  components: { ArticlesMain },
  data() {
    return {
      mobil: false,
    };
  },
  created() {
    if (window.innerWidth < 500) {
      this.mobil = true;
    } else {
      this.mobil = false;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.mobil = true;
      } else {
        this.mobil = false;
      }
    });
  },
};
</script>
<style>
  @font-face {
    font-family: 'El Messiri';
    src: url('../assets/fonts/ElMessiri-VariableFont_wght.ttf');
  }
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
    background-color: black;
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
    font-family: 'El Messiri';
    font-weight: 700;
  }
  @media (max-width: 1024px) {
    .main__top__text
  {
    max-width: 80%;
  }
  }
  @media (max-width: 500px) {
    .main__top__text
  {
    font-size: 25px;
  }
  }
</style>
