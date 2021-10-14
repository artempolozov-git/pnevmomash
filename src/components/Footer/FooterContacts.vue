<template>
  <div class="footer-contacts__wrapper">
    <div class="block-title">Мы на связи:</div>
    <div>
      <a class="contact-links" href="tel:+79824174799">+7 (982) 417-47-99</a>
    </div>
    <p class="address">
      <a class="address-link" href="https://yandex.ru/maps/973/surgut/house/nefteyuganskoye_shosse_37k4/Y0oYcgBiT0MPQFhrfX53cHhjYw==/?ll=73.484571%2C61.261416&z=15.25" target="_blank">Сургут, Нефтеюганское шоссе, 37 к6</a>
    </p>
    <p class="address">
      <a class="address-link" href="https://yandex.ru/maps/11230/noviy-urengoy/house/promyshlennaya_ulitsa_10/Y08YcQdgT0EAQFhsfXx5d3ljZQ==/?ll=76.700648%2C66.086501&z=16" target="_blank">Новый уренгой, ул. Промышленная,10/2</a>
    </p>
  </div>
</template>

<script>
    export default {
        name: "FooterContacts"
    }
</script>

<style scoped>
.footer-contacts__wrapper {
  margin-left: auto;
}
.block-title {
  color: #ffffff;
  font-weight: normal;
  font-size: 20px;
}
.contact-links {
  display: flex;
  align-items: center;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  margin-top: 20px;
  color: #b1b1b1;
  font-size: 20px;
  font-weight: normal;
  padding-bottom: 5px;
  position: relative;
}
.contact-links:after, .address-link:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #e76c1e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.contact-links:hover:after, .address-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.address {
  color: #c4c4c4;
  margin-top: 20px;
}
.address-link {
  color: #c4c4c4;
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;
}
</style>