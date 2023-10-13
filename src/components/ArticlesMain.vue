<!-- eslint-disable max-len -->
<template>
    <div class="articles">
         <div class="articles__header">
                <div class="line-header"></div>
                <h2 class="articles__header__text">
                    {{ $store.state.allContent.main.headerArticles[$store.state.language] }}
                </h2>
                <div class="line-header"></div>
            </div>
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
    background-color: var(--articlesColor);
    background-image: url("@/assets/img/gavel.png");
    background-size: auto 60%;
    background-position: center bottom;
    background-repeat: no-repeat;
}
.articles__header
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 60px;
}
.articles__header__text
{
    padding: 20px;
    font-size: 40px;
    font-weight: 600;
    color: var(--fontColor);
}
.line-header
{
    background-color: white;
    flex: 1 1 auto;
    height: 3px;
}
.arrow__more-articles
{
    text-align: center;
    padding: 100px;
}

</style>
