<template>
<HeaderComp></HeaderComp>
<router-view v-slot="{ Component, route }">
  <transition name="anim-page" mode="out-in">
    <div :key="route.path">
      <component :is="Component"></component>
    </div>
  </transition>
</router-view>

  <FooterComp></FooterComp>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  components: {
    HeaderComp,
    // eslint-disable-next-line vue/no-unused-components
    FooterComp,
  },
};
</script>
<style>
.container
{
  max-width: 1250px;
}
a{
  text-decoration: none;
  color: black;
}
:root{
  --index: calc(1vw + 1vh);
  --bodyColor:  #F1EDE7;
  --bodyColorTwo:#f7f5f2 ;
  --twoColor: #8F755B;
  --threeColor: #E8E2D8;
  --articlesColor:#AF855B;
  --fontColor: white;
  --fontColorTwo: black;
}
*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  color: var(--fontColorTwo);
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style: none;
}
ul{
  padding: 0;
}
body
{
  width: 100vw;
  overflow-x: hidden;
  background-color: var(--bodyColorTwo);
}
.app-container
{
  max-width: 100vw;
  overflow: hidden
}

.r-link{
   text-decoration: none;
  color: #D49F6A;
  transition: color .5s ease
;
}
.r-link:hover{
  color: white
}
/* scroll Bar */
/* W3C standard
   сейчас только для Firefox */
   * {
    scrollbar-width: thin;
    scrollbar-color: #D49F6A rgb(255, 255, 255);
}

/* для Chrome/Edge/Safari */
*::-webkit-scrollbar {
    width: 4px;
}

*::-webkit-scrollbar-track {
    background: #353535;
}

*::-webkit-scrollbar-thumb {
    background-color: #D49F6A;
    border-radius: 5px;
}
/* animation */
.anim-page-enter-from {

opacity: 0;
}
.anim-page-enter-active {
transition: all 0.5s ease-in;
}
.anim-page-enter-to {
opacity: 1;
}
.anim-page-leave-from {
opacity: 1;
}
.anim-page-leave-active {
transition: all 0.5s ease-in;
}
.anim-page-leave-to {

opacity: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
</style>
