<template >
     <div class="header-item__container">
        <div class="header-item">
          <slot></slot>
        </div>
      </div>
</template>
<script>
export default {

};

</script>
<style lang="scss">
.header-item__container
{
        display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 100%;
}

.header-item {
  display: flex;
  justify-content: center;
  display: inline-block;
  text-align: center;
  margin: 40px auto;
  position: relative;
  background-color: var(--bodyColor);
  padding: 5px 10px;
  border-radius: 15px;
  padding: 14px 30px;

}
.header-item h1
{
      font-size:clamp(25px, 4vw, 60px);
    font-weight: 700;
    color: var(--twoColor);
    margin: 0px;
    font-family: 'El Messiri';
}
.header-item h2
{
      font-size:clamp(20px, 4vw, 55px);
    font-weight: 700;
    color: var(--twoColor);
    margin: 0px;
    font-family: 'El Messiri';
}
.header-item h3
{
      font-size:clamp(18px, 4vw, 50px);
    font-weight: 700;
    color: var(--twoColor);
    margin: 0px;
    font-family: 'El Messiri';
}
.header-item h4
{
      font-size:clamp(16px, 4vw, 45px);
    font-weight: 700;
    color: var(--twoColor);
    margin: 0px;
    font-family: 'El Messiri';
}
.header-item h5
{
      font-size:clamp(14px, 4vw, 35px);
    font-weight: 700;
    color: var(--twoColor);
    margin: 0px;
    font-family: 'El Messiri';
}

@media (max-width: 768px) {
  .header-item h1
{
      font-size: 32px;
}
.header-item h2
{
      font-size: 27px;
}
.header-item h3
{
      font-size: 26px;
}
.header-item h4
{
      font-size: 24px;
}
.header-item h5
{
      font-size: 20px;
}
}
//.header-item::before {
//  content: "";
//  position: absolute;
//  height: 120%;
//  width: 20%;
//  background-color: var(--colorHeaderEl);
//  z-index: -1;
//  top: -10%;
//  left: -3%;
//  border-radius: 15px;
//  max-width:100px;
//}
//.header-item::after {
//  content: "";
//  position: absolute;
//  height: 120%;
//  width: 20%;
//  background-color: var(--colorHeaderEl);
//  z-index: -1;
//  top: -10%;
//  right: -3%;
//  border-radius: 15px;
//  max-width:100px;
//}
</style>
