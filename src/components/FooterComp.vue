<template>
<footer class="footer">
  <div class="footer__container">
      <div class="footer__left">

      </div>
      <div class="footer__map">
        <img src="../assets/img/map.png" alt="">
      </div>
  </div>
</footer>
<CastomDevT/>
</template>
<script>
import CastomDevT from './CastomDevT.vue';

export default {
  components: { CastomDevT },
};
</script>
<style>
.footer
{
    background-color: rgba(184, 139, 95);
    width: 100%;
    height: 378px;
    border-top: 4px solid black;
}
.footer__container{
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
.footer__left
{
  width: 50%;
  height: 100%;
}
.footer__map
{

  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
background-position: center;
display: flex;
align-items: center;
}
.footer__map::after
{
content: '"45° 1` 51,114", 38° 54` 41,8068"';
position: absolute;
right: 25%;
}
.footer__map img{
  height: 80%;
  width: 100%;
  margin: 0px auto;
  display: block;
  position: relative;
  object-fit: contain;
}
@media (max-width: 768px) {
  .footer__container
  {
    flex-direction: column;
    align-items: center;
    text-align: center
  }
  .footer__map
  {
    width: 100%;
  }
  .footer__left
  {
    width: 100%;
  }
}
</style>
