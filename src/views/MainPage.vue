<!-- eslint-disable max-len -->
<template>
    <HeaderComp></HeaderComp>
  <div class="main__slider__container">
    <SliderMain/>
  </div>

  <ArticlesMain/>
</template>
<script>
import HeaderComp from '@/components/HeaderComp.vue';
import SliderMain from '@/components/SliderMain.vue';
import ArticlesMain from '@/components/ArticlesMain.vue';

export default {
  components: { SliderMain, ArticlesMain, HeaderComp },

};
</script>
<style scoped>
.main__slider__container
{
  overflow-x: hidden;
}
.slide-container
{
    display: flex;
    height: 100vh;
    width: 100vw;
}
.slide {
  background-image: url("@/assets/img/slideImg1.jpg");
  height: 100vh;
  min-width: 100vw;
  background-size: 100% auto;
  background-position: top;
  overflow: hidden;
  vertical-align: middle;
 background-attachment: fixed;
 transform: translateX();
 position: relative;
}
.slide:nth-child(2) {
  background-image: url("@/assets/img/slide2.png");
}
.slide:nth-child(3) {
  background-image: url("@/assets/img/slide3.png");
}
.slide__text {
  height: 300px;
  width: 800px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 10%;
  font-size: 48px;
}
/* slide control */

</style>
