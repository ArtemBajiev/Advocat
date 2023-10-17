<template>
<HeaderSlot/>
    <section class="LegalCenter">
        <div class="container">
            <HeaderItem>
            <h4 class="legal-center__header"
             v-html="$store.state.LegalCenter.header[$store.state.language]">

            </h4>
            </HeaderItem>
            <p class="legal-center__text"
             v-html="$store.state.LegalCenter.text[$store.state.language]">

            </p>
        </div>
    </section>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';

export default {
  components: { HeaderSlot },
};
</script>
<style lang="scss">
.legal-center__header
{
    height: 50px;
}
.legal-center__text
{
    margin-top: 100px;
    font-size: 32px;
}
</style>
