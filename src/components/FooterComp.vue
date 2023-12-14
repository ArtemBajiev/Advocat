<template>
<footer class="footer">
  <div class="footer__container">
      <div class="footer__left">
        <p class="footer__left__text">2008 Научно-правовой центр</p>
      </div>
      <div class="footer__right">
        <span class="footer-phone"><img src="../assets/img/phone.svg" alt="Phone"></span>
        <span class="footer-phone"><img src="../assets/img/message.svg" alt="email"></span>
        <span class="footer-phone"><img src="../assets/img/gps.svg" alt="Adress"></span>
        <span><img src="../assets/img/tg.png" alt="Tg"></span>
        <span><img src="../assets/img/whats.png" alt="WhatsApp"></span>
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
    border-top: 4px solid black;
}
.footer__container{
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 0 2%;
}
.footer__left
{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.footer__left__text
{
  margin: 0px;
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
