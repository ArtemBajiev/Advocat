<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="event-page">
    <HeaderSlot></HeaderSlot>
    <div class="container">
      <div class="event-page__btn-and-header">
      <btnGoBack></btnGoBack>
      <HeaderItem>
        <h1 class="event-page__header">
          {{ getEventData.cardHeader[$store.state.language] }}
        </h1></HeaderItem
      >
    </div>
      <img
        class="event-page__img"
        :src="`${$store.state.URL__DATA}${getEventData.img}`"
        alt=""
      />
      <p class="event-page__text" v-html="getEventData.content[$store.state.language]"></p>
    </div>
  </div>
  <div class="container">
      <div class="event-page__file">
        <a target="_blank" :href="`${this.$store.state.URL__DATA}${getEventData.pdf}`">
          {{ $store.state.allContent.contact.pdf[$store.state.language] }}
           <img src="../assets/img/link.svg" alt=""></a>
      </div>
  </div>
</template>

<script>
import HeaderSlot from '@/components/HeaderSlot.vue';
import btnGoBack from '@/components/btnGoBack.vue';

export default {
  components: { HeaderSlot, btnGoBack },
  computed: {
    getEventData() {
      // eslint-disable-next-line max-len
      return this.$store.state.receivedData.lawyerEvents.find(
        (item) => item.id === Number(this.$route.params.id),
      );
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.getEventData);
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false;
      this.pageCount = this.$refs.pdfRef.pageCount;
    },
  },
};
</script>
<style lang="scss">
.event-page__btn-and-header
{
  display: flex;
  align-items: center;
}
.event-page__text{

  img {
    max-width: 100%;
    height: auto;
    min-width: 30%;
    margin: 0 auto;

  }
   iframe{
  width: 100% !important;

  height: 700px !important;
   }
}
.event-page__img {
  display: block;
  width: 80%;
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
.event-page__file
{
  margin-bottom: 40px;
}
.event-page__file a
{
  font-size: 20px;
}
@media (max-width: 768px) {
  .event-page__text iframe{
  width: 100% !important;

  height: 400px !important;
}
}
@media (max-width: 500px) {
  .event-page__text iframe{
  width: 100% !important;

  height: 300px !important;
}
}
</style>
