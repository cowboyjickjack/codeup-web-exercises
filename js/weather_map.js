"use strict"

/* TODO:
*   DATE
*   HIGH/LOW TEMP
*   ICON THAT CORRESPONDS W/THE DESCRIPTION
*   DESCRIPTION
*   HUMIDITY
*   WIND
*   PRESSURE
* */

/** THIS IS WHAT WE USE TO GET WEATHER INFO FROM A CITY **/
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: WEATHERMAP_API_KEY,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

const SALong = -98.48527;
const SALat = 29.423017;

/** BASIC DATA FETCH **/
// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=>{
//     let humidity = data.main.humidity;
//     let cityName = data.name;
//     let temp = data.main.temp;
//     console.log(data);
//     console.log(`In ${cityName}, the weather is as follows:`);
//     console.log("The temperature is: " + temp);
//     console.log("The humidity is: " + humidity);
//     $("#weather").html(`<p>The temperature is: ${temp}</p>`);
// });

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