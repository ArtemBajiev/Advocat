<template>
<HeaderSlot/>
    <section class="LegalCenter">
        <div class="container">
            <HeaderItem>
            <h4 class="legal-center__header"
             v-html="$store.state.receivedData.LegalCenter.header[$store.state.language]">

            </h4>
            </HeaderItem>
            <p class="legal-center__text"
             v-html="$store.state.receivedData.LegalCenter.text[$store.state.language]">

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
<style lang="scss" >
.legal-center__text
{
    margin-top: 100px;
    font-size: 32px;
}
@media (max-width: 768px) {
.legal-center__text
{
    font-size: calc(var(--index) * 2) !important;
    margin-top: 40px;
}

}
</style>
