<template>
  <header class="header-container">
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
.header-container {
  width: 100%;
  height: auto;
  padding: 100px 150px;
  box-sizing: border-box;
  background: url(../assets/images/header-background.webp);
  background-size: cover;
  background-position: center;
}
</style>