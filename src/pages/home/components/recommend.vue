<template>
  <div>
    <div class="recommendTitle">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id" tag="li" class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="itemImg" :src="item.imgUrl" alt="">
        <div class="itemInfo">
          <p class="itemTitle">{{item.title}}</p>
          <p class="itemDesc">{{item.desc}}</p>
          <button class="itemBtn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .recommendTitle
    margin-top .2rem
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .itemImg
      width 1.7rem
      height 1.7rem
      padding .1rem
    .itemInfo
      flex 1
      padding .1rem
      width 0
      .itemTitle
        line-height .54rem
        font-size .32rem
        ellipsis()
      .itemDesc
        line-height .4rem
        color #ccc
        ellipsis()
      .itemBtn
        margin-top .16rem
        line-height .44rem
        background-color #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
