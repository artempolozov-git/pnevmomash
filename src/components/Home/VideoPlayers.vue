<template>
  <section class="players-wrapper">
    <h2 class="title">Видео о продукции Denyo</h2>
    <div class="players-container">
      <div class="video-players">
        <a class="fuel-video" href="https://www.youtube.com/watch?v=uiNcxieh8u0&t=1s&ab_channel=TOKYOBOEKIRUS" target="_blank">
          <img src="@/assets/icons/play-icon.svg">
        </a>
        <p class="player-title">Топливный бак сварочного агрегата Denyo</p>
      </div>
      <div class="video-players">
        <a class="equipment-video" href="https://www.youtube.com/watch?v=D1RvpKiC60M&t=1s&ab_channel=TOKYOBOEKIRUS" target="_blank">
          <img src="@/assets/icons/play-icon.svg">
        </a>
        <p class="player-title">Запуск и прогрев сварочного агрегата Denyo</p>
      </div>
      <div class="video-players">
        <a class="denyo-video" href="https://www.youtube.com/watch?v=7mehxnYGrMw&t=5s&ab_channel=TOKYOBOEKIRUS" target="_blank">
          <img src="@/assets/icons/play-icon.svg">
        </a>
        <p class="player-title">История успеха сварочного агрегата Denyo</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "VideoPlayers"
    }
</script>

<style scoped>
.players-wrapper {
  margin-top: 150px;
  padding: 90px 150px;
  box-sizing: border-box;
  background-color: #F6F6F6;
}
.title {
  font-size: 45px;
  color: #212121;
  font-weight: bold;
  text-align: center;
  margin: 0 0 50px;
}
.players-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
}
.fuel-video, .equipment-video, .denyo-video {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  transition-duration: 0.3s;
}
.fuel-video > img, .equipment-video > img, .denyo-video > img {
  width: 120px;
}
.fuel-video:hover, .equipment-video:hover, .denyo-video:hover {
  transform: scale(0.97);
  transition-duration: 0.3s;
}
.fuel-video {
  background-image: url(../../assets/images/video/fuel-video.webp);
}
.equipment-video {
  background-image: url(../../assets/images/video/equipment-video.webp);
}
.denyo-video {
  background-image: url(../../assets/images/video/denyo-video.webp);
}
.player-title {
  color: #7d7d7d;
  text-align: center;
  font-weight: normal;
}
</style>