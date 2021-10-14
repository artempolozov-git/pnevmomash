<template>
  <section class="products__wrapper" id="rent">
    <div class="title__container">
      <h2 class="title">Аренда сварочных агрегатов</h2>
      <p class="description">В ассортименте имеется дополнительное оборудование, расширяющее возможности техники,
        а также мы предоставляем поставку оригинальных запчастей или более дешевых аналогов по вашему желанию!</p>
    </div>
    <div class="products__block">

      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный двухпостовой сварочный <br>агрегат Denyo DLW-400LSW</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>12,9кВт</p>
            <p><span style="font-weight: normal">Номинальный ток: </span>370А</p>
            <p><span style="font-weight: normal">Двухпостовая сварка: </span>30-190А</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Узнать стоимость аренды</span>
          </div>
        </div>
      </div>

      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный двухпостовой сварочный <br>агрегат Denyo DCW-480ESW</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Номинальная мощность: </span>17,1кВт</p>
            <p><span style="font-weight: normal">Номинальный ток: </span>450А</p>
            <p><span style="font-weight: normal">Двухпостовая сварка: </span>30-280А</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Узнать стоимость аренды</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "WeldingRent",
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  margin-top: 50px;
}
.card__first {
  background: linear-gradient(0deg, rgba(127,128,129,1) 0%, rgba(170,174,177,1) 100%);
  transition: transform .3s;
}
.card__two {
  background: linear-gradient(0deg, rgba(6,56,140,1) 0%, rgba(75,136,235,1) 100%);
  transition: transform .3s;
}
.card__first:hover, .card__two:hover {
  transform: scale(1.02);
  transition: transform .3s;
}
.product-card__first, .product-card__two {
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
}
.product-card__first {
  background: url(../../assets/images/products/DLW-400LSWrent.webp);
  background-size: cover;
  background-position: center;
}
.product-card__two {
  background: url(../../assets/images/products/DCW-480ESWrent.webp);
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
  margin-top: 50px;
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