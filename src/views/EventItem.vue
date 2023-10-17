<template >
<HeaderSlot/>
    <div class="event-page">
        <div class="container">
          <HeaderItem> <h1 class="event-page__header">
            {{ getEventData.cardHeader[$store.state.language] }}
          </h1></HeaderItem>

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
.event-page__text
{
  font-size: 32px;
  margin: 5vh 0;
}
</style>
