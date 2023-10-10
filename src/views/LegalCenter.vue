<template>
    <HeaderSlot></HeaderSlot>
    <div class="container">
        <h2 class="legal-center__header">Мероприятия</h2>
        <div class="legal-center__menu-slider">
            <MenuPage>
                <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">
            Научно-правовой центр.
             Общественная приёмная
            </router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Информация об адвокате</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Контакты</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Судебная практика</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link  class="lawyer__menu__item__link" to="/">Законодательство</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">
          Статьи
        </router-link>
    </li>
        <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">
          Мероприятия
        </router-link>
      </li>
            </MenuPage>
            <div class="slider-and-name-slide">
            <div class="legal-center__slider__container">
            <SliderMain :slide-data="$store.state.slide"></SliderMain>
            </div>
            <span class="legal-center__name-slide">Название презентации</span>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
</template>
<script>
import SliderMain from '@/components/SliderMain.vue';
import HeaderSlot from '@/components/HeaderSlot.vue';
import MenuPage from '@/components/MenuPage.vue';

export default {
  components: { SliderMain, HeaderSlot, MenuPage },
};
</script>
<style lang="scss">
.legal-center__menu-slider
{
    display: flex;
}
.legal-center__slider__container
{
    width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 20px;

    height: 90%;

}
.legal-center__name-slide
{
    display: block;

}
.slider-and-name-slide
{
    min-height: 400px;
    width: 100%;
    padding: 0px 5%;
}
</style>
