(function () {
    // mapboxgl.accessToken = MAPBOX_API_TOKEN;
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/outdoors-v12', 'width': '50%', // style URL
    //     center: [-98.624141, 29.558928], // starting position [lng, lat]
    //     zoom: 10, // starting zoom
    // });
    //
    // const SALong = -98.4936;
    // const SALat = 29.4241;

    /** FORECASTS CURRENT WEATHER **/

    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=> {
    const time = new Date();
    $("#currentWeather").html(`
    <div class="singleCard">
    <div class="row"><h3>${daysOfWeek[time.getDay()]}</h3></div>
    <div class="row">${dateFromTimeStamp(data.dt)}</div>
    <div class="row">Temp: ${data.main.temp}°F</div>
    <div class="row">${data.main.temp_min}°F / ${data.main.temp_max}°F</div>
    <div class="row">Wind: ${data.wind.speed}</div>
    <div class="row">Humiditity: ${data.main.humidity}%</div>
    <div class="row">Air Pressure: ${data.main.pressure}</div>
    </div>


    
    `);

    /** TOMORROWS WEATHER **/

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERMAP_API_KEY,
        lat:    SALat, //using coords > typing city/state
        lon:   SALong,
        units: "imperial" // avoids celcius
    }).done(function(data) {

    let day2 = data.list[8];

    $("#dayTwo").html(`
    <div class="singleCard">
    <div class="row no-gap"><h3>${daysOfWeek[time.getDay() + 1]}</h3></div>
    <div class="row grow no-gap">${(dateFromTimeStamp(day2.dt))}</div>
    <div class="row">Temp: ${day2.main.temp}°F</div>
    <div class="row no-gap">${day2.main.temp_min}°F / ${day2.main.temp_max}°F</div>
    <div class="row no-gap">Wind: ${day2.wind.speed}</div>
    <div class="row no-gap">Humiditity: ${day2.main.humidity}%</div>
    <div class="row no-gap">Air Pressure: ${day2.main.pressure}</div>
    </div>
    `);
    });

    /** DAY 3 WEATHER **/

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERMAP_API_KEY,
        lat:    SALat, //using coords > typing city/state
        lon:   SALong,
        units: "imperial" // avoids celcius
    }).done(function(data) {

    let day3 = data.list[16];

    $("#dayThree").html(`
    <div class="singleCard">
    <div class="row no-gap"><h3>${daysOfWeek[time.getDay() - 5]}</h3></div>
    <div class="row grow no-gap">${(dateFromTimeStamp(day3.dt))}</div>
    <div class="row">Temp: ${day3.main.temp}°F</div>
    <div class="row no-gap">${day3.main.temp_min}°F / ${day3.main.temp_max}°F</div>
    <div class="row no-gap">Wind: ${day3.wind.speed}</div>
    <div class="row no-gap">Humiditity: ${day3.main.humidity}%</div>
    <div class="row no-gap">Air Pressure: ${day3.main.pressure}</div>
    </div>
    `);
    });

    /** DAY 4 WEATHER **/

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERMAP_API_KEY,
        lat:    SALat, //using coords > typing city/state
        lon:   SALong,
        units: "imperial" // avoids celcius
    }).done(function(data) {

    let day4 = data.list[24];

    $("#dayFour").html(`
    <div class="singleCard">
    <div class="row no-gap"><h3>${daysOfWeek[time.getDay() - 4]}</h3></div>
    <div class="row grow no-gap">${(dateFromTimeStamp(day4.dt))}</div>
    <div class="row">Temp: ${day4.main.temp}°F</div>
    <div class="row no-gap">${day4.main.temp_min} / ${day4.main.temp_max}°F</div>
    <div class="row no-gap">Wind: ${day4.wind.speed}</div>
    <div class="row no-gap">Humiditity: ${day4.main.humidity}%</div>
    <div class="row no-gap">Air Pressure: ${day4.main.pressure}</div>
    </div>
    `);

    /** DAY 5 WEATHER **/


    $.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHERMAP_API_KEY,
    lat:    SALat, //using coords > typing city/state
    lon:   SALong,
    units: "imperial" // avoids celcius
    }).done(function(data) {

    let day5 = data.list[32];

    $("#dayFive").html(`
    <div class="singleCard">
    <div class="row no-gap"><h3>${daysOfWeek[time.getDay() - 3]}</h3></div>
    <div class="row grow no-gap">${(dateFromTimeStamp(day5.dt))}</div>
    <div class="row">Temp: ${day5.main.temp}°F</div>
    <div class="row no-gap ">${day5.main.temp_min}°F / ${day5.main.temp_max}°F</div>
    <div class="row no-gap">Wind: ${day5.wind.speed}</div>
    <div class="row no-gap">Humiditity: ${day5.main.humidity}%</div>
    <div class="row no-gap">Air Pressure: ${day5.main.pressure}</div>
    </div>
    `);
    });
    });

    /** LOOP ATTEMPT **/
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: WEATHERMAP_API_KEY,
    //     lat: SALat, //using coords > typing city/state
    //     lon: SALong,
    //     units: "imperial" // avoids celcius
    // }).done(function (data) {
    //     console.log(data)
    //     data.list.forEach((forecast, index) => {
    //         if (index % 8 === 0 && index !== 0) {
    //             const time = new Date(forecast.dt * 1000);

                // let date = forecast.dt_txt;
                // let description = forecast.weather[0].description;
                // let temp = forecast.main.temp;
                // let tempMin = forecast.main.temp_min;
                // let tempMax = forecast.main.temp_max;
                // let windSpeed = forecast.wind.speed;
                // let humidity = forecast.main.humidity;
                // let airPressure = forecast.main.pressure;


                /** JAVIER LOOP SUGGESTION FOR ACTUAL MIN/MAX TEMP **/
                // const dayEnds = [];
                // data.list.forEach((forecast, index) => {
                //     console.log(formatTime(forecast.dt))
                //     const dateTime = new Date(forecast.dt * 1000);
                //     if (dateTime.getHours() === 22){
                //         dayEnds.push(index);
                //     }
                // });
                // for (let i = 0; i < dayEnds.length - 1; i++){
                //     let date = forecast.dt_txt;
                //     let description = forecast.weather[0].description;
                //     let temp = forecast.main.temp;
                //     let tempMin = forecast.main.temp_min;
                //     let tempMax = [];
                //     let windSpeed = [];
                //     let humidity = [];
                //     let airPressure = [];
                //
                //     for (let j = dayEnds[i] + 1; j <= dayEnds[i + 1]; j++){
                //         let descAvg = description.push(data.list[j].weather[0].description);
                //         console.log(descAvg)
                //     }
                // }
    //         }
    //     });
    // });

        /** ZOOM LEVELS **/
        document.getElementById('5').addEventListener('click', event => {
            map.flyTo({zoom: 5});
        });
        document.getElementById('15').addEventListener('click', event => {
            map.flyTo({zoom: 15});
        });
        document.getElementById('20').addEventListener('click', event => {
            map.flyTo({zoom: 20});
        });

        /** ADDRESS INPUT/EVENT LISTENER **/
        document.getElementById('setMarkerButton').addEventListener('click', event => {
            // prevents form from submitting by clicking button, and resets its function
            event.preventDefault();
            // map.setZoom(document.getElementById('setMarker').value);

            const address = document.getElementById('setMarker').value;
            console.log(address);
            // geocode sets coordinates, .then stashes the coordinates as 'coords'
            geocode(address, MAPBOX_EXERCISE_TOKEN).then(coords => {
                const newMarker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
                // this centers the map on the input coords
                map.setCenter(coords);
            });
        });
    });
})();
