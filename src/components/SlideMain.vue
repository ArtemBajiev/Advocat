<!-- eslint-disable max-len -->
<template>
       <div class="slide" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${itemSlide.slideImg}`) + ')'}">
      <h2 class="slide__text" v-html="itemSlide.slideText[$store.state.language]">

      </h2>
    </div>
</template>
<script>
export default
{
  props: ['itemSlide', 'slidePosition'],
  data() {
    return {

    };
  },
};
</script>
<style>
.slide-container
{
    display: flex;
    height: 100%;
    width: 100%;
}
.slide {
  height: 100%;
  min-width: 100%;
  background-size: 100% auto;
  background-position: top;
  overflow: hidden;
  vertical-align: middle;
 background-attachment: fixed;
 transform: translateX();
 position: relative;
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
  color: var(--fontColor);
}
@media (max-width: 1080px)
{
  .slide {

  background-size: auto 100% ;

}
.slide__text {
  height: 300px;
  width: 70%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 10%;
  font-size: calc(var(--index)*2);
}
}
</style>
