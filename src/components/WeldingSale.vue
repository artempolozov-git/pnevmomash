<template>
  <section class="ws-container">
    <h2 class="title">Продажа сварочных агрегатов</h2>
    <p class="description">Японские дизельные сварочные агрегаты Denyo успешно эксплуатируются в более чем 130 странах мира и незаменимы
      в полевых условиях, а также в местах, где имеется нехватка или полностью отсутствует электроэнергия!</p>
    <div class="sale-wrapper">
      <card-product :image="card.image" :background="card.background" :title="card.title" :parameters="card.parameters" :value="card.value" v-for="(card, weldingCard) in welding" :key="weldingCard"></card-product>
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
                welding: [
                    {
                        title: "Дизельный однопостовой сварочный \n" +
                            "агрегат DENYO DAW-180SS",
                        parameters: [
                            { value: "Номинальная мощность: 4,56кВт" },
                            { value: "Номинальная мощность: 4,56кВт" },
                        ],
                        background: require('@/assets/images/DAW-180SS.webp'),
                        image: require('@/assets/icons/denyo.svg'),
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
  font-size: 36px;
  color: #212121;
  font-weight: bold;
}
.description {
  width: 60%;
  margin-top: 15px;
  color: #515151;
}
.sale-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
}
</style>