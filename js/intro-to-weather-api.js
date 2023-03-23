$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: WEATHERMAP_API_KEY,
    q:     "San Antonio, US"
}).done(function(data) {
    console.log(data);
});

const SALong = -98.48527;
const SALat = 29.423017;

$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=>{
    console.log(data);
    console.log("The temperature is: " + data.main.temp);
    $("#weather").html(`<p>The temperature is: ${data.main.temp}</p>`);
});

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHERMAP_API_KEY,
    lat:    SALat,
    lon:   SALong,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0 && index !== 0){
            const time = new Date(forecast.dt * 1000);
            console.log(time.getHours());
            console.log(time.getTime());
            console.log(time.getDay());
            console.log(forecast.dt_txt);
            console.log(forecast.weather[0].description);
        }
    });
});

