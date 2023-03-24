(function () {
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v12', 'width': '50%', // style URL
        center: [-98.624141, 29.558928], // starting position [lng, lat]
        zoom: 10, // starting zoom
    });

    const SALong = -98.4936;
    const SALat = 29.4241;

    console.log(SALat);

    function appendLeadingZeroes(n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n;
    }

    // forecasts weather

    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${WEATHERMAP_API_KEY}&units=imperial`).done(data=>{
        console.log(data);
        const time = new Date();
        $("#weather").html(`
    <div class="row no-gap justify-center"><h3>${daysOfWeek[time.getDay()]}</h3></div>
    <div class="row grow no-gap justify-center">${dateFromTimeStamp(data.dt)}</div>
    <div class="row">Current Temp: ${data.main.temp}</div>
    <div class="row no-gap">Max Temp: ${data.main.temp_min}</div>
    <div class="row no-gap">Min Temp: ${data.main.temp_max}</div>
    `);
    });
})();
