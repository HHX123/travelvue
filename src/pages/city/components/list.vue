<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="buttonList">
          <div class="buttonWapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div class="buttonWapper" v-for="item of hotcities" :key="item.id" @click="cityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="itemList">
          <div class="item border-bottom"
           v-for="innerItem of item"
           :key="innerItem.id"
           @click="cityClick(innerItem.name)"
          >
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotcities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    cityClick (city) {
      this.$store.dispatch('changeCity', city) // changeCity是触发的事件，city是传到store里面changeCity方法的参数
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
    .border-topbottom
      &:before
        border-color #ccc
      &:after
        border-color #ccc
    .border-bottom
      &:before
        border-color #ccc
    .list
      overflow hidden
      position absolute
      top 1.58rem
      left 0
      right 0
      bottom 0
      .title
        line-height .54rem
        background #eee
        padding-left .2rem
        font-size .26rem
        color #666
      .buttonList
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .buttonWapper
          width 33.33%
          float left
          .button
            text-align center
            margin .1rem
            padding .1rem 0
            border .02rem solid #ccc
            border-radius .06rem
      .itemList
        .item
          line-height .76rem
          padding-left .2rem
 </style>
