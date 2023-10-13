<template>
  <HeaderSlot></HeaderSlot>
  <div class="legalCenter">
    <div class="container">
      <div class="legal-center__header__container">
        <h2 class="legal-center__header">
          {{ $store.state.allContent.EventsPage.header[$store.state.language] }}
        </h2>
      </div>

      <div class="legal-center__menu-slider">
        <MenuPage>
        </MenuPage>
        <div class="slider-and-name-slide">
          <div class="legal-center__slider__container">
            <SliderMain :slide-data="$store.state.slideEvents"></SliderMain>
          </div>
          <span class="legal-center__name-slide">Название презентации</span>
        </div>
      </div>
      <div class="legal-center__event">
      <div class="row">
        <div class="col-md-6 g-5" v-for="item in $store.state.lawyerEvents" :key="item.id">
          <router-link :to="{name: 'event', params:{id: item.id}} ">
            <EventCard :item="item">
            </EventCard>
          </router-link>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderMain from '@/components/SliderMain.vue';
import HeaderSlot from '@/components/HeaderSlot.vue';
import MenuPage from '@/components/MenuPage.vue';
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    SliderMain,
    HeaderSlot,
    MenuPage,
    EventCard,
  },
};
</script>
<style lang="scss">
.legal-center__header {
  display: inline-block;
  text-align: center;
  margin: 40px auto;
  position: relative;
  background-color: var(--bodyColor);
  padding: 5px 10px;
  border-radius: 15px;
}
.legal-center__header__container {
  display: flex;
  justify-content: center;
}
.legal-center__header::before {
  content: "";
  position: absolute;
  height: 120%;
  width: 30%;
  background-color: var(--twoColor);
  z-index: -1;
  top: -10%;
  left: -5%;
  border-radius: 15px;
}
.legal-center__menu-slider {
  display: flex;
  align-items: start;
}
.legal-center__slider__container {
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 20px;

  height: 400px;
}
.legal-center__name-slide {
  display: block;
}
.slider-and-name-slide {
  min-height: 400px;
  width: 100%;
  padding-left: 5% ;
}
.legal-center__event
{
  margin-bottom: 30px;
}
@media (max-width:768px) {
  .legal-center__menu-slider
  {
    flex-direction: column;
  }
  .lawyer__menu
  {
    margin-bottom: 40px;
  }
  .slider-and-name-slide
  {
    padding: 0px;
  }
}

</style>
