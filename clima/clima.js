const axios = require('axios');
const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&&units=metric&appid=569d2ceb7aa149a1ec27199384813e4f`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    return resp.data.main.temp;



}

module.exports = {

    getClima
}