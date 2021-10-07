<template>
  <section class="offers-wrapper">
    <div class="background-gradient">
      <div class="offers-container">
        <div class="firm-logotype"><img src="@/assets/icons/webasto-logo.svg"></div>
        <h2 class="title">Наша компания предоставляет услугу по установке
          предпускового подогревателя Webasto и Бинар</h2>
        <p class="description">Мы, имея опыт работы в продаже и эксплуатации оборудования
          Denyo, рекомендуем нашим клиентам воспользоваться данной услугой.</p>
        <p class="description">Предпусковой подогреватель продлит срок службы оборудования
          в суровых  климатических условиях!</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "WebastoOffer"
    }
</script>

<style scoped>
  .offers-wrapper {
    margin: 150px auto 0;
    width: 65%;
  }
  .background-gradient {
    width: 100%;
    border-radius: 16px;
    box-sizing: border-box;
    background: linear-gradient(90deg, rgba(109,106,101,1) 0%, rgba(175,170,166,1) 50%);
  }
  .offers-container {
    padding: 80px;
    border-radius: 16px;
    background: url(../../assets/images/webasto-background.webp);
    background-size: cover;
    background-position: center;
  }
  .firm-logotype {
    width: 30%;
  }
  .title {
    color: #ffffff;
    font-size: 24px;
    font-weight: normal;
    width: 70%;
  }
  .description {
    color: #ffffff;
    width: 70%;
  }
</style>