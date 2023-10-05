<!-- eslint-disable max-len -->
<template>
      <div class="more-detailed-footer"><div class="foot">© 2023 Научно-правовой центр"</div><div class="foot-dev">Сделано в <div class="CDT">CDT</div></div></div>
</template>
<style>
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
  background-color: var(--twoColor);
    padding: 10px 40px;
    width: 100%;
    color: #adadad;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
</style>
