<template>
  <div class="background">
    <HeaderSlot />
    <div class="lawyer__info">
      <div class="container">
        <HeaderItem>
            <h1 class="lawyer__header">
              {{ $store.state.allContent.lawyer[$store.state.language] }}
              {{ getLawyerData.fullName[$store.state.language] }}
            </h1>
          </HeaderItem>
        <div class="lawyer__container">
          <div class="lawyer__text-and-img">
            <img class="lawyer__img" :src="`${$store.state.URL__DATA}${getLawyerData.img}`"
             alt="" />
            <p class="lawyer__text" v-html="getLawyerData.info[$store.state.language]"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="educational-publications" v-if="getLawyerData.pdf">
      <div class="container">
        <p class="educational-publications__text">
          {{ $store.state.allContent.EducationalPublications.text[$store.state.language] }}
        </p>
        <span class="educational-publications__text-link">
          {{ $store.state.allContent.EducationalPublications.textLink[$store.state.language] }}
        </span>
        <a class="educational-publications__button"
        :href="`${$store.state.URL__DATA}${getLawyerData.pdf}`">
          {{ $store.state.allContent.EducationalPublications.button[$store.state.language] }}
        </a>
      </div>
    </div>
    <div class="lawyer__contact" :class="[ getLawyerData.id === 'Abraamov_V_V' ?
     'lawyer__contact-abramov': 'lawyer__contact-rudich']">
      <div class="container">
        <HeaderItem>
        <h3>
          {{ $store.state.allContent.contact.header[$store.state.language] }}
        </h3>
      </HeaderItem>

        <ul class="lawyer__contact__all">
          <li class="lawyer__contact__item">
            <span class="lawyer__contact__item__title lawyer__contact__item__address">
              {{ $store.state.allContent.contact.address[$store.state.language] }}:</span
            ><a href="">{{ getLawyerData.address[$store.state.language] }}</a>
          </li>
          <li class="lawyer__contact__item">
            <span class="lawyer__contact__item__title lawyer__contact__item__email">
              {{ $store.state.allContent.contact.email[$store.state.language] }}:</span
            >
            <a :href="getLawyerData.email">{{ getLawyerData.email }}</a>
          </li>
          <li class="lawyer__contact__item">
            <span class="lawyer__contact__item__title lawyer__contact__item__tel">
              {{ $store.state.allContent.contact.numberPhone[$store.state.language] }}:
            </span>
            <a class="lawyer__contact__phone-link"
             :href="getLawyerData.telLink">{{ getLawyerData.tel }}</a>
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
import HeaderItem from '@/components/HeaderItem.vue';

export default {
  components: { HeaderSlot, HeaderItem },
  data() {
    return {
      lawyerData: {},
    };
  },
  methods: {},
  computed: {
    getLawyerData() {
      return this.$store.state.receivedData.advocatsInfo
        .find((item) => item.id === this.$route.params.id);
    },
    // mobileMask() {
    //  return this.getLawyerData.telLink.splice(1, 0, '(');
    // },
  },
};
</script>
<style lang="scss">
.background {
  background-color: var(--bodyColorTwo);
}
.lawyer__container {
  display: flex;
}
.lawyer__info {
  background-color: var(--bodyColor);
  border-radius: 0px 0px 30px 30px;
  padding-bottom: 30px;
}
.lawyer__header__container {
  text-align: center;
  padding-top: calc(var(--index) * 1.75);
  margin-bottom: calc(var(--index) * 2.3);
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
  background-color: var(--twoColor);
  background-image: url('../assets/img/educationalBG.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode:multiply;
  border-radius: 30px;
  padding: 50px 0px;
}
.educational-publications__text {
  margin: 0px;
  font-size: 34px;
  color: var(--fontColor);
}
.educational-publications__text-link {
  display: block;
  margin-top: 20px;
  font-size: 28px;
  color: var(--fontColor);
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
  background-size: contain;
  background-position: 80% 10%;
  background-repeat: no-repeat;
}

.lawyer__contact__all {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.lawyer__contact__item {
  text-align: left;
  padding: 50px 25px;
  font-size: 16px;
  list-style: none;
}
.lawyer__contact__item__title {
  font-size: 24px;
  position: relative;
  display: block;
  font-weight: bold;
  margin-bottom: 20px;
  color: #8F755B;
}
.lawyer__contact__item__title::before {
  content: "";
left: 5%;
  top: -50px;
  position: absolute;
  height: 40px;
  width: 40px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.lawyer__contact__item__tel::before {
  background-image: url('../assets/img/phone.svg');
}
.lawyer__contact__item__email::before {
  background-image: url('../assets/img/message.svg');
}
.lawyer__contact__item__address::before {
  background-image: url('../assets/img/gps.svg');
}
.lawyer__contact__item a {
  font-size: 20px;
  margin-left: 0px;
}
.messenger {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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
  .educational-publications
  {
    padding: 15px;
  }
  .educational-publications__text
  {
    font-size: calc(var(--index) * 1.5);
  }
  .educational-publications__text-link
  {
    font-size: calc(var(--index) * 1.6);
  }
  .messenger{
    flex-direction: row;
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
  .lawyer__contact
  {
    padding-left: 5px;
    padding-right: 5px;
  }
  .lawyer__contact__all {
    max-width: 100%;
  }
  .lawyer__contact__phone-link
  {
    white-space: nowrap;
  }
  .lawyer__contact__item
  {
    width: 100%;
  }
  .messenger
  {
    justify-content: center;
  }
}
@media (max-width:600px) {
  .lawyer__contact__all{

  }
}
</style>
