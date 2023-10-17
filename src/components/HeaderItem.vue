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
.header-item *
{
      font-size: 40px;
    font-weight: 600;
    color: var(--twoColor);
    margin: 0px;
}
.header-item::before {
  content: "";
  position: absolute;
  height: 120%;
  width: 20%;
  background-color: var(--colorHeaderEl);
  z-index: -1;
  top: -10%;
  left: -3%;
  border-radius: 15px;
  max-width:100px;
}
.header-item::after {
  content: "";
  position: absolute;
  height: 120%;
  width: 20%;
  background-color: var(--colorHeaderEl);
  z-index: -1;
  top: -10%;
  right: -3%;
  border-radius: 15px;
  max-width:100px;
}
</style>
