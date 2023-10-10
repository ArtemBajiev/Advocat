<!-- eslint-disable max-len -->
<template>
    <div class="article-item">
        <div class="article-item__header">{{ article.header }} {{ article.id }}</div>
        <div class="article-item__text">{{ article.text }}</div>
        <router-link :to="article.link" class="r-link more-detaile-article">Подробнее ></router-link>
    </div>
</template>
<script>
export default {
  props: ['article'],
};
</script>
<style scoped>
.article-item{
    background-color: #8C6843;
    width: 260px;
    height: 315px;
    padding: 15px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.466);
}
.article-item__text
{
    height: 60%;
    overflow: hidden;
    color: var(--fontColor);
}
.article-item__header
{
    color:#BF976F ;
}
.more-detaile-article
{
    margin-left: auto;
}
</style>
