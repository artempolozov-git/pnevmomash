<template>
  <section class="products__wrapper" id="equipment">
    <div class="title__container">
      <h2 class="title">Продажа сварочных агрегатов</h2>
      <p class="description">Японские дизельные сварочные агрегаты Denyo успешно эксплуатируются в более чем 130 странах мира и незаменимы
        в полевых условиях, а также в местах, где имеется нехватка или полностью отсутствует электроэнергия!</p>
    </div>
    <div class="products__block">

      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный однопостовой сварочный агрегат Denyo DAW-180SS</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>4,56кВт</p>
            <p><span style="font-weight: normal">Номинальный ток: </span>170А</p>
            <p><span style="font-weight: normal">Однопостовая сварка: </span>30-180А</p>
            <p><span style="font-weight: normal">Электрод при однопостовой сварке: </span>2,0-4,0мм</p>
            <p><span style="font-weight: normal">Продолжительность включения: </span>50%</p>
            <p><span style="font-weight: normal">Объем двигателя: </span>400см3</p>
            <p><span style="font-weight: normal">Мощность двигателя: </span>7,28кВт</p>
            <p><span style="font-weight: normal">Генератор: </span>3кВа</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Узнать стоимость</span>
          </div>
        </div>
      </div>

      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный двухпостовой сварочный агрегат Denyo DLW-400LSW</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>12,9кВт</p>
            <p><span style="font-weight: normal">Номинальный ток: </span>370А</p>
            <p><span style="font-weight: normal">Однопостовая сварка: </span>60-380А</p>
            <p><span style="font-weight: normal">Электрод при однопостовой сварке: </span>2,0-8,0мм</p>
            <p><span style="font-weight: normal">Двухпостовая сварка: </span>30-190А</p>
            <p><span style="font-weight: normal">Электрод при двухпостовой сварке: </span>2,0-4,0мм</p>
            <p><span style="font-weight: normal">Продолжительность включения: </span>100%</p>
            <p><span style="font-weight: normal">Генератор: </span>15кВа</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Узнать стоимость</span>
          </div>
        </div>
      </div>

      <div class="card__three">
        <div class="product-card__three">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный двухпостовой сварочный агрегат Denyo DCW-480ESW</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>17,1кВт</p>
            <p><span style="font-weight: normal">Номинальный ток: </span>450А</p>
            <p><span style="font-weight: normal">Однопостовая сварка: </span>60-480А</p>
            <p><span style="font-weight: normal">Электрод при однопостовой сварке: </span>2,0-8,0мм</p>
            <p><span style="font-weight: normal">Двухпостовая сварка: </span>30-280А</p>
            <p><span style="font-weight: normal">Электрод при двухпостовой сварке: </span>2,0-6,0мм</p>
            <p><span style="font-weight: normal">Продолжительность включения: </span>100%</p>
            <p><span style="font-weight: normal">Генератор: </span>15кВа</p>
          </div>
          <div class="button" @click="feedbackForm">Узнать стоимость</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "WeldingEquipment",
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
    transition-duration: 0.3s;
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
    background: linear-gradient(0deg, rgba(2,139,154,1) 0%, rgba(0,178,201,1) 100%);
    transition: transform .3s;
  }
  .card__two {
    background: linear-gradient(0deg, rgba(127,128,129,1) 0%, rgba(170,174,177,1) 100%);
    transition: transform .3s;
  }
  .card__three {
    background: linear-gradient(0deg, rgba(12,72,144,1) 0%, rgba(55,119,214,1) 100%);
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
    background: url(../../assets/images/products/DAW-180SS.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__two {
    background: url(../../assets/images/products/DLW-400LSW.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__three {
    background: url(../../assets/images/products/DCW-480ESW.webp);
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