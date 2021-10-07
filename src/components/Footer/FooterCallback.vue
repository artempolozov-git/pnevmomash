<template>
  <div class="footer-callback_wrapper">
    <div class="play-button">
      <span>Обратная связь</span>
    </div>
    <div class="catalog">
      <a href="" target="_blank">Каталог компании</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterCallback"
    }
</script>

<style scoped>
.footer-callback_wrapper {
  margin-left: auto;
}
.play-button {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 6px;
  padding: 25px 40px;
  box-sizing: border-box;
  text-decoration: none;
  background: transparent;
  border: 3px solid #ffffff;
  transition-duration: 0.3s;
  cursor: pointer;
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
.catalog {
  margin-top: 20px;
  text-align: right;
}
.catalog > a {
  color: #c4c4c4;
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;
}
.catalog > a:after {
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
.catalog > a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>