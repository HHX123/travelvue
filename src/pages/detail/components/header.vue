<template>
  <div>
    <div class="headerAbs" v-show="showAbs">
      <router-link to="/">
        <div class="iconfont backIcon">&#xe606;</div>
      </router-link>
    </div>
    <div class="headerFixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
    <router-link to="/">
      <div class="iconfont headerFixedBack">&#xe606;</div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handelScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity // opacity:opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handelScroll)
  } // 用了keep-alive标签，页面一展示activated就会被执行
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .headerAbs
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    background-color rgba(0, 0, 0, .8)
    text-align center
    .backIcon
      color #fff
  .headerFixed
    overflow hidden
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .headerFixedBack
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
