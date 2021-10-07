<template>
  <section class="offers-wrapper">
    <div class="background-gradient">
      <div class="offers-container">
        <h2 class="title">Установка дополнительного топливного бака</h2>
        <p class="description">Новая доработка от нашей компании!</p>
        <p class="description">Время автономной работы агрегата в 2 раза больше!</p>
        <div>
          <a href="https://www.youtube.com/watch?v=0SVeAahgV5M&ab_channel=iGluhoff" class="play-button" target="_blank">
            <img src="@/assets/icons/play-icon.svg">
            <span>Смотреть видео</span>
          </a>
        </div>
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
    width: 65%;
  }
  .background-gradient {
    width: 100%;
    border-radius: 16px;
    box-sizing: border-box;
    background: linear-gradient(0deg, rgba(36,123,234,1) 0%, rgba(47,134,244,1) 60%);
  }
  .offers-container {
    padding: 80px;
    border-radius: 16px;
    background: url(../../assets/images/fuel-background.webp);
    background-size: cover;
    background-position: center;
  }
  .title {
    font-weight: bold;
    color: #ffffff;
    font-size: 45px;
    width: 70%;
    margin: 0 0 20px;
  }
  .description {
    color: #ffffff;
    margin: 0;
    font-weight: normal;
  }
  .play-button {
    display: flex;
    align-items: center;
    width: max-content;
    border-radius: 6px;
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
    font-weight: normal;
  }
  .play-button:hover {
    transform: scale(0.97);
    transition-duration: 0.3s;
    background-color: rgba(245, 245, 245, 0.11);
  }
</style>