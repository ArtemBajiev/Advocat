<!-- eslint-disable max-len -->
<template>
    <div class="articles">
        <HeaderItem><h4 class="header-articles">
            {{ $store.state.allContent.main.headerArticles[$store.state.language] }}
        </h4></HeaderItem>
        <div class="container" >
            <div class="all-articles">
                <div class="row">
                    <div class="col-md-6 col-lg-3
                      g-5" v-for="article in $store.state.articles"
                       :key="article.id">
                        <ArticleItem :article="article"/>
                    </div>
                 </div>
             </div>
             <div class="arrow__more-articles">V</div>
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
    background-image: url("@/assets/img/gavel.png");
    background-size: auto 40%;
    background-position: center bottom;
    background-repeat: no-repeat;
}

.arrow__more-articles
{
    text-align: center;
    padding: 100px;
}

</style>
