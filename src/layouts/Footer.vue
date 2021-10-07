<template>
  <footer class="footer-wrapper">
    <div class="footer-container__main">
      <div class="logo-container">
        <div class="logotype"><img src="@/assets/icons/logotype.svg"></div>
        <div class="up-button"><img src="@/assets/icons/arrow-up.svg"></div>
      </div>
      <footer-contacts></footer-contacts>
      <footer-navigation></footer-navigation>
      <footer-callback></footer-callback>
    </div>
    <div class="privacy-container">
      <div class="copyright">© 2021 ООО «Пневмомаш-Сургут»</div>
      <div class="privacy-policy">Политика конфиденциальности</div>
    </div>
  </footer>
</template>

<script>
    import FooterContacts from "@/components/Footer/FooterContacts";
    import FooterNavigation from "@/components/Footer/FooterNavigation";
    import FooterCallback from "@/components/Footer/FooterCallback";
    export default {
        name: "Footer",
        components: {FooterCallback, FooterNavigation, FooterContacts}
    }
</script>

<style scoped>
.footer-wrapper {
  background-color: #2a2b30;
}
.footer-container__main  {
  display: flex;
  padding: 100px 150px;
  box-sizing: border-box;
  border-bottom: 1px solid #b1b1b1;
}
.logotype {
  width: 300px;
}
.up-button > img {
  margin-top: 60px;
  width: 70px;
  cursor: pointer;
  border-radius: 50px;
  transition-duration: 0.3s;
}
.up-button > img:hover {
  transform: scale(0.97);
  transition-duration: 0.3s;
  background-color: rgba(245, 245, 245, 0.11);
}
.privacy-container {
  display: flex;
  align-items: center;
  padding: 40px 150px;
  box-sizing: border-box;
}
.copyright {
  color: #ffffff;
}
.privacy-policy {
  margin-left: auto;
  color: #b1b1b1;
  padding-bottom: 5px;
  position: relative;
  cursor: pointer;
}
.privacy-policy:after {
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
.privacy-policy:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>