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

    // $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=> {
    //     // console.log(data);
    //     const time = new Date();
    //     $("#currentWeather").html(`
    // <div class="row no-gap"><h3>${daysOfWeek[time.getDay()]}</h3></div>
    // <div class="row grow no-gap">${dateFromTimeStamp(data.dt)}</div>
    // <div class="row">Current Temp: ${data.main.temp}</div>
    // <div class="row no-gap">Max Temp: ${data.main.temp_min}</div>
    // <div class="row no-gap">Min Temp: ${data.main.temp_max}</div>
    // `);

    // /** TOMORROWS WEATHER **/
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: WEATHERMAP_API_KEY,
    //     lat:    SALat, //using coords > typing city/state
    //     lon:   SALong,
    //     units: "imperial" // avoids celcius
    // }).done(function(data) {
    //     // console.log(data);
    //     // data.list.forEach((forecast, index) => {
    //     // //     if (index % 8 === 0 && index !== 0){
    //     //         const time = new Date(forecast.dt * 1000);
    //     let tomorrow = data.list[6];
    //     $("#tomorrowWeather").html(`
    //         <div class="row no-gap"><h3>${daysOfWeek[time.getDay() + 1]}</h3></div>
    //         <div class="row grow no-gap">${(dateFromTimeStamp(tomorrow.dt))}</div>
    //         <div class="row">Current Temp: ${tomorrow.main.temp}</div>
    //         <div class="row no-gap">Max Temp: ${tomorrow.main.temp_min}</div>
    //         <div class="row no-gap">Min Temp: ${tomorrow.main.temp_max}</div>
    //         `);
    // });

    // /** DAY 3 WEATHER **/
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: WEATHERMAP_API_KEY,
    //     lat:    SALat, //using coords > typing city/state
    //     lon:   SALong,
    //     units: "imperial" // avoids celcius
    // }).done(function(data) {
    //     console.log(data);
    //     // data.list.forEach((forecast, index) => {
    //     // //     if (index % 8 === 0 && index !== 0){
    //     //         const time = new Date(forecast.dt * 1000);
    //     let tomorrow = data.list[14];
    //     console.log(tomorrow)
    //     $("#dayAfterTomorrow").html(`
    //     <div class="row no-gap"><h3>${daysOfWeek[time.getDay()]}</h3></div>
    //     <div class="row grow no-gap">${(dateFromTimeStamp(tomorrow.dt))}</div>
    //     <div class="row">Current Temp: ${tomorrow.main.temp}</div>
    //     <div class="row no-gap">Max Temp: ${tomorrow.main.temp_min}</div>
    //     <div class="row no-gap">Min Temp: ${tomorrow.main.temp_max}</div>
    //     `);
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
                const time = new Date(forecast.dt);
                // const formattedTime = JSON.stringify(formatTime(time).split(' ').slice(-1)).substr(1).slice(1, -2)
                // const date = dateFromTimeStamp(time);
                const forecastDescription = (forecast.weather[0].description);
                console.log(forecastDescription);
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
