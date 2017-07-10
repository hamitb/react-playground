var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=817b073dc28b94b4d04cc4e5fcecae45&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log('axios request is successfull');
        console.log('axios res: '+ res);
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    })
  }
}