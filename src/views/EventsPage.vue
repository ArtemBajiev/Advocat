<template>
  <HeaderSlot></HeaderSlot>
  <div class="legalCenter">
    <div class="container">
      <!--<button class="btn-go-back" @click="$router.go(-1)"></button>-->
      <HeaderItem>
        <h4 class="events-page__header">
        {{ $store.state.allContent.EventsPage.header[$store.state.language] }}
      </h4></HeaderItem>

        <div class="slider-and-name-slide">
          <div class="events-page__slider__container">
            <SliderMain :slide-data="$store.state.receivedData"></SliderMain>
          </div>
        </div>
      <div class="events-page__event">
      <div class="row">
        <!--eslint-disable-next-line max-len-->
        <div class="col-md-6 g-4" v-for="item in $store.state.receivedData.lawyerEvents.slice().reverse()" :key="item.id">
          <router-link :to="{name: 'event', params:{id: item.id}} ">
            <EventCard :item="item" v-if="item.img">
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
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    SliderMain,
    HeaderSlot,
    EventCard,
  },
};
</script>
<style lang="scss">

.events-page__slider__container {
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  height: 600px;
}
.slider-and-name-slide {
  width: 100%;
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
  .events-page__slider__container {
    height: 50vw;
  }
}

</style>
