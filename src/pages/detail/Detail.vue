<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <submit-comment></submit-comment>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import SubmitComment from './components/subComment'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    SubmitComment
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
