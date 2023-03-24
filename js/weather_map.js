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

    // /** FORECASTS CURRENT WEATHER **/
    //
    // $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=> {
    // const time = new Date();
    // $("#currentWeather").html(`
    // <div class="row no-gap"><h3>${daysOfWeek[time.getDay()]}</h3></div>
    // <div class="row grow no-gap">${dateFromTimeStamp(data.dt)}</div>
    // <div class="row">Current Temp: ${data.main.temp}</div>
    // <div class="row no-gap">Max Temp: ${data.main.temp_min}</div>
    // <div class="row no-gap">Min Temp: ${data.main.temp_max}</div>
    // `);
    //
    // /** TOMORROWS WEATHER **/
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: WEATHERMAP_API_KEY,
    //     lat:    SALat, //using coords > typing city/state
    //     lon:   SALong,
    //     units: "imperial" // avoids celcius
    // }).done(function(data) {
    //
    // let day2 = data.list[8];
    //
    // $("#dayTwo").html(`
    // <div class="row no-gap"><h3>${daysOfWeek[time.getDay() + 1]}</h3></div>
    // <div class="row grow no-gap">${(dateFromTimeStamp(day2.dt))}</div>
    // <div class="row">Current Temp: ${day2.main.temp}</div>
    // <div class="row no-gap">Max Temp: ${day2.main.temp_min}</div>
    // <div class="row no-gap">Min Temp: ${day2.main.temp_max}</div>
    // `);
    // });
    //
    // /** DAY 3 WEATHER **/
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: WEATHERMAP_API_KEY,
    //     lat:    SALat, //using coords > typing city/state
    //     lon:   SALong,
    //     units: "imperial" // avoids celcius
    // }).done(function(data) {
    //
    // let day3 = data.list[16];
    //
    // $("#dayThree").html(`
    // <div class="row no-gap"><h3>${daysOfWeek[time.getDay() - 5]}</h3></div>
    // <div class="row grow no-gap">${(dateFromTimeStamp(day3.dt))}</div>
    // <div class="row">Current Temp: ${day3.main.temp}</div>
    // <div class="row no-gap">Max Temp: ${day3.main.temp_min}</div>
    // <div class="row no-gap">Min Temp: ${day3.main.temp_max}</div>
    // `);
    // });
    //
    // /** DAY 4 WEATHER **/
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: WEATHERMAP_API_KEY,
    //     lat:    SALat, //using coords > typing city/state
    //     lon:   SALong,
    //     units: "imperial" // avoids celcius
    // }).done(function(data) {
    //
    // let day4 = data.list[24];
    //
    // $("#dayFour").html(`
    // <div class="row no-gap"><h3>${daysOfWeek[time.getDay() - 4]}</h3></div>
    // <div class="row grow no-gap">${(dateFromTimeStamp(day4.dt))}</div>
    // <div class="row">Current Temp: ${day4.main.temp}</div>
    // <div class="row no-gap">Max Temp: ${day4.main.temp_min}</div>
    // <div class="row no-gap">Min Temp: ${day4.main.temp_max}</div>
    // `);
    //
    // /** DAY 5 WEATHER **/
    //
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    // APPID: WEATHERMAP_API_KEY,
    // lat:    SALat, //using coords > typing city/state
    // lon:   SALong,
    // units: "imperial" // avoids celcius
    // }).done(function(data) {
    //
    // let day5 = data.list[32];
    //
    // $("#dayFive").html(`
    // <div class="row no-gap"><h3>${daysOfWeek[time.getDay() - 3]}</h3></div>
    // <div class="row grow no-gap">${(dateFromTimeStamp(day5.dt))}</div>
    // <div class="row">Current Temp: ${day5.main.temp}</div>
    // <div class="row no-gap">Max Temp: ${day5.main.temp_min}</div>
    // <div class="row no-gap">Min Temp: ${day5.main.temp_max}</div>
    // `);
    // });
    // });

    /** LOOP ATTEMPT **/
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERMAP_API_KEY,
        lat: SALat, //using coords > typing city/state
        lon: SALong,
        units: "imperial" // avoids celcius
    }).done(function (data) {
        console.log(data)
        data.list.forEach((forecast, index) => {
            if (index % 8 === 0 && index !== 0) {
                const time = new Date(forecast.dt * 1000);

                console.log(forecast.dt_txt);
                console.log(forecast.weather[0].description);
                console.log(forecast.main.temp);
                console.log(forecast.main.temp_min);
                console.log(forecast.main.temp_max);
                console.log(forecast.wind.speed);
                console.log('data end');
            }
        });
    });

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
    // });
})();
