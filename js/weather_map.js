"use strict"

/* TODO:
*   DATE - Complete
*   HIGH/LOW TEMP
*   ICON THAT CORRESPONDS W/THE DESCRIPTION
*   DESCRIPTION - Complete
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
    // console.log(data);
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0 && index !== 0){
            let data = [];
            const time = new Date(forecast.dt * 1000);
            let fourDates = (dateFromTimeStamp(forecast.dt));
            let fourDayDescription = (forecast.weather[0].description);
            console.log(fourDates);

            // console.log(time.getHours());
            // console.log(time.getTime());
            // console.log(time.getDay());


            for (let i = 0; i < 1 && i < fourDates.length; i++) {
                const dateElem = document.createElement('p');
                dateElem.innerText = fourDates;
                document.querySelector('#weather').appendChild(dateElem);
            }

            // $("#weather").html(`The Next Four Days: ${fourDates}</p>`);


        }
    });
});

// date for today
// console.log(dateFromTimeStamp(1679589292));

