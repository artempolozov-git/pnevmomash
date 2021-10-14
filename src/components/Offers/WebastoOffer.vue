<template>
  <section class="offers__wrapper">
    <div class="background-gradient">
      <div class="offers__container">
        <div class="firm-logotype"><img src="@/assets/icons/webasto-logo.svg"></div>
        <p class="title">Наша компания предоставляет услугу по установке
          предпускового подогревателя Webasto и Бинар</p>
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
  .offers__wrapper {
    margin: 150px auto 0;
    width: 60%;
    transition-duration: 0.3s;
  }
  .background-gradient {
    box-sizing: border-box;
    background: linear-gradient(90deg, rgba(109,106,101,1) 0%, rgba(175,170,166,1) 50%);
  }
  .offers__container {
    padding: 70px;
    background: url(../../assets/images/offers/webasto-background.webp);
    background-size: cover;
    background-position: center;
  }
  .firm-logotype {
    width: 25%;
  }
  .title {
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
    width: 60%;
  }
  .description {
    color: #ffffff;
    width: 55%;
  }
  @media only screen and (max-width : 1680px) {
    .offers__wrapper {
      width: 70%;
    }
  }
</style>