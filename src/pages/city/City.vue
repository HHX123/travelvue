<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotcities="hotCities" :letter="letter"></city-list>
    <city-alpha :cities="cities" @change="handleChange"></city-alpha>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlpha from './components/Alpha'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlpha
  },
  data () {
    return {
      cities: {

      },
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('https://hhx123.github.io/travelvue/static/mock/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
