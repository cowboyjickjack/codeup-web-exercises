# MapBox

## API: Application Programming Interface

An API is a connection between computers and/or computer programs, that allows one piece of software to offer services to another piece of software. There is always documentation or a standard that describes how the connection, called an interface, is to be established. The technical term for this is the API specification, but it's often just called the docs. 

The intent of an API is not for an end user to use it directly, but for a programmer to use it to incorporate the services of another piece of software into a piece of software the programmer is writing. 

## MapBox API

The Mapbox API is an interface through which our applications can communicate with the MapBox software, and we can incorporate the MapBox services into our own apps. 

First, you are going to go to the Mapbox website and [sign up for an account]( https://account.mapbox.com/auth/signup). You sign up for a free account.

Next, you generate an access token at your account by clicking on tokens. Generate a separate token for each app you design or create that incorporates mapbox through its API. I'm going to generate a token called nameOfCohort-mapbox-lecture. We're just going to use the default settings to create a basic token. This token lets Mapbox know what account is querying their API at any given moment.

Now, we have a nice token. 

From our account page, we want to scroll down a little and in the Tools & Resources page, click on Documentation. We will be using the [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/), "A JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles." WebGL stands for Web Graphics Library and is an APi developed originally by the Mozilla foundation, allowing for the rendering of interactive graphics on any standard web browser without the need for any plugin. So, basically a JavaScript graphics library.

From the Mapbox GL JS page we click on the [quickstart guide](https://docs.mapbox.com/mapbox-gl-js/guides/install/#quickstart).

Here we see a JavaScript cdn and a CSS cdn, and we are told explicitly to put them both in the head.

```
<head>
    <meta charset="UTF-8">
    <title>MapBox Lecture Planning</title>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
</head>
```

Then we copy their ready-made code into the page. It's got a ready-made div, script tags, and even a public API key so we don't yet have to use our own.

```

<div id='map' style='width: 400px; height: 300px;'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoianJ1ZWRhcyIsImEiOiJja29lZzZzaHAwYTNtMm5ucjAzajdleDkyIn0.yY13LnqWTQzsI8ESEwK-1A';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
</script>
```

When we open our page, like magic, there is a map on it.

## Styling the map

Now, we can start to customize the map.

First of all, we can customize the map style. The map div has an id of #map, so we can use that to modify its size and position on the page. I can incorporate Bootstrap classes, add a custom style tag to control the height and width, and center the map on the page.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MapBox Lecture Planning</title>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>
        #map {
            width: 50%;
            height: 400px;
        }
    </style>
</head>
<body>
<div class="container row mx-auto">
    <div id='map' class="mx-auto mt-4"></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoianJ1ZWRhcyIsImEiOiJja29lZzZzaHAwYTNtMm5ucjAzajdleDkyIn0.yY13LnqWTQzsI8ESEwK-1A';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
</script>
</body>
</html>
```

There are also pre-made [map styles available](https://docs.mapbox.com/api/maps/styles/#mapbox-styles). You can change the style by swapping a style url. Mapbox streets is the default, bu there are various other ones we can use.

```
 style: 'mapbox://styles/mapbox/satellite-streets-v11',
```
```
 style: 'mapbox://styles/mapbox/navigation-day-v1',
```

## Center and zoom

So much for styles. Next, we want to modify the center and zoom. Center is the starting position in latitude and longitude. Notice it starts with a center in central New Jersey. We can change that to Codeup HQ by modifying the center coordinates:
```
center: [-98.48962, 29.42692]
```

[Zoom level](https://docs.mapbox.com/help/glossary/zoom-level/) goes from 0, at which point you are viewing the entire planet, to 15, at which point you are viewing a building. 9 is the default.

```
zoom: 15
```
```
 zoom: 11
```

You can also set these values programmatically. Notice the settings are originally placed in a map object constant:
```
const map = new mapboxgl.Map({
       props: values
    });
```

## Map object methods

That constant is named `map`. Once the map constant is set, you can use methods on it, such as setZoom. These will override the originally set values. There is a large number of [methods you can explore](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#scrollzoom).

```
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoianJ1ZWRhcyIsImEiOiJja29lZzZzaHAwYTNtMm5ucjAzajdleDkyIn0.yY13LnqWTQzsI8ESEwK-1A';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.48962, 29.42704], // starting position [lng, lat]
        zoom: 11 // starting zoom
    });
    map.setZoom(7);
</script>
```

You can do setCenter, too. It takes an array with two coordinates.
Zoom in on DFW airport:
```
    map.setCenter([-97.04028155784476, 32.899800072771455]);
    map.setZoom(15);
```

We could use this to let the user set the zoom:

```
<div class="container row mx-auto">
    <div id='map' class="mx-auto mt-4"></div>
</div>
<form class="mx-auto w-25 mt-2">
    <label for="zoom">Set zoom:</label>
    <input class="my-2" type="text" name="zoom" id="zoom">
    <button id="zoomSubmit">Submit</button>
</form>
```
```
 document.getElementById("zoomSubmit").addEventListener('click', function(e){
       e.preventDefault();
       map.setZoom(document.getElementById("zoom").value);
    });
```

## Markers and Popups

[Markers](https://docs.mapbox.com/mapbox-gl-js/api/markers/) are those little pins on maps that show specific locations. In MapBox syntax, these are objects that you create and add to the map.

```
  let codeupMarker = new mapboxgl.Marker()
        .setLngLat([-98.48962, 29.42692])
        .addTo(map);
```

Then, we can create a [popup](https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup) on the marker:

```
 var codeupPopup = new mapboxgl.Popup()
        .setHTML('<p class="mt-2">Codeup</p>');

    codeupMarker.setPopup(codeupPopup);
```
Keep in mind the popup becomes an element on the page that can be styled using css:

```
var codeupPopup = new mapboxgl.Popup()
        .setHTML('<p class="mt-2" style="width: 250px;">Codeup</p>');

    codeupMarker.setPopup(codeupPopup);
```

## Geocoding

You can make a geocode request to MapBox, although it's a separate API from the basic MapBox API. You will notice that we make a vanilla JavaScript AJAX request using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). Fetch() sends an AJAX request to an end point and then offers methods for handling the responses. We will be studying it in more detail later in the course. For now, we give you some ready-made code to get geocode information.

Create a file called `mapbox-geocoder-utils.js` and copy-paste the code in the syllabus into that file, then include it in the main html file.

```
"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

```

The file includes two utility functions, `geocode` and `reverseGeocode`, one of which gets coordinates from an address, the other gets an address from coordinates. But we do have a challenge to overcome here. Both functions require the token as an argument. But we don't want our tokens pushed to Github. So we have to put our tokens in a separate file, `keys.js`, include that file, and make sure our `.gitignore` file includes the `keys.js` file. 

You may or may not already have `keys.js` in a universal gitignore. You can find out by entering the following command in the terminal:

`cat ~/.gitignore_global`

Mine does not have `keys.js` in it:

```
javier@Javiers-MBP ~ % cat ~/.gitignore_global
.DS_Store
.idea/*
*.iml
```

So, we can create a local gitignore.

File -> New
.gitignore
```
keys.js
```

That being done, we create the `keys.js` file and save your token as a const string.

```
const MAPBOX_API_TOKEN = "pk.eyJ1IjoianJ1ZWRhcyIsImEiOiJjbDBrMTZyN2swaWFhM2NwN3ltcXBlNjlyIn0.0mkC3_39vniWD1TyvE3KcA";
```

Now you include it in your html file as a script, above the mapbox include.

```
<meta charset="UTF-8">
    <title>MapBox Lecture Planning</title>
    <script src="js/keys.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

It doesn't interact with the DOM, so there is no risk to it being in the head.

Now, we include the mapbox utils too, and since we're in the jQuery section of the class, we may as well include jQuery while we're at it.

```
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="js/mapbox-geocoder-utils.js"></script>
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoianJ1ZWRhcyIsImEiOiJja29lZzZzaHAwYTNtMm5ucjAzajdleDkyIn0.yY13LnqWTQzsI8ESEwK-1A';
```

And we can now replace the generic mapbox access token with our own:

```
 mapboxgl.accessToken = MAPBOX_API_TOKEN;
```

and verify that the map still works. We can now play with geocoding.

In the console:
```
geocode("600 Navarro St #600, San Antonio, TX 78205", MAPBOX_API_TOKEN).then(function(result) {
console.log(result);
});
```

Notice, what we get back is an array. We will get into it more later, but keep in mind that it takes time for the geocode function to send its fetch request. Observe the logs from the following:

```
    var coords;
    function getCoords(address, token){
        geocode(address, token).then(function(coordinates){
           console.log(coordinates);
           coords = coordinates;
        });
    }
    getCoords("600 Navarro St, San Antonio", MAPBOX_API_TOKEN);
    console.log(coords);
```
Notice, the line outside the function runs before the line inside the function. This is because the browser runs the JS code in rapid sequence, while the fetch request takes time to come back and the console log only runs after the request response has arrived, which is after the rest of the on-page code has already finished running. Don't stress about this at this stage, but remember that for the future. Async code can get confusing.

So, you can use these functions to, for example, place a marker

```
<form class="mx-auto w-25 mt-2">
    <label for="setMarker">Enter an address</label>
    <input type="text" name="setMarker" id="setMarker" class="my-2">
    <button id="setMarkerButton">Submit</button>
</form>
```

```
    document.getElementById("setMarkerButton").addEventListener('click', function(e){
        e.preventDefault();
        let address = document.getElementById("setMarker").value;
        console.log(address);
        geocode(address, MAPBOX_API_TOKEN).then(function(coordinates){
            console.log(coordinates);
            let userMarker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        });
    });
```