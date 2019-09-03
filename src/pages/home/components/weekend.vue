<template>
  <div>
    <div class="recommendTitle">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="itemImgWapper">
          <img class="itemImg" :src="item.imgUrl" alt="">
        </div>
        <div class="itemInfo">
          <p class="itemTitle">{{item.title}}</p>
          <p class="itemDesc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .recommendTitle
    line-height .8rem
    background-color #eee
  .itemImgWapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .itemImg
      width 100%
  .itemInfo
    padding .1rem
  .itemTitle
    line-height .54rem
    font-size .32rem
    ellipsis()
  .itemDesc
    line-height .4rem
    color #ccc
    ellipsis()
</style>
