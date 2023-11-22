<template>
    <HeaderSlot></HeaderSlot>
    <AdminMenu></AdminMenu>
    <section>
        <div class="container">
            <ul class="Admin__slider">
                <li class="Admin__slide-item" v-for="slide in slideEventsData" :key="slide.id">
                    <img width="300" :src="require(`../assets/img/${slide.slideImg}`)" alt="">
                    <button class="admin__slide__del-btn">X</button>
                </li>
            </ul>
            <div class="admin__event__cards">
                <div class="admin__event__card-item"
                v-for="item in lawyerEventsData" :key="item.id">
                <router-link :to="{name:'AdminEventsItem', params:{id: item.id}}">
                    <div class="admin__event__card-item__text">
                        <h4>{{ item.cardHeader.rus }}</h4><div v-html="item.cardText.rus"></div>
                    </div><img src="" width="200px" alt="">
                </router-link>
                </div>
                <button class="admin__event__card-item add-events" @click.prevent="addEvent()">
                    +
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';

export default {
  components: { HeaderSlot, AdminMenu },
  computed: {
    lawyerEventsData() {
      return this.$store.state.receivedData.lawyerEvents;
    },
    slideEventsData() {
      return this.$store.state.receivedData.slideEvents;
    },
  },
  methods: {
    addEvent() {
      this.$store.commit('addEvent');
      this.$router.push({ name: 'AdminEventsItem', params: { id: 'newEvent' } });
    },
  },
};
</script>
<style lang="scss">
.Admin__slider
{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
}
.tiptap{
  border: 1px solid rgba(128, 128, 128, 0.418) !important;
  border-radius: 20px;
    padding: 20px;
}
.admin__slide__del-btn
{
    position: absolute;
    z-index: 1;
    right: 0;
    border: 0px;
    background-color: transparent;
}
.Admin__slide-item
{
    position: relative;
}
.admin__event__cards
{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.admin__event__card-item__text
{
    height: 100%;
    width: 100%;
}
.add-events
{
    background-color: rgba(128, 128, 128, 0.349);
    font-size: 50px;
    font-weight: 700;
    color: white;
}
.admin__event__card-item
{
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    width: 49%;
    display: inline-block;
    border: 1px solid rgba(128, 128, 128, 0.418);
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.384);
    margin-bottom: 25px;
}

</style>
