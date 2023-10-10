<template>
  <nav class="lawyer__menu">
    <ul class="lawyer__menu__all-link">
     <slot></slot>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" >
.lawyer__menu {
  background-color: #e8e2d8;

  width: 100%;
  max-width: 374px;
  border-radius: 30px;
  border: 4px solid var(--twoColor);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.166);
}
.lawyer__menu__all-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
}
.lawyer__menu__item__link
{
   color: var(--twoColor);
   transition: all .2s ease-in;
   text-decoration: none;
}
.lawyer__menu__item__link:hover
{
  color: var(--fontColor);
}
.lawyer__menu__item {
  font-size: calc(var(--index) * 1);
  padding: 11px 11px 11px 21px;
  border-bottom: 2px solid var(--twoColor);
  display: block;
  width: 100%;

  transition: color 0.3s ease-in;
}

</style>
