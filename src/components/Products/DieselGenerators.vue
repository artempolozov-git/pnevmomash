<template>
  <section class="products__wrapper">
    <div class="title__container">
      <h2 class="title">Продажа дизельных генераторов</h2>
      <p class="description">Удобная эксплуатация. На панели управления расположены все необходимые датчики, индикаторы для контроля процесса.
        Стабильный запуск при низких температурах, обеспечен за счет мощного аккумулятора, что важно для российского климата!</p>
    </div>
    <div class="products__block">

      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный генератор <br>Denyo DCA-15LSX</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>11кВт</p>
            <p><span style="font-weight: normal">Напряжение: </span>220В</p>
            <p><span style="font-weight: normal">Количество фаз: </span>1 фаза</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Узнать стоимость</span>
          </div>
        </div>
      </div>

      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный генератор <br>Denyo DCA-25ESK</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>16кВт</p>
            <p><span style="font-weight: normal">Напряжение: </span>220/380В</p>
            <p><span style="font-weight: normal">Количество фаз: </span>3 фазы, 4 провода</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Узнать стоимость</span>
          </div>
        </div>
      </div>

      <div class="card__three">
        <div class="product-card__three">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный генератор <br>Denyo DCA-150ESK</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>100кВт</p>
            <p><span style="font-weight: normal">Напряжение: </span>220/380В</p>
            <p><span style="font-weight: normal">Количество фаз: </span>3 фазы</p>
          </div>
          <div class="button" @click="feedbackForm">Узнать стоимость</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "DieselGenerators",
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
  .products__wrapper {
    padding: 100px 150px 0;
  }
  .title__container {
    text-align: center;
  }
  .title {
    font-size: 32px;
    color: #333333;
    font-weight: bold;
    margin-top: 0;
  }
  .description {
    width: 60%;
    margin: auto;
    color: #737373;
  }
  .products__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
    margin-top: 50px;
  }
  .card__first {
    background: linear-gradient(0deg, rgba(54,89,152,1) 0%, rgba(56,103,182,1) 100%);
    transition: transform .3s;
  }
  .card__two {
    background: linear-gradient(0deg, rgba(11,124,129,1) 0%, rgba(72,168,175,1) 100%);
    transition: transform .3s;
  }
  .card__three {
    background: linear-gradient(0deg, rgba(75,64,66,1) 0%, rgba(126,118,121,1) 100%);
    transition: transform .3s;
  }
  .card__first:hover, .card__two:hover, .card__three:hover  {
    transform: scale(1.02);
    transition: transform .3s;
  }
  .product-card__first, .product-card__two, .product-card__three {
    width: 100%;
    box-sizing: border-box;
    padding: 50px;
  }
  .product-card__first {
    background: url(../../assets/images/products/DCA-15LSX.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__two {
    background: url(../../assets/images/products/DCA-25ESK.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__three {
    background: url(../../assets/images/products/DCA-150ESK.webp);
    background-size: cover;
    background-position: center;
  }
  .product-logotype {
    width: 170px
  }
  .product-title {
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
  .product-value {
    color: #ffffff;
  }
  .button {
    display: flex;
    align-items: center;
    width: max-content;
    border-radius: 5px;
    font-size: 18px;
    padding: 25px 40px;
    box-sizing: border-box;
    margin: 50px auto 0;
    text-decoration: none;
    background: transparent;
    border: 3px solid #ffffff;
    color: #ffffff;
    font-weight: normal;
    transition-duration: 0.3s;
    cursor: pointer;
  }
  .button:hover {
    transform: scale(0.95);
    transition-duration: 0.3s;
    background-color: rgba(245, 245, 245, 0.11);
  }
  @media only screen and (max-width : 1680px) {
    .products__wrapper {
      padding: 100px 100px 0;
    }
  }
</style>