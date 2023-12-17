<template>
<footer class="footer">
  <div class="footer__container">
      <div class="footer__left">
        <div class="more-detailed-footer"><div class="foot">© 2023 Научно-правовой центр"</div>
        <div class="foot-dev">Сделано в <div class="CDT">CDT</div></div></div>
      </div>
      <div class="footer__right">
        <a href=""><span class="footer-phone">
          <img src="../assets/img/phone.svg" alt="Phone"></span></a>
        <span class="footer-message">
          <img src="../assets/img/message.svg" alt="email"></span>
        <span class="footer-gps">
          <img src="../assets/img/gps.svg" alt="Adress"></span>
        <span class="footer-tg">
          <img src="../assets/img/tgBlack.svg" alt="Tg"></span>
        <span class="footer-whats">
          <img src="../assets/img/whatsBlack.svg" alt="WhatsApp"></span>
      </div>

  </div>
</footer>

</template>
<script>

export default {

};
</script>
<style>
.footer-phone img,
.footer-gps img
{
  height: 30px;
}
.footer-message img
{
  width: 28px;
}
.footer-phone img,
.footer-gps img,
.footer-message img,
.footer-tg,
.footer-whats
{
  margin-right: 20px;
}
.footer
{
    padding: 20px 0px;
    background-color: #8F755B;
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
.CDT
{
  color: #e4e4e4;
  transition: color 1s ease;
  display: inline-block;
  cursor: pointer;
  letter-spacing: 2px;
  font-weight: 600;
}
.CDT:hover
{
  color: #ffffff;
}
.foot
{
  color: white;
}
.foot-dev
{
  color: white;
}
.more-detailed-footer
{
    padding: 10px 40px;
    width: 100%;
    color: #adadad;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
}
@media (max-width: 768px) {
  .footer__container
  {
    flex-direction: column-reverse;
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
  .footer__left__text
  {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }
}
</style>
