<template>
  <section class="offers-wrapper">
    <div class="offers-container">
      <h2 class="offers-title">Установка дополнительного топливного бака</h2>
      <p class="offers-description">Новая доработка от нашей компании!</p>
      <p class="offers-description">Время автономной работы агрегата в 2 раза больше!</p>
      <div>
        <a href="https://www.youtube.com/watch?v=0SVeAahgV5M&ab_channel=iGluhoff" class="play-button" target="_blank">
          <img src="@/assets/icons/play-icon.svg">
          <span>Смотреть видео</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "FuelOffer"
    }
</script>

<style scoped>
.offers-wrapper {
  margin: 150px auto 0;
  width: 60%;
}
.offers-container {
  width: 100%;
  padding: 60px;
  border-radius: 5px;
  box-sizing: border-box;
  background: url(../../assets/images/fuel-background.webp);
  background-size: cover;
  background-position: center;
}
.offers-title {
  font-weight: bold;
  color: #ffffff;
  font-size: 40px;
  width: 70%;
  margin: 0 0 20px;
}
.offers-description {
  color: #ffffff;
  font-size: 21px;
  margin: 0;
}
.play-button {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  margin-top: 40px;
  padding: 15px 40px;
  box-sizing: border-box;
  text-decoration: none;
  background: transparent;
  border: 3px solid #ffffff;
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
  background-color: rgba(245, 245, 245, 0.11);
}
</style>