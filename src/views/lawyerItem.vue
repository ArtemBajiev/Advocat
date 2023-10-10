<template>
  <HeaderSlot/>
  <div class="lawyer__info">
  <div class="container">
    <div class="lawyer__header__container">
      <div class="lawyer__header__background">
        <h1 class="lawyer__header">Адвокат {{ getLawyerData.fullName }}</h1>
      </div>
    </div>
    <div class="lawyer__container">
      <div class="lawyer__menu-block">
        <MenuPage >
          <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Инофрмация об адвокате</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Контакты</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Судебная практика</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">Законодательство</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link  class="lawyer__menu__item__link" to="/">Статьи</router-link>
      </li>
      <li class="lawyer__menu__item">
        <router-link class="lawyer__menu__item__link" to="/">
          Научно-правовой центр. Общественная приёмная
        </router-link>
      </li>
        </MenuPage>
      </div>
      <div class="lawyer__text-and-img">
      <img
        class="lawyer__img"
        :src="require(`@/assets/img/${getLawyerData.img}`)"
        alt=""
      />
      <p class="lawyer__text"  v-html="getLawyerData.info">

      </p>
    </div>
    </div>
  </div>
  </div>
  <div class="lawyer__contact">
        <h3 class="lawyer__contact__header">
          Как можно связаться со мной
        </h3>

      <ul class="lawyer__contact__all">
        <li class="lawyer__contact__item">
          <span  class="lawyer__contact__item__title">
            Номер телефона: </span>
          <a :href="getLawyerData.telLink">{{ getLawyerData.tel }}</a></li>
        <li class="lawyer__contact__item">
          <span class="lawyer__contact__item__title">
            Почта:</span> <a :href="getLawyerData.email">{{ getLawyerData.email }}</a>
        </li>
        <li class="lawyer__contact__item">
          <span class="lawyer__contact__item__title">
            Адрес:</span><a href="">{{ getLawyerData.address }}</a>
        </li>
      </ul></div>
</template>
<script>
import MenuPage from '@/components/MenuPage.vue';
import HeaderSlot from '@/components/HeaderSlot.vue';

export default {
  components: { MenuPage, HeaderSlot },
  data() {
    return {
      lawyerData: {},
    };
  },
  methods: {

  },
  computed: {
    getLawyerData() {
      return this.$store.state.advocatsInfo.find((item) => item.id === this.$route.params.id);
    },
  },
};
</script>
<style lang="scss">
.lawyer__container {
  display: flex;
}
.lawyer__info
{
  background-color: var(--bodyColor);
  border-radius: 0px 0px 30px 30px;
  padding-bottom: 30px;
}
.lawyer__header__background {
  background-color: var(--twoColor);
  padding: 8px 27px;
  transform: skewX(-13deg);
  border-radius: 10px;
  display: inline-block;
  margin-left: 25px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.366);
}
.lawyer__header__container {
  text-align: center;
  padding-top: calc(var(--index) * 1.75);
  margin-bottom: calc(var(--index) * 2.3);
}
.lawyer__header {
  background-color: var(--bodyColor);
  display: block;
  transform: skewX(13deg);
  border-radius: 5px;
  padding: 5px 25px;
  font-size: calc(var(--index) * 1.5);
  height: 100%;
  margin: 0;
}
.lawyer__container img {
  margin: 5px;
  height:auto;
  width: calc(var(--index)*17.2);
  float: right;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.166);
  border-radius: 15px;
}
.lawyer__menu-block
{
  width: 100%;
  margin-right: calc(var(--index) * 0.9);

}
.lawyer__text
{
  font-size: calc(var(--index) * 1.3);
  line-height: calc(var(--index) * 1.33);
}
.lawyer__text-and-img
{
  flex: 1 2 auto;
}
.lawyer__menu-block
{
  flex: 1 1 100%;
  max-width: 400px;
}
.lawyer__list-text
{
  padding-left: 8%;
}
.lawyer__list-text > li{
margin-bottom: 5%;
position: relative;
}
.lawyer__list-text > li::before{
content: '';
height: 10px;
width: 10px;
position: absolute;
border-radius: 50%;
background-color: var(--fontColorTwo);
left: -6%;
top: 10%;
}
.lawyer__contact
{
  margin-top: 40px;
  background-color: var(--bodyColor);
  border-radius: 30px 30px 0px 0px;
  padding: 30px;
}
.lawyer__contact__header
{
  color: var(--fontColorTwo);
  display: block;
  text-align: center;
}
.lawyer__contact__all
{margin: 0px auto;
max-width: 30%;
}
.lawyer__contact__item
{
  text-align: left;
  padding:20px 0px ;
  font-size: 16px;
}
.lawyer__contact__item__title
{
  font-size: 20px;
}
.lawyer__contact__item a{
  font-size: 20px;
  margin-left: 10px;
}
</style>
