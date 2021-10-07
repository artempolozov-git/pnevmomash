<template>
  <section class="offers-wrapper">
    <div class="offers-container">
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
  .offers-wrapper {
    margin: 150px auto 0;
    width: 65%;
  }
  .offers-container {
    padding: 100px;
    border-radius: 16px;
    background: url(../../assets/images/callback-background.webp);
    background-size: cover;
    background-position: center;
  }
  .title {
    font-weight: bold;
    color: #ffffff;
    font-size: 45px;
    width: 70%;
    margin: 0 0 20px;
  }
  .description {
    width: 70%;
    color: #ffffff;
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
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    font-family: HelveticaNeueCyr;
    border-radius: 6px;
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
    border-radius: 6px;
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
    transform: scale(0.97);
    transition-duration: 0.3s;
    background-color: #e16c1e;
  }
</style>