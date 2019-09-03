<template>
    <div class="header">
        <div class="headerLeft">
          <div class="iconfont backIcon">&#xe606;</div>
        </div>
          <span class="iconfont searchIcon">&#xe638;</span>
          <input type="text" class="headerMid " placeholder="输入城市/景点/游玩主题">
        <router-link to='/City'>
          <div class="headerRight">{{this.$store.state.city}}<span class="iconfont arrowIcon">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl';
  .header
    display: flex
    height: .86rem
    line-height:.86rem
    background-color: $bgColor
    color: #fff
    .headerLeft
      width: .64rem
      float: left
      .backIcon
        text-align: center
        font-size: .4rem
    .headerMid
      flex: 1
      background-color: #fff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      color: #ccc
      line-height: .64rem
      padding-left .4rem
    .searchIcon
      position absolute
      top .2%
      left 12%
      color #ccc
    .headerRight
      min-width: 1.24rem
      padding 0 .1rem 0 .1rem
      float: right
      text-align: center
      color #fff
      .arrowIcon
        font-size: .24rem
        margin-left: .04rem
</style>
