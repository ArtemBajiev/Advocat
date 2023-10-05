<template>
<header class="header">
    <div class="header__container">
        <img class="logo" src="@/assets/img/LOGO.png" height="100" alt="">
        <nav class="header__menu">
            <ul class="header__menu-all">
                <li class="header__menu-item ">
                    <router-link class="header__menu-item__link"
                    :class="{'header__menu-item-active': $route.path === '/'}"
                     to="/">
                        Главная</router-link> </li>
                <li class="header__menu-item">
                    <router-link class="header__menu-item__link" to=""
                    :class="{'header__menu-item-active': $route.path === ''}" >
                        Научно-Правовой Центр</router-link></li>
                <li class="header__menu-item"
                v-for="lawyer in $store.state.advocatsInfo" :key="lawyer.id">
                    <router-link class="header__menu-item__link"
                    :class="{'header__menu-item-active':
                     $route.path === '/lawyer/'+lawyer.id}"
                    :to="{name:'lawyer', params:{id: lawyer.id}}"
                    >Адвокат {{ lawyer.name }}</router-link></li>
            </ul>
        </nav>
        <div class="header__language">Rus Eng</div>
    </div>
</header>
</template>
<script>
export default {

};
</script>
<style >
.header
{
    height: 100px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    padding-top: 10px;
    z-index: 10;
}
.header__container
{
    max-width: 1250px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.logo
{
    margin-right: 2%;
    position: relative;
    top: -9px;
}
.header__menu
{
    flex: 1 1 auto;
}
.header__menu-all
{
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    font-size: 22px;
    background: rgba(36, 33, 33, 0.2);
border-radius: 40px;
padding: 10px 25px;
margin-top: 10px;

}
.header__menu-item
{
    margin: 0px 5px;

}
.header__menu-item__link{
    transition: all .3s ease-in-out;
    border-bottom: 2px solid transparent;
    color: white;
    text-decoration: none;
    font-size: 24px;
}
.header__menu-item__link:hover
{
    border-bottom: 2px solid white;
    color: white;
}
.header__menu-item-active
{
    border-bottom: 2px solid white;
}
.header__language
{
    font-size: calc(var(--index)*1);
    margin-left: 3%;
}
@media (max-width: 1080px) {
    .header__menu-all
    {
        font-size: 16px;
    }
}
</style>
