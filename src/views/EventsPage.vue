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
            <SliderMain :slide-data="$store.state.receivedData.slideEvents"></SliderMain>
          </div>
        </div>
      <div class="events-page__event">
      <div class="row">
        <!--eslint-disable-next-line max-len-->
        <div class="col-md-6 g-4" v-for="item in $store.state.receivedData.lawyerEvents" :key="item.id">
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
.btn-go-back
{
  position: absolute;
  top: 160px;
  background-color: transparent;
  border: 0;
  background-color: white;
  background-image: url('../assets/img/goBackpng.svg');
  width: 40px;
  height: 40px;
  background-position: 100% center;
  background-repeat: no-repeat;
  background-size: 80%;
  border: 2px solid #977657;
  border-radius: 10px;
  transition: background-position .6s ease-in-out ;
}
.btn-go-back:hover
{
  background-position: 30% center;
}

.events-page__slider__container {
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  height: 400px;
}
.slider-and-name-slide {
  min-height: 400px;
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
}

</style>
