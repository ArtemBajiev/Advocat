<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <header class="header">
    <transition name="phone">
        <div class="header__phone" v-if="getWidth == false" v-show="PhoneMenu">
      <div class="header__phone__background" @click="PhoneMenu = !PhoneMenu"></div>
      <nav class="header__menu__phone">
        <ul class="header__menu-all__phone">
          <li class="header__menu-item__phone">
            <router-link
              class="header__menu-item__link__phone"
              :class="{ 'header__menu-item-active': $route.path === '/' }"
              to="/"
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
              >Адвокат {{ lawyer.name }}</router-link
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
              Главная</router-link
            >
          </li>
          <li class="header__menu-item">
            <router-link
              class="header__menu-item__link"
              to="/Legal_center"
              :class="{ 'header__menu-item-active': $route.path === '/Legal_center' }"
            >
              Научно-Правовой Центр</router-link
            >
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
              >Адвокат {{ lawyer.name }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="header__language">Rus Eng</div>
      <button class="header__button-menu" @click="PhoneMenu = !PhoneMenu">=x</button>
    </div>

  </header>
</template>
<script>
export default {
  data() {
    return {
      PhoneMenu: false,
    };
  },
  computed: {
    getWidth() {
      return window.innerWidth > 900;
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
  font-size: 24px;
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
  margin-left: 3%;
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
  width: 100vw;
  position: absolute;
  height: 100vh;
  top: 0;
}
.header__phone__background::before {
  content: "x";
  position: absolute;
  left: 23px;
  top: 15px;
}
@media (max-width: 1180px) {
  .header__menu-item__link {
    font-size: 16px;
  }
}
@media (max-width: 900px) {
  .header {
    padding: 0px;
  }
}
</style>
