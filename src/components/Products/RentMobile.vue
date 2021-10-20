<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный двухпостовой сварочный агрегат Denyo DLW-400LSW</h2>
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
    </swiper-slide>
    <swiper-slide>
      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">Дизельный двухпостовой сварочный агрегат Denyo DCW-480ESW</h2>
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
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "RentMobile",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 30,
                    grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                }
            }
        },
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
  .swiper-container {
    margin-top: 50px;
  }
  .swiper-slide {
    width: max-content;
  }
  .swiper-slide:nth-child(2n) {
    width: max-content;
  }
  .card__first {
    background: linear-gradient(0deg, rgba(127,128,129,1) 0%, rgba(170,174,177,1) 100%);
  }
  .card__two {
    background: linear-gradient(0deg, rgba(6,56,140,1) 0%, rgba(75,136,235,1) 100%);
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
    font-size: 18px;
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
    font-size: 14px;
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
  @media only screen and (max-width : 800px) {
    .swiper-slide {
      width: 70%;
    }
    .swiper-slide:nth-child(2n) {
      width: 70%;
    }
  }
  @media only screen and (max-width : 533px) {
    .swiper-slide {
      width: 100%;
    }
    .swiper-slide:nth-child(2n) {
      width: 100%;
    }
    .product-card__first, .product-card__two {
      padding: 40px;
    }
  }
</style>