const axios = require('axios')

const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f2d36489805a8789a8e45c307db16907&units=metric`)
  return resp.data.main.temp
}

module.exports = {
  getClima
}