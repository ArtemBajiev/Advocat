<template>
  <div class="background">
    <HeaderSlot />
    <div class="lawyer__info">
      <div class="container">
        <div class="lawyer__header__container">
          <div class="lawyer__header__background">
            <h1 class="lawyer__header">
              {{ $store.state.allContent.lawyer[$store.state.language] }}
              {{ getLawyerData.fullName[$store.state.language] }}
            </h1>
          </div>
        </div>
        <div class="lawyer__container">
          <div class="lawyer__text-and-img">
            <img class="lawyer__img" :src="require(`@/assets/img/${getLawyerData.img}`)" alt="" />
            <p class="lawyer__text" v-html="getLawyerData.info[$store.state.language]"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="educational-publications">
      <div class="container">
        <p class="educational-publications__text">
          {{ $store.state.allContent.EducationalPublications.text[$store.state.language] }}
        </p>
        <span class="educational-publications__text-link">
          {{ $store.state.allContent.EducationalPublications.textLink[$store.state.language] }}
        </span>
        <a class="educational-publications__button">
          {{ $store.state.allContent.EducationalPublications.button[$store.state.language] }}
        </a>
      </div>
    </div>
    <div class="lawyer__contact">
      <div class="container">
        <h3 class="lawyer__contact__header">
          {{ $store.state.allContent.contact.header[$store.state.language] }}
        </h3>

        <ul class="lawyer__contact__all">
          <li class="lawyer__contact__item">
            <span class="lawyer__contact__item__title">
              {{ $store.state.allContent.contact.numberPhone[$store.state.language] }}
            </span>
            <a :href="getLawyerData.telLink">{{ getLawyerData.tel }}</a>
          </li>
          <li class="lawyer__contact__item">
            <span class="lawyer__contact__item__title">
              {{ $store.state.allContent.contact.email[$store.state.language] }}:</span
            >
            <a :href="getLawyerData.email">{{ getLawyerData.email }}</a>
          </li>
          <li class="lawyer__contact__item">
            <span class="lawyer__contact__item__title">
              {{ $store.state.allContent.contact.address[$store.state.language] }}:</span
            ><a href="">{{ getLawyerData.address[$store.state.language] }}</a>
          </li>
          <li class="messenger">
            <div class="whats messenger__item">
              <a :href="`https://wa.me/${getLawyerData.telLink}`">WhatsApp</a>
            </div>
            <div class="tg messenger__item">
              <a :href="`tg://resolve?domain=${getLawyerData.tgNikname}`">Telegram</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';

export default {
  components: { HeaderSlot },
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
.background {
  background-color: #fff;
}
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
  font-size: 42px;
  height: 100%;
  margin: 0;
}
.lawyer__container img {
  margin: 5px;
  height: auto;
  width: 35%;
  float: right;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.166);
  border-radius: 15px;
  margin: 0px 0px 20px 20px;
}
.lawyer__text {
  font-size: 32px;
  line-height: 32px;
  word-break: normal;
}
.lawyer__text-and-img {
  flex: 1 2 auto;
}
.educational-publications {
  margin-top: 40px;
  background-color: var(--bodyColor);
  border-radius: 30px;
  padding: 30px;
}
.educational-publications__text {
  margin: 0px;
  font-size: 34px;
}
.educational-publications__text-link {
  display: block;
  margin-top: 20px;
  font-size: 28px;
}
.educational-publications__button {
  display: inline-block;
  margin-top: 20px;
  padding: 20px 40px;
  background-color: #97755362;
  color: white;
  font-size: 24px;
  border-radius: 30px;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.212);
}
.educational-publications__button:hover {
  background-color: #97755388;
  color: white;
  cursor: pointer;
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
  list-style: none;
}
.lawyer__contact__item__title {
  font-size: 20px;
}
.lawyer__contact__item a {
  font-size: 20px;
  margin-left: 10px;
}
.messenger {
  display: flex;
}

.messenger__item a {
  display: block;
  margin: 20px;
  padding-top: 60px;
  position: relative;
  text-align: center;
  transition: color 0.3s ease-in-out;
}
.messenger__item a::before {
  display: block;
  width: 100%;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  filter: sepia(100%);
  transition: filter 0.3s ease-in-out;
}
.messenger__item a:hover::before {
  filter: sepia(0%);
}
.whats a::before {
  content: "";
  background-image: url("../assets/img/whats.png");
}
.whats a {
}
.whats a:hover {
  color: green;
}
.tg a::before {
  content: "";
  background-image: url("../assets/img/tg.png");
}
.tg a:hover {
  color: blue;
}
@media (max-width: 768px) {
  .lawyer__text
  {
    font-size: calc(var(--index) * 2);
  }
  .educational-publications__text
  {
    font-size: calc(var(--index) * 2);
  }
  .lawyer__contact__all
  {
    padding: 0;
  }
  .lawyer__header {
    font-size: calc(var(--index) * 2);
  }
  .lawyer__container img {
    width: 100%;
    margin: 0px 0px 20px 0px;
  }
  .lawyer__menu-block {
    margin: 0px;
  }
  .lawyer__container {
    flex-direction: column;
    align-items: center;
  }
  .lawyer__header__background {
    margin: 0px;
  }
  .lawyer__contact__all {
    max-width: 100%;
  }
}
</style>
