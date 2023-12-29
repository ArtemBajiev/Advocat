<!-- eslint-disable max-len -->
<template>
    <div class="article-item"  v-if="article.text.rus && article.text.eng">
        <div class="article-item__text">{{ article.text[$store.state.language] }}</div>
    </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies

export default {
  props: ['article'],
  methods: {

  },
  mounted() {
  },

};
</script>
<style scoped>
.article-item{

    padding: 35px 54px;
    border-bottom: 1px solid var(--twoColor);
    margin: 0 auto;
}
.article-item__text
{
    height: 95%;
    overflow: hidden;
    color: var(--fontColorTwo);
    text-align: start;
    font-size: 18px;
}
</style>
