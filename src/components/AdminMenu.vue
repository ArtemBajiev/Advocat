<template >
    <nav class="admin__menu">
        <ul class="admin__menu__list">
            <span><strong>ADMIN</strong></span>
            <li>
                <router-link to="/adminMain">
                    Главная
                </router-link>
            </li>
            <li v-for="item in $store.state.receivedData.advocatsInfo" :key="item.id">
                <router-link :to="{name:'AdminLawyer', params:{id: item.id}}">
                    {{ item.name.rus }}
                </router-link>
            </li>
            <li >
                <router-link to="/AdminLegalCenter">
                    Научно-Правовой центр
                </router-link>
            </li>
            <li >
                <router-link to="/AdminEvents">
                    Мероприятия
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {

};
</script>
<style lang="scss">
.admin__menu{
    padding: 30px;
    width: 100%;
    top: 80px;
    text-align: center;
}
.admin__menu__list
{
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
}
</style>
