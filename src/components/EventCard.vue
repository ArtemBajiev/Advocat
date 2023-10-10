<template>
    <div class="event-card">
      <div class="event-card__text">
        <h3 class="event-card__header">{{ item.cardHeader }}</h3>
        <p>{{ item.cardText }}</p>
      </div>
      <div class="event-card__img__container">
          <div class="event-card__img">

          </div>
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
      display: flex;
      border-radius: 20px;
      height: 100%;
      padding: 20px;
      position: relative;
  }
  .event-card__header
  {
    color: var(--twoColor);
  }
  .event-card__img__container
  {
    margin-left: 20px;
  }
  .event-card__img
  {
    background-image: url("../assets/img/slide2.png");
    width: 200px;
    height: 130px;
    background-position: center;
    background-size: 110%;
    border-radius: 20px;
  }
  .event-card__details
  {
    position: absolute;
    right: 35px;
    bottom: 15px;
  }
  </style>
