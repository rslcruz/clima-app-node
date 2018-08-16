const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se puede determinar el clima en ${direccion}`

    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(18.9848015, -99.0930528)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));