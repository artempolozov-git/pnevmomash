<template>
  <section class="gallery__wrapper">
    <h2 class="title">Фотографии нашей компании</h2>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="photo-1"></swiper-slide>
      <swiper-slide class="photo-2"></swiper-slide>
      <swiper-slide class="photo-3"></swiper-slide>
      <swiper-slide class="photo-4"></swiper-slide>
      <swiper-slide class="photo-5"></swiper-slide>
      <swiper-slide class="photo-6"></swiper-slide>
      <swiper-slide class="photo-7"></swiper-slide>
      <swiper-slide class="photo-8"></swiper-slide>
      <swiper-slide class="photo-9"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="mobile-gallery">
      <mobile-gallery></mobile-gallery>
    </div>
  </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import MobileGallery from "@/components/Home/MobileGallery";
    export default {
        name: "Gallery",
        components: {
            MobileGallery,
            Swiper,
            SwiperSlide
        },
            data() {
                return {
                    swiperOption: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 3,
                        loop: true,
                        autoplay: {
                            delay: 3500,
                        },
                        disableOnInteraction: true,
                        loopFillGroupWithBlank: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }
                    }
                }
            }
        }
</script>

<style scoped>
.gallery__wrapper {
  margin-top: 100px;
}
.title {
  box-sizing: border-box;
  margin-bottom: 50px;
  font-size: 32px;
  color: #2a2b30;
  font-weight: bold;
  text-align: center;
}
.photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
.photo-7, .photo-8, .photo-9 {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}
.photo-1 {
  background-image: url(../../assets/images/gallery/equipment-photo.webp);
}
.photo-2 {
  background-image: url(../../assets/images/gallery/230LS.webp);
}
.photo-3 {
  background-image: url(../../assets/images/gallery/unloading-machine.webp);
}
.photo-4 {
  background-image: url(../../assets/images/gallery/repair-equipment.webp);
}
.photo-5 {
  background-image: url(../../assets/images/gallery/maintenance-equipment.webp);
}
.photo-6 {
  background-image: url(../../assets/images/gallery/equipment-stock.webp);
}
.photo-7 {
  background-image: url(../../assets/images/gallery/open-equipment.webp);
}
.photo-8 {
  background-image: url(../../assets/images/gallery/preparation-sale.webp);
}
.photo-9 {
  background-image: url(../../assets/images/gallery/dispatch-equipment.webp);
}
.mobile-gallery {
  display: none;
}
@media only screen and (max-width : 1750px) {
  .photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
  .photo-7, .photo-8, .photo-9 {
    height: 400px
  }
}
@media only screen and (max-width : 1024px) {
  .title {
    font-size: 26px;
  }
  .photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
  .photo-7, .photo-8, .photo-9 {
    height: 300px
  }
}
@media only screen and (max-width : 800px) {
  .photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
  .photo-7, .photo-8, .photo-9 {
    height: 250px
  }
}
@media only screen and (max-width : 600px) {
  .swiper {
    display: none;
  }
  .mobile-gallery {
    display: block;
  }
}
</style>