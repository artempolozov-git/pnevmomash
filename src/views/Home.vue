<template>
  <div class="home-wrapper">
    <welding-sale></welding-sale>
    <fuel-offer></fuel-offer>
    <service-repair></service-repair>
    <gallery></gallery>
    <webasto-offer></webasto-offer>
    <video-players></video-players>
    <callback-offer></callback-offer>
    <about-company></about-company>
    <contacts></contacts>
  </div>
</template>

<script>
    import WeldingSale from "@/components/WeldingSale";
    import FuelOffer from "@/components/Offers/FuelOffer";
    import ServiceRepair from "@/components/Home/ServiceRepair";
    import Gallery from "@/components/Home/Gallery";
    import WebastoOffer from "@/components/Offers/WebastoOffer";
    import VideoPlayers from "@/components/Home/VideoPlayers";
    import CallbackOffer from "@/components/Offers/CallbackOffer";
    import AboutCompany from "@/components/Home/AboutCompany";
    import Contacts from "@/components/Home/Contacts";
    export default {
        name: "Home",
        components: {
            Contacts,
            AboutCompany,
            CallbackOffer, VideoPlayers, WebastoOffer, Gallery, ServiceRepair, FuelOffer, WeldingSale}
    }
</script>

<style scoped>
.home-wrapper {
  box-sizing: border-box;
}
</style>