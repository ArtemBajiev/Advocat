<template>
  <HeaderSlot></HeaderSlot>
  <div class="legalCenter">
    <div class="container">
      <HeaderItem>
        <h4 class="events-page__header">
        {{ $store.state.allContent.EventsPage.header[$store.state.language] }}
      </h4></HeaderItem>

      <div class="events-page__menu-slider">
        <MenuPage>
        </MenuPage>
        <div class="slider-and-name-slide">
          <div class="events-page__slider__container">
            <SliderMain :slide-data="$store.state.slideEvents"></SliderMain>
          </div>
          <span class="events-page__name-slide">Название презентации</span>
        </div>
      </div>
      <div class="events-page__event">
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

.events-page__menu-slider {
  display: flex;
  align-items: start;
}
.events-page__slider__container {
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 20px;

  height: 400px;
}
.events-page__name-slide {
  display: block;
}
.slider-and-name-slide {
  min-height: 400px;
  width: 100%;
  padding-left: 5% ;
}
.events-page__event
{
  margin-bottom: 30px;
}
@media (max-width:768px) {
  .events-page__menu-slider
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
