<template>
  <div class="cards-container" :style="inlineStyle">
    <div class="cards-block">
      <div class="product-logotype"><img :src="image"></div>
      <div class="card-title">{{title}}</div>
      <div class="specifications-product">
        <div class="parameters-wrapper">
          <div class="parameters-container">
            <span class="parameter">{{value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CardProduct",
        props: {
            title: String,
            value: Object,
            background: String,
            image: String,
        },
        computed: {
            inlineStyle () {
                return {
                    backgroundImage: `url(${this.background})`
                }
            }
        },
    }
</script>

<style scoped>
.cards-container {
  width: 100%;
  height: 500px;
  margin-top: 30px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 40px 30px;
}
.product-logotype {
  width: 40%;
}
.card-title {
  font-size: 21px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
}
</style>