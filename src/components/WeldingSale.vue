<template>
  <section class="ws-container">
    <h2 class="title">Продажа сварочных агрегатов</h2>
    <p class="description">Японские дизельные сварочные агрегаты Denyo успешно эксплуатируются в более чем 130 странах мира и незаменимы
      в полевых условиях, а также в местах, где имеется нехватка или полностью отсутствует электроэнергия!</p>
    <div class="sale-wrapper">
      <card-product v-for="weldingcard in cards"
                    :key="weldingcard"
                    :title="weldingcard.title"
                    :power="weldingcard.power"
                    :image="weldingcard.image"
                    :background="weldingcard.background"></card-product>
    </div>
  </section>
</template>

<script>
import CardProduct from "@/components/CardProduct";
export default {
    name: "WeldingSale",
    components: {CardProduct},
    data () {
        return {
            cards: [
                {
                    title: "Дизельный однопостовой сварочный агрегат DENYO DAW-180SS",
                    power: "Номинальная мощность: 4,56кВт",
                    current: "Номинальный ток: 170А",
                    single: "Однопостовая сварка: 30-180А",
                    electrode: "Электрод при однопостовой сварке: 2,0-4,0мм",
                    duration: "Продолжительность включения: 50%",
                    generator: "Генератор: 3кВа",
                    image: require('@/assets/icons/denyo.svg'),
                    background: require('@/assets/images/DAW-180SS.webp'),
                },
            ],
        }
    }
}
</script>

<style scoped>
.ws-container {
  padding: 100px 150px 0;
  box-sizing: border-box;
}
.title {
  margin-bottom: 15px;
  font-size: 45px;
  color: #212121;
  font-weight: bold;
  text-align: center;
}
.description {
  width: 60%;
  margin: auto;
  color: #515151;
  text-align: center;
}
.sale-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  margin-top: 30px;
}
</style>