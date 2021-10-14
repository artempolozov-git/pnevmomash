<template>
  <section class="offers__wrapper">
    <div class="background-gradient">
      <div class="offers__container">
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
  .offers__wrapper {
    margin: 150px auto;
    width: 60%;
    transition-duration: 0.3s;
  }
  .background-gradient {
    background: linear-gradient(0deg, rgba(36,123,234,1) 0%, rgba(47,134,244,1) 60%);
    transition: transform .3s;
  }
  .offers__container {
    padding: 70px;
    background: url(../../assets/images/offers/fuel-background.webp);
    background-size: cover;
    background-position: center;
  }
  .background-gradient:hover {
    transform: scale(1.02);
    transition: transform .3s;
  }
  .title {
    font-weight: bold;
    color: #ffffff;
    font-size: 36px;
    width: 60%;
    margin: 0 0 20px;
  }
  .description {
    color: #ffffff;
    font-size: 20px;
    margin: 0;
    font-weight: normal;
  }
  .play-button {
    display: flex;
    align-items: center;
    width: max-content;
    margin-top: 40px;
    padding: 15px 40px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 18px;
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
    transform: scale(0.95);
    transition-duration: 0.3s;
    background-color: rgba(245, 245, 245, 0.11);
  }
  @media only screen and (max-width : 1680px) {
    .offers__wrapper {
      width: 70%;
    }
  }
</style>