<template>
  <header class="header__container" id="up">
    <navigation-menu></navigation-menu>
    <first-screen></first-screen>
  </header>
</template>

<script>
    import NavigationMenu from "@/components/FirstScreen/NavigationMenu";
    import FirstScreen from "@/components/FirstScreen/FirstScreen";
    export default {
        name: "Header",
        components: {FirstScreen, NavigationMenu}
    }
</script>

<style scoped>
.header__container {
  width: 100%;
  height: auto;
  padding: 100px 150px;
  box-sizing: border-box;
  background: url(../assets/images/header-background.webp);
  background-size: cover;
  background-position: center;
  transition-duration: 0.3s;
}
@media only screen and (max-width : 1680px) {
  .header__container {
    padding: 100px 100px;
  }
}
</style>