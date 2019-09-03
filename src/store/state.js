let defaultCity = '中山'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (ex) {}

export default {
  city: defaultCity
}
