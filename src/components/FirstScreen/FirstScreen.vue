<template>
  <div class="firstscreen-wrapper">
    <div class="firm-logotype"><img src="@/assets/icons/denyo-logo.svg"></div>
    <h1 class="fs-title">Продажа, аренда <br>и сервисный ремонт <br>сварочных агрегатов Denyo</h1>
    <p class="fs-description">Продажа оригинальных запчастей и расходных материалов,<br>
      которые всегда есть в наличии!</p>
    <div>
      <a href="https://www.youtube.com/watch?v=akvSYwN_1CE&ab_channel=iGluhoff" class="play-button" target="_blank">
        <img src="@/assets/icons/play-icon.svg">
        <span>Видео о нас</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FirstScreen"
    }
</script>

<style scoped>
.firstscreen-wrapper {
  margin-top: 100px;
}
.firm-logotype {
  width: 35%;
}
.fs-title {
  font-size: 55px;
  color: #ffffff;
  margin-bottom: 0;
}
.fs-description {
  font-weight: 500;
  color: #ffffff;
  font-size: 24px;
}
.play-button {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  margin-top: 50px;
  padding: 15px 40px;
  box-sizing: border-box;
  text-decoration: none;
  background-color: #e10c19;
  transition-duration: 0.3s;
}
.play-button > img {
  width: 50px;
  margin-right: 15px;
}
.play-button > span {
  color: #ffffff;
  font-size: 18px;
}
.play-button:hover {
  transform: scale(0.97);
  transition-duration: 0.3s;
  background-color: #cd0c19;
}
</style>