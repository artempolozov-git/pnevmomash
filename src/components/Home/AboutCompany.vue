<template>
  <section class="about-wrapper">
    <div class="about-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="certificate"></swiper-slide>
        <swiper-slide class="certificate"></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="about-information">
        <h2 class="title">О компании</h2>
        <p class="description">Компания Пневмомаш-Сургут является официальным дилером Denyo уже более 12 лет!</p>
        <div class="information">
          <p>Компания осуществляет продажу и сервисный ремонт сварочных агрегатов Denyo,
            а так же продажу оригинальных запчастей и расходных материалов, необходимый
            запас которых постоянно поддерживается на складе.</p>
          <p><wbr>Сервисные центры Пневмомаш-Сургут оснащены современным оборудованием
            для диагностики и ремонта сварочных агрегатов, наши сотрудники проходят
            обучение у производителей и постоянно повышают свою квалификацию.
            Пневмомаш-Сургут - это строгие стандарты качества во всем и постоянная поддержка
            наших клиентов. Пневмомаш-Сургут сегодня это комплексная помощь нашим клиентам
            в любых вопросах касающихся оборудования Denyo.</p>
        </div>
        <div class="send-button">
          <span>Получить КП</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "AboutCompany",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }
</script>

<style scoped>
.about-wrapper {
  margin-top: 150px;
  padding: 0 150px;
  box-sizing: border-box;
}
.about-container {
  display: flex;
  align-content: center;
  justify-content: center;
}
.swiper {
  width: 700px;
  height: 922px;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
  right: 0;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  left: 0;
}
.certificate {
  margin: auto 0;
  background: url(../../assets/images/certificates/dealer-certificate.webp);
  background-size: cover;
  background-position: center;
}
.about-information {
  width: 50%;
  margin: auto 0 auto 100px;
}
.title {
  font-size: 45px;
  color: #212121;
  font-weight: bold;
  margin-top: 0;
}
.description {
  font-size: 26px;
  margin-top: 15px;
  font-weight: normal;
  color: #515151;
  width: 80%;
}
.information {
  margin-top: 15px;
  color: #515151;
}
.send-button  {
  width: max-content;
  margin-top: 30px;
  padding: 25px 40px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #e76c1e;
  font-weight: normal;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  transition-duration: 0.3s;
}
.send-button:hover {
  transform: scale(0.97);
  transition-duration: 0.3s;
  background-color: #e16c1e;
}
</style>