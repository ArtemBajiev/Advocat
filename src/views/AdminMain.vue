<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable import/no-unresolved -->

<template>
  <HeaderSlot></HeaderSlot>
  <AdminMenu></AdminMenu>
  <div class="container">
    <div class="admin__main__cards">
    <div class="admin__main__card-item" v-for="item in mainCardData"
    :key="item.id">
      <textarea class="admin__main__card__input" type="text" v-model="item.text.rus"></textarea>
    </div>
  </div>
    <hr>
    <div class="admin__main__cards">
    <div class="admin__main__card-item" v-for="item in mainCardData"
    :key="item.id">
      <textarea class="admin__main__card__input" type="text" v-model="item.text.eng"></textarea>
    </div>
</div>
</div>
</template>

<script>

import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';

export default {
  components: {
    AdminMenu,
    HeaderSlot,
  },

  data() {
    return {
    };
  },
  computed: {
    mainCardData() {
      return this.$store.state.articles;
    },
  },

};
</script>

<style lang="scss">
.admin__main__card__input
{
  width: 270px;
  height: 300px;
  word-wrap: break-word;
  font-size: 18px;
  text-align: center;
  line-height: 1.1;
  padding: 10px;
  border-radius: 20px;
  border: 0px solid transparent;
  margin-bottom: 10px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.411);

}
.admin__main__cards
{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
