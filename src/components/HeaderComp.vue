<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <header class="header">
    <transition name="phone">
      <MobilMenu v-show="PhoneMenu" @closeMenu="closeMenu"></MobilMenu>
    </transition>
    <div class="header__container">
      <img class="logo" src="@/assets/img/LOGO.png" height="100" alt="" />
      <nav class="header__menu" >
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
          <li
            class="header__menu-item"
            v-for="lawyer in $store.state.receivedData.advocatsInfo"
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
          <li class="header__menu-item">
            <router-link
              class="header__menu-item__link"
              to="/LegalCenter"
              :class="{ 'header__menu-item-active': $route.path === '/LegalCenter' }"
            >
              {{ $store.state.allContent.header.ScientificAndLegalCenter[$store.state.language] }}
            </router-link>
          </li>
          <li class="header__menu-item">
            <router-link
              class="header__menu-item__link"
              to="/Events"
              :class="{ 'header__menu-item-active': $route.path === '/Events' }"
            >
              {{ $store.state.allContent.header.Events[$store.state.language] }}
            </router-link>
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
      <button class="header__button-menu" @click="openMenu()"></button>
    </div>
  </header>
</template>
<script>
import MobilMenu from './MobilMenu.vue';

export default {
  components: { MobilMenu },
  data() {
    return { PhoneMenu: false };
  },
  methods: {
    openMenu() {
      window.scrollTo(0, 0);
      this.PhoneMenu = true;
      document.body.style.overflow = 'hidden';
    },
    closeMenu() {
      this.PhoneMenu = false;
      document.body.style.overflowY = 'auto';
    },
  },
};
</script>
<style scoped>

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
  list-style: none;
}
.header__menu-item__link {
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  color: white;
  text-decoration: none;
  font-size: 20px;
  white-space: nowrap;
}
.header__menu-item__link:hover {
  border-bottom: 2px solid white;
  color: white;
}
.header__menu-item-active {
  transform: scale(1.2);
  border-bottom: 2px solid white;
}
.header__button-menu {
  background-image: url("../assets/img/burger.svg");
  width: 30px;
  height: 25px;
  background-color: transparent;
  border: 0px;
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  display: none;
  margin-left: auto;
  margin-right: 40px;
  border-radius: 50%;
  transition: all ease-in-out 0.1s;
}
.header__button-menu:active
{
  background-color: rgba(255, 255, 255, 0.336);
box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.336);
}
.header__menu-all__phone
{
  list-style: none;
  padding: 0;
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
.header__language {
  font-size: 16px;
  border: 0px;
  background-color: transparent;
  font-weight: bold;
  margin-left: 10px;
  padding: 0px;
}
.header__language__active
{
  border-bottom: 1px solid black;
}
/*phone*/

@media (max-width: 1180px) {
  .header__menu-item__link {
    font-size: calc(var(--index)*0.9);
  }
}
@media (max-width: 968px) {
  .logo
  {
    height: 80px;
    margin-top: 8px;
  }
  .header__container{
    padding-left: 0;
  }
  .header__menu
  {
    display: none;
  }
  .header {
    padding: 0px;
  }
  .header__button-menu {
    display: block;
  }
}
@media (max-width: 540px) {
  .logo
  {
    height: 50px;
    margin-top: 8px;
  }
}
</style>
