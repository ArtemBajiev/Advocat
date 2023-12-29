<template>
  <section class="main-bottom">

      <div class="main-bottom__container">
        <div class="main-bottom__img">
        </div>
        <div class="main-bottom__text">
          {{ $store.state.allContent.main.bottomText[$store.state.language] }}
        </div>
      </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="css">
.main-bottom
{
    margin-top: 300px;
}
.main-bottom__container
{
    max-width: 1350px;
    margin: auto;
    max-height: 450px;
    position: relative;
    background-color: rgba(18, 37, 52, 0.40);
    padding: 20px;
    border-radius: calc(var(--index)*12);
background: linear-gradient(180deg, rgba(55, 69, 80, 0.50) 0%, rgba(55, 69, 80, 0.00) 100%);
box-shadow: 5px -8px 22.6px 0px rgba(0, 0, 0, 0.25);
}
.main-bottom__img
{
    background-image: url('../assets/img/ThemisBottom.png');
    width: 100%;
    height: 160%;
    background-repeat: no-repeat;
    background-position: 4px 32px;
    background-size: contain;
    position: absolute;
    left: 0;
    bottom: 0;
}
.main-bottom__text
{
    background-color: rgba(18, 37, 52, 0.40);
    width: 55%;
    margin-left: auto;
    margin-right: 50px;
    padding: 50px;
    border-radius:  calc(var(--index)*3);
    position: relative;
    top: -140px;
    color: var(--fontColor);
    font-size: clamp(14px,2vw,28px);
    z-index: 20;
    backdrop-filter: blur(4px);
}
@media (max-width: 768px) {
    .main-bottom__text{
        top: 0;
        height: 100%;
        width: 100%;
        display: block;
    }
    .main-bottom__container
    {
        margin: 0px;
        padding: 0px;
        display: block;
        background: transparent;
        box-shadow: none;
        padding: 0px 5px;
    }
    .main-bottom__img{
        top: -275px;
        height: 36vh;
    }
}
</style>
