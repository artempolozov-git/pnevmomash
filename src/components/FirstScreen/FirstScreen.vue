<template>
  <div class="firstscreen__wrapper">
    <div class="firm-logotype"><img src="@/assets/icons/denyo-logo.svg"></div>
    <h1 class="title">Продажа, аренда и сервисный ремонт сварочных агрегатов Denyo</h1>
    <p class="description">Продажа оригинальных запчастей и расходных материалов,<br>
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
.firstscreen__wrapper {
  margin-top: 100px;
}
.firm-logotype {
  width: 30%;
}
.title {
  width: 60%;
  font-size: 45px;
  color: #ffffff;
  margin-bottom: 0;
}
.description {
  font-weight: normal;
  color: #ffffff;
  font-size: 20px;
}
.play-button {
  display: flex;
  align-items: center;
  width: max-content;
  margin-top: 60px;
  padding: 15px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  background-color: #e10c19;
  transition-duration: 0.3s;
}
.play-button > img {
  width: 50px;
  margin-right: 15px;
}
.play-button > span {
  color: #ffffff;
  font-weight: normal;
}
.play-button:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: #cd0c19;
}
</style>