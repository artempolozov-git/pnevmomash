<template>
  <section class="players__wrapper">
    <h2 class="title">Видео о продукции Denyo</h2>
    <div class="players__container">
      <div class="video-players">
        <iframe src="https://www.youtube.com/embed/uiNcxieh8u0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="player-title">Дополнительный топливный бак</p>
      </div>
      <div class="video-players">
        <iframe src="https://www.youtube.com/embed/D1RvpKiC60M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="player-title">Запуск и прогрев сварочного агрегата Denyo</p>
      </div>
      <div class="video-players">
        <iframe src="https://www.youtube.com/embed/7mehxnYGrMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
.players__wrapper {
  margin-top: 150px;
  padding: 90px 150px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  transition-duration: 0.3s;
}
.title {
  font-size: 32px;
  color: #2a2b30;
  font-weight: bold;
  text-align: center;
  margin: 0 0 50px;
}
.players__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
}
.video-players > iframe {
  width: 100%;
  height: 300px;
}
.player-title {
  color: #7d7d7d;
  text-align: center;
}
@media only screen and (max-width : 1680px) {
  .players__wrapper {
    padding: 90px 100px;
  }
}
</style>