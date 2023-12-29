<!-- eslint-disable max-len -->
<template>
    <div class="articles">
        <HeaderItem><h4 class="header-articles">
            {{ $store.state.allContent.main.headerArticles[$store.state.language] }}
        </h4></HeaderItem>
        <div class="container" >
            <ul class="all-articles">
                 <ArticleItem  v-for="article in $store.state.receivedData.articles"
                       :key="article.id" :article="article"/>
             </ul>
        </div>
    </div>
</template>
<script>
import ArticleItem from './ArticleItem.vue';

export default {
  components: { ArticleItem },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.articles
{

    margin-bottom: 50px;
}
.all-articles{
    list-style: none;
    padding: 0px;
}

</style>
