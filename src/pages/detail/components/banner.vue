<template>
  <div>
    <div class="banner" @click="clickBanner">
      <img class="bannerImg" src="https://img1.qunarzz.com/vs_ceph_vs_tts/8440d8e0-c342-4891-8e32-80942aff1f46.jpg_r_640x420x90_5905cad3.jpg" alt="">
      <div class="bannerInfo">
        <div class="bannerLeft">1231231231312</div>
        <div class="bannerRight"><span class="iconfont bannerIcon">&#xe614;</span>2</div>
    </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="gallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/fdf618dc-2903-4b60-ac89-ee524718e0fc.jpg_r_640x420x90_4ebd5f98.jpg', 'https://img1.qunarzz.com/vs_ceph_vs_tts/fdf618dc-2903-4b60-ac89-ee524718e0fc.jpg_r_640x420x90_4ebd5f98.jpg'],
      showGallary: false
    }
  },
  methods: {
    clickBanner () {
      this.showGallary = true
    },
    gallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  overflow hidden
  position relative
  height 0
  padding-bottom 66.6%
  .bannerImg
    width 100%
.bannerInfo
  position absolute
  left 0
  right 0
  bottom 0
  display flex
  line-height .6rem
  color #fff
  background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  .bannerLeft
    flex 1
    font-size .32rem
    padding 0 .2rem
  .bannerRight
    margin-top .09rem
    padding 0 .4rem
    height .42rem
    line-height .42rem
    border-radius .2rem
    background-color rgba(0, 0, 0, .8)
    font-size .24rem
    .bannerIcon
      font-size .24rem
</style>
