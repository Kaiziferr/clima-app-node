//Instancia de las configuraciones 
const argv = require('./config/yargs').argv;

//Instancia de la logica de ubicacion
const { getLugarLatLng } = require('./ubicacion/ubicacion');

//Instancia de la logica del clima
const { getClima } = require('./clima/clima');




// getLugarLatLng(argv.direccion).then(console.log);

// getClima(argv.lat, argv.longitud).then(console.log).catch(console.log);



/**
 * El método retornara la ubicación y el clima de una zona especifica.
 * @param: dirección es la zona
 * @return: Retorna un mensaje con las coordenadas y el clima de la region
 */
const getInfo = async(direccion) => {

    try {
        let coord = await getLugarLatLng(argv.direccion);
        let temp = await getClima(coord.lat, coord.longitud);
        return `La ubicaión de ${direccion} es: latitud ${coord.lat}, longitud ${coord.longitud}. Este lugar tiene un clima de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`, error;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);