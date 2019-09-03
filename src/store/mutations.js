export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (ex) {}
  }
} // state是index.js所有的公用数据
