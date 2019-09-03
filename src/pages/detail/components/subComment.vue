<template>
  <div>
    <div class="commentTop">
      <p class="starTitle">填写评分：</p>
      <div class="starwapper">
        <ul class="stars">
          <li :class="{starDefault:item.isActive, starLight:!item.isActive}"
           v-for="(item,index) of starList"
            :key="index"
            @click="clickStar(index)"
          >
          </li>
        </ul>
      </div>
    </div>
    <textarea></textarea>
    <div class="btnwapper">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitComment',
  data () {
    return {
      starList: [{isActive: true}, {isActive: true}, {isActive: true}, {isActive: true}, {isActive: true}],
      starNum: 0
    }
  },
  methods: {
    clickStar (index) {
      var total = this.starList.length
      if (this.starNum === 0) {
        this.starNum = index
        for (let i = 0; i < total; i++) {
          if (i <= index) {
            this.starList[i].isActive = !this.starList[i].isActive
          }
        }
      } else {
        for (let i = 0; i < total; i++) {
          i > index ? this.starList[i].isActive = true : this.starList[i].isActive = false
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .commentTop
    overflow hidden
    line-height .64rem
    margin-top .1rem
    position relative
    .starTitle
      display inline-block
      margin-left 7%
      line-height .64rem
    .starwapper
      display inline-block
      margin-top .1rem
      line-height .64rem
      position absolute
      .stars
        display flex
        line-height .64rem
        .starDefault
          margin-left .02rem
          background-image url('../../../img/star.jpg')
          width: .5rem;
          height: .5rem;
          background-size: 100% 200%;
          background-position: 0% 100%;
        .starLight
          margin-left .02rem
          background-image url('../../../img/star.jpg')
          width: .5rem;
          height: .5rem;
          background-size: 100% 200%;
          background-position: 0% 0%;
  textarea
    width 90%
    height 2rem
    margin-left 5%
    margin-top .15rem
    padding 0 .1rem
    border solid 1px $bgColor
    border-radius .2rem
  .btnwapper
    width 100%
    margin-top .2rem
    padding-top .7rem
    position relative
  button
    height .7rem
    width 2rem
    margin 0 auto
    background-color $bgColor
    color #fff
    border-radius .1rem
    position absolute
    top 0
    left 50%
    transform translatex(-50%)
</style>
