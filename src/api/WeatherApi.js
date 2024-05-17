import axios from 'axios';
export default async function getCurrentWeather(locationConcord){

    const latitude = locationConcord.latitude
    const longitude = locationConcord.longitude
    const API_KEY = "a2f9cdc2498eebfc06947d967f787dd4"
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    var results = []
    await axios.get(apiUrl)
    .then(response => {
        const data = response.data;
        const locationName = (data.sys.country + ', ' + data.name);
        const temperatureMax = data.main.temp_max
        const temperatureMin = data.main.temp_min
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const currentTemperature = data.main.temp
        results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
        console.log(results)
    })
    .catch(error => {
        console.error("Erro ao buscar dados do clima:", error);
    });
    return results;
}