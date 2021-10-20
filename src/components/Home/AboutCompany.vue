<template>
  <section class="about__wrapper" id="about">
    <div class="about__container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="certificate-dealer"></swiper-slide>
        <swiper-slide class="certificate-partner"></swiper-slide>
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
        <div class="send-button" @click="feedbackForm">
          <span>Получить КП на оборудование</span>
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
.about__wrapper {
  margin-top: 150px;
  padding: 0 150px;
  box-sizing: border-box;
  transition-duration: 0.3s;
}
.about__container {
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
.certificate-dealer {
  background: url(../../assets/images/certificates/dealer-certificate.webp);
  background-size: cover;
  background-position: center;
}
.certificate-partner {
  background: url(../../assets/images/certificates/partner-certificate.webp);
  background-size: cover;
  background-position: center;
}
.about-information {
  width: 50%;
  margin: auto 0 auto 100px;
}
.title {
  font-size: 32px;
  color: #2a2b30;
  font-weight: bold;
  margin-top: 0;
}
.description {
  font-size: 20px;
  font-weight: normal;
  color: #515151;
  width: 80%;
}
.information {
  color: #515151;
  width: 80%;
}
.send-button  {
  width: max-content;
  margin-top: 50px;
  padding: 25px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  background-color: #e76c1e;
  font-weight: normal;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  transition-duration: 0.3s;
}
.send-button:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: #ff7621;
}
@media only screen and (max-width : 1750px) {
  .about__wrapper {
    margin-top: 100px;
    padding: 0 100px;
  }
  .swiper {
    width: 600px;
    height: 822px;
  }
  .description {
    font-size: 18px;
  }
  .send-button {
    font-size: 14px;
    padding: 20px 30px;
  }
}
@media only screen and (max-width : 1366px) {
  .swiper {
    width: 500px;
    height: 722px;
  }
  .about__wrapper {
    padding: 0 50px;
  }
}
@media only screen and (max-width : 1024px) {
  .about__container {
    display: block;
  }
  .about-information {
    width: 100%;
    margin: 50px 0 0;
    text-align: center;
  }
  .title {
    font-size: 26px;
  }
  .description {
    font-size: 16px;
    width: 50%;
    margin: auto;
  }
  .information {
    margin: auto;
    width: 60%;
  }
  .send-button {
    margin: 50px auto 0;
  }
}
@media only screen and (max-width : 800px) {
  .description, .information {
    width: 100%;
  }
}
@media only screen and (max-width : 533px) {
  .about__wrapper {
    margin-top: 70px;
  }
  .swiper {
    width: 400px;
    height: 522px;
  }
}
@media only screen and (max-width : 450px) {
  .swiper {
    width: 100%;
    height: 500px;
  }
}
</style>