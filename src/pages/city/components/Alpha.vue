<template>
  <ul class="list">
    <li class="item"
     v-for="(item,key) of cities"
     :key="key"
     :ref="item"
     @click="handleClick"
     @touchStart="touchStart"
     @touchMove="touchMove"
     @touchEnd="touchEnd"
    >
    {{key}}
    </li>
 </ul>
</template>

<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: Object
  },
  computed: {
    letter () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    touchStart () {
      this.touchStatus = true
    },
    touchMove (e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        // const touchY = e.touches[0].clientY
        // console.log(touchY)
      }
    },
    touchEnd () {
      this.touchStatus = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .list
    display flex
    flex-direction column
    text-align center
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .44rem
      color $bgColor
      background-color transparentify
</style>
