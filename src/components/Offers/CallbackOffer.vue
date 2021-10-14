<template>
  <section class="offers__wrapper">
    <div class="offers__container">
      <h2 class="title">Связаться с нами</h2>
      <p class="description">Для получения дополнительной информации по продаже или аренде сварочных агрегатов
        и дизельных генераторов, пожалуйста оставьте свои контактные данные и мы с Вами свяжемся!
      </p>
      <form class="service-form">
        <div class="data-input">
          <input name="Имя" type="text" placeholder="Имя" required>
        </div>
        <div class="data-input">
          <masked-input name="Телефон" mask="\+\7 (111) 111 11-11" type="text" placeholder="Телефон" required></masked-input>
        </div>
        <div class="send-button">
          <input type="submit" id="my-form-button" value="Связаться">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "ContactOffer",
        components: {
            MaskedInput
        },
    }
</script>

<style scoped>
  .offers__wrapper {
    margin: 150px auto 0;
    width: 60%;
    transition-duration: 0.3s;
  }
  .offers__container {
    padding: 70px;
    background: url(../../assets/images/offers/callback-background.webp);
    background-size: cover;
    background-position: center;
    transition: transform .3s;
  }
  .offers__container:hover {
    transform: scale(1.02);
    transition: transform .3s;
  }
  .title {
    font-weight: bold;
    color: #ffffff;
    font-size: 32px;
    margin: 0 0 20px;
  }
  .description {
    width: 60%;
    color: #c4c4c4;
    margin: 0;
  }
  .service-form {
    margin-top: 40px;
    display: flex;
    align-items: center;
  }
  .data-input > input {
    width: 300px;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    margin-right: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
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
    padding: 20px 40px;
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
  @media only screen and (max-width : 1680px) {
    .offers__wrapper {
      width: 70%;
    }
  }
</style>