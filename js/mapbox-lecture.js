"use strict"
// this prevents a button inside the form from reloading the page
document.getElementById('zoomSubmit').addEventListener('click', event => {
    event.preventDefault();
    // this makes the button now respond to the input of the form
    map.setZoom(document.getElementById('zoom').value);
});

// enter an address button
document.getElementById('setMarkerButton').addEventListener('click', event => {
    // prevents form from submitting by clicking button, and resets its function
    event.preventDefault();
    // this const stores the users input
    const address = document.getElementById('setMarker').value;
    // console.log(address);
    // geocode sets coordinates, .then stashes the coordinates as 'coords'
    geocode(address, MAPBOX_API_TOKEN).then(coords=> {
        const newMarker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
        // this centers the map on the input coords
        map.setCenter(coords);
        console.log(newMarker);
    });
})