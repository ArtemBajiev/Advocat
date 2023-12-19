<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
    <div class="slide-container" :style="{transform: 'translateX('+slidePosition+'%)',  transition: 'all .8s ease'}" @touchstart="swaipStart($event.touches[0].clientX)" @touchend="swaipEnd($event.changedTouches[0].clientX)" >
            <SlideMain v-for="slide in slideData.slideEvents.slice().reverse()" :key="slide.id" :itemSlide="slide" :slidePosition="slidePosition"/>
</div>
<div class="control-slide">
      <div class="control-btn">
          <button class="control-btn-left" @click="slideLeft"></button>
          <button class="control-btn-right" @click="slideRight"></button>
      </div>
  </div>
  <div class="all-indicators">
    <div class="slide-indicator "
    :class="{'indicator-active':
    index * -100 == slidePosition}"
     v-for="(slide, index) in $store.state.receivedData.slideEvents.slice().reverse()" :key="slide.id"
     @click="slidePosition = index * -100 "></div>
  </div>
</template>
<script>
import SlideMain from './SlideMain.vue';

export default {
  props: ['slideData'],
  components: { SlideMain },
  data() {
    return {
      slideActive: 0,
      slidePosition: 0,
      swaipeStartData: 0,
      swaipeEndData: 0,
    };
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    slideRight() {
      if (this.slidePosition > this.$store.state.receivedData.slideEvents.length * (-100) + 100) {
        this.slidePosition -= 100;
        this.slideActive = Math.abs(this.slidePosition) / 100;
      }
    },
    slideLeft() {
      if (this.slidePosition < 0) {
        this.slidePosition += 100;
        this.slideActive = Math.abs(this.slidePosition) / 100;
      }
    },
    swaipStart(event) {
      this.swaipeStartData = event / document.querySelector('.slide-container').offsetWidth;
    },
    swaipEnd(event) {
      this.swaipeEndData = event / document.querySelector('.slide-container').offsetWidth;
      this.swaip();
    },
    swaip() {
      if (this.swaipeStartData * 0.9 > this.swaipeEndData) {
        this.slideRight();
      } else if (this.swaipeStartData < this.swaipeEndData * 0.9) {
        this.slideLeft();
      }
    },
  },
};
</script>
<style scoped>
.control-slide
{
  position: absolute;
  top: 0;
  bottom:0 ;
  margin: auto 0;
  height: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.control-btn
{
  width: 100%;
  position: absolute;
}
.control-btn *
{
  padding:30px;
  margin: 20px;
  transition: transform .3s ease-in-out;
  cursor: pointer;
}
.control-btn *:nth-child(1):hover
{
    transform: scale(1.2) rotate(180deg);
}
.control-btn *:nth-child(2):hover
{
    transform: scale(1.2);
}
.control-btn-right
{
    background-color: transparent;
    border: 0px;
    background-image: url('../assets/img/arrowFFF.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    right: 0;
}
.control-btn-left
{
    background-color: transparent;
    border: 0px;
    background-image: url('../assets/img/arrowFFF.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(180deg);
    position: absolute;
    left: 0;
  }
.all-indicators
{
    position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
bottom: 20px;
display: flex;
justify-content: center;
}
.slide-indicator
{
    background-color: #977553B2;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    margin: 0px 20px;
    transition: background-color, transform 0.5s ease ;
    cursor: pointer;
}
.slide-indicator:hover
{
    background-color:#c0b2a2b2;
}
.indicator-active
{
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
    border: 1px solid rgba(94, 94, 94, 0.459);
}
@media (max-width: 768px) {
  .control-btn *
{
  padding:10px;
  margin: 5px;

}
}

</style>
