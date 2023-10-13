<template>
    <div class="event-card">
      <div class="event-card__text">
        <div class="event-card__img">

</div>
        <h3 class="event-card__header">{{ item.cardHeader[$store.state.language] }}</h3>
        <p class="event-card__discription">{{ item.cardText[$store.state.language] }}</p>
      </div>
      <div class="event-card__details">Подробнее <span class="arrow-black"></span></div>
    </div>
  </template>
<script>
export default {
  props: ['item'],
};
</script>
  <style lang="scss">
  .arrow-black
  {
    display: inline-block;
    background-image: url('../assets/img/arrowBlack.svg');
    background-size: contain;
    background-position: center;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
  }
  .event-card
  {
      background-color:#E8E2D8;

      border-radius: 20px;
      height: 100%;
      padding: 20px;
      position: relative;
  }
  .event-card__header
  {
    color: var(--twoColor);
  }
  .event-card__img
  {
    background-image: url("../assets/img/slide2.png");
    width: 40%;
    height: 130px;
    background-position: center;
    background-size: 110%;
    border-radius: 20px;
    margin-left: 30px;
    margin-bottom: 55px;
    float: right;
  }
  .event-card__text
  {

    flex: 1 1 auto;
    word-break: break-all;

  }
  .event-card__details
  {
    position: absolute;
    right: 35px;
    bottom: 15px;
  }
  @media (max-width: 1024px) {
    .event-card__header
    {
      font-size: calc(var(--index)*1.3);
    }
    .event-card__img
    {
      width: 150px;
      height: 100px;
      flex: 1 1 auto;
    }
    .event-card__discription
    {
      font-size: calc(var(--index)*1);
    }
  }
  </style>
