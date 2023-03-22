"use strict"

/** ADDRESS INPUT/EVENT LISTENER **/
document.getElementById('setMarkerButton').addEventListener('click', event => {
    // prevents form from submitting by clicking button, and resets its function
    event.preventDefault();
    // map.setZoom(document.getElementById('setMarker').value);

    const address = document.getElementById('setMarker').value;
    console.log(address);
    // geocode sets coordinates, .then stashes the coordinates as 'coords'
    geocode(address, MAPBOX_EXERCISE_TOKEN).then(coords=> {
        const newMarker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
        // this centers the map on the input coords
        map.setCenter(coords);
    });
});

const restaurants = [
    {name: "Fogo de Chao", longitude: -98.48535, latitude: 29.42362, info: 'Unlimited meats, and the meat sweats are free!'},
    {name: "Lydia's Mexican Restaurant", longitude: -98.40522, latitude: 29.42268, info: 'Quality tacos for a quality price.'},
    {name: "Rosario's", longitude: -98.48975, latitude: 29.417287, info: 'A more modern take on the classic San Antonio cuisine.'},
];

restaurants.forEach(restaurant=> {
    const marker = new mapboxgl.Marker()
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);

    const popup = new mapboxgl.Popup()
        .setHTML(`
        <p class="popup">${restaurant.name}</p>
        <p class="info">${restaurant.info}</p>`);

    marker.setPopup(popup);
});

/** ZOOM LEVELS **/
document.getElementById('5').addEventListener('click', event => {
    map.flyTo({zoom:5});
});
document.getElementById('15').addEventListener('click', event => {
    map.flyTo({zoom:15});
});
document.getElementById('20').addEventListener('click', event => {
    map.flyTo({zoom:20});
});





