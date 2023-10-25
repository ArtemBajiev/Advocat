<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
   <HeaderSlot/>
      <div class="event-page">
          <div class="container">
            <HeaderItem> <h1 class="event-page__header">
              {{ getEventData.cardHeader[$store.state.language] }}
            </h1></HeaderItem>
              <img class="event-page__img"
              v-if="getEventData.img" :src="require(`../assets/img/${getEventData.img}`)" alt="">
              <p class="event-page__text" v-html="getEventData.content[$store.state.language]"></p>
          </div>
      </div>
      <div class="container">
  <div class="app-header">
    <template v-if="isLoading"> Loading... </template>

    <template v-else>
      <span v-if="showAllPages"> {{ pageCount }} page(s) </span>

      <span v-else>
        <button :disabled="page <= 1" @click="page--">❮</button>

        {{ page }} / {{ pageCount }}

        <button :disabled="page >= pageCount" @click="page++">❯</button>
      </span>

      <label class="right">
        <input v-model="showAllPages" type="checkbox" />

        Show all pages
      </label>
    </template>
  </div>

  <div class="app-content">
    <vue-pdf-embed
      ref="pdfRef"
      :source="pdfSource"
      :page="page"
      @password-requested="handlePasswordRequest"
      @rendered="handleDocumentRender"
    />
  </div>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed';
import HeaderSlot from '@/components/HeaderSlot.vue';

export default {
  components: {
    VuePdfEmbed,
    HeaderSlot,
  },
  computed: {
    getEventData() {
      return this.$store.state.lawyerEvents.find((item) => item.id === this.$route.params.id);
    },
  },
  data() {
    return {
      isLoading: true,
      page: null,
      pageCount: 1,
      pdfSource:
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
      showAllPages: true,
    };
  },
  watch: {
    showAllPages() {
      this.page = this.showAllPages ? null : 1;
    },
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false;
      this.pageCount = this.$refs.pdfRef.pageCount;
    },
    handlePasswordRequest(callback, retry) {
      callback(prompt(retry ? 'Enter password again' : 'Enter password'));
    },
  },
};
</script>
<style lang="scss">
.event-page__img
{
  display: block;
  max-height: 600px;
  margin: 0 auto;
  border-radius: 30px;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.486);
}
.event-page__text
{
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
