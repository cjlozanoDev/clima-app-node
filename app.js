const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el cliema'
  }
}).argv

const getInfo = async direccion => {
    
    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temperatura = await clima.getClima(coords.latitud, coords.longitud)
        return `La temperatura de ${coords.direccion} es de ${temperatura}`
    } catch(e) {
      return `No se pudo determinar la temperatura de ${ direccion }`
    }
}

getInfo(argv.direccion)
 .then(resp => console.log(resp))
 .catch(err => console.log(err))