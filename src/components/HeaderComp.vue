<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <header class="header">
    <transition name="phone">
      <div
        class="header__phone"
        v-if="getWidth == false"
        v-show="PhoneMenu"
        @touchstart="touchStart($event.touches[0].clientX)"
        @touchend="touchEnd($event.changedTouches[0].clientX)"
      >
        <div class="header__phone__background" @click="PhoneMenu = !PhoneMenu"></div>
        <nav class="header__menu__phone">
          <ul class="header__menu-all__phone">
            <li class="header__menu-item__phone">
              <router-link
                class="header__menu-item__link__phone"
                :class="{ 'header__menu-item-active': $route.path === '/' }"
                :to="{name: 'home'}"
              >
                Главная</router-link
              >
            </li>
            <li class="header__menu-item">
              <router-link
                class="header__menu-item__link__phone"
                to="/Legal_center"
                :class="{ 'header__menu-item-active': $route.path === '/Legal_center' }"
              >
                Научно-Правовой Центр</router-link
              >
            </li>
            <li
              class="header__menu-item__phone"
              v-for="lawyer in $store.state.advocatsInfo"
              :key="lawyer.id"
            >
              <router-link
                class="header__menu-item__link__phone"
                :class="{ 'header__menu-item-active': $route.path === '/lawyer/' + lawyer.id }"
                :to="{ name: 'lawyer', params: { id: lawyer.id } }"
                >Адвокат {{ lawyer.name[$store.state.language] }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </transition>
    <div class="header__container">
      <img class="logo" src="@/assets/img/LOGO.png" height="100" alt="" />
      <nav class="header__menu" v-if="getWidth">
        <ul class="header__menu-all">
          <li class="header__menu-item">
            <router-link
              class="header__menu-item__link"
              :class="{ 'header__menu-item-active': $route.path === '/' }"
              to="/"
            >
              {{ $store.state.allContent.header.main[$store.state.language] }}</router-link
            >
          </li>
          <li class="header__menu-item">
            <router-link
              class="header__menu-item__link"
              to="/Legal_center"
              :class="{ 'header__menu-item-active': $route.path === '/Legal_center' }"
            >
              {{ $store.state.allContent.header.ScientificAndLegalCenter[$store.state.language] }}
            </router-link>
          </li>
          <li
            class="header__menu-item"
            v-for="lawyer in $store.state.advocatsInfo"
            :key="lawyer.id"
          >
            <router-link
              class="header__menu-item__link"
              :class="{ 'header__menu-item-active': $route.path === '/lawyer/' + lawyer.id }"
              :to="{ name: 'lawyer', params: { id: lawyer.id } }"
              >{{ $store.state.allContent.lawyer[$store.state.language] }}
              {{ lawyer.name[$store.state.language] }}</router-link
            >
          </li>
        </ul>
      </nav>
      <button
        class="header__language"
        @click.prevent="$store.commit('languageUpdate', 'rus')"
        :class="{ 'header__language__active': $store.state.language === 'rus' }"
      >
        РУС
      </button>
      <button
        class="header__language"
        @click.prevent="$store.commit('languageUpdate', 'eng')"
        :class="{ 'header__language__active': $store.state.language === 'eng' }"
      >
        ENG
      </button>
      <button class="header__button-menu" @click="PhoneMenu = !PhoneMenu"></button>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      PhoneMenu: false,
      touchStartData: 0,
      touchEndData: 0,
    };
  },
  computed: {
    getWidth() {
      return window.innerWidth > 768;
    },
  },
  methods: {
    touchStart(event) {
      this.touchStartData = event;
    },
    touchEnd(event) {
      this.touchEndData = event;
      this.closeMenu();
    },
    closeMenu() {
      if (this.touchStartData < this.touchEndData * 0.9) {
        this.PhoneMenu = false;
      }
    },
  },
};
</script>
<style>
.header {
  height: 100px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  padding-top: 10px;
  z-index: 10;
}
.header__container {
  max-width: 1250px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.logo {
  margin-right: 2%;
  position: relative;
  top: -9px;
}
.header__menu {
  flex: 1 1 auto;
}
.header__menu-all {
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  background: rgba(36, 33, 33, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 40px;
  padding: 10px 25px;
  margin-top: 10px;
}
.header__menu-item {
  margin: 0px 5px;
}
.header__menu-item__link {
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  color: white;
  text-decoration: none;
  font-size: 22px;
}
.header__menu-item__link:hover {
  border-bottom: 2px solid white;
  color: white;
}
.header__menu-item-active {
  border-bottom: 2px solid white;
}
.header__language {
  font-size: calc(var(--index) * 1);
  margin-left: auto;
  padding: 0px 20px;
}
.header__button-menu {
  background-image: url("../assets/img/burger.svg");
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 0px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0px 10px;
  display: none;
}
/*Anim*/
.phone-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.phone-enter-active {
  transition: all 0.5s ease-in;
}
.phone-enter-to {
  opacity: 1;
  transform: translateX(0%);
}
.phone-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.phone-leave-active {
  transition: all 0.5s ease-in;
}
.phone-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
/*phone*/
.header__menu__phone {
  background-color: var(--twoColor);
  height: 100vh;
  max-width: 70%;
  margin-left: auto;
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
}
.header__menu-item__link__phone {
  color: white;
  font-size: 30px;
  text-align: center;
  display: block;
  padding: 10px 0px;
}
.header__phone__background {
  background-color: rgba(0, 0, 0, 0.411);
  z-index: 1;
  width: 200vw;
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
}
.header__phone__background::before {
  content: "";
  position: absolute;
  left: 23px;
  top: 15px;
  background-image: url("../assets/img/close.svg");
  height: 20px;
  width: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  background-color: transparent;
}

.header__language {
  border: 0px;
  background-color: transparent;
  font-weight: bold;
  margin: 0px 10px;
  padding: 0px;
}
.header__language__active {
border-bottom: 2px solid black;

}
@media (max-width: 1180px) {
  .header__menu-item__link {
    font-size: var(--index);
  }
}
@media (max-width: 768px) {
  .header {
    padding: 0px;
  }
  .header__button-menu {
    display: block;
  }
}
</style>
