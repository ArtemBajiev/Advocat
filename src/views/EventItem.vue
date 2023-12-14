<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="event-page">
    <HeaderSlot></HeaderSlot>
    <div class="container">
      <button class="btn-go-back" @click="$router.go(-1)"></button>
      <HeaderItem>
        <h1 class="event-page__header">
          {{ getEventData.cardHeader[$store.state.language] }}
        </h1></HeaderItem
      >
      <img
        class="event-page__img"
        v-if="getEventData.img"
        :src="`${$store.state.URL__DATA}${getEventData.img}`"
        alt=""
      />
      <p class="event-page__text" v-html="getEventData.content[$store.state.language]"></p>
    </div>
  </div>
  <div class="container">

  </div>
</template>

<script>
import HeaderSlot from '@/components/HeaderSlot.vue';

export default {
  components: { HeaderSlot },
  computed: {
    getEventData() {
      // eslint-disable-next-line max-len
      return this.$store.state.receivedData.lawyerEvents.find(
        (item) => item.id === this.$route.params.id,
      );
    },
  },
  data() {
    return {};
  },

  methods: {
    handleDocumentRender() {
      this.isLoading = false;
      this.pageCount = this.$refs.pdfRef.pageCount;
    },
  },
};
</script>
<style lang="scss" scoped>
.event-page__img {
  display: block;
  max-height: 600px;
  margin: 0 auto;
  border-radius: 30px;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.486);
}
.event-page__text {
  font-size: 32px;
  margin: 5vh 0;
}
.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}

.app-content {
  padding: 24px 16px;
}

.right {
  float: right;
}
</style>
