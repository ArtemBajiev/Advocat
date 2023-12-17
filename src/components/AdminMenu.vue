<template >
    <button class="btn-admin-menu" @click="adminMenu = true">Меню</button>
    <transition name="btn-admin-menu" mode="out-in">
    <nav class="admin--menu" v-show="adminMenu">
        <button class="btn-admin-menu-close"
         @click="adminMenu = false"><img width="20"
          src="../assets/img/arrowFFF.svg" alt=""></button>
            <ul class="admin--menu__list" >
                <li class="admin-menu__list-item">
                    <router-link to="/adminMain">
                        Главная
                    </router-link>
                </li>
                <li class="admin-menu__list-item"
                 v-for="item in $store.state.receivedData.advocatsInfo" :key="item.id">
                    <router-link :to="{name:'AdminLawyer', params:{id: item.id}}">
                        {{ item.name.rus }}
                    </router-link>
                </li>
                <li class="admin-menu__list-item" >
                    <router-link to="/AdminLegalCenter">
                        Научно-Правовой центр
                    </router-link>
                </li>
                <li class="admin-menu__list-item" >
                    <router-link to="/AdminEvents">
                        Мероприятия
                    </router-link>
                </li>
            </ul>
        </nav>
    </transition>
</template>
<script>
export default {
  data() {
    return {
      adminMenu: false,
    };
  },
};
</script>
<style lang="scss">
.admin--menu{
    text-align: start;
    position: fixed;
    top: 30%;
    left: 0;
    background-color: var(--twoColor);
    z-index: 20;
    border-radius:0% 20% 20% 0%;

}
.admin--menu__list
{
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    padding: 20px 0px;
}
.btn-admin-menu
{
    position: fixed;
    top: 40%;
    left: -53px;
    transform: rotate(90deg);
    background-color: var(--twoColor);
    border: 0px;
    border-radius: 30px 30px 0px 0px;;
    padding: 2px 41px;
    color: white;
}
.btn-admin-menu-close{
    position: absolute;
    left: 4%;
    top: 3%;
    border: 0px;
    background-color: transparent;
    transform: rotate(180deg);
}
.admin-menu__list-item
{
    font-size: 18px;
    padding: 5px 30px;
}
.admin-menu__list-item:not(:last-child)
{
    border-bottom:1px solid white ;
}
.admin-menu__list-item a
{
    color: white;
}

.btn-admin-menu-enter-from {

transform: translateX(-100%);
}
.btn-admin-menu-enter-active {
transition: all 0.5s ease-in;
}
.btn-admin-menu-enter-to {
    transform: translateX(0%);
}
.btn-admin-menu-leave-from {
    transform: translateX(0%);
}
.btn-admin-menu-leave-active {
transition: all 0.5s ease-in;
}
.btn-admin-menu-leave-to {

    transform: translateX(-100%);
}
</style>
