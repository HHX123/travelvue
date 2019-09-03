<template>
  <div>
    <div class="search">
      <input v-model="keyWord" type="text" class="searchInput" placeholder="输入城市名或拼音">
    </div>
    <div class="searchContent" ref="searchContent" v-show="keyWord">
      <ul>
        <li class="searchItem border-bottom" v-for="item of list" :key="item.id" @click="cityClick(item.name)">{{item.name}}</li>
        <li class="searchItem border-bottom" v-show="noData">无结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  methods: {
    cityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchContent)
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyWord === '') {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .search
    height .72ewm
    background $bgColor
    padding 0 .1rem
    .searchInput
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      line-height .62rem
      margin-bottom .1rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
  .searchContent
    overflow hidden
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .searchItem
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>
