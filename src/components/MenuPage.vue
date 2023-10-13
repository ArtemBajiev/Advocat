<template>
  <nav class="lawyer__menu">
    <ul class="lawyer__menu__all-link">
      <li class="lawyer__menu__item">
            <router-link class="lawyer__menu__item__link" to="/">Мероприятия</router-link>
          </li>
          <li
            class="lawyer__menu__item"
            v-for="lawyer in $store.state.advocatsInfo"
            :key="lawyer.id"
          >
            <router-link class="lawyer__menu__item__link" to="/">
              Адвокат&nbsp;{{ lawyer.name[$store.state.language] }}
            </router-link>
          </li>
          <li class="lawyer__menu__item">
            <router-link class="lawyer__menu__item__link" to="/">
              Научно-правовой центр. Общественная приёмная
            </router-link>
          </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" >
.lawyer__menu {
  background-color: #e8e2d8;
  flex: 1 1 40%;
  width: 100%;
  max-width: 374px;
  border-radius: 30px;
  border: 4px solid var(--twoColor);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.166);
}
.lawyer__menu__all-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
  text-align: center;
}
.lawyer__menu__item__link
{
   color: var(--twoColor);
   transition: all .2s ease-in;
   text-decoration: none;
}
.lawyer__menu__item__link:hover
{
  color: var(--fontColor);
}
.lawyer__menu__item {
  font-size: calc(var(--index) * 1);
  padding: 8px;
  display: block;
  width: 100%;

  transition: color 0.3s ease-in;
}
.lawyer__menu__item:not(:last-child) {
  border-bottom: 2px solid var(--twoColor);
}
@media (max-width: 768px) {
.lawyer__menu
{
  margin: 0px;
  width: 100%;
  max-width: 100%;
}

}

</style>
