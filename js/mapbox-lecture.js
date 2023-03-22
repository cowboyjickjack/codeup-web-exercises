"use strict"
// this prevents a button inside the form from reloading the page
document.getElementById('zoomSubmit').addEventListener('click', event => {
    event.preventDefault();
    // this makes the button now respond to the input of the form
    map.setZoom(document.getElementById('zoom').value);
});