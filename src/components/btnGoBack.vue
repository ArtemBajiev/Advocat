<template>
    <button class="btn-go-back" @click="$router.go(-1)"></button>
</template>
<style>
.btn-go-back
{
  background-color: transparent;
  background-image: url('../assets/img/arrowBrown.svg');
  transform: rotate(180deg);
  width: 40px;
  height: 40px;
  border: 0px;
  background-position: 0% center;
  background-repeat: no-repeat;
  background-size: 100%;
  transition: transform .6s ease-in-out ;
  z-index: 10;
}
.btn-go-back:hover
{
  transform: scale(1.2) translate(-10px) rotate(180deg);
}
</style>
