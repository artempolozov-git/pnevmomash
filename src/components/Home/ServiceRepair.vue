<template>
  <section class="service__wrapper" id="service">
    <div class="service__container">
      <div class="service-information">
        <h2 class="title">Сервисное обслуживание</h2>
        <p class="description">Наша компания предоставляет услуги по сервисному ремонту и обслуживанию сварочных агрегатов фирмы Dеnyo и Airman.</p>
        <div class="information">
          <p>На время ремонта возможно предоставление подменного аппарата, во избежание простоев.</p>
          <p><wbr>Если у Вас в эксплуатации имеется оборудование Denyo и требуется его ремонт
            или профилактические работы, Вы можете направить нам сервисный запрос</p>
        </div>
        <form class="service-form">
          <div class="data-input">
            <input name="Имя" type="text" placeholder="Имя" required>
          </div>
          <div class="data-input">
            <masked-input name="Телефон" mask="\+\7 (111) 111 11-11" type="text" placeholder="Телефон" required></masked-input>
          </div>
          <div class="send-button">
            <input type="submit" id="my-form-button" value="Записаться на ремонт">
          </div>
        </form>
      </div>
      <div class="service-image"></div>
    </div>
  </section>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "ServiceRepair",
        components: {
            MaskedInput
        },
    }
</script>

<style scoped>
.service__wrapper {
  padding: 0 150px;
  /*background-color: #F6F6F6;*/
}
.service__container {
  display: flex;
  align-content: center;
  justify-content: center;
}
.service-information {
  width: 50%;
}
.title {
  font-size: 32px;
  color: #333333;
  font-weight: bold;
  margin-top: 0;
}
.description {
  font-size: 20px;
  margin-top: 15px;
  font-weight: normal;
  color: #515151;
  width: 80%;
}
.information {
  width: 80%;
  margin-top: 15px;
  color: #737373;
}
.service-image {
  width: 649px;
  height: 508px;
  margin: auto 0;
  background: url(../../assets/images/services.webp);
  background-size: cover;
  background-position: center;
}
.service-form {
  margin-top: 15px;
}
.data-input > input {
  width: 400px;
  height: 60px;
  margin-top: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  font-family: HelveticaNeueCyr;
  border-radius: 5px;
  border: 1px solid #b1b1b1;
  background-color: transparent;
}
.data-input > input:focus {
  outline: none;
  border: 2px solid #e76c1e;
}
.send-button > input {
  margin-top: 30px;
  padding: 25px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #e76c1e;
  font-size: 18px;
  font-family: HelveticaNeueCyr;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  transition-duration: 0.3s;
}
.send-button > input:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: #ff7621;
}
@media only screen and (max-width : 1536px) {
  .description {
    font-size: 18px;
  }
  .service-image {
    width: 550px;
    height: 408px;
  }
  .data-input > input {
    width: 350px;
    height: 50px;
    font-size: 14px;
  }
  .send-button > input {
    font-size: 14px;
    padding: 20px 30px;
  }
}
@media only screen and (max-width : 1366px) {
  .service__wrapper {
    padding: 0 100px;
  }
}
@media only screen and (max-width : 1024px) {
  .service__container {
    display: block;
  }
  .title {
    font-size: 26px;
  }
  .description {
    font-size: 16px;
    margin: 15px auto 0;
  }
  .service-information {
    width: 100%;
    text-align: center;
  }
  .service-image {
    width: 410px;
    height: 308px;
  }
  .information {
    margin: 15px auto 0;
  }
  .service-image {
    margin: 50px auto 0;
  }
}
@media only screen and (max-width : 800px) {
  .description, .information {
    width: 100%;
  }
}
@media only screen and (max-width : 600px) {
  .service__wrapper {
    padding: 0 50px;
  }
}
@media only screen and (max-width : 490px) {
  .service-image {
    width: 350px;
    height: 260px;
  }
}
</style>