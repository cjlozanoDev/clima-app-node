const axios = require('axios')

const getLugarLatLng = async direccion => {
    const encodeUrl = encodeURI(direccion)

    const instance = axios.create({
      baseURL: `https://geocode.xyz/locate=${encodeUrl}?geoit=json`,
      timeout: 5000,
      headers: {
        auth: '824874292707543486485x6708'
      }
    })
    
    const resp = await instance.get()
    if (resp.data.length === 0) {
      throw new Error(`No hay resultado para ${direccion}`)
    }
    const { latt: latitud, longt: longitud } = resp.data 
    const { city: ciudad, countryname: pais} = resp.data.standard
    return {
      direccion: `${ciudad}, ${pais}`,
      latitud,
      longitud
    }
}

module.exports = {
   getLugarLatLng
}
