<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id" v-if="showSwiper">
            <img :src='item.imgUrl' alt="" class="swiperImg">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        speed: 800
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 25.6%
    .swiperImg
      width 100%
</style>
