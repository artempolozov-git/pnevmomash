<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <swiper-slide>
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
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "GeneratorsMobile",
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
  .swiper-slide:nth-child(3n) {
    width: max-content;
  }
  .card__first {
    background: linear-gradient(0deg, rgba(54,89,152,1) 0%, rgba(56,103,182,1) 100%);
  }
  .card__two {
    background: linear-gradient(0deg, rgba(11,124,129,1) 0%, rgba(72,168,175,1) 100%);
  }
  .card__three {
    background: linear-gradient(0deg, rgba(75,64,66,1) 0%, rgba(126,118,121,1) 100%);
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
  @media only screen and (max-width : 533px) {
    .swiper-slide {
      width: 100%;
    }
    .swiper-slide:nth-child(2n) {
      width: 100%;
    }
    .swiper-slide:nth-child(3n) {
      width: 100%;
    }
    .product-card__first, .product-card__two, .product-card__three {
      padding: 40px;
    }
  }
</style>