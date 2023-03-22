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




