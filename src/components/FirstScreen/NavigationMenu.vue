<template>
  <div class="nav__wrapper">
    <div class="logotype"><img src="@/assets/icons/logotype.svg"></div>
    <nav class="nav-links">
      <li class="link" v-scroll-to="{el:'#equipment'}">Продажа</li>
      <li class="link" v-scroll-to="{el:'#service', offset: -150}">Обслуживание</li>
      <li class="link" v-scroll-to="{el:'#rent'}">Аренда</li>
      <li class="link" v-scroll-to="{el:'#about'}">О компании</li>
      <li class="link" id="last-link" v-scroll-to="{el:'#contacts'}">Контакты</li>
    </nav>
    <div>
      <a href="tel:+79824174799" class="phone-links">
        <img src="@/assets/icons/phone-icon.svg">
        <span>+7 (982) 417-47-99</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NavigationMenu",
    }
</script>

<style scoped>
.nav__wrapper {
  display: flex;
  align-items: center;
}
.logotype {
  width: 17%;
}
.nav-links {
  display: flex;
  align-items: center;
  margin: auto;
}
.link {
  color: #ffffff;
  font-weight: normal;
  margin-right: 60px;
  padding-bottom: 5px;
  font-size: 18px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.link:after, .phone-links > span:after {
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
.link:hover:after, .phone-links > span:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
#last-link {
  margin-right: 0;
}
.phone-links {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}
.phone-links > img {
  width: 50px;
  margin-right: 20px;
  transition-duration: 0.3s;
}
.phone-links > span {
  color: #ffffff;
  font-size: 20px;
  font-weight: normal;
  padding-bottom: 5px;
  position: relative;
}
</style>