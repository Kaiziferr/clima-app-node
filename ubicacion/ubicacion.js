/**
 * Cliente HTTP basado en la promesa para el navegador y node.js
 */
const axios = require('axios');




/**
 * El método  retornara un objeto con el nombre, la latitud y longitud
 * de una zona especifica, haciendo uso del sgt Api https://rapidapi.com/dev132/api/city-geo-location-lookup
 * @param: dir es la zona
 * @return: Retorna la dirección
 */
const getLugarLatLng = async(dir) => {

    /**
     * La función encodeURI () se utiliza para codificar un URI
     */
    const encodedURL = encodeURI(dir);


    /**
     * Crear una instancia de axix para configurar los headers
     * 
     *  headers =  5348084920msh6f93b0302507380p1c5affjsnff422e4efb11, esta es la key que proporciona el API
     */


    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodedURL,
        headers: { 'X-RapidAPI-Key': '5348084920msh6f93b0302507380p1c5affjsnff422e4efb11' }
    });

    //Me muestra la data proporcionada por la peticion get

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        lat,
        longitud
    }
}


module.exports = {
    getLugarLatLng
}