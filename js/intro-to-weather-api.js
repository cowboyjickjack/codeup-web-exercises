/** THIS IS WHAT WE USE TO GET WEATHER INFO FROM A CITY **/
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: WEATHERMAP_API_KEY,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

const SALong = -98.48527;
const SALat = 29.423017;

/** SELECTING WEATHER DATA SPECIFICALLY **/
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${FORECAST_API_KEY}&units=imperial`).done(data=>{
    console.log(data);
    const time = new Date();
    $("#weather").html(`
    <div class="row no-gap justify-center"><h3>${daysOfWeek[time.getDay()]}</h3></div>
    <div class="row grow no-gap justify-center">${dateFromTimeStamp(data.dt)}</div>
    <div class="row">Current Temp: ${data.main.temp}</div>
    <div class="row no-gap">Current Temp: ${data.main.temp}</div>
    <div class="row no-gap">Current Temp: ${data.main.temp}</div>

    `);
});

/** MESSING WITH TIME/DATA MORE, AND USING A FOR EACH FUNCTION TO LIST THEM ALL **/
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHERMAP_API_KEY,
    lat:    SALat, //using coords > typing city/state
    lon:   SALong,
    units: "imperial" // avoids celcius
}).done(function(data) {
    console.log(data);
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0 && index !== 0){
            const time = new Date(forecast.dt * 1000);
            // console.log(time.getHours());
            // console.log(time.getTime());
            // console.log(time.getDay());
            // time & date x 4 days
            // console.log(forecast.dt_txt);
            // forecast
            // console.log(forecast.weather[0].description);
        }
    });
});




