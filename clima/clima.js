const axios = require('axios');

/**
 * El método  retornara el clima de una latitud y longitud. Este método  hace uso del api
 * proporcionado por https://openweathermap.org.
 * @param:lat es la latitud de la zona
 * @param:lng es la longitud de la zona
 * @return: Retorna el clima
 */
const getClima = async(lat, lng) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9fde2ed37630bb944748198d6bde6cf8&units=metric`);
    return res.data.main.temp;
}

module.exports = {
    getClima
}