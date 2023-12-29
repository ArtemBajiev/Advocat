<template>
  <LoadingPage v-if="$store.state.loading || $store.state.loadingImg"></LoadingPage>
  <div class="wrapper">
    <HeaderComp></HeaderComp>
<router-view v-slot="{ Component, route }">
  <transition name="anim-page" mode="out-in">
    <div :key="route.path">
      <component :is="Component"></component>
    </div>
  </transition>
</router-view>
<FooterComp></FooterComp>
  <transition name="anim-page" mode="out-in">
    <button v-show="goTop" @click="scrollTop" class="go-top"></button>
  </transition>
  </div>

</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import LoadingPage from './components/LoadingPage.vue';

export default {
  components: {
    HeaderComp,
    FooterComp,
    LoadingPage,

  },
  data() {
    return {
      goTop: false,
      oldscroll: 0,
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.$store.dispatch('GetData');
  },
  created() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200 && window.scrollY < this.oldscroll) {
        this.goTop = true;
      } else {
        this.goTop = false;
      }
      this.oldscroll = window.scrollY;
    });
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style>
@font-face {
      font-family: 'El Messiri';
      src: url('./assets/fonts/ElMessiri-VariableFont_wght.ttf');
      font-weight: 500;
    }
    @font-face {
      font-family: 'Rubic';
      src: url('./assets/fonts/Rubik-VariableFont_wght.ttf');
    }
    :root{
  --index: calc(1vw + 1vh);
  --bodyColor:  #ffffff;
  --bodyColorTwo:#f7f5f2 ;
  --twoColor: #374550;
  --threeColor: #E8E2D8;
  --colorHeaderEl: #A98D6F;
  --articlesColor:#213455;
  --twoColorHover:#384f77;
  --fontColor: white;
  --fontColorTwo: black;
}
h2{
  font-size: clamp(25px, calc(var(--index)*2), 35px);
}
.wrapper
{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
.container
{
  max-width: 1250px;
}
a{
  text-decoration: none;
  color: black;
}

*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  color: var(--fontColorTwo);
  font-family: 'Rubic';

}

body
{
  width: 100vw;
  overflow-x: hidden;
  background-color: var(--bodyColor);
}
.app-container
{

}
.go-top
{
  position: fixed;
  right: 8%;
  bottom: 5%;
  height: clamp(50px,4vw, 70px);
  width: clamp(50px,4vw, 70px);
  background-color: var(--twoColor);
  border-radius: 50%;
  border: 0px;
  background-image: url('./assets/img/arrowFFF.svg');
  background-size: 60%;
  background-position: 30% center;
  background-repeat: no-repeat;
  transform: rotate(-90deg);
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  z-index: 100;
}
.go-top:hover{
  opacity: 1;
}
.r-link{
   text-decoration: none;
  color: #D49F6A;
  transition: color .5s ease;
}
.r-link:hover{
  color: white
}
/* scroll Bar */
/* W3C standard
   сейчас только для Firefox */
   * {
    scrollbar-width: thin;
    scrollbar-color: var(--twoColor) rgb(255, 255, 255);
}

/* для Chrome/Edge/Safari */
*::-webkit-scrollbar {
    width: 4px;
}

*::-webkit-scrollbar-track {
    background: #bdbdbd;
}

*::-webkit-scrollbar-thumb {
    background-color: var(--twoColor);
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

}
.anim-page-leave-from {

}
.anim-page-leave-active {
transition: all 0.5s ease-in;
}
.anim-page-leave-to {

opacity: 0;
}
/* go-top */
.go-top-enter-from {
  transform:translate(100px) ;
  opacity: 0;
}
.go-top-enter-active {
  transition: all 0.3s ease-in;
}
.go-top-enter-to {
  opacity: 0.6;
}
.go-top-leave-from {
  opacity: 0.6;
}
.go-top-leave-active {
  transform:translate(-200%) ;
  transition: all 0.3s ease-in;
}
.go-top-leave-to {

  opacity: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
</style>
