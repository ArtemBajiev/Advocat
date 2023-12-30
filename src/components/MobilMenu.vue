<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
          <div
        class="header__phone"
        v-show="PhoneMenu"
        @touchstart="touchStart($event.touches[0].clientX)"
        @touchend="touchEnd($event.changedTouches[0].clientX)"
      >
        <div class="header__phone__background" @click="closeMenu()"></div>
        <nav class="header__menu__phone">
          <ul class="header__menu-all__phone">
            <li class="header__menu-item__phone">
              <router-link
                class="header__menu-item__link__phone"
                :class="{ 'header__menu-item-active': $route.path === '/' }"
                :to="{name: 'home'}"
                @click="closeMenu()"
              >
                Главная</router-link
              >
            </li>
            <li class="header__menu-item__phone">
              <router-link
                class="header__menu-item__link__phone"
                to="/LegalCenter"
                :class="{ 'header__menu-item-active': $route.path === '/Legal_center' }"
                @click="closeMenu()"
              >
                Научно-Правовой Центр</router-link
              >
            </li>
            <li
              class="header__menu-item__phone"
              v-for="lawyer in $store.state.receivedData.advocatsInfo"
              :key="lawyer.id"
            >
              <router-link
                class="header__menu-item__link__phone"
                :class="{ 'header__menu-item-active': $route.path === '/lawyer/' + lawyer.id }"
                :to="{ name: 'lawyer', params: { id: lawyer.id } }"
                @click="closeMenu()"
                >Адвокат {{ lawyer.name[$store.state.language] }}</router-link
              >
            </li>
            <li class="header__menu-item__phone">
            <router-link
            @click="closeMenu()"
              class="header__menu-item__link__phone"
              to="/Events"
              :class="{ 'header__menu-item-active': $route.path === '/Events' }"
            >
              {{ $store.state.allContent.header.Events[$store.state.language] }}
            </router-link>
          </li>
          </ul>
        </nav>
      </div>
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
  },
  methods: {
    touchStart(event) {
      this.touchStartData = event;
    },
    touchEnd(event) {
      this.touchEndData = event;
      this.closeMenuSwipe();
    },
    closeMenuSwipe() {
      if (this.touchStartData < this.touchEndData * 0.9) {
        this.closeMenu();
      }
    },
    closeMenu() {
      this.$emit('closeMenu');
    },
  },
};

</script>
<style lang="scss" scoped>
ul{
    list-style: none;
    padding: 0px;
}
.header__menu__phone {
  background-color: #e8e2d8cc;
  height: 120vh;
  max-width: 70%;
  margin-left: auto;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
}
.header__menu-item__link__phone {
  color: var(--twoColor);
  font-size: 20px;
  text-align: center;
  display: block;
  padding: 10px 15px;
}
.header__phone__background {
  background-color: rgba(0, 0, 0, 0.411);
  z-index: 10;
  width: 200vw;
  position: fixed;
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

.header__language__active {
border-bottom: 2px solid black;

}
</style>
