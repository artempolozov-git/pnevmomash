<template>
  <div class="home-wrapper">
    <welding-sale></welding-sale>
    <fuel-offer></fuel-offer>
    <service-repair></service-repair>
    <gallery></gallery>
  </div>
</template>

<script>
    import WeldingSale from "@/components/WeldingSale";
    import FuelOffer from "@/components/Offers/FuelOffer";
    import ServiceRepair from "@/components/ServiceRepair";
    import Gallery from "@/components/Gallery";
    export default {
        name: "Home",
        components: {Gallery, ServiceRepair, FuelOffer, WeldingSale}
    }
</script>

<style scoped>
.home-wrapper {
  box-sizing: border-box;
}
</style>