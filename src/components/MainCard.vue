<template>
    <li class="main-card__advantages">
        <img :src="require(`../assets/img/${advantage.img}`)" alt="" class="main-card__img">
        <div class="main-card__advantages__text">
          {{ advantage[$store.state.language] }}
      </div>
    </li>
</template>
<script >

export default {
  props: ['advantage'],

};
</script >
<style lang="css" scoped>
.main-card__advantages
{
    width: clamp( 150px,25vw, 243px);
    height: 254px;
    padding: 10px 8px 0px 8px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #374550a4;
    backdrop-filter: blur(4px);
}
.main-card__img {
  height: clamp( 50px, 6vw, 100px);
  margin-bottom: 10px;
}
.main-card__advantages__text {
  color: var(--fontColor);
  text-align: center;
  font-size: clamp(14px, 3vw , 22px);
}
@media (max-width:768px) {
  .main-card__advantages
{
    width: 100%;
    height: auto;
    margin: 20px 0px;
    padding-bottom: 20px;
    flex-direction: row-reverse;
    justify-content: space-between;

}
.main-card__img {
  height: 80px;
}
.main-card__advantages__text {
  color: var(--fontColor);
  text-align: center;
  font-size: 15px;
}
}
</style>
