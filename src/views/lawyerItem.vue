<template>
  <HeaderSlot />
  <div class="lawyer__info">
    <div class="container">
      <div class="lawyer__header__container">
        <div class="lawyer__header__background">
          <h1 class="lawyer__header">{{ $store.state.allContent.lawyer[$store.state.language] }}
             {{ getLawyerData.fullName[$store.state.language] }}
          </h1>
        </div>
      </div>
      <div class="lawyer__container">
        <div class="lawyer__menu-block">
          <MenuPage>
          </MenuPage>
        </div>
        <div class="lawyer__text-and-img">
          <img class="lawyer__img" :src="require(`@/assets/img/${getLawyerData.img}`)" alt="" />
          <p class="lawyer__text" v-html="getLawyerData.info[$store.state.language]"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="lawyer__contact">
    <h3 class="lawyer__contact__header">
      {{ $store.state.allContent.contact.header[$store.state.language] }}
    </h3>

    <ul class="lawyer__contact__all">
      <li class="lawyer__contact__item">
        <span class="lawyer__contact__item__title">
          {{$store.state.allContent.contact.numberPhone[$store.state.language]}} </span>
        <a :href="getLawyerData.telLink">{{ getLawyerData.tel }}</a>
      </li>
      <li class="lawyer__contact__item">
        <span class="lawyer__contact__item__title">
          {{$store.state.allContent.contact.email[$store.state.language]}}:</span>
        <a :href="getLawyerData.email">{{ getLawyerData.email }}</a>
      </li>
      <li class="lawyer__contact__item">
        <span class="lawyer__contact__item__title">
          {{$store.state.allContent.contact.address[$store.state.language]}}:</span
        ><a href="">{{ getLawyerData.address[$store.state.language] }}</a>
      </li>
    </ul>
  </div>
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
  methods: {},
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
.lawyer__info {
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
  height: auto;
  width: 60%;
  float: right;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.166);
  border-radius: 15px;
}
.lawyer__text {
  font-size: 32px;
  line-height: 32px;
  word-break:normal;
}
.lawyer__text-and-img {
  flex: 1 2 auto;
}
.lawyer__menu-block {
  width: 100%;
  margin-right: calc(var(--index) * 0.9);
  flex: 1 1 100%;
  max-width: 400px;
}
.lawyer__list-text {
  padding-left: 8%;
}
.lawyer__list-text > li {
  margin-bottom: 5%;
  position: relative;
}
.lawyer__list-text > li::before {
  content: "";
  height: 10px;
  width: 10px;
  position: absolute;
  border-radius: 50%;
  background-color: var(--fontColorTwo);
  left: -6%;
  top: 10%;
}
.lawyer__contact {
  margin-top: 40px;
  background-color: var(--bodyColor);
  border-radius: 30px 30px 0px 0px;
  padding: 30px;
}
.lawyer__contact__header {
  color: var(--fontColorTwo);
  display: block;
  text-align: center;
}
.lawyer__contact__all {
  margin: 0px auto;
  max-width: 30%;
}
.lawyer__contact__item {
  text-align: left;
  padding: 20px 0px;
  font-size: 16px;
}
.lawyer__contact__item__title {
  font-size: 20px;
}
.lawyer__contact__item a {
  font-size: 20px;
  margin-left: 10px;
}
@media (max-width: 768px) {
  .lawyer__menu-block
  {
    margin: 0px;
  }
  .lawyer__container
  {
    flex-direction: column;
    align-items: center;
  }
  .lawyer__header__background
  {
    margin: 0px;
  }
  .lawyer__contact__all
  {
    max-width: 100%;
  }
}
</style>
