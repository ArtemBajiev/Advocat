<template >
<HeaderSlot/>
    <div class="event-page">
        <div class="container">
            <h1 class="event-page__header">{{ getEventData.cardHeader[$store.state.language] }}</h1>
            <p class="event-page__text" v-html="getEventData.content[$store.state.language]"></p>
        </div>
    </div>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';

export default {
  components: { HeaderSlot },
  computed: {
    getEventData() {
      return this.$store.state.lawyerEvents.find((item) => item.id === this.$route.params.id);
    },
  },
};
</script>
<style lang="scss">
.event-page__header
{
  text-align: center;
  padding: 40px;
}
</style>
