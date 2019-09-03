<template>
  <div class="container" @click="gallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img :src='item' alt="" class="gallaryImg">
        </swiper-slide>
         <div class="gallary-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.gallary-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    gallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    z-index 99
    top 0
    right 0
    bottom 0
    left 0
    background-color #000
    display flex
    flex-direction column
    justify-content center
    .wrapper
    //   overflow hidden
      width 100%
      height 0
      padding-bottom 66.7%
      .gallaryImg
        width 100%
    .gallary-pagination
      color #fff
      text-align center
      margin-top .35rem
</style>
