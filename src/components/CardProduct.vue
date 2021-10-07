<template>
  <div class="card-wrapper" :style="inlineStyle">
    <div class="card-container">
      <div class="product-logotype"><img :src="image"></div>
      <h2 class="card-title">{{title}}</h2>
      <div class="parameters-card">
        <p class="parameters">{{power}}</p>
        <p class="parameters">{{power}}</p>
        <p class="parameters">{{power}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CardProduct",
        props: {
            title: String,
            power: String,
            image: String,
            background: String,
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
.card-wrapper {
  width: 100%;
  height: 500px;
  margin-top: 30px;
  border-radius: 6px;
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
.parameters {
  color: #ffffff;
  font-weight: normal;
}
</style>