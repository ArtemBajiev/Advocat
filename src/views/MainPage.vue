<!-- eslint-disable max-len -->
<template>
  <HeaderSlot></HeaderSlot>
    <div class="main__top__img-and-text">
      <img :src="mobil ? require('../assets/img/homeMobil.jpg') :require('../assets/img/slideImg1.jpg')" alt="" class="main__top__img">
      <p class="main__top__text" v-html="$store.state.allContent.main.imgText[$store.state.language] "></p>
    </div>
    <div class="container">
      <ul class="main__cards">
        <MainCard v-for="advantage in $store.state.allContent.main.advantages" :key="advantage.id" :advantage="advantage"></MainCard>
      </ul>
    </div>
  <ArticlesMain/>
  <MainBottom></MainBottom>
</template>
<script>
import ArticlesMain from '@/components/ArticlesMain.vue';
import HeaderSlot from '@/components/HeaderSlot.vue';
import MainCard from '@/components/MainCard.vue';
import MainBottom from '@/components/MainBottom.vue';

export default {
  components: {
    ArticlesMain, MainCard, HeaderSlot, MainBottom,
  },
  data() {
    return {
      mobil: false,

    };
  },
  methods: {
  },
  beforeCreate() {
  // adding title for current view/page using vue-i18n
    const title = document.querySelector('title');
    title.innerText = 'SUDURAL';

    // adding og:image
    const keywords = document.createElement('META');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'Абрамов, Абрамов А.Б., Абрамов Александр Борисович, кандидат юридических наук, адвокат, РФ, Россия, Урал, Екатеринбург, суд, ГК, УК, УПК, АПК, уголовное дело, решение, приговор, консультация, юрист, недорого, стаж, судебное решение, хороший, лучший, гарантия, жалоба, Заявление, Иск, апелляционная, апелляция, кассация, кассационная жалоба, ВС РФ, Верховный суд, Арбитраж, Арбитражный суд, спор, мировое, судья, адвокат Абрамов Александр Борисович, адвокат Абрамов, адвокат Абрамов А.Б. суд, юридическая, помощь,');

    const description = document.createElement('META');
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'адвокат Абрамов Александр Борисович, адвокат, адвокат Абрамов А.Б., урал, Екатеринбург, Россия, лучший, Екатеринбург, жалоба, иск,');
    document.querySelector('head').appendChild(description, keywords);
  },
  created() {
    if (window.innerWidth < 500) {
      this.mobil = true;
    } else {
      this.mobil = false;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.mobil = true;
      } else {
        this.mobil = false;
      }
    });
  },
};
</script>
<style>
  @font-face {
    font-family: 'El Messiri';
    src: url('../assets/fonts/ElMessiri-VariableFont_wght.ttf');
  }
  .main__top__img-and-text
  {
    width: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    max-height: 75vh;
    overflow: hidden;
    position: relative;
  }
  .main__top__img
  {
    width: 100%;
    background-color: black;
  }
  .main__top__text
  {
    font-size: clamp(12px,3vw, 45px);
    position: absolute;
    top: 13%;
    vertical-align: center;
    left: 5%;
    max-width: 50%;
    color: white;
    font-family: 'El Messiri';
    font-weight: 700;
  }
  .main__cards
  {
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: relative;
    top: -140px;
    padding: 0px;
  }
  @media (max-width: 1024px) {
    .main__top__text
  {
    max-width: 80%;
  }
  }
  @media (max-width:768px) {
    .main__cards
    {
      margin-top: 50px;
      display: block;
      position: static;
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .main__top__text
  {
    font-size: 25px;
  }
  }
</style>
